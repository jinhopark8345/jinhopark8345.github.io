// Render the built site with headless Chromium and write public/resume.pdf.
// Run via `npm run resume:pdf`. Assumes `astro build` has already produced `dist/`.

import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const outPath = path.join(repoRoot, "public", "resume.pdf");
const PORT = 4321;
const url = `http://localhost:${PORT}/`;

async function waitForServer(target, attempts = 60) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(target);
      if (res.ok) return;
    } catch {
      // not up yet
    }
    await sleep(250);
  }
  throw new Error(`Preview server never became ready at ${target}`);
}

const preview = spawn(
  "npx",
  ["astro", "preview", "--port", String(PORT), "--host", "127.0.0.1"],
  { cwd: repoRoot, stdio: ["ignore", "pipe", "inherit"] },
);
// Drain stdout so the pipe buffer never fills and blocks the child.
preview.stdout.on("data", () => {});

let browser;
try {
  await waitForServer(url);

  browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: "light" }]);
  await page.goto(url, { waitUntil: "networkidle0" });

  // Force all collapsible cards open and remove any dark-mode class the
  // inline theme script may have applied before our media emulation landed.
  await page.evaluate(() => {
    document.documentElement.classList.remove("dark");
    document
      .querySelectorAll("details.card")
      .forEach((el) => {
        el.open = true;
      });
  });

  // Give web fonts a moment to settle.
  await page.evaluateHandle("document.fonts.ready");

  await mkdir(path.dirname(outPath), { recursive: true });
  await page.pdf({
    path: outPath,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: false,
    margin: { top: "15mm", bottom: "15mm", left: "12mm", right: "12mm" },
  });

  console.log(`Wrote ${path.relative(repoRoot, outPath)}`);
} finally {
  if (browser) await browser.close();
  preview.kill("SIGTERM");
}

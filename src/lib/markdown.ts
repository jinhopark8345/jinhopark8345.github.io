// Tiny inline-markdown renderer: bold (**text**), italic (*text*), links
// [name](url), inline code (`code`). Preserves newlines as <br> within
// paragraphs and splits on blank lines for <p>. No dependencies.

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function renderInline(s: string): string {
  let out = escapeHtml(s);
  out = out.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener" class="text-sky-600 dark:text-sky-400 hover:underline">$1</a>'
  );
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>");
  out = out.replace(
    /`([^`]+)`/g,
    '<code class="rounded bg-slate-100 dark:bg-slate-800 px-1 py-0.5 text-[0.9em]">$1</code>'
  );
  return out;
}

export function renderMarkdown(src: string): string {
  const blocks = src.trim().split(/\n\s*\n/);
  return blocks
    .map((block) => {
      const lines = block.split("\n");
      if (lines.every((l) => /^\s*-\s+/.test(l))) {
        const items = lines
          .map((l) => `<li>${renderInline(l.replace(/^\s*-\s+/, ""))}</li>`)
          .join("");
        return `<ul class="list-disc pl-5 space-y-1">${items}</ul>`;
      }
      return `<p>${renderInline(block).replace(/\n/g, "<br>")}</p>`;
    })
    .join("\n");
}

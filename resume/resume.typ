// One-page resume — curated. Does not auto-sync with src/data/resume.ts.
// Compile: typst compile resume/resume.typ public/resume.pdf
#import "@preview/fontawesome:0.5.0": *

#set document(
  title: "Jinho Park — Resume",
  author: "Jinho Park",
)
#set page(
  paper: "us-letter",
  margin: (x: 0.55in, y: 0.4in),
)
#set text(size: 9.5pt, font: ("Inter", "DejaVu Sans", "Liberation Sans"))
#set par(justify: false, leading: 0.45em, spacing: 0.6em)

// ───────── helpers ─────────
#let section(title) = {
  v(6pt)
  box(
    width: 100%,
    inset: (bottom: 2pt),
    stroke: (bottom: 0.6pt + black),
    text(size: 10.5pt, weight: "bold")[#upper(title)],
  )
  v(3pt)
}

#let role(
  title: none,
  titleUrl: none,
  org: none,
  orgUrl: none,
  location: none,
  date: none,
) = {
  let titleNode = if titleUrl != none { link(titleUrl)[#title] } else { title }
  let orgNode = if org != none {
    [ #h(4pt) · #h(4pt) #if orgUrl != none { link(orgUrl)[#org] } else { org } ]
  } else { [] }
  grid(
    columns: (1fr, auto),
    align: (left, right),
    [
      *#titleNode*#orgNode
    ],
    [#text(fill: gray.darken(20%), date)],
  )
  if location != none {
    text(size: 9pt, fill: gray.darken(30%), style: "italic", location)
    linebreak()
  }
}

#let bullet(body) = {
  grid(
    columns: (8pt, 1fr),
    gutter: 4pt,
    [•], body,
  )
}

// ───────── header ─────────
#grid(
  columns: (1fr, auto),
  align: (left + bottom, right + bottom),
  [
    #text(size: 20pt, weight: "bold")[Jinho Park]
    #v(-4pt)
    #text(size: 11pt, fill: gray.darken(20%))[AI Application Engineer]
  ],
  [
    #text(size: 9pt)[
      #fa-location-dot()#h(5pt)Seoul, South Korea \
      #fa-envelope()#h(5pt)#link("mailto:jinhoparkseoul@gmail.com")[jinhoparkseoul\@gmail.com] \
      #fa-globe()#h(5pt)#link("https://jinhopark8345.github.io/")[jinhopark8345.github.io] \
      #fa-linkedin()#h(5pt)#link("https://www.linkedin.com/in/jinho-park-9a511a1b9/")[jinho-park-9a511a1b9] \
      #fa-github()#h(5pt)#link("https://github.com/jinhopark8345")[jinhopark8345]
    ]
  ]
)

#v(4pt)

AI Application Engineer shipping production AI systems end-to-end: *Agentic RAG*, *document processing pipelines*, and *MCP-based agent tooling*, with the MLOps to keep them running. Comfortable running iterative PoCs with clients and translating fuzzy asks into concrete application logic. Fluent with *Prefect*, *Kubernetes*, *GitOps*, and *FastAPI*.

// ───────── experience ─────────
#section("Experience")

#role(
  title: "AI Application Engineer",
  org: "Boeing",
  orgUrl: "https://www.boeing.com/",
  location: "AI Team · Seoul, South Korea",
  date: "Jan 2024 – Present",
)
#bullet[
  *Agentic RAG for regulated-industry document compliance:* Architected and implemented a high-precision retrieval system on Qdrant, exposed as an MCP server with the generation app as MCP client, with a hybrid sparse + dense pipeline that outperformed dense-only on a 200-query MRR eval.
]
#bullet[
  *Low-latency CPU retrieval:* Tuned Qdrant indexing and payload filtering to hold p95 retrieval latency under 1000 ms on CPU-only infrastructure; sustained embedding throughput with BentoML dynamic batching + ONNX Runtime + quantization.
]
#bullet[
  *Internal LLM tooling:* Shipped an internal code-review LLM bot, an MCP server exposing in-house tools to LLM agents, a few-shot (v)LLM PDF parser for RAG ingestion, and an internal ML artifact registry on GitLab.
]
#bullet[
  *GitOps and observability:* Implemented ArgoCD + OpenShift GitOps (deploy cycles 1h to 10min) and stood up Prometheus/Grafana plus a Postgres-backed KPI tracker for CTR, query quality, adoption, and latency.
]

#v(3pt)
#role(
  title: "Machine Learning Engineer",
  org: "Lomin",
  orgUrl: "https://www.lomin.ai/",
  location: "ML Team · Seoul, South Korea",
  date: "May 2022 – Aug 2023",
)
#bullet[
  *End-to-end document processing pipeline (on-premise):* Architected the production pipeline that processed *10,000 documents/hour* at *p95 end-to-end latency under 1 second* for enterprise financial and government clients.
]
#bullet[
  *Inference + extraction:* NVIDIA Triton with KV-caching and quantization for a *20% speedup*; multi-modal Table Extraction at *+15% F1*; Document Understanding framework with graph-based augmentation.
]
#bullet[
  *Clients:* Kyobo Life, Lina Life, Shinhan Asset Trust, KIPO (production); Samsung Life, Hanwha Life, Samsung Fire & Marine, KB Insurance (PoCs).
]

#v(3pt)
#role(
  title: "Software Engineer Intern",
  org: "Intel",
  location: "OpenVINO · Seoul, South Korea",
  date: "Aug 2021 – Feb 2022",
)
#bullet[
  *OpenVINO GPU fixes:* Analyzed deep-learning model performance on Intel hardware and fixed 5+ major issues in OpenVINO for Intel integrated GPUs.
]

// ───────── education ─────────
#section("Education")

#role(
  title: "B.S., Electrical and Electronics Engineering",
  org: "Konkuk University, Korea",
  orgUrl: "https://www.konkuk.ac.kr/",
  date: "Mar 2015 – Feb 2022",
)
#text(size: 9pt)[
  Thesis: _Further Optimize MobileNetV2 with Channel-wise Squeeze and Excitation._ CS coursework: Algorithms, Data Structures, OS, Embedded Systems, AI.
]

#v(2pt)
#role(
  title: "Exchange Student, Computer Science",
  org: "University of Agder, Norway",
  orgUrl: "https://www.uia.no/en",
  date: "Aug 2017 – Jan 2018",
)

// ───────── open source ─────────
#section("Open Source")

#role(
  title: "Add BROS",
  titleUrl: "https://github.com/huggingface/transformers/pull/23190",
  org: "Huggingface / Transformers",
)
#text(size: 9pt)[
  Ported architecture, tokenization, and spatial pre-processing for document understanding.
]

#v(2pt)
#role(
  title: "prepare_output",
  titleUrl: "https://github.com/openvinotoolkit/openvino/pull/7783",
  org: "OpenVINO",
)
#text(size: 9pt)[
  Correctness fix on the Intel-integrated-GPU inference path.
]

// ───────── skills ─────────
#section("Skills")

#let skill(label, items) = [
  *#label* #h(4pt) #text(fill: gray.darken(20%), items.join(" · "))
]

#skill("Languages", ("Python", "C++", "TypeScript"))
#linebreak()
#skill("Databases", ("PostgreSQL", "Qdrant", "Redis"))
#linebreak()
#skill("ML / Inference", ("PyTorch", "LangChain", "Transformers", "BentoML", "NVIDIA Triton", "OpenVINO", "ONNX Runtime", "Quantization",))
#linebreak()
#skill("LLM & Agents", ("Anthropic", "OpenAI", "MCP", "Langfuse"))
#linebreak()
#skill("Backend & App", ("FastAPI", "Streamlit", "React"))
#linebreak()
#skill("Ops", ("MLflow", "ArgoCD", "GitLab CI/CD", "Prefect"))
#linebreak()
#skill("Infra", ("Helm", "Kubernetes (Openshift)", "Docker", "Prometheus", "Grafana"))

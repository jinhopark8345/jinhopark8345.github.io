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
  org: none,
  orgUrl: none,
  location: none,
  date: none,
) = {
  grid(
    columns: (1fr, auto),
    align: (left, right),
    [
      *#title* #h(4pt) · #h(4pt) #if orgUrl != none { link(orgUrl)[#org] } else { org }
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

AI Application Engineer focused on *Information Retrieval* and *scalable backend systems*, building production-grade vector search, Agentic RAG, and latency optimization. Validate ideas fast with working PoCs, then ship them to production on *Prefect, Kubernetes, GitOps*, and high-availability *FastAPI* services. Regularly collaborate with *international teams and clients* across timezones.

// ───────── experience ─────────
#section("Experience")

#role(
  title: "AI Application Engineer",
  org: "Boeing",
  orgUrl: "https://www.boeing.com/",
  location: "ML Team · Seoul, South Korea",
  date: "Jan 2024 – Present",
)
#bullet[
  Architected a high-precision *Agentic RAG* for aviation regulatory compliance: dedicated *Qdrant* retrieval service + generation app, with a *hybrid sparse + dense* search pipeline outperforming a dense-only configuration on a 200-query MRR eval.
]
#bullet[
  Tuned Qdrant indexing and payload filtering to hold *p95 retrieval latency under 1000 ms on CPU-only infrastructure*; sustained embedding throughput with *BentoML* dynamic batching + *ONNX Runtime* + quantization.
]
#bullet[
  Shipped a *GitLab MR bot*, an *MCP server* exposing internal tools to LLM agents, a *few-shot (v)LLM PDF parser* for RAG ingestion, and *gitlab-model-registry* for versioning AI artifacts on GitLab.
]
#bullet[
  Implemented *ArgoCD + OpenShift GitOps* (deploy cycles 1h to 10min) and stood up *Prometheus/Grafana* + a Postgres-backed KPI tracker (CTR, query quality, latency SLOs).
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
  Architected a high-throughput serving layer on *NVIDIA Triton* (KV-caching + quantization) that accelerated Transformer inference by *20%*.
]
#bullet[
  Built a multi-modal *Table Extraction* system for financial documents, improving *F1 by 15%*, and shipped a *Document Understanding* framework with graph-based augmentation pipelines.
]
#bullet[
  Delivered ML solutions and PoCs for enterprise clients: Kyobo Life, Lina Life, Shinhan Asset Trust, KIPO, Samsung Fire & Marine, Hanwha Life, Samsung Life, KB Insurance.
]

#v(3pt)
#role(
  title: "Software Engineer Intern, OpenVINO Korea",
  org: "Intel",
  location: "OpenVINO Korea · Seoul, South Korea",
  date: "Aug 2021 – Feb 2022",
)
#bullet[
  Analyzed deep-learning model performance on Intel hardware; fixed *5+ major* issues in OpenVINO for Intel integrated GPUs.
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

#bullet[
  *Add BROS model to Transformers* · #link("https://github.com/huggingface/transformers/pull/23190")[huggingface/transformers\#23190]. Ported architecture, tokenization, and spatial pre-processing for document understanding.
]
#bullet[
  *OpenVINO GPU fix: prepare_output* · #link("https://github.com/openvinotoolkit/openvino/pull/7783")[openvinotoolkit/openvino\#7783]. Correctness fix on the Intel-integrated-GPU inference path.
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
#skill("ML / Inference", ("PyTorch", "LangChain", "Transformers", "NVIDIA Triton", "OpenVINO", "ONNX Runtime", "Quantization", "MLflow"))
#linebreak()
#skill("Backend & App", ("FastAPI", "BentoML", "Streamlit", "React"))
#linebreak()
#skill("Infra & MLOps", ("Prefect", "Kubernetes", "Docker", "Helm", "GitLab CI/CD", "ArgoCD", "OpenShift", "Prometheus", "Grafana"))

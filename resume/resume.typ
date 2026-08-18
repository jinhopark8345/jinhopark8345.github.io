// One-page resume — curated. Does not auto-sync with src/data/resume.ts.
// Compile: typst compile resume/resume.typ public/resume.pdf
// Stavanger variant: typst compile --input variant=stavanger resume/resume.typ resume/resume-stavanger.pdf
// Vision variant (computer vision / robotics roles): typst compile --input variant=vision resume/resume.typ resume/resume-vision.pdf
#let variant = sys.inputs.at("variant", default: "general")
#let vision = variant == "vision"
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
  v(if vision { 4pt } else { 6pt })
  box(
    width: 100%,
    inset: (bottom: 2pt),
    stroke: (bottom: 0.6pt + black),
    text(size: 10.5pt, weight: "bold")[#upper(title)],
  )
  v(if vision { 2pt } else { 3pt })
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
    #text(size: 11pt, fill: gray.darken(20%))[Machine Learning Engineer]
    #v(-1pt)
    #text(size: 9.5pt, weight: "medium")[#if variant == "stavanger" or vision [Relocating to Stavanger — spouse is a Norwegian citizen from Stavanger] else [Relocating to Norway — spouse is a Norwegian citizen]]
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

#if vision [
Machine Learning Engineer spanning *computer vision*, *inference optimization*, and *agentic AI*: gigapixel medical-image classification (Kaggle silver, top 2%), real-time document AI pipelines, and model tuning for constrained hardware (*OpenVINO*, *ONNX Runtime*, *Triton*, quantization). Currently shipping *agentic RAG* at *Boeing* (aviation). Exchange semester at the University of Agder, Norway; moving back permanently.
] else [
Machine Learning Engineer shipping production AI systems end-to-end: *Agentic RAG*, *document processing pipelines*, and *MCP-based agent tooling*, with the MLOps to keep them running. Comfortable running iterative PoCs with clients and translating fuzzy asks into concrete application logic. Exchange semester at the University of Agder, Norway; moving back permanently. On the side, runs #link("https://initnode.ai/")[*InitNode*], a studio shipping AI systems from PoC to production.
]

// ───────── experience ─────────
#section("Experience")

#role(
  title: "AI Application Engineer",
  org: "Boeing",
  orgUrl: "https://www.boeing.com/",
  location: "AI Team · Seoul, South Korea",
  date: "Jan 2024 – Present",
)
#if vision [
#bullet[
  *Agentic RAG for aviation document compliance:* Architected an agentic retrieval system on Qdrant cross-referencing technical reports against regulatory frameworks, exposed as an MCP server; hybrid sparse + dense pipeline validated on a 200-query MRR eval.
]
#bullet[
  *Inference optimization on CPU-only infrastructure:* Held p95 retrieval latency under 1000 ms via index and payload-filter tuning; served embedding models with ONNX Runtime + quantization + BentoML dynamic batching.
]
#bullet[
  *Prototype to production:* GitOps deploys with ArgoCD on OpenShift cut release cycles from 1h to 10min; full observability with Prometheus, Grafana, and a Postgres-backed KPI tracker.
]
] else [
#bullet[
  *Agentic RAG for regulated-industry document compliance:* Architected and implemented a high-precision retrieval system on Qdrant, exposed as an MCP server with the generation app as MCP client, with a hybrid sparse + dense pipeline that outperformed dense-only on a 200-query MRR eval.
]
#bullet[
  *Low-latency CPU retrieval:* Tuned Qdrant indexing and payload filtering to hold p95 retrieval latency under 1000 ms on CPU-only infrastructure; sustained embedding throughput with BentoML dynamic batching + ONNX Runtime + quantization.
]
#bullet[
  *Internal ML/LLM tooling:* Shipped an internal code-review LLM bot, an MCP server exposing in-house tools to LLM agents, a few-shot (v)LLM PDF parser for RAG ingestion, and an internal ML artifact registry on GitLab.
]
#bullet[
  *GitOps and observability:* Cut deploy cycles from 1h to 10min with ArgoCD on OpenShift; instrumented the stack with Prometheus, Grafana, and a Postgres-backed KPI tracker for CTR, query quality, adoption, and latency.
]
]

#v(3pt)
#role(
  title: "Machine Learning Engineer",
  org: "Lomin",
  orgUrl: "https://www.lomin.ai/",
  location: "ML Team · Seoul, South Korea",
  date: "May 2022 – Aug 2023",
)
#if vision [
#bullet[
  *Real-time document vision pipeline (on-premise):* Architected the production pipeline serving OCR and layout-understanding models (text detection, recognition, table extraction) at *10,000 documents/hour* with *p95 end-to-end latency under 1 second*.
]
#bullet[
  *Model optimization + accuracy:* Triton inference with KV-caching and quantization for a *20% speedup*; improved multi-modal Table Extraction by *+15% F1*; built a Document Understanding framework with graph-based augmentation.
]
#bullet[
  *In production* at Kyobo Life, Lina Life, Shinhan Asset Trust, and KIPO.
]
] else [
#bullet[
  *End-to-end document processing pipeline (on-premise):* Architected the production pipeline that processed *10,000 documents/hour* at *p95 end-to-end latency under 1 second* for enterprise financial and government clients.
]
#bullet[
  *Inference + extraction:* Triton with KV-caching and quantization for a *20% speedup*; multi-modal Table Extraction at *+15% F1*; Document Understanding framework with graph-based augmentation.
]
#bullet[
  *Clients:* Kyobo Life, Lina Life, Shinhan Asset Trust, KIPO (production); Samsung Life, Hanwha Life, Samsung Fire & Marine, KB Insurance (PoCs).
]
]

#v(3pt)
#role(
  title: "Software Engineer Intern",
  org: "Intel",
  location: "OpenVINO · Seoul, South Korea",
  date: "Aug 2021 – Feb 2022",
)
#if vision [
#bullet[
  *Vision-model regression triage on Intel integrated GPUs:* Owned accuracy and performance investigations for YOLOv5, MTCNN, brain-tumor segmentation, and text-detection models; pinned regressions to single commits with `git bisect` across the OpenVINO tree.
]
#bullet[
  *INT8 quantization debugging:* Isolated GPU-path accuracy failures by comparing CPU vs GPU runs (`accuracy_check`); automated benchmark sweeps on quantized models. Industrial C++ in a release-grade inference runtime (clDNN plugin).
]
] else [
#bullet[
  *OpenVINO GPU fixes:* Analyzed deep-learning model performance on Intel hardware and fixed 5+ major issues in OpenVINO for Intel integrated GPUs.
]
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
  #if vision [Thesis: _Further Optimize MobileNetV2 with Channel-wise Squeeze and Excitation_ — efficient CNN design for embedded inference; \~15% fewer parameters at no accuracy loss (2nd prize, KIBME paper contest). Degree span includes mandatory Korean military service.] else [Thesis: _Further Optimize MobileNetV2 with Channel-wise Squeeze and Excitation._ CS coursework: Algorithms, Data Structures, OS, Embedded Systems, AI. Degree span includes mandatory Korean military service.]
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

*#link("https://github.com/huggingface/transformers/pull/23190")[Add BROS]* · Huggingface / Transformers: ported architecture, tokenization, and spatial pre-processing for document understanding.

#if not vision [
*#link("https://github.com/openvinotoolkit/openvino/pull/7783")[prepare_output]* · OpenVINO: correctness fix on the Intel-integrated-GPU inference path.
]

// ───────── certifications & awards ─────────
#section("Certifications & Awards")

*#link("https://www.credly.com/badges/31ab4d72-86ce-46be-9f77-9cf25af5c133/linked_in_profile")[CKA: Certified Kubernetes Administrator]* · Linux Foundation, Dec 2024.

#if vision [
*#link("https://www.kaggle.com/certification/competitions/jinho8345/UBC-OCEAN")[Kaggle Competition Silver Medal — UBC-OCEAN]* · 28th of 1,724 teams (top 2%), Jan 2024. Cancer subtype classification on gigapixel whole-slide images: tiling + streaming pipeline, MaxViT fine-tuning, tumor-region gating, majority-vote inference.
] else [
*#link("https://www.kaggle.com/certification/competitions/jinho8345/UBC-OCEAN")[Kaggle Competition Silver Medal — UBC-OCEAN]* · ovarian cancer subtype classification, 28th of 1,724 teams, Jan 2024.
]

// ───────── skills ─────────
#section("Skills")

#let skill(label, items) = [
  *#label* #h(4pt) #text(fill: gray.darken(20%), items.join(" · "))
]

#if vision [
#grid(
  columns: (1fr, 1fr),
  column-gutter: 16pt,
  row-gutter: 4pt,
  [
    #skill("Languages", ("Python", "C++", "TypeScript"))
    #linebreak()
    #skill("ML & Vision", ("PyTorch", "timm", "Transformers"))
    #linebreak()
    #skill("Inference & Edge", ("OpenVINO", "ONNX Runtime", "Triton", "BentoML", "Quantization (INT8)"))
    #linebreak()
    #skill("Infra & CI/CD", ("Kubernetes (Openshift)", "Docker", "Helm", "ArgoCD", "GitLab CI/CD"))
  ],
  [
    #skill("Backend", ("FastAPI", "PostgreSQL", "Redis"))
    #linebreak()
    #skill("Monitoring", ("Prometheus", "Grafana"))
    #linebreak()
    #skill("Spoken", ("Korean (native)", "English (fluent)", "Norwegian (beginner)"))
  ],
)
] else [
#grid(
  columns: (1fr, 1fr),
  column-gutter: 16pt,
  row-gutter: 4pt,
  [
    #skill("Languages", ("Python", "C++", "TypeScript"))
    #linebreak()
    #skill("Databases", ("PostgreSQL", "Redis"))
    #linebreak()
    #skill("Backend", ("FastAPI",))
    #linebreak()
    #skill("Frontend", ("React", "Next.js", "Streamlit"))
    #linebreak()
    #skill("Infra & CI/CD", ("Kubernetes (Openshift)", "Helm", "Docker", "ArgoCD", "GitLab CI/CD", "Prefect"))
    #linebreak()
    #skill("Monitoring", ("Prometheus", "Grafana", "Langfuse"))
  ],
  [
    #skill("ML", ("PyTorch", "LangChain", "Transformers"))
    #linebreak()
    #skill("Inference", ("BentoML", "Triton", "OpenVINO", "ONNX Runtime", "Quantization"))
    #linebreak()
    #skill("LLM API", ("Anthropic", "OpenAI"))
    #linebreak()
    #skill("Vector DB", ("Qdrant",))
    #linebreak()
    #skill("Spoken", ("Korean (native)", "English (fluent)", "Norwegian (beginner)"))
  ],
)
]

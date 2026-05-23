export type Socials = {
  github: string;
  linkedin: string;
  email: string;
  initnode: string;
};

export type Job = {
  name: string;
  date: string;
  info?: string;
  content: string;
};

export type ExperienceEntry = {
  company: string;
  companyUrl?: string;
  team?: string;
  location?: string;
  jobs: Job[];
};

export type EducationEntry = {
  title: string;
  school: string;
  schoolUrl?: string;
  date: string;
  degree?: string;
  location?: string;
  content?: string;
};

export type CardEntry = {
  title: string;
  subtitle?: string;
  url?: string;
  date?: string;
  content?: string;
};

export type OpenSourceEntry = {
  project: string;
  subtitle?: string;
  url?: string;
  date?: string;
  content?: string;
};

export type SpokenLanguage = {
  name: string;
  level: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type SideProject = {
  slug: string;
  title: string;
  subtitle?: string;
  url?: string;
  date?: string;
  content?: string;
};

export type Interest = {
  title: string;
  bullets: string[];
};

export type Hobby = {
  name: string;
  detail?: string;
};

export const resume = {
  name: "Jinho Park",
  role: "AI Application Engineer",
  location: "Seoul, South Korea",
  browserTitle: "Jinho Park · AI Application Engineer",
  description:
    "Jinho Park · AI Application Engineer. Agentic RAG, document processing pipelines, MCP agent tooling, MLOps.",

  socials: {
    github: "https://github.com/jinhopark8345",
    linkedin: "https://www.linkedin.com/in/jinho-park-9a511a1b9/",
    email: "jinhoparkseoul@gmail.com",
    initnode: "https://initnode.ai/",
  } as Socials,

  hero: {
    intro: "Hi, I'm",
    subtitle:
      "I work closely with clients to turn real requirements into AI systems that ship.",
    content:
      "AI Application Engineer who ships production AI systems end-to-end: Agentic RAG, document processing pipelines, and MCP-based agent tooling, with the MLOps to keep them running. Currently at Boeing, previously at Lomin.",
  },

  about: {
    paragraphs: [
      "I'm an AI Application Engineer who ships production AI systems end-to-end. My current focus is on **Agentic RAG**, **document processing pipelines**, and **MCP-based agent tooling**, designed for the throughput, latency, and observability that production demands.",
      "A big part of how I work: I **listen to client requirements** and discuss tradeoffs openly. **Multiple iterative PoCs** help surface what the client actually needs versus what they first ask for. The translation from a fuzzy ask to concrete **application logic** and **AI workflows** is where most of the real design happens.",
      "One thing I'm known for: **fast prototyping**. I'd rather validate an idea with a working demo in days than theorize for weeks. It keeps iteration with clients tight, cheap, and grounded in what actually works.",
      "Currently at **Boeing**, I work on an agentic RAG system for regulated-industry document compliance. Before that, at **Lomin**, I architected an on-premise document processing pipeline serving 10,000 documents per hour for enterprise financial and government clients.",
      "On the side, I run **[InitNode](https://initnode.ai/)**, a small AI studio I started in May 2026, shipping AI systems from PoC to production. Current builds: [Citely](https://citely.initnode.ai/) (a citation-first RAG demo) and [ppuri](https://ppuri.app/) (a Korean genealogy app, pre-production).",
      "I graduated from Konkuk University in 2022 with a B.S. in Electrical and Electronics Engineering, and spent a semester on exchange at the University of Agder in Norway.",
      "Outside of work, I live in Seoul with my Norwegian wife and our two cats.",
    ],
    skillGroups: [
      { label: "Languages", items: ["Python", "C++", "TypeScript"] },
      { label: "Databases", items: ["PostgreSQL", "Redis"] },
      { label: "Vector DB", items: ["Qdrant"] },
      { label: "Backend", items: ["FastAPI"] },
      { label: "Frontend", items: ["React", "Next.js", "Streamlit"] },
      { label: "ML", items: ["PyTorch", "LangChain", "Transformers"] },
      {
        label: "Inference",
        items: [
          "BentoML",
          "Triton",
          "OpenVINO",
          "ONNX Runtime",
          "Quantization",
        ],
      },
      { label: "LLM", items: ["Anthropic", "OpenAI"] },
      {
        label: "Infra & CI/CD",
        items: [
          "Kubernetes (OpenShift)",
          "Helm",
          "Docker",
          "ArgoCD",
          "GitLab CI/CD",
          "Prefect",
        ],
      },
      { label: "Monitoring", items: ["Prometheus", "Grafana", "Langfuse"] },
    ] as SkillGroup[],
    spokenLanguages: [
      { name: "Korean", level: "Native" },
      { name: "English", level: "Advanced" },
      { name: "Norwegian", level: "Beginner" },
    ] as SpokenLanguage[],
  },

  experience: [
    {
      company: "Boeing",
      companyUrl: "https://www.boeing.com/",
      team: "ML Team",
      location: "Seoul, South Korea",
      jobs: [
        {
          name: "AI Application Engineer",
          date: "Jan 2024 – present",
          info: "ML Team · Seoul, South Korea",
          content: `**Advanced Information Retrieval**: *Agentic RAG for regulated-industry document compliance*

- Architected a high-precision **Agentic RAG** system that cross-references technical reports against regulatory frameworks through an agentic loop.
- Split it into a dedicated **retrieval service** exposed as an **MCP server** and a **generation app** consuming it as MCP client; retrieval runs **hybrid sparse + dense** on **Qdrant**, outperforming dense-only on MRR across a 200-query eval set for domain-specific terminology.
- Built an **LLM-powered PDF parser** (few-shot prompting for layout and field extraction) that powers the **data-ingestion pipeline**, keeping the retrieval index current as new technical reports and regulatory documents arrive.
- Held **p95 retrieval latency under 1000 ms on CPU-only infrastructure** via Qdrant indexing and payload filtering, with **BentoML** dynamic batching + **ONNX Runtime** + quantization for CPU embedding serving (downstream LLM was GPU-hosted, managed separately).
- Instrumented the stack with **Prometheus & Grafana** and a custom **Postgres-backed KPI tracker** (CTR, query quality, adoption, latency).
- Shipped a **Streamlit + React** interface for compliance owners generating regulator-ready reports.

**LLM Applications & Internal Tooling**

- Built an **internal code-review LLM bot** that lets engineers chat with an LLM directly on merge requests: code review, summarization, and Q&A inside the review flow.
- Shipped an **MCP (Model Context Protocol) server** exposing in-house tools and data sources to LLM agents through a standard interface.

**MLOps & Backend Automation**

- Implemented a **GitOps** deployment flow with **ArgoCD** and **OpenShift**, reducing deployment cycles from **1 hour to 10 minutes**.
- Developed a fault-tolerant **Prefect** orchestration layer, automating data ingestion and inference pipelines for industrial predictive maintenance.
- Eliminated **~8 hours of manual weekly labor** by building an automated PDF-generation backend that converts raw telemetry into stakeholder-ready reports via FastAPI.
- Built an **internal ML artifact registry on GitLab** for version-controlling AI project artifacts (models, datasets, and training snapshots).`,
        },
      ],
    },
    {
      company: "Lomin",
      companyUrl: "https://www.lomin.ai/",
      team: "ML Team",
      location: "Seoul, South Korea",
      jobs: [
        {
          name: "Machine Learning Engineer",
          date: "May 2022 – Aug 2023",
          info: "ML Team · Seoul, South Korea",
          content: `**End-to-end document processing pipeline** (on-premise)

- Architected the production pipeline that processed **10,000 documents per hour** at **p95 end-to-end latency under 1 second** for enterprise financial and government clients.
- Optimized Transformer inference on **Triton** (KV-caching + quantization) for a **20% speedup**, and improved multi-modal **Table Extraction** F1 by **15%** on financial documents.
- Built a **Document Understanding** framework with graph-based augmentation and dataset curation for per-client fine-tuning.

**Clients:** Kyobo Life, Lina Life, Shinhan Asset Trust, KIPO (production); Samsung Life, Hanwha Life, Samsung Fire & Marine, KB Insurance (PoCs).`,
        },
      ],
    },
    {
      company: "Intel",
      companyUrl: "https://www.intel.com/content/www/us/en/homepage.htm",
      team: "OpenVINO Korea",
      location: "Seoul, South Korea",
      jobs: [
        {
          name: "Software Engineer Intern, OpenVINO Korea",
          date: "Aug 2021 – Feb 2022",
          info: "OpenVINO Korea · Seoul, South Korea",
          content: `**GPU runtime work on the [OpenVINO](https://www.intel.com/content/www/us/en/developer/tools/openvino-toolkit/overview.html) clDNN plugin**

- Co-authored [openvinotoolkit/openvino#7783](https://github.com/openvinotoolkit/openvino/pull/7783): contributed the mutable-output test case that reproduced a GPU-path \`prepare_output\` regression. The runtime fix itself was owned by the team.

**Regression triage across production models**

- Owned accuracy and performance investigations on Intel integrated GPUs for **YOLOv5, MTCNN, BrainTumor-segmentation, Tacotron, Swin, ICNet, machine-translation-nar, and text-detection-0003/0004**, often running \`git bisect\` across the OpenVINO tree (with submodule rebuilds on every step) to pin regressions down to a single commit.
- Isolated GPU-plugin-specific divergences by comparing CPU vs GPU runs through OpenVINO's \`accuracy_check\` tool (e.g., text-detection-0003: reasonable f-measure on CPU, 0% on GPU pointed to a quantization path issue).
- Built a small library of bash + Python scripts to automate "good build vs bad build" \`benchmark_app\` sweeps on INT8-quantized models.

**What I took away**

- First real exposure to industrial C++ in a release-grade ML runtime; CMake, \`gdb\`, GoogleTest, and the OpenVINO component layout became part of my baseline.
- ML-inference work on production systems is mostly debugging with deterministic reproducers, not modeling.
- \`git bisect\` across a submodule-heavy repo is a skill, not a one-liner.`,
        },
      ],
    },
  ] as ExperienceEntry[],

  education: [
    {
      title: "B.S., Electrical and Electronics Engineering",
      school: "Konkuk University",
      schoolUrl: "https://english.kku.ac.kr/mbshome/mbs/wwwen/index.do",
      date: "Mar 2015 – Feb 2022",
      degree: "Bachelor",
      location: "Seoul, South Korea",
      content: `- Studied embedded systems and semiconductors along with low-level programming languages.
- **Thesis:** *Further Optimize MobileNetV2 with Channel-wise Squeeze and Excitation.*
- **CS courses:** Algorithms, Data Structures, Operating Systems, Embedded Systems, Artificial Intelligence.`,
    },
    {
      title: "Exchange Student, Computer Science",
      school: "University of Agder",
      schoolUrl: "https://www.uia.no/english/",
      date: "Aug 2017 – Jan 2018",
      degree: "Exchange Student, Bachelor",
      location: "Agder, Norway",
      content: `- Studied application development, programming language concepts, and Norwegian.
- Gained international exposure, expanded professional networks, and improved English communication skills.`,
    },
  ] as EducationEntry[],

  achievements: [
    {
      title: "Silver Medal, UBC Ovarian Cancer Subtype Classification",
      subtitle: "Kaggle",
      date: "Jan 2024",
      url: "https://www.kaggle.com/certification/competitions/jinho8345/UBC-OCEAN",
      content: `Ranked **28 of 1,724** participants (top 2%) in the UBC Ovarian Cancer Subtype Classification and Outlier Detection (UBC-OCEAN) competition: classify five ovarian cancer subtypes on whole-slide (WSI) and tissue-microarray (TMA) histopathology images, plus detect the "Other" class.

**My approach:**

- Fine-tuned \`maxvit_tiny_tf_512.in1k\` on cancerous tiles mined from WSIs using supplemental masks (>70% tumor pixels for training, 30-70% for validation).
- TMA inference: tile, classify per tile, majority-vote the subtype.
- WSI inference: a thumbnail-level tumor/non-tumor classifier runs first. No-tumor thumbnails are labeled "Other"; tumor thumbnails feed the subtype head with majority voting.
- Tried StainNet stain-normalization, simple normalization won.

Full approach in my [28th-place solution writeup](https://www.kaggle.com/competitions/UBC-OCEAN/writeups/jinho-park-28th-solution).`,
    },
    {
      title: "2nd Prize, College Student Papers & Capstone Design Contest",
      subtitle: "Korean Institute of Broadcast and Media Engineers",
      date: "Nov 2021",
      content: `Paper: [*"Further Optimize MobileNetV2 with Channel-wise Squeeze and Excitation."*](https://koreascience.kr/article/CFKO202115161202726.pdf)

**Problem:** 1x1 convolutions contribute 70-75% of MobileNetV2's parameters and scale with channel count, so they become the bottleneck as the network deepens.

**Approach:**

- Proposed a channel-wise squeeze-and-excitation (CSE) block, inspired by SENet, whose parameters scale with resolution instead of channel count.
- Hybrid strategy: 1x1 conv in early layers (high resolution, low channels), CSE in later layers (low resolution, high channels), so the two complement each other.
- Added a \`cap\` hyperparameter to prevent over-compression at low resolutions.

**Results:** ~15% fewer parameters than MobileNetV2 optimized for CIFAR-10 with no accuracy loss, and 20% of baseline size on ImageNette at comparable accuracy (0.44M vs 2.25M params, 91.31% vs 91.56%).`,
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      subtitle: "Linux Foundation",
      date: "Dec 2024",
      url: "https://www.credly.com/badges/31ab4d72-86ce-46be-9f77-9cf25af5c133/linked_in_profile",
    },
    {
      title: "Build a Modern Computer from First Principles: Nand to Tetris",
      subtitle: "Coursera",
      date: "Jan 2021",
      url: "https://www.coursera.org/account/accomplishments/certificate/SGZA3KSZJ4GJ",
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "Coursera · deeplearning.ai",
      date: "May 2019",
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/RN6NXSR9MXBH",
    },
    {
      title: "Machine Learning",
      subtitle: "Coursera · Stanford",
      date: "Feb 2019",
      url: "https://www.coursera.org/account/accomplishments/certificate/BH6FU4KSW4TS",
    },
  ] as CardEntry[],

  openSource: [
    {
      project: "Add BROS model to 🤗 Transformers",
      subtitle: "huggingface/transformers#23190",
      url: "https://github.com/huggingface/transformers/pull/23190",
      date: "Sep 2023",
      content: `Added the **BROS** (BERT Relying On Spatiality) document-understanding model to the [Hugging Face Transformers](https://huggingface.co/docs/transformers/model_doc/bros) library.

- Ported the model architecture, tokenization, and pre-processing for spatially-aware document inputs.
- Shipped with docs, model card, and integration tests.`,
    },
    {
      project: "[GPU] prepare_output test case, OpenVINO",
      subtitle: "openvinotoolkit/openvino#7783",
      url: "https://github.com/openvinotoolkit/openvino/pull/7783",
      date: "Oct 2021",
      content:
        "Contributed the mutable-output test case reproducing a GPU-path `prepare_output` regression during my Intel OpenVINO Korea internship. The runtime fix was authored by the team; my commit added the test coverage that protects against regressions.",
    },
  ] as OpenSourceEntry[],

  sideProjects: {
    intro:
      "Less work, more me. The apps I'm building, solo and under my studio, and the things I do off-screen.",
    projects: [
      {
        slug: "citely",
        title: "Citely",
        subtitle: "a citation-first RAG demo app I'm building under InitNode",
        url: "https://citely.initnode.ai/",
        date: "Started May 2026",
        content: `Most "chat with your PDF" tools give you an answer and a vague feeling it came from the document somewhere. I wanted the opposite: every claim in the answer linked back to the exact source page, so you can verify before you trust.

[Citely](https://citely.initnode.ai/) is the first demo app under [InitNode](https://initnode.ai/), the small AI studio I started in May 2026. Upload a PDF, ask it questions, get answers with inline citations. Click a citation and the source pane jumps to the right passage.

**Why this exists.** I wanted InitNode to have one polished demo that says "we know how to ship RAG with citations done right" without needing a sales call. It also doubles as my own playground for retrieval ideas: hybrid search, chunking strategies, citation-faithful generation. Lessons from Citely tend to feed back into client work.

[Try it](https://citely.initnode.ai/), free signup, no credit card.`,
      },
      {
        slug: "ppuri",
        title: "ppuri (뿌리)",
        subtitle:
          "a Korean genealogy app I'm building under InitNode (closed beta, Korean-only, pre-production)",
        url: "https://ppuri.app/",
        date: "Started May 2026",
        content: `Korean families have something called a *jokbo* (족보), a genealogy book tracing a clan back generations. The traditional ones are printed and physical, which means they age, fragment, and stop getting updated. [ppuri](https://ppuri.app/) (뿌리, "roots") is my attempt at the digital version.

The core feature is a shared, editable family tree the whole clan can contribute to: who's married to whom, who descends from whom, who's still alive, where the family graves are. On top of that sit the things a family actually does together: a shared document space, group chat, a calendar for family events (제사, weddings, birthdays), and a record of grave-site locations and visits.

**Why this is interesting.** The hardest part wasn't the tech, it was the kinship logic. Korean relationship names are positional (your father's older brother is *큰아버지*, his younger brother is *작은아버지*, your mother's brother is *외삼촌*, and so on). You can't just store "uncle", you have to derive the right term from the tree. That subsystem is the heart of the app and the part I'm most proud of.

Closed beta, Korean-only, pre-production. Built under [InitNode](https://initnode.ai/).`,
      },
      {
        slug: "freetoolspot",
        title: "FreeToolSpot",
        subtitle: "a free everyday-tools site I'm building",
        url: "https://freetoolspot.com/",
        date: "Started April 2026",
        content: `Every so often I'd reach for a free online tool, maybe to flatten a PDF, maybe to convert an image, and somewhere between "drop file" and "download result" I'd realize my file had just been uploaded to someone else's server for a task that could have happened locally in a few hundred milliseconds. That bothered me more than it probably should.

[FreeToolSpot](https://freetoolspot.com/) is what came out of it: a growing set of small everyday utilities, all running inside your browser. PDF merge, compress, split, images-to-PDF, OCR, image conversion, JSON formatting, regex, hashing, the kinds of things you reach for on a random Tuesday and want to be done with in under two minutes.

![FreeToolSpot homepage: your files never leave your device, with tools grouped by PDF, Image, Text, and JSON](/img/freetoolspot-home.png)

**Three things I care about, in this order.**

- **Privacy first.** Everything runs client-side. Your files never leave your device. Nothing uploaded, nothing stored, nothing queued. Don't trust me on it: pop open DevTools, watch the network tab, it stays empty.
- **Fast.** No round-trip means no round-trip. Open the tool, drop the file, get the result. Works offline after the first load.
- **Free.** No accounts, no daily limits, no watermarks. I find "3 free uses per day" paywalls on single-purpose utilities genuinely annoying, so this one isn't that.

**Chrome extensions.** I packaged the tools people reach for most into three extensions, so they're one click away from any tab:

- [PDF Toolkit](https://chromewebstore.google.com/detail/pdf-toolkit-%E2%80%94-by-freetool/dmpfpklkmoijppoepnecinilgpbbappi)
- [Image Toolkit](https://chromewebstore.google.com/detail/image-toolkit-%E2%80%94-by-freeto/oceljmngbocdefpnbgeccldhoiehnchd)
- [Dev Toolkit](https://chromewebstore.google.com/detail/dev-toolkit-%E2%80%94-by-freetool/pbgcmhbodppmcdpkfbakdjbdaedlafoh)

36 tools and counting, all built by me. I like small tools that do one thing cleanly, and I like the idea that someone at 2 a.m. can flatten a PDF without creating an account, installing an app, or handing their file to a stranger's server. That's the whole pitch. [freetoolspot.com](https://freetoolspot.com/).`,
      },
      {
        slug: "preprep",
        title: "PrePrep",
        subtitle: "an interview prep app I'm building",
        date: "Started March 2026",
        content: `In high school, my favorite subject was math, and the best part wasn't solving problems. It was explaining them to friends until they finally got it. For a while I wanted to be a math teacher.

I didn't go that route, but the urge to help people learn never really left. PrePrep is where it landed.

I wanted it to feel like something between a language-learning app and a game, not a quiz bank. You pick topics, it picks questions based on what you're weakest at (SM-2 spaced repetition), and it tracks how you're improving. Timed challenges with a leaderboard, a 30-minute mock interview mode, per-option explanations so you can see why each choice is right or wrong, streaks, badges, and a small companion (a dragon, a plant, or an RPG hero) that levels up alongside you. The companion was supposed to be a one-day experiment. I kept polishing it anyway.

**Architecture.**

![Dataprep and preprep architecture: dataprep's knowledge graph feeds a 9-table Postgres that drives gap analysis, LLM generation, and a dashboard; sync.py joins and flattens the tables into preprep's read-only DB, which a Quiz API serves to users](/img/preprep-architecture.webp)

It started as one repo, and it got messy fast. The serving code and the question-generation code kept rubbing against each other, every LLM experiment risked breaking the app, and schema changes on one side always pulled the other along. So I split them:

- **preprep** is the app: Next.js 16, React 19, Tailwind, FastAPI, Postgres, Google sign-in, Docker Compose. It only ever *reads* questions.
- **dataprep** is the content pipeline: a knowledge graph with 451 nodes across 40 subjects (Python and Kubernetes, but also Korean history and chemistry) and an LLM-backed generator that watches for coverage gaps and fills them. Around 2,500 questions so far.

Generation is slow, expensive, and occasionally wrong; serving needs to be fast, cheap, and always up. Keeping \`dataprep\` out of the request path means I can re-generate questions, migrate schemas, or rate-limit LLMs without ever touching the live app. When the pipeline breaks, the app keeps working. That separation is the thing I'm most proud of in this project, more than any single feature.

**Bloom levels.**

Every question carries a [Bloom's taxonomy](https://en.wikipedia.org/wiki/Bloom%27s_taxonomy) level: *remember*, *understand*, *apply*, *analyze*, *evaluate*, *create*. I care about this axis more than raw "difficulty". Recalling a syntax detail and designing a caching strategy are both "hard", but in completely different ways, and a 1-to-5 difficulty slider compresses too many unrelated things into one number. Bloom lets me target weak areas by cognitive operation, and it tells the generator which *kind* of question is still missing for a given concept.

Both repos are private for now. I like making things that feel a little more polished than they need to be, and I like surprising people with what a side project can be.`,
      },
      {
        slug: "ubc-ocean",
        title: "UBC-OCEAN",
        subtitle: "Kaggle, solo, three months",
        url: "https://www.kaggle.com/competitions/UBC-OCEAN/overview",
        date: "Oct 2023 – Jan 2024",
        content: `A three-month solo run at the [UBC Ovarian Cancer Subtype Classification (UBC-OCEAN)](https://www.kaggle.com/competitions/UBC-OCEAN/overview) Kaggle competition. The task: look at a microscope scan of a biopsy and predict which of five ovarian cancer subtypes it is, while also flagging images that don't fit any known subtype as "Other". I finished 28th of 1,724, silver medal. Code is on [GitHub](https://github.com/jinhopark8345/UBC-OCEAN-28th-place-solution).

**Why it was tricky.** The images come in two very different formats. **Whole-slide images (WSI)** are enormous scans of an entire tissue slide at 20x magnification, often around 50,000 × 50,000 pixels and mostly non-tumor area. **Tissue microarrays (TMA)** are small cores the pathologist has already punched out of a WSI and scanned at 40x, usually around 4,000 × 4,000 pixels and almost entirely tumor. The train set is mostly WSIs with only 25 TMAs, but the test set is mostly TMAs. The "Other" class never appears in training at all.

**[My approach: the "classic" path.](https://www.kaggle.com/competitions/UBC-OCEAN/writeups/jinho-park-28th-solution) ** A fine-tuned CNN classifier, with a separate tumor detector for WSIs.

- Only 25 TMAs in training, so I mined tumor-heavy tiles out of the WSIs (using the organizers' supplemental tumor masks) and used them as TMA-like training samples: >70% tumor pixels for training, 30-70% for validation.
- Fine-tuned \`maxvit_tiny_tf_512\` on those tiles to predict the subtype.
- **TMA inference:** tile into 512×512 patches, classify each, majority-vote the final subtype.
- **WSI inference:** a smaller tumor/non-tumor classifier runs first on downsized thumbnails. No-tumor thumbnails get labeled "Other"; tumor thumbnails feed the main classifier and majority-vote.
- StainNet color normalization (popular for cross-hospital pathology generalization) underperformed simple normalization and was dropped.

![Inference flow: an input slide is routed by type, TMA goes straight to tiling and the TMA model, WSI first passes a thumbnail tumor classifier which routes no-tumor thumbnails to "Other" and tumor thumbnails back to the TMA model, all tile predictions are majority-voted into a subtype](/img/ubc-ocean-inference-flow.svg)

*Inference pipeline for my 28th-place UBC-OCEAN solution.*

Full writeup [on Kaggle](https://www.kaggle.com/competitions/UBC-OCEAN/writeups/jinho-park-28th-solution).

**What the top solutions did differently.** Most winning teams framed this as a **Multiple Instance Learning (MIL)** problem instead. The idea: a slide is a "bag of patches", and the model learns to pick which patches matter. Nobody fine-tunes a classifier on pixels. You run a frozen **pathology foundation model** (a big ViT pretrained with self-supervision on millions of pathology tiles) to turn each patch into a fixed-size feature vector, then train a cheap MIL classifier on top of those vectors. Since the foundation model already knows what pathology looks like, the classifiers on top can stay tiny and iterate fast.

**[1st place, Owkin](https://www.kaggle.com/competitions/UBC-OCEAN/writeups/owkin-1st-place-solution-owkin):**

- Phikon, Owkin's pathology ViT-Base (iBOT-pretrained on 40M TCGA tiles), pre-computed a 768-dim embedding per patch once.
- Ensemble of **50 Chowder MIL models** (Owkin's own MIL architecture). Chowder is sensitive to initialization; ensembling was the stabilizer.
- **Outlier detection:** a threshold on the entropy of ensemble predictions. High entropy (the ensemble disagreed) got labeled "Other". One line of code, took their public-LB score from 0.59 to 0.64.
- Extra bump: further iBOT-fine-tuned Phikon on the competition's own patches.

![Owkin's 1st place pipeline for UBC-OCEAN: WSI or TMA to matter detection, tiling, Phikon feature extraction, Chowder MIL, final cancer subtype, with high-entropy predictions routed to "Other"](/img/owkin-ubc-ocean-pipeline.webp)

*Pipeline diagram from [Owkin's 1st-place writeup](https://www.kaggle.com/competitions/UBC-OCEAN/writeups/owkin-1st-place-solution-owkin).*

**[7th place, m1dsolo](https://www.kaggle.com/competitions/UBC-OCEAN/writeups/m1dsolo-7th-place-solution):**

- Same recipe (frozen pathology backbone + MIL on top), different cast.
- **Two feature extractors:** [CTransPath](https://github.com/Xiyue-Wang/TransPath) (pathology-specific Swin Transformer, MIA 2022) and a ViT-S/16 pretrained on pathology with [LunitDINO](https://github.com/lunit-io/benchmark-ssl-pathology) (CVPR 2023).
- **Two MIL models:** [DSMIL](https://github.com/binli123/dsmil-wsi) (Dual-Stream MIL, CVPR 2021) and [Perceiver](https://github.com/cgtuebingen/DualQueryMIL) (from DualQueryMIL, BMVA 2023).
- Final ensemble of 4 combinations: {CTransPath, ViT-S/16} × {DSMIL, Perceiver}.

**Lessons I took from this:**

- **Do more research when the domain is unfamiliar to you.** I jumped into modeling before really understanding how pathologists work or how the WSI literature usually frames these problems. I paid for that in wasted cycles.
- **Mid-competition leaderboard position doesn't mean much.** I was doing well for a stretch, but the private test set was built specifically to catch models that don't generalize. You don't win by being high at week 4, you win by being high when the competition ends.
- **Don't be afraid to try new approaches from recent papers.** A lot of the top solutions used methods from papers published only a few months before the competition. I played conservatively and lost ground because of it.
- **First time handling huge images.** A single WSI can be 100,000 × 50,000 pixels. You don't load them, you tile and stream them (libpng row-reads, pyvips, custom tiling code). PIL is not the answer.
- **First time with medical imaging.** Staining differs between hospitals, scanners vary, metadata like magnification sometimes gets stripped during format conversion, the same cancer can look different under two different setups. None of that was in my vocabulary when I started.

**Concepts I picked up:**

- **Bag of patches.** Instead of feeding a whole image to the model, chop it into small tiles (say 224×224) and treat the image as an unordered "bag" of those tiles. The label belongs to the bag, not to any individual tile.
- **Multiple Instance Learning (MIL).** The learning setup built for exactly the bag-of-patches case: the model receives an unordered set of feature vectors and predicts one label for the whole bag. It learns which patches to pay attention to. Chowder, DSMIL, and Perceiver (all used by the winners here) are MIL architectures.

**Takeaways I'm still thinking about:**

- Domain-specific foundation models change the shape of the problem. My ImageNet-pretrained backbone had to learn pathology from scratch. A frozen Phikon or CTransPath embedding is already most of the way there.
- Pre-compute embeddings once, iterate cheaply on classifiers. Most of my three months went into fine-tuning a backbone; the winners spent theirs on modeling choices over frozen features.
- MIL beats my hand-engineered tumor gate for WSIs. Letting the model pick which patches matter is cleaner than coding a thumbnail classifier.
- Entropy-based outlier detection generalizes better than my thumbnail-gate heuristic, and it's simpler.
- Next time I touch this kind of problem, I'd start with a pathology foundation model + MIL + ensemble before writing a single line of fine-tuning code.`,
      },
      {
        slug: "bros",
        title: "BROS",
        subtitle:
          "porting a document-understanding model into Hugging Face Transformers",
        url: "https://github.com/huggingface/transformers/pull/23190",
        date: "Aug – Sep 2023",
        content: `I have a soft spot for [BROS (BERT Relying On Spatiality)](https://huggingface.co/docs/transformers/model_doc/bros) for reasons I'll keep to myself. The short version of the public story: I wanted to use it, it wasn't in [Hugging Face Transformers](https://github.com/huggingface/transformers), so I ported it from the [original author's repo](https://github.com/clovaai/bros) and upstreamed it as [PR #23190](https://github.com/huggingface/transformers/pull/23190).

BROS is a layout-aware BERT variant for form and document understanding. The idea: instead of treating a document as a flat stream of words, use the 2D coordinates of each word box on the page. It encodes the spatial relationship between tokens (above, below, left, right, distance) directly into attention, so the model reads a form the way a person does.

![BROS architecture overview: tokens and their 2D positions are embedded, the position differences between text blocks are encoded directly into the Transformer's attention as relative spatial encoding, a token-and-area masking strategy is used during pre-training, and the output token representations drive both pre-training and fine-tuning](/img/bros-architecture.webp)

*Figure 2 from the [BROS paper](https://arxiv.org/abs/2108.04539) (Hong et al., 2021).*

**What "document understanding" actually means here:**

- **Entity Extraction (EE / NER):** find the fields. Classify each word as part of a question, answer, header, or other. BIO/BIOES tagging matters so you can separate adjacent entities with the same label (think "Shake Shack" next to "Burger King", without tagging they look like one run).
- **Entity Linking (EL):** connect the fields. Which question goes with which answer, which header groups which items. BROS predicts a "from-token" given a "to-token" for each link.

**[FormUnderstanding](https://github.com/jinhopark8345/FormUnderstanding) repo.** I spun this up alongside the PR, with worked-through notebooks on the FUNSD dataset: how EE and EL are framed, BIO vs BIOES, and where BROS's linking approach struggles (it assumes each "to" box has one "from" box, which breaks on table-like layouts where a header links to many rows).

**Lessons I took from this:**

- **Contributing to an open-source project is one of the best ways to learn its internals.** After this PR, I know how Transformers is structured (modeling files, configuration, tokenizer, auto classes, tests, docs, model card) because the review process forces you to touch every layer of it.
- **What to test after porting a model.** Forward-pass equivalence against the original implementation on the same inputs (bit-close, not just "similar"), tokenizer round-trips, save-and-reload round-trips, batched vs. unbatched parity, CPU vs. GPU parity, plus any model-specific edge cases (for BROS: spatial attention with 2D coordinates).
- **The Hugging Face ecosystem is bigger than the Transformers library.** The Model Hub (weights and cards), the Datasets library, and the Dataset Hub are all separate pieces that plug into each other. Understanding how they fit together is half of shipping a model end-to-end.

**Where this lands in 2026.** There are plenty of classical approaches to form understanding (LayoutLM family, BROS, DocFormer, and so on), but these days a multimodal LLM can just read the document and emit structured JSON. Cheaper, no fine-tuning, often better. The specialized models still win on latency, cost-per-page, and on forms where layout really matters, but the center of gravity has shifted.`,
      },
      {
        slug: "mobilenetv2-cse",
        title: "Optimizing MobileNetV2",
        subtitle: "my undergrad thesis, and my first paper",
        url: "https://koreascience.kr/article/CFKO202115161202726.pdf",
        date: "Nov 2021",
        content: `My undergraduate thesis at Konkuk University. The prompt was open: find something to optimize in a neural network. I went with MobileNetV2 because it was everywhere on mobile and embedded, and I wanted to understand *why* it was fast, not just that it was fast.

Months of failed experiments came first. Drop a bottleneck layer? Accuracy tanks. Add strides? Accuracy tanks. Swap \`relu6\` for \`prelu\` from ENet? Marginal. The one thing that kept holding up across experiments was that the depth-wise separable convolution was the real efficiency story, not the parts around it. Once I stopped trying to beat it and started reading how the parameter count actually breaks down, the insight came out on its own:

- Depth-wise separable convs only filter channels, they can't mix them. 1×1 conv is what creates new features by mixing channels. And **1×1 conv scales with channel count**, so as the network deepens and channels grow, 1×1 ends up dominating the parameter budget (70-75% of MobileNetV2).

That meant the optimization target was 1×1, not depth-wise. I proposed a channel-wise squeeze-and-excitation (CSE) block, inspired by [SENet](https://arxiv.org/abs/1709.01507), that scales with resolution instead of channels. The two are natural complements:

- 1×1 conv where resolution is high and channels are low (early layers).
- CSE where resolution is low and channels are high (late layers).
- A \`cap\` hyperparameter to prevent over-compression when resolution is very low.

**Results.** ~15% fewer parameters than MobileNetV2 optimized for CIFAR-10 with no accuracy loss; 20% of baseline size on ImageNette at comparable accuracy (0.44M vs 2.25M params, 91.31% vs 91.56%). Paper: [*Further Optimize MobileNetV2 with Channel-wise Squeeze and Excitation*](https://koreascience.kr/article/CFKO202115161202726.pdf). 2nd prize at the Korean Institute of Broadcast and Media Engineers College Student Paper Contest, 2021.

**Lessons I took from this:**

- **The ablation table taught me more than the abstract did.** I learned architectures by reading other papers' experiment sections, not their narrative.
- **My first real paper.** Writing it was harder than running the experiments. Figuring out what to cut is a skill I didn't have yet.
- **Replacing vs complementing.** Framing CSE as a *complement* to 1×1 conv (different parameter-scaling axes) was more honest, and more useful, than pitching it as a drop-in replacement. Drop-ins rarely survive ablations.
- **Null results are where understanding forms.** The insight wasn't a single discovery, it came from months of failing to beat depth-wise conv by tweaking the things around it.`,
      },
    ] as SideProject[],
    interests: [
      {
        title: "AI",
        bullets: [
          "[OpenClaw](https://openclaw.ai/) + [Qwen3.5-27B](https://huggingface.co/Qwen/Qwen3.5-27B) locally on one 3090",
          "Claude daily for work and personal use",
          "Scared and enjoying the insane pace at the same time",
          "Can't step out of this current, so I'd rather flow with it",
        ],
      },
      {
        title: "Investment",
        bullets: [
          "How markets, companies, and capital actually move",
          "The pull: not needing to be rich, but never wanting to be short",
          "A new subject to study, which I've missed",
        ],
      },
      {
        title: "Productivity and personal knowledge management",
        bullets: [
          "Getting more done, and making what I learn actually stick",
          "Active learning over read-and-forget, which is why I made [PrePrep](/side-projects/preprep)",
          "Heavy Emacs user for work and personal use, 7+ years",
          "Love tiling window managers",
        ],
      },
    ] as Interest[],
    dailyDrivers: [
      { name: "Emacs" },
      { name: "Claude Code" },
      { name: "i3wm" },
      { name: "Ubuntu", detail: "desktop" },
      { name: 'MacBook Pro 16" M3', detail: "personal laptop" },
    ] as Hobby[],
    studioStack: [
      {
        label: "Frontend",
        items: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui"],
      },
      {
        label: "Backend",
        items: ["Node.js", "Python", "FastAPI", "Drizzle ORM", "PostgreSQL"],
      },
      {
        label: "AI",
        items: ["OpenAI", "Anthropic", "Claude Code", "Cursor"],
      },
      {
        label: "Infra & Auth",
        items: [
          "Railway",
          "Vercel",
          "Cloudflare",
          "Auth0",
          "NextAuth",
          "PostHog",
        ],
      },
      {
        label: "Studio ops",
        items: [
          "GitHub",
          "Linear",
          "Slack",
          "Google Workspace",
          "Resend",
          "1Password",
        ],
      },
    ] as SkillGroup[],
    hobbies: [
      { name: "Swimming" },
      { name: "Climbing" },
      { name: "Boxing" },
      { name: "Running" },
      { name: "Snowboarding" },
      { name: "Watching movies" },
      { name: "Board games" },
      { name: "Playing with our cats" },
    ] as Hobby[],
  },
};

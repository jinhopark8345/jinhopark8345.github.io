export type Socials = {
  github: string;
  linkedin: string;
  email: string;
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
  content: string;
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
    "Jinho Park · AI Application Engineer. Information Retrieval, Agentic RAG, vector search, MLOps.",

  socials: {
    github: "https://github.com/jinhopark8345",
    linkedin: "https://www.linkedin.com/in/jinho-park-9a511a1b9/",
    email: "jinhoparkseoul@gmail.com",
  } as Socials,

  hero: {
    intro: "Hi, I'm",
    subtitle:
      "I work closely with clients to turn real requirements into AI systems that ship.",
    content:
      "AI Application Engineer focused on Information Retrieval and scalable backend systems: vector search, Agentic RAG, latency optimization, and retrieval precision. Currently at Boeing, previously at Lomin.",
  },

  about: {
    paragraphs: [
      "I'm an AI Application Engineer specializing in **Information Retrieval** and **scalable backend systems**, architecting production-grade vector search and Agentic RAG systems with a focus on latency optimization and retrieval precision.",
      "I have a proven track record of automating the end-to-end ML lifecycle using **Prefect, Kubernetes, and GitOps**, and deep expertise in bridging the gap between complex IR research and high-availability **FastAPI** services.",
      "One thing I'm known for: **fast prototyping**. I'd rather validate an idea with a working demo in days than theorize for weeks. It keeps iteration with clients tight, cheap, and grounded in what actually works.",
      "A significant part of my day-to-day is **cross-timezone collaboration with international teams and clients**. Most of my work happens in written and spoken English.",
      "Currently at **Boeing**, I work on an agentic RAG project for regulated-industry document compliance. Before that, at **Lomin**, I optimized Transformer inference serving with NVIDIA Triton and built document-understanding systems for financial clients.",
      "I graduated from Konkuk University in 2022 with a B.S. in Electrical and Electronics Engineering, and spent a semester on exchange at the University of Agder in Norway.",
      "Outside of work, I live in Seoul with my Norwegian wife and our two cats.",
    ],
    skillGroups: [
      { label: "Languages", items: ["Python", "C++", "TypeScript"] },
      {
        label: "Databases",
        items: ["PostgreSQL", "Qdrant", "Redis"],
      },
      {
        label: "ML Frameworks",
        items: ["PyTorch", "LangChain", "Transformers", "MLflow"],
      },
      {
        label: "Hardware Optimization",
        items: ["NVIDIA Triton", "OpenVINO", "ONNX Runtime", "Quantization"],
      },
      {
        label: "Backend & Application",
        items: ["FastAPI", "Streamlit"],
      },
      {
        label: "Infrastructure & Automation",
        items: [
          "Prefect",
          "Kubernetes",
          "Docker",
          "Helm",
          "GitLab CI/CD",
          "ArgoCD",
          "Git",
          "Linux",
        ],
      },
      {
        label: "Observability & Metrics",
        items: ["Grafana", "Prometheus", "KPI tracking"],
      },
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
- Built it as a dedicated **retrieval service on Qdrant**, then extended it into a **generation app** consuming the retrieval layer as an internal API.
- Built a **hybrid search** pipeline on **Qdrant** (sparse + dense) from scratch, outperforming a dense-only configuration on MRR across a 200-query evaluation set for domain-specific technical terminology.
- Tuned Qdrant indexing and payload filtering to hold **p95 retrieval latency under 1000 ms on CPU-only infrastructure**.
- **CPU-only embedding serving.** The embedding stage ran on CPU only (the downstream GPU-hosted LLM was managed separately). I sustained throughput with **BentoML** dynamic batching + **ONNX Runtime** + quantization on CPU.
- Stood up a **Prometheus & Grafana** monitoring stack for the retrieval service, plus a custom **Postgres-backed KPI tracker** (CTR, query quality, adoption, latency SLOs) visualized in Grafana.
- Delivered a user-friendly interface with **Streamlit** and **React** for compliance owners generating regulator-ready reports.

**LLM Applications & Internal Tooling**

- Built an **internal code-review LLM bot** that lets engineers chat with an LLM directly on merge requests: code review, summarization, and Q&A inside the review flow.
- Shipped an **MCP (Model Context Protocol) server** exposing in-house tools and data sources to LLM agents through a standard interface.
- Built a **complex PDF parser** that extracts document layout via few-shot prompting over (v)LLM APIs; it now powers the data-ingestion pipeline for the compliance RAG system and other internal tools.

**MLOps & Backend Automation**

- Implemented a **GitOps** deployment flow with **ArgoCD** and **OpenShift**, reducing deployment cycles from **1 hour to 10 minutes**.
- Developed a fault-tolerant **Prefect** orchestration layer, automating data ingestion and inference pipelines for industrial predictive maintenance.
- Eliminated **~8 hours of manual weekly labor** by building an automated PDF-generation backend that converts raw telemetry into stakeholder-ready reports via FastAPI.
- Built an **internal ML artifact registry on GitLab** for version-controlling AI project artifacts (models, datasets, and training snapshots).

**Internal ML Training Framework**

- Developed a scalable deep-learning training framework enabling efficient AI model development across classical ML, deep learning, and RL.
- Reduced redundant model-development effort by designing a reusable framework for both AI and non-AI engineers.
- Built on **Ray** & **PyTorch Lightning**; integrated with the in-house MLOps stack for seamless deployment.`,
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
          content: `**Inference & Serving Optimization**

- Architected a high-throughput serving layer using **NVIDIA Triton**, implementing KV-caching and quantization that accelerated Transformer inference by **20%**.
- Engineered a multi-modal **Table Extraction** system for financial documents, improving **F1 by 15%** and deploying it for enterprise clients.

**Retrieval & Fine-tuning**

- Developed a **Document Understanding (DU)** framework, building specialized data pipelines for graph-based augmentation and efficient dataset curation.

**Clients & Projects**

- **Key clients:** Delivered ML solutions for Kyobo Life, Lina Life, Shinhan Asset Trust, and KIPO.
- **PoC initiatives:** Led ML-driven PoC projects for Shinhan Asset Trust, Samsung Fire & Marine Insurance, Hanwha Life, Samsung Life, and KB Insurance.`,
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
          content: `- Collaborated with local and international teams to analyze the performance of deep learning models on Intel hardware.
- Optimized [OpenVINO](https://www.intel.com/content/www/us/en/developer/tools/openvino-toolkit/overview.html) components for Intel integrated GPUs, resolving **5+ major performance issues** to enhance inference efficiency.`,
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
      project: "[GPU] Fix issue of prepare_output, OpenVINO",
      subtitle: "openvinotoolkit/openvino#7783",
      url: "https://github.com/openvinotoolkit/openvino/pull/7783",
      date: "Oct 2021",
      content:
        "Fixed a GPU-path issue in `prepare_output` during my Software Engineer Internship at Intel, strengthening correctness for Intel-integrated-GPU inference.",
    },
  ] as OpenSourceEntry[],

  sideProjects: {
    intro:
      "Less work, more me. The apps I'm building for fun, the things I do off-screen, and the people I share them with. Most of what's below I do with my wife, while the two cats supervise.",
    projects: [
      {
        slug: "preprep",
        title: "PrePrep",
        subtitle: "an interview prep app I'm building",
        date: "Started March 2026",
        content: `In high school, my favorite subject was math, and the best part wasn't solving problems. It was explaining them to friends until they finally got it. For a while I wanted to be a math teacher.

I didn't go that route, but the urge to help people learn never really left. PrePrep is where it landed.

It's a tech interview training app. You pick topics, it picks questions based on what you're weakest at (SM-2 spaced repetition), and it tracks how you're improving. Scenario questions with real code snippets, timed 10-question challenges with a leaderboard, a 30-minute mock interview mode, per-option explanations so you can see why each choice is right or wrong, streaks, badges, and a small companion (a dragon, a plant, or an RPG hero) that levels up alongside you.

It's actually two repos:

- **preprep** is the app itself: Next.js 16, React 19, Tailwind, FastAPI, Postgres, Google sign-in, Docker Compose.
- **dataprep** is the content pipeline: a knowledge graph with 451 nodes across 40 subjects (Python and Kubernetes, but also Korean history and chemistry) and an LLM-backed generator that watches for coverage gaps and fills them. Around 2,500 questions so far.

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

**My approach: the "classic" path.** A fine-tuned CNN classifier, with a separate tumor detector for WSIs.

- Only 25 TMAs in training, so I mined tumor-heavy tiles out of the WSIs (using the organizers' supplemental tumor masks) and used them as TMA-like training samples: >70% tumor pixels for training, 30-70% for validation.
- Fine-tuned \`maxvit_tiny_tf_512\` on those tiles to predict the subtype.
- **TMA inference:** tile into 512×512 patches, classify each, majority-vote the final subtype.
- **WSI inference:** a smaller tumor/non-tumor classifier runs first on downsized thumbnails. No-tumor thumbnails get labeled "Other"; tumor thumbnails feed the main classifier and majority-vote.
- StainNet color normalization (popular for cross-hospital pathology generalization) underperformed simple normalization and was dropped.

Full writeup [on Kaggle](https://www.kaggle.com/competitions/UBC-OCEAN/writeups/jinho-park-28th-solution).

**What the top solutions did differently.** Most winning teams framed this as a **Multiple Instance Learning (MIL)** problem instead. The idea: a slide is a "bag of patches", and the model learns to pick which patches matter. Nobody fine-tunes a classifier on pixels. You run a frozen **pathology foundation model** (a big ViT pretrained with self-supervision on millions of pathology tiles) to turn each patch into a fixed-size feature vector, then train a cheap MIL classifier on top of those vectors. Since the foundation model already knows what pathology looks like, the classifiers on top can stay tiny and iterate fast.

**1st place, [Owkin](https://www.kaggle.com/competitions/UBC-OCEAN/discussion/465908):**

- [Phikon](https://huggingface.co/owkin/phikon), Owkin's pathology ViT-Base (iBOT-pretrained on 40M TCGA tiles), pre-computed a 768-dim embedding per patch once.
- Ensemble of **50 Chowder MIL models** (Owkin's own MIL architecture). Chowder is sensitive to initialization; ensembling was the stabilizer.
- **Outlier detection:** a threshold on the entropy of ensemble predictions. High entropy (the ensemble disagreed) got labeled "Other". One line of code, took their public-LB score from 0.59 to 0.64.
- Extra bump: further iBOT-fine-tuned Phikon on the competition's own patches.

**7th place, [m1dsolo](https://github.com/jinhopark8345/UBC-OCEAN-7th):**

- Same recipe (frozen pathology backbone + MIL on top), different cast.
- **Two feature extractors:** [CTransPath](https://github.com/Xiyue-Wang/TransPath) (pathology-specific Swin Transformer, MIA 2022) and a ViT-S/16 pretrained on pathology with [LunitDINO](https://github.com/lunit-io/benchmark-ssl-pathology) (CVPR 2023).
- **Two MIL models:** [DSMIL](https://github.com/binli123/dsmil-wsi) (Dual-Stream MIL, CVPR 2021) and [Perceiver](https://github.com/cgtuebingen/DualQueryMIL) (from DualQueryMIL, BMVA 2023).
- Final ensemble of 4 combinations: {CTransPath, ViT-S/16} × {DSMIL, Perceiver}.

**Takeaways I'm still thinking about:**

- Domain-specific foundation models change the shape of the problem. My ImageNet-pretrained backbone had to learn pathology from scratch. A frozen Phikon or CTransPath embedding is already most of the way there.
- Pre-compute embeddings once, iterate cheaply on classifiers. Most of my three months went into fine-tuning a backbone; the winners spent theirs on modeling choices over frozen features.
- Multiple Instance Learning is the natural framing for WSI. Treat the slide as a bag of patches and let the model pick which ones matter, instead of hand-engineering a tumor gate the way I did.
- Entropy-based outlier detection generalizes better than my thumbnail-gate heuristic, and it's simpler.
- Next time I touch this kind of problem, I'd start with a pathology foundation model + MIL + ensemble before writing a single line of fine-tuning code.`,
      },
    ] as SideProject[],
    interests: [
      {
        title: "Productivity and personal knowledge management",
        content:
          "How to get more done, and how to make the things I learn actually stick. It's the reason I got into Emacs years ago, and it turns out PrePrep scratches the same itch, I just didn't see the connection until I was already building it. Active learning beats reading-and-forgetting. Honest caveat: I've spent more hours customizing Emacs than it's probably ever saved me, and I wouldn't recommend it to anyone who hasn't already fallen into that rabbit hole. No regrets though.",
      },
      {
        title: "Investment",
        content:
          "Markets, companies, how money and capital actually move. Feels like picking up a new school subject, and I like having one of those again. Real motivation underneath: you don't need to be rich, but not having money when you need it is brutal. I'd rather stay ahead of it.",
      },
      {
        title: "AI",
        content:
          "Running [OpenClaw](https://openclaw.ai/) locally against [Qwen3.5-27B](https://huggingface.co/Qwen/Qwen3.5-27B) on a single 3090, didn't know that was possible with decent inference speed. The reasoning isn't Gemini or Opus sharp, but it's close enough to be genuinely useful, which is wild for a local open-weights model. I've had a few conversations with it that genuinely surprised me, might share one here sometime. I love talking about AI and where it's headed, though my wife reminds me to check if the other person still wants to hear about it.",
      },
    ] as Interest[],
    dailyDrivers: [
      { name: "Emacs" },
      { name: "i3wm" },
      { name: "Ubuntu", detail: "desktop" },
      { name: "MacBook Pro 16\" M3", detail: "personal laptop" },
    ] as Hobby[],
    hobbies: [
      { name: "Swimming" },
      { name: "Climbing", detail: "indoor mostly" },
      { name: "Boxing" },
      { name: "Running" },
      { name: "Snowboarding" },
      { name: "Watching movies" },
      { name: "Board games", detail: "lately One Piece card game" },
      { name: "Playing with our cats" },
    ] as Hobby[],
  },
};

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

export type Hobby = {
  name: string;
  detail?: string;
};

export const resume = {
  name: "Jinho Park",
  role: "AI Application Engineer",
  location: "Seoul, South Korea",
  browserTitle: "Jinho Park — AI Application Engineer",
  description:
    "Jinho Park — AI Application Engineer. Information Retrieval, Agentic RAG, vector search, MLOps.",

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
      "Currently at **Boeing**, I work on a FAA-compliance agentic RAG project. Before that, at **Lomin**, I optimized Transformer inference serving with NVIDIA Triton and built document-understanding systems for financial clients.",
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
          content: `**Advanced Information Retrieval** — *Agentic RAG for aviation regulatory compliance*

- Architected a high-precision **Agentic RAG** system that cross-references technical aviation reports against regulatory frameworks through an agentic loop.
- Built it as a dedicated **retrieval service on Qdrant**, then extended it into a **generation app** consuming the retrieval layer as an internal API.
- Built a **hybrid search** pipeline on **Qdrant** (sparse + dense) from scratch, outperforming a dense-only configuration on MRR across a 200-query evaluation set for domain-specific technical terminology.
- Tuned Qdrant indexing and payload filtering to hold **p95 retrieval latency under 1000 ms on CPU-only infrastructure**.
- **CPU-only embedding serving.** The embedding stage ran on CPU only (the downstream internal LLM ran on GPU, managed by a separate team). I sustained throughput with **BentoML** dynamic batching + **ONNX Runtime** + quantization on CPU.
- Stood up a **Prometheus & Grafana** monitoring stack for the retrieval service, plus a custom **Postgres-backed KPI tracker** (CTR, query quality, adoption, latency SLOs) visualized in Grafana.
- Delivered a user-friendly interface with **Streamlit** and **React** for compliance owners generating regulator-ready reports.

**LLM Applications & Internal Tooling**

- Built a **GitLab merge-request bot** that lets engineers chat with the internal LLM directly on MRs — code review, summarization, and Q&A inside the review flow.
- Shipped an **MCP (Model Context Protocol) server** exposing internal tools and data sources to LLM agents through a standard interface.
- Built a **complex PDF parser** that extracts document layout via few-shot prompting over (v)LLM APIs; it now powers the data-ingestion pipeline for the compliance RAG system and other internal tools.

**MLOps & Backend Automation**

- Implemented a **GitOps** deployment flow with **ArgoCD** and **OpenShift**, reducing deployment cycles from **1 hour to 10 minutes**.
- Developed a fault-tolerant **Prefect** orchestration layer, automating data ingestion and inference pipelines for aircraft predictive maintenance.
- Eliminated **~8 hours of manual weekly labor** by building an automated PDF-generation backend that converts raw telemetry into stakeholder-ready reports via FastAPI.
- Built **gitlab-model-registry**, an internal tool for version-controlling AI project artifacts — models, datasets, and training snapshots — on top of GitLab.

**Boeing AI Factory**

- Developed a scalable deep-learning training framework enabling efficient AI model development across classical ML, deep learning, and RL.
- Reduced redundant model-development effort by designing a reusable framework for both AI and non-AI engineers.
- Built on **Ray** & **PyTorch Lightning**; integrated with Boeing's MLOps stack (ClearML, model hub, dataset hub) for seamless deployment.`,
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
          name: "Software Engineer Intern — OpenVINO Korea",
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
      title: "Silver Medal — UBC Ovarian Cancer Subtype Classification",
      subtitle: "Kaggle",
      date: "Jan 2024",
      url: "https://www.kaggle.com/certification/competitions/jinho8345/UBC-OCEAN",
      content:
        "Ranked **28 of 1,724** participants (top 2%) in the UBC Ovarian Cancer Subtype Classification and Outlier Detection (UBC-OCEAN) competition.",
    },
    {
      title: "2nd Prize — College Student Papers & Capstone Design Contest",
      subtitle: "Korean Institute of Broadcast and Media Engineers",
      date: "Nov 2021",
      content:
        'Paper: [*"Further Optimize MobileNetV2 with Channel-wise Squeeze and Excitation."*](https://koreascience.kr/article/CFKO202115161202726.pdf)',
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
      project: "[GPU] Fix issue of prepare_output — OpenVINO",
      subtitle: "openvinotoolkit/openvino#7783",
      url: "https://github.com/openvinotoolkit/openvino/pull/7783",
      date: "Oct 2021",
      content:
        "Fixed a GPU-path issue in `prepare_output` during my Software Engineer Internship at Intel, strengthening correctness for Intel-integrated-GPU inference.",
    },
  ] as OpenSourceEntry[],

  sideProjects: {
    intro:
      "Outside of work, I build small things for myself and spend time off-screen.",
    projects: [
      {
        slug: "project-1",
        title: "(stub) Project #1",
        subtitle: "replace me",
        content:
          "A short description of what you're building, why, and where it lives.",
      },
      {
        slug: "project-2",
        title: "(stub) Project #2",
        subtitle: "replace me",
        content:
          "A short description of what you're building, why, and where it lives.",
      },
    ] as SideProject[],
    hobbies: [
      { name: "(stub) Hobby 1", detail: "replace me" },
      { name: "(stub) Hobby 2" },
    ] as Hobby[],
  },
};

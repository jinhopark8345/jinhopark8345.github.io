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
  jobs: Job[];
};

export type EducationEntry = {
  title: string;
  school: string;
  schoolUrl?: string;
  date: string;
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

export const resume = {
  name: "Jinho Park",
  role: "AI Application Engineer",
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
      "AI Application Engineer focused on Information Retrieval and scalable backend systems — vector search, Agentic RAG, latency optimization, and retrieval precision. Currently at Boeing, previously at Lomin.",
    resumeUrl:
      "https://docs.google.com/document/d/1ogNeHihxPBMvvwz9sR3krgmYtRzWo8DYX71gqit5n0I/edit?usp=sharing",
  },

  about: {
    paragraphs: [
      "I'm an AI Application Engineer based in Seoul, focused on Information Retrieval and scalable backend systems. My day-to-day is building **Agentic RAG** systems, tuning **hybrid vector search**, squeezing latency out of retrieval pipelines, and automating ML workflows with **Prefect, Kubernetes, and GitOps**.",
      "Currently a Machine Learning Engineer at **Boeing**, where I work on FAA-compliance RAG and predictive maintenance pipelines. Before that, at **Lomin**, I optimized Transformer inference serving with NVIDIA Triton and built document-understanding systems for financial clients.",
      "I graduated from Konkuk University in 2022 with a B.S. in Electrical and Electronics Engineering, and spent a semester on exchange at the University of Agder in Norway.",
    ],
    skills: [
      "Python",
      "C++",
      "PyTorch",
      "LangChain",
      "Qdrant",
      "FastAPI",
      "Redis",
      "PostgreSQL",
      "Kubernetes (OpenShift)",
      "ArgoCD",
      "Prefect",
      "MLflow",
      "NVIDIA Triton",
      "ONNX Runtime",
      "OpenVINO",
      "Grafana",
      "Prometheus",
    ],
  },

  experience: [
    {
      company: "Boeing",
      companyUrl: "https://www.boeing.com/",
      jobs: [
        {
          name: "Machine Learning Engineer",
          date: "Jan 2024 – present",
          info: "Information Retrieval & MLOps",
          content: `**Information Retrieval**
- Architected an Agentic RAG system for FAA compliance workflows, improving MRR by **7%** on domain-specific technical terminology.
- Implemented hybrid search on Qdrant while keeping **p95 retrieval latency under 500 ms**.
- Deployed embedding models via BentoML with ONNX Runtime and quantization for efficient inference.
- Established Prometheus & Grafana monitoring with custom KPI tracking for retrieval quality and system health.

**MLOps & Backend Automation**
- Reduced deployment cycles from **1 hour to 10 minutes** via ArgoCD and OpenShift GitOps.
- Built Prefect orchestration for data ingestion and predictive maintenance pipelines.
- Automated PDF report generation with a FastAPI backend, eliminating **~8 hours of manual work per week**.`,
        },
      ],
    },
    {
      company: "Lomin",
      companyUrl: "https://lomin.ai/",
      jobs: [
        {
          name: "Machine Learning Engineer",
          date: "May 2022 – Aug 2023",
          info: "Inference optimization & document understanding at a document-AI startup.",
          content: `**Inference & Serving Optimization**
- Architected a high-throughput NVIDIA Triton serving layer with KV-caching and quantization, accelerating Transformer inference by **20%**.
- Engineered multi-modal table-extraction systems, improving F1 by **15%** for financial-services clients.

**Retrieval & Fine-tuning**
- Developed a Document Understanding framework with graph-based augmentation and dataset curation pipelines.`,
        },
      ],
    },
    {
      company: "Intel",
      companyUrl: "https://www.intel.com/",
      jobs: [
        {
          name: "Software Engineer Intern — OpenVINO Korea",
          date: "Aug 2021 – Feb 2022",
          info: "Deep learning performance engineering on Intel integrated GPUs.",
          content: `- Collaborated with local and international teams to analyze the performance of deep learning models on Intel hardware.
- Optimized OpenVINO components for Intel integrated GPUs, resolving **5+ major performance issues** to enhance inference efficiency.`,
        },
      ],
    },
  ] as ExperienceEntry[],

  education: [
    {
      title: "B.S., Electrical and Electronics Engineering",
      school: "Konkuk University",
      schoolUrl: "https://www.konkuk.ac.kr/do/Index.do",
      date: "Mar 2015 – Feb 2022",
      content: `Bachelor's degree in Electrical and Electronics Engineering.

**Capstone project** — *Further Optimizing MobileNetV2 with Channel-wise Squeeze and Excitation* (🥈 2nd Prize, Korean Institute of Broadcast and Media Engineers, 2021).`,
    },
    {
      title: "Exchange Student, Computer Science",
      school: "University of Agder",
      schoolUrl: "https://www.uia.no/en",
      date: "Aug 2017 – Jan 2018",
      content:
        "One-semester exchange program in Agder, Norway, studying Computer Science coursework.",
    },
  ] as EducationEntry[],

  achievements: [
    {
      title: "Silver Medal — UBC Ovarian Cancer Subtype Classification",
      subtitle: "Kaggle",
      date: "Jan 2024",
      url: "https://www.kaggle.com/competitions/UBC-OCEAN",
      content:
        "Ranked **28 of 1,724** participants (top 2%) in the UBC Ovarian Cancer Subtype Classification and Outlier Detection competition.",
    },
    {
      title: "2nd Prize — College Student Papers & Capstone Design Contest",
      subtitle: "Korean Institute of Broadcast and Media Engineers",
      date: "Nov 2021",
      content:
        'Paper: *"Further Optimizing MobileNetV2 with Channel-wise Squeeze and Excitation."*',
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      subtitle: "Linux Foundation",
      date: "Dec 2024",
      url: "https://www.cncf.io/certification/cka/",
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "Coursera · deeplearning.ai",
      date: "May 2019",
      url: "https://www.coursera.org/specializations/deep-learning",
      content:
        "Also completed *Machine Learning* (Stanford, Feb 2019) and *Nand to Tetris* (Jan 2021).",
    },
  ] as CardEntry[],

  openSource: [
    {
      project: "OpenVINO",
      subtitle: "openvinotoolkit/openvino",
      date: "Aug 2021 – Feb 2022",
      url: "https://github.com/openvinotoolkit/openvino",
      content: `Contributed to Intel's OpenVINO deep-learning inference toolkit as a Software Engineer Intern on the OpenVINO Korea team.

- Collaborated with local and international teams to analyze the performance of deep learning models on Intel hardware.
- Optimized OpenVINO components for Intel integrated GPUs, resolving **5+ major performance issues** to enhance inference efficiency.`,
    },
  ] as OpenSourceEntry[],
};

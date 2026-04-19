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
      "AI Application Engineer focused on Information Retrieval and scalable backend systems — vector search, Agentic RAG, latency optimization, and retrieval precision. Currently at Boeing, previously at Lomin.",
    resumeUrl:
      "https://docs.google.com/document/d/1ogNeHihxPBMvvwz9sR3krgmYtRzWo8DYX71gqit5n0I/edit?usp=sharing",
  },

  about: {
    paragraphs: [
      "I'm an AI Application Engineer based in Seoul, focused on Information Retrieval and scalable backend systems. My day-to-day is building **Agentic RAG** systems, tuning **hybrid vector search**, squeezing latency out of retrieval pipelines, and automating ML workflows with **Prefect, Kubernetes, and GitOps**.",
      "Currently a Machine Learning Engineer at **Boeing**, where I work on FAA-compliance RAG and Boeing's AI training framework. Before that, at **Lomin**, I optimized Transformer inference serving with NVIDIA Triton and built document-understanding systems for financial clients.",
      "I graduated from Konkuk University in 2022 with a B.S. in Electrical and Electronics Engineering, and spent a semester on exchange at the University of Agder in Norway.",
    ],
    skillGroups: [
      { label: "Languages", items: ["Python", "C++"] },
      {
        label: "ML & Deep Learning",
        items: ["PyTorch", "Transformers", "ONNX", "OpenVINO", "NetworkX"],
      },
      {
        label: "Infrastructure & DevOps",
        items: ["OpenShift", "Kubernetes", "Docker", "Git", "CMake", "Linux"],
      },
      {
        label: "CS Foundations",
        items: ["Data structures", "Graph algorithms"],
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
          name: "Machine Learning Engineer",
          date: "Jan 2024 – present",
          info: "ML Team · Seoul, South Korea",
          content: `**Information Retrieval (IR) System for Boeing Problem Solving Model (BPSM)**

- **Deployment & Infrastructure:** Deployed the solution on OpenShift, enhancing scalability and reliability.
- **Backend & API Development:** Designed and implemented a FastAPI-based backend for efficient document retrieval and processing.
- **Frontend Development:** Built a user-friendly interface using Streamlit and React, improving accessibility for Boeing CAP (Corrective Action Plan) owners in generating FAA-compliant reports.

**Boeing AI Factory**

- Developed a scalable deep learning training framework, enabling efficient AI model development across classical ML, deep learning, and RL.
- Reduced redundant model development efforts by designing a reusable framework for both AI and non-AI engineers.
- Built on **Ray** & **PyTorch Lightning** and integrated with Boeing's MLOps stack (ClearML, model hub, dataset hub) for seamless deployment.`,
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
          content: `- **Encoder–Decoder Model Optimization & Conversion:** Improved inference speed of encoder–decoder Transformer models by **20%** through caching and quantization, without memory trade-offs.
- **Table Information Extraction System:** Designed and implemented a multi-modal ML framework that improved table information extraction F1 score by **15%**.
- **Document Understanding Model Pre-training:** Developed a document understanding (DU) framework and curated datasets for DU model pre-training and graph-based augmentations.
- **Key Clients:** Delivered ML solutions for Kyobo Life, Lina Life, Shinhan Asset Trust, and KIPO.
- **Proof of Concept (PoC) Initiatives:** Led ML-driven PoC projects for Shinhan Asset Trust, Samsung Fire & Marine Insurance, Hanwha Life, Samsung Life, and KB Insurance.`,
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
};

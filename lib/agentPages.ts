import type { Metadata } from "next";
import { company } from "@/lib/data";

export type AgentLink = { anchor: string; href: string };

export type AgentPage = {
  catalogId: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  title: string;
  heroLede: string;
  heroCta: { label: string; href: string };
  image: string;
  imageAlt: string;
  overview: string[];
  challengesIntro: string;
  challenges: { tag: string; title: string; body: string }[];
  definition: string[];
  benefits: [string, string][];
  deliverIncluded: string[];
  deliverExcluded: string[];
  techRows: { layer: string; role: string; useCase: string; benefit: string }[];
  techNote: string;
  industries: { label: string; body: string }[];
  steps: { title: string; desc: string }[];
  architecture: { role: string; nodes: string[] }[];
  architectureCaption: string;
  compliance: { label: string; desc: string }[];
  why: { idx: string; title: string; desc: string }[];
  example: { disclaimer: string; body: string[] };
  faqs: { q: string; a: string }[];
  queryVariants: string[];
  internalLinks: AgentLink[];
  externalLinks: AgentLink[];
  related: AgentLink[];
};

const ORIGIN = company.website.replace(/\/$/, "");
const BLOG_KNOWLEDGE_GAPS = "/blog/how-ai-agents-reduce-knowledge-gaps";

const SHARED_LINKS = {
  platform: { anchor: "our AI agent platform", href: "/platform" },
  integrations: {
    anchor: "integrations with your existing tools",
    href: "/integrations",
  },
  caseStudies: { anchor: "case studies", href: "/case-studies" },
  pricing: { anchor: "pricing", href: "/pricing" },
  blog: {
    anchor: "how AI agents reduce knowledge gaps (blog)",
    href: BLOG_KNOWLEDGE_GAPS,
  },
  cx: {
    anchor: "our Customer Experience Agents",
    href: "/services/customer-experience-agents",
  },
  cs: {
    anchor: "our Customer Service Agents",
    href: "/services/customer-service-agents",
  },
} as const;

export const customerExperiencePage: AgentPage = {
  catalogId: "ai-customer-agent",
  path: "/services/customer-experience-agents",
  metaTitle:
    "Customer Experience Agents | RAG-Grounded AI Support | CloudSwift",
  metaDescription:
    "Customer experience agents from CloudSwift resolve support queries instantly, stay on-brand, and escalate what they can't grounded in your real content.",
  category: "AI Agent Development",
  title: "Customer Experience Agents",
  heroLede:
    "Give your support team an AI agent that resolves real tickets, not just deflects them. CloudSwift builds RAG-grounded customer experience agents that stay on-brand and escalate what they cannot answer.",
  heroCta: {
    label: "Talk to us about your support workflow",
    href: "/contact",
  },
  image: "/images/cs/ai-services/ai-customersupport.webp",
  imageAlt:
    "Customer experience agent handling a support conversation with grounded answers and human escalation",
  overview: [
    "A customer experience agent works alongside your support team across chat, email, and voice. Unlike scripted chatbots, it uses your company's knowledge, documentation, past tickets, product data, and order systems. It understands the request, resolves it, or hands off to a human with full context.",
    "CloudSwift designs, builds, and connects this agent through integrations with your existing tools, so it behaves as an extension of your team rather than another add-on on the site. See how similar programs land in our case studies, and review pricing when you are ready to scope an engagement.",
    "Read how AI agents reduce knowledge gaps (blog) if the harder problem is documentation quality, not just ticket volume. Teams that also need internal answers for staff often pair this work with our AI agent platform when several agents must share tools and policy.",
  ],
  challengesIntro:
    "Support teams are asked to do more with the same headcount. Ticket volume rises with every product launch, while hiring rarely keeps pace. Wait times stretch, answers drift between agents, and the same questions burn people out.",
  challenges: [
    {
      tag: "Volume",
      title: "Tickets outgrow the team",
      body: "Each launch and each new customer adds repetitive work. An agent that cannot resolve the easy cases leaves humans stuck on password resets instead of the issues that need judgement.",
    },
    {
      tag: "Quality",
      title: "Answers drift by shift and channel",
      body: "Without a single source of truth, customers hear different versions of the same policy depending on who picks up the ticket.",
    },
    {
      tag: "Trust",
      title: "Bad automation costs more than no automation",
      body: "A looping chatbot or a confident wrong answer damages trust faster than a longer queue. Agent design matters as much as the decision to automate.",
    },
    {
      tag: "Handoff",
      title: "Escalations arrive without context",
      body: "When bots dump a customer on a human with no history, the customer repeats themselves and the agent starts from zero.",
    },
  ],
  definition: [
    "A customer experience agent is a specialised AI system that reads, understands, and responds to customer questions using your organisation's real data, not a fixed decision tree.",
    "It uses a large language model connected to your knowledge sources through retrieval (RAG), governed by rules about what it may do, and designed to escalate whenever confidence is low or the case needs judgement, approval, or empathy.",
    "CloudSwift builds it as a custom system for your workflows. Grounding follows the same retrieval-augmented generation pattern described in Microsoft's RAG documentation for Azure AI Search, and in Azure OpenAI on your data, so answers stay tied to content you control.",
  ],
  benefits: [
    [
      "Faster resolution of high-volume questions",
      "Human agents spend their time on complex or sensitive cases instead of the same ten tickets.",
    ],
    [
      "Consistent, on-brand answers",
      "One source of truth, so policy and product facts do not change between agents, shifts, or channels.",
    ],
    [
      "24/7 coverage without 24/7 headcount",
      "The agent stays available across time zones. Overnight volume no longer has to wait for the morning queue.",
    ],
    [
      "Clear escalation paths",
      "Nothing sits with an agent that should not handle it. Low confidence, disputes, and security issues go to a human with the full thread.",
    ],
    [
      "Visibility into gaps",
      "You see which questions the agent resolves, where it hands off, and where your knowledge base is thin.",
    ],
  ],
  deliverIncluded: [
    "Discovery and workflow mapping of your current support process",
    "Custom customer experience agent design linked to your knowledge base, ticketing system, and relevant internal tools",
    "Retrieval setup so answers are grounded in your documentation and data",
    "Escalation logic and human handoff design",
    "Integration with your existing support platform",
    "Testing, quality assurance, and staged rollout",
    "Analytics and monitoring so you can see how the agent performs",
  ],
  deliverExcluded: [
    "Ongoing content writing for your knowledge base, unless scoped separately",
    "Staffing or managing your human support team",
    "Guarantees of specific deflection or resolution rates before we assess your ticket data",
  ],
  techRows: [
    {
      layer: "Large language models",
      role: "Understand and generate natural language",
      useCase: "Interpreting intent and drafting replies",
      benefit: "Natural conversation instead of rigid scripts",
    },
    {
      layer: "Retrieval-augmented generation (RAG)",
      role: "Grounds responses in company data",
      useCase: "Pulling answers from documents, tickets, and product data",
      benefit: "Fewer invented or off-brand answers",
    },
    {
      layer: "Helpdesk / CRM integration",
      role: "Connects the agent to your support tools",
      useCase: "Reading and updating tickets, orders, and accounts",
      benefit: "Works inside your workflow, not beside it",
    },
    {
      layer: "Analytics and monitoring",
      role: "Tracks performance and outcomes",
      useCase: "Volume handled, escalations, and knowledge gaps",
      benefit: "A system you can see into and improve",
    },
  ],
  techNote:
    "The model and RAG layers handle understanding and accuracy. Integration and analytics make sure the agent fits how your team already works.",
  industries: [
    {
      label: "SaaS",
      body: "Ticket-heavy technical questions: setup, configuration, and troubleshooting the agent can resolve without a human on every thread.",
    },
    {
      label: "Retail / ecommerce",
      body: "Order status, returns, and seasonal spikes — high volume, well-structured intents, a natural fit for RAG-grounded support.",
    },
    {
      label: "Finance",
      body: "Structured, high-compliance questions with strict escalation rules designed in from the start.",
    },
    {
      label: "Logistics",
      body: "Shipment tracking and delivery questions at scale, where repetition is the burden on the human team.",
    },
  ],
  steps: [
    {
      title: "Discovery",
      desc: "Map current support workflows, ticket categories, and systems.",
    },
    {
      title: "Assessment",
      desc: "Read ticket data to see what can be automated versus what still needs a human.",
    },
    {
      title: "Design",
      desc: "Define knowledge sources, escalation rules, and conversation flows.",
    },
    {
      title: "Development",
      desc: "Build the agent and connect it to your knowledge base and tools.",
    },
    {
      title: "Integration",
      desc: "Connect helpdesk, CRM, and the internal systems the agent must act on.",
    },
    {
      title: "Testing",
      desc: "Quality assurance against real ticket scenarios before customers see it.",
    },
    {
      title: "Deployment",
      desc: "Staged rollout, starting with lower-risk ticket categories.",
    },
    {
      title: "Optimization",
      desc: "Tune from live conversation data and escalation patterns.",
    },
  ],
  architecture: [
    { role: "Customer", nodes: ["Chat", "Email", "Voice"] },
    { role: "Channel", nodes: ["Channel layer"] },
    { role: "Agent", nodes: ["Conversation logic", "Routing", "Escalation rules"] },
    { role: "Model", nodes: ["LLM — understanding and generation"] },
    { role: "Retrieval", nodes: ["RAG over your knowledge sources"] },
    {
      role: "Sources",
      nodes: ["Docs", "Past tickets", "Product and order data"],
    },
    { role: "Security", nodes: ["Access controls", "Data handling rules"] },
    { role: "Analytics", nodes: ["Monitoring", "Reporting", "Gap detection"] },
    { role: "Handoff", nodes: ["Human escalation with full context"] },
  ],
  architectureCaption:
    "The customer never talks to a naked model. Channels, policy, retrieval, and security sit in front of generation, and a human path sits at the end.",
  compliance: [
    {
      label: "Access control",
      desc: "The agent only reads the data you configure — documentation, ticket history, and specified systems.",
    },
    {
      label: "Audit logging",
      desc: "Conversations and escalations can be logged so support leadership can review what the agent did and why.",
    },
    {
      label: "Retention",
      desc: "Data retention rules are configurable to match how you already handle support records.",
    },
    {
      label: "Escalation governance",
      desc: "Low-confidence, regulated, or sensitive intents go to a human instead of a guessed answer.",
    },
  ],
  why: [
    {
      idx: "01",
      title: "Your workflows, not a generic bot",
      desc: "We design around the systems and ticket patterns you actually have, instead of asking you to reshape the helpdesk around a product.",
    },
    {
      idx: "02",
      title: "Honest about what can be automated",
      desc: "Discovery includes a frank read of ticket volume so you know what to expect before build starts.",
    },
    {
      idx: "03",
      title: "A system your team can see into",
      desc: "Monitoring and gap reports are part of delivery, not an afterthought dashboard.",
    },
    {
      idx: "04",
      title: "RAG-grounded, then escalated",
      desc: "Answers come from your content. When they cannot, the handoff carries the full thread.",
    },
  ],
  example: {
    disclaimer:
      "This example is illustrative and does not represent a specific customer engagement.",
    body: [
      "A mid-sized SaaS company is flooded with “how do I reset my password” and “where's my invoice” tickets. They are repetitive and low complexity, but they still consume a small support team.",
      "A customer experience agent connected to the help centre and billing system can resolve those directly, and automatically escalate anything involving a security concern or a billing dispute to a live agent with the conversation attached.",
      "The human team spends its time on the harder cases instead of answering the same questions again.",
    ],
  },
  faqs: [
    {
      q: "What is a customer experience agent?",
      a: "An AI system that understands and responds to customer support conversations using your company's real data, and escalates to a human when needed.",
    },
    {
      q: "How is this different from a chatbot?",
      a: "A traditional chatbot follows scripted decision trees. An AI agent understands natural language and retrieves live answers from your knowledge sources.",
    },
    {
      q: "Will it give customers wrong information?",
      a: "Grounding the agent in your documentation through RAG reduces that risk. Escalation rules send low-confidence answers to a human instead of guessing.",
    },
    {
      q: "What channels can it work across?",
      a: "Chat, email, and voice, depending on your support stack and what we scope.",
    },
    {
      q: "Does it replace my support team?",
      a: "No. It is designed to handle repetitive, high-volume questions so your team can focus on complex or sensitive cases.",
    },
    {
      q: "How long does implementation take?",
      a: "Timeline depends on ticket categories and systems. We scope it during discovery.",
    },
    {
      q: "What systems does it integrate with?",
      a: "Your existing helpdesk, CRM, and relevant internal tools, connected during the integration phase.",
    },
    {
      q: "How does escalation to a human work?",
      a: "The agent hands off with full conversation context when confidence is low, the request needs judgement, or your rules require a human.",
    },
    {
      q: "What data does the agent have access to?",
      a: "Only what you configure — documentation, ticket history, and specified systems — governed by access controls.",
    },
    {
      q: "Does it work with our existing knowledge base?",
      a: "Yes. That is the primary knowledge source it is built to retrieve from.",
    },
    {
      q: "Is a customer experience agent the same as a chatbot?",
      a: "No. A chatbot follows scripts. A customer experience agent — also called a customer service AI agent — understands natural language, retrieves grounded answers, and can act or escalate. That is what people mean by an AI agent for customer service.",
    },
    {
      q: "What does RAG-grounded AI support mean?",
      a: "Retrieval-augmented generation means replies are pulled from your real content, not invented from the model’s general training data. That is how CloudSwift keeps customer experience agents on-brand.",
    },
  ],
  queryVariants: [
    "customer experience agents",
    "customer service AI agent",
    "customer service AI",
    "customer service agent",
    "AI customer service agent",
    "AI agent for customer service",
    "AI agents for customer support",
    "RAG-grounded AI support",
    "AI powered customer service",
    "AI customer support",
  ],
  internalLinks: [
    SHARED_LINKS.cs,
    SHARED_LINKS.platform,
    SHARED_LINKS.integrations,
    SHARED_LINKS.caseStudies,
    SHARED_LINKS.pricing,
    SHARED_LINKS.blog,
  ],
  externalLinks: [
    {
      anchor: "Microsoft's RAG documentation for Azure AI Search",
      href: "https://learn.microsoft.com/azure/search/retrieval-augmented-generation-overview",
    },
    {
      anchor: "Azure OpenAI on your data",
      href: "https://learn.microsoft.com/azure/ai-foundry/openai/concepts/use-your-data",
    },
  ],
  related: [
    {
      anchor: "Enterprise Knowledge Base Agents",
      href: "/services/enterprise-knowledge-base-agents",
    },
    { anchor: "Enterprise AI Chatbots", href: "/ai-services/ai-chatbot-enterprise" },
    { anchor: "AI Use Case Discovery", href: "/ai-services/ai-usecase" },
    { anchor: "Workflow Automation Agents", href: "/ai-services/ai-workflow-agent" },
    { anchor: "Document Intelligence", href: "/ai-services/ai-doc-intelligence" },
    { anchor: "Multi-Agent Systems", href: "/ai-services/ai-multi-agent" },
  ],
};

export const enterpriseKnowledgePage: AgentPage = {
  catalogId: "ai-knowledge-agent",
  path: "/services/enterprise-knowledge-base-agents",
  metaTitle:
    "Enterprise Knowledge Base Agents | Agentic RAG for Internal Knowledge | CloudSwift",
  metaDescription:
    "CloudSwift's enterprise knowledge base agents use agentic RAG to answer employee questions from your internal documentation — accurately, and with governed access control.",
  category: "AI Agent Development",
  title: "Enterprise Knowledge Base Agents",
  heroLede:
    "Give every employee an AI agent that actually knows your company. CloudSwift's enterprise knowledge base agents use agentic RAG to answer from your internal documentation, with governed access control.",
  heroCta: {
    label: "Talk to us about your knowledge base",
    href: "/contact",
  },
  image: "/images/cs/ai-services/internationknowledge.webp",
  imageAlt:
    "Enterprise knowledge base agent retrieving governed answers from internal documentation",
  overview: [
    "An enterprise knowledge base agent is an AI employees can query in ordinary language. It answers from the organisation's real internal knowledge — policies, documentation, past decisions, and product data — instead of inventing a reply.",
    "CloudSwift designs, builds, and integrates the agent, including access controls so people only see what they are allowed to see. It sits on top of the systems you already have, rather than replacing your wiki or document store.",
    "Teams often run this next to our Customer Experience Agents when customers and employees need the same source of truth. The agent connects through integrations with your existing tools, and you can review case studies and pricing when you want to see how an engagement is scoped. For the wider operating model, see our AI agent platform. Background on the knowledge problem is in how AI agents reduce knowledge gaps (blog).",
  ],
  challengesIntro:
    "In large organisations, knowledge is scattered across wikis, shared drives, ticketing systems, chat threads, and a few long-serving people. New hires take longer to ramp. Experienced staff answer the same questions again. Documents go stale until someone acts on the old version.",
  challenges: [
    {
      tag: "Findability",
      title: "Stores exist. Answers do not.",
      body: "Classic knowledge systems keep files without making them easy to use. Keyword search returns the wrong document, or ten documents and no decision.",
    },
    {
      tag: "Ramp",
      title: "New hires do not know where to look",
      body: "Onboarding depends on interrupting a mentor. The map of “where truth lives” is tribal, not documented.",
    },
    {
      tag: "Stale content",
      title: "Nobody notices until it hurts",
      body: "Policies drift. Product specs change. People still act on last year's page because search ranked it first.",
    },
    {
      tag: "Access",
      title: "A naive assistant over-shares",
      body: "An unconstrained model on an internal corpus is a permissions incident waiting to happen. Governance has to be designed in, not bolted on.",
    },
  ],
  definition: [
    "An enterprise knowledge base agent is built for a specific purpose: it is linked to your internal knowledge through retrieval, so answers come from what your organisation has actually documented, not from the open internet.",
    "In practice this uses agentic RAG — the agent decides what to search and how to combine sources. Where it helps, a knowledge graph can link related documents and decisions instead of treating each file in isolation.",
    "Access controls limit what each employee can see. Escalation flags gaps instead of guessing. That is the difference between an AI search box and a governed internal knowledge layer. The retrieval pattern aligns with Microsoft's guidance on retrieval-augmented generation and with Azure OpenAI on your data.",
  ],
  benefits: [
    [
      "Faster answers without interrupting a colleague",
      "Employees ask in plain language instead of hunting across five tools.",
    ],
    [
      "One current source of truth",
      "Everyone gets an answer grounded in the latest documentation you have connected.",
    ],
    [
      "Shorter time-to-productive for new hires",
      "People can ask the agent instead of waiting for a mentor to be free.",
    ],
    [
      "Governed access",
      "Sensitive material stays limited to the people who are allowed to see it.",
    ],
    [
      "Visible knowledge gaps",
      "If the agent cannot find an answer, that is a documentation task — not a hallucination.",
    ],
  ],
  deliverIncluded: [
    "Discovery and mapping of internal knowledge sources and access requirements",
    "Custom enterprise knowledge base agent design connected to documentation, wikis, and relevant systems",
    "Retrieval setup, including agentic RAG where it is useful, so answers are grounded in your content",
    "Access control and governance design that respects existing permissions",
    "Integration with internal tools such as your intranet, wiki, or collaboration platform",
    "Testing, QA, and staged rollout",
    "Analytics on usage and knowledge gaps",
  ],
  deliverExcluded: [
    "Ongoing authorship or maintenance of internal documentation, unless scoped separately",
    "Replacement of your existing content or document management system",
    "Guarantees of a specific adoption or accuracy percentage before we assess your knowledge base",
  ],
  techRows: [
    {
      layer: "Large language models",
      role: "Understand questions and generate answers",
      useCase: "Natural-language internal queries",
      benefit: "People ask normally instead of guessing keywords",
    },
    {
      layer: "Agentic RAG",
      role: "Grounds answers in internal documentation",
      useCase: "Pulling from wikis, policies, and past decisions",
      benefit: "Fewer invented answers; sources can be combined on purpose",
    },
    {
      layer: "Knowledge graph / relationship mapping",
      role: "Connects related documents and decisions",
      useCase: "Context an isolated file search would miss",
      benefit: "More complete answers across related policies",
    },
    {
      layer: "Access control / permissions",
      role: "Enforces who can see what",
      useCase: "Respecting existing document and system permissions",
      benefit: "Sensitive information is not exposed broadly",
    },
    {
      layer: "Analytics and monitoring",
      role: "Tracks usage and surfaces gaps",
      useCase: "Unanswered or low-confidence queries",
      benefit: "Shows where documentation needs work",
    },
  ],
  techNote:
    "Retrieval and reasoning replace static indexing. Governance is part of the stack, not a later add-on.",
  industries: [
    {
      label: "SaaS and technology",
      body: "Product documentation that changes with every release — the agent has to keep up, not freeze a snapshot.",
    },
    {
      label: "Finance",
      body: "Policy-heavy, compliance-sensitive knowledge. Strict access controls are part of the agent design.",
    },
    {
      label: "Manufacturing",
      body: "Technical and process documentation spread across teams, often still sitting in older knowledge systems.",
    },
    {
      label: "Professional services",
      body: "Case, policy, and precedent retrieval where governance matters as much as accuracy.",
    },
  ],
  steps: [
    {
      title: "Discovery",
      desc: "Identify internal knowledge sources, systems, and who needs access to what.",
    },
    {
      title: "Evaluation",
      desc: "Assess documentation quality and coverage so gaps are visible before build.",
    },
    {
      title: "Design",
      desc: "Specify sources, access rules, and how unanswered questions escalate.",
    },
    {
      title: "Build",
      desc: "Create the enterprise knowledge base agent and connect it to documentation and systems.",
    },
    {
      title: "Integration",
      desc: "Connect intranet, wiki, or collaboration platforms the team already uses.",
    },
    {
      title: "Testing",
      desc: "Run real internal questions and permission scenarios before launch.",
    },
    {
      title: "Deployment",
      desc: "Staged rollout, typically starting with one team or department.",
    },
    {
      title: "Optimization",
      desc: "Tune from usage data and the knowledge gaps the agent records.",
    },
  ],
  architecture: [
    { role: "Employee", nodes: ["Intranet", "Chat", "Collaboration tool"] },
    { role: "Channel", nodes: ["Channel layer"] },
    { role: "Agent", nodes: ["Query understanding", "Routing", "Gap detection"] },
    { role: "Model", nodes: ["LLM — understanding and generation"] },
    {
      role: "Retrieval",
      nodes: ["Agentic RAG", "Knowledge graph reasoning"],
    },
    {
      role: "Sources",
      nodes: ["Wikis", "Docs", "Policies", "Past decisions", "ECM systems"],
    },
    { role: "Security", nodes: ["Access controls", "Permissions enforcement"] },
    { role: "Analytics", nodes: ["Usage monitoring", "Knowledge gap detection"] },
    { role: "Handoff", nodes: ["Route to a subject-matter expert when unanswered"] },
  ],
  architectureCaption:
    "Employees query a governed stack: channel, agent, model, agentic RAG, sources, security, analytics, then a human expert if the corpus has no answer.",
  compliance: [
    {
      label: "Existing permissions",
      desc: "The agent honours the access controls already on your documents and systems.",
    },
    {
      label: "Query audit logging",
      desc: "Questions can be logged so security and knowledge teams can see what was asked and what was returned.",
    },
    {
      label: "Data governance",
      desc: "Retention and handling rules follow your organisation's requirements for internal content.",
    },
    {
      label: "Gap handling",
      desc: "Unanswered questions are flagged rather than filled with a guess.",
    },
  ],
  why: [
    {
      idx: "01",
      title: "Your access rules, not a search bar with an AI label",
      desc: "We start from the permissions and documentation you already have.",
    },
    {
      idx: "02",
      title: "A frank read of knowledge-base readiness",
      desc: "Gaps are visible before construction starts, so you are not surprised in week six.",
    },
    {
      idx: "03",
      title: "Unanswered questions become a backlog",
      desc: "You can see what the agent cannot answer and fix the corpus over time.",
    },
    {
      idx: "04",
      title: "Scoped to your systems",
      desc: "Each agent is tailored to your stack, permissions, and documentation — not a one-size-fits-all knowledge portal.",
    },
  ],
  example: {
    disclaimer:
      "This example is illustrative and does not represent a specific customer engagement.",
    body: [
      "Policies and product documentation live across a wiki, a shared drive, and years of chat threads. Employees lose time hunting, or they interrupt a colleague who has the answer in their head.",
      "An enterprise knowledge base agent connected to those sources can take a plain-language question — a policy detail, a product specification — and return a governed answer instead of a pile of files.",
      "Questions the agent cannot answer are recorded as documentation gaps. The archive becomes something people actually use.",
    ],
  },
  faqs: [
    {
      q: "What is an enterprise knowledge base agent?",
      a: "An AI system connected to your internal documentation and systems that gives employees accurate, governed answers to their questions.",
    },
    {
      q: "How is it different from enterprise content management software?",
      a: "Content management stores, organises, and version-controls documents. A knowledge agent sits on top of that layer and answers questions from it, using retrieval to find and combine relevant information.",
    },
    {
      q: "How is this different from internal search?",
      a: "It understands natural-language questions and returns a grounded answer, rather than a list of documents to sift through.",
    },
    {
      q: "Will it expose sensitive information to the wrong people?",
      a: "It is built with access controls that respect your existing permissions, so employees only see what they are authorised to see.",
    },
    {
      q: "What happens if it does not know an answer?",
      a: "It flags the gap rather than guessing. That also shows where your documentation needs work.",
    },
    {
      q: "Does it replace our wiki or document management system?",
      a: "No. It integrates with your existing systems rather than replacing them.",
    },
    {
      q: "How long does implementation take?",
      a: "Timeline depends on the number and complexity of knowledge sources, and is scoped during discovery.",
    },
    {
      q: "What is agentic RAG?",
      a: "Agentic RAG is retrieval where the agent decides what to search and how to combine sources, instead of running a single keyword lookup. That is how enterprise knowledge base agents answer from wikis, policies, and related documents together.",
    },
    {
      q: "Is this a knowledge base AI agent or enterprise search?",
      a: "A knowledge base AI agent returns a governed answer. Enterprise search returns a list of files. CloudSwift’s enterprise knowledge agents sit on top of your existing content, with access control.",
    },
  ],
  queryVariants: [
    "enterprise knowledge base agents",
    "enterprise knowledge agents",
    "agentic RAG",
    "RAG for enterprise knowledge",
    "RAG for enterprise knowledge base",
    "RAG for enterprise knowledge base agents",
    "AI knowledge agent",
    "knowledge base AI agent",
    "internal knowledge agent",
    "enterprise AI solutions for internal knowledge",
    "governed access control",
  ],
  internalLinks: [
    SHARED_LINKS.cx,
    SHARED_LINKS.platform,
    SHARED_LINKS.integrations,
    SHARED_LINKS.caseStudies,
    SHARED_LINKS.pricing,
    SHARED_LINKS.blog,
  ],
  externalLinks: [
    {
      anchor: "Microsoft's guidance on retrieval-augmented generation",
      href: "https://learn.microsoft.com/azure/search/retrieval-augmented-generation-overview",
    },
    {
      anchor: "Azure OpenAI on your data",
      href: "https://learn.microsoft.com/azure/ai-foundry/openai/concepts/use-your-data",
    },
  ],
  related: [
    {
      anchor: "Customer Experience Agents",
      href: "/services/customer-experience-agents",
    },
    { anchor: "AI Readiness Assessment", href: "/ai-services/ai-readiness" },
    { anchor: "Document Intelligence", href: "/ai-services/ai-doc-intelligence" },
    { anchor: "Enterprise AI Chatbots", href: "/ai-services/ai-chatbot-enterprise" },
    { anchor: "Multi-Agent Systems", href: "/ai-services/ai-multi-agent" },
  ],
};

export const AGENT_PAGES: AgentPage[] = [
  customerExperiencePage,
  enterpriseKnowledgePage,
];

export function getAgentPageByPath(path: string) {
  return AGENT_PAGES.find((p) => p.path === path);
}

export function getAgentPageByCatalogId(id: string) {
  return AGENT_PAGES.find((p) => p.catalogId === id);
}

export function agentPageMetadata(page: AgentPage): Metadata {
  const url = `${ORIGIN}${page.path}`;
  const ogImage = `${ORIGIN}${page.image}`;
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    keywords: page.queryVariants,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      title: page.metaTitle,
      description: page.metaDescription,
      siteName: company.name,
      images: [{ url: ogImage, alt: page.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

export function agentPageJsonLd(page: AgentPage) {
  const url = `${ORIGIN}${page.path}`;
  const orgId = `${ORIGIN}/#organization`;
  const siteId = `${ORIGIN}/#website`;
  const pageId = url;
  const serviceId = `${url}#service`;
  const faqId = `${url}#faq`;
  const howToId = `${url}#process`;
  const crumbsId = `${url}#breadcrumb`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: company.name,
        legalName: company.legalName,
        url: ORIGIN,
        logo: `${ORIGIN}${company.logo}`,
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: ORIGIN,
        name: company.name,
        publisher: { "@id": orgId },
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url,
        name: page.metaTitle,
        description: page.metaDescription,
        isPartOf: { "@id": siteId },
        about: { "@id": serviceId },
        primaryImageOfPage: `${ORIGIN}${page.image}`,
        inLanguage: "en-IN",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2"],
        },
        keywords: page.queryVariants.join(", "),
        breadcrumb: { "@id": crumbsId },
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: page.title,
        serviceType: page.title,
        description: page.metaDescription,
        url,
        areaServed: "Global",
        provider: { "@id": orgId },
        image: `${ORIGIN}${page.image}`,
        mainEntityOfPage: { "@id": pageId },
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        url: `${url}#faqs`,
        isPartOf: { "@id": pageId },
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "HowTo",
        "@id": howToId,
        name: `How CloudSwift delivers ${page.title}`,
        description: page.metaDescription,
        step: page.steps.map((step, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: step.title,
          text: step.desc,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": crumbsId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${ORIGIN}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${ORIGIN}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.title,
            item: url,
          },
        ],
      },
    ],
  };
}

export const queryVariantMap = AGENT_PAGES.map((page) => ({
  url: page.path,
  title: page.title,
  primary: page.queryVariants[0],
  intent: "commercial-investigation",
  variants: page.queryVariants,
  mapsTo: {
    h1: page.title,
    definition: "#definition",
    process: "#process",
    faqs: "#faqs",
    schema: ["Service", "FAQPage", "HowTo", "WebPage"],
  },
  gtm: {
    event: "agent_page_view",
    content_group: page.category,
    content_group2: page.path,
    primary_query: page.queryVariants[0],
  },
}));

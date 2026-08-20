"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import type { OfferingItem } from "@/lib/catalog";
import s from "./AiServiceDetail.module.css";

/* ------------------------------------------------------------------ */
/* Static CloudSwift credential data                                   */
/* ------------------------------------------------------------------ */
const WHY_CARDS = [
    {
        idx: "01",
        title: "Azure Expert MSP Credential",
        desc: "A top audited tier of Microsoft's partner programme — held by fewer than 100 partners worldwide.",
    },
    {
        idx: "02",
        title: "End-to-end AI Ownership",
        desc: "Strategy, model layer, infra, and deployment engineered by one team — not four vendors with four accountability gaps.",
    },
    {
        idx: "03",
        title: "India + US Delivery Model",
        desc: "Delaware entity for US contracts. Architecture in US-friendly hours. Deep execution from Bengaluru & Mumbai.",
    },
    {
        idx: "04",
        title: "99.97% Uptime SLA",
        desc: "Engagements continue into managed production operations under CloudSwift's standard SLA.",
    },
];

const COMPLIANCE_LINES = [
    {
        label: "Azure OpenAI — Data Residency",
        desc: "Your data stays in your designated Azure region. Never used for model training.",
    },
    {
        label: "SOC 2 / ISO 27001-aligned controls",
        desc: "Carried over from CloudSwift's Azure Expert MSP compliance posture.",
    },
    {
        label: "DPDP & CERT-In aligned",
        desc: "For Indian entities and Indian user data.",
    },
    {
        label: "Audit built into delivery",
        desc: "Not scheduled as a pre-launch scramble under deal pressure.",
    },
];

const BENEFITS = [
    ["Faster time-to-value", "Production-ready AI in weeks, not quarters — with architecture designed to scale from day one."],
    ["Data stays yours", "Private Azure deployments with DLP controls. Your data is never used to train public models."],
    ["Controlled inference costs", "Cost monitoring and evaluation pipelines built alongside AI features — before a pricing plan locks in unit economics."],
    ["Enterprise-grade compliance", "Security engineered alongside the product — ready the moment a prospect asks for a SOC 2 report."],
    ["One accountable team", "No finger-pointing between vendors when something breaks in production. CloudSwift owns the outcome end-to-end."],
];

const ARCH_LAYERS = [
    { role: "Clients", nodes: ["Enterprise App", "Web Portal", "Mobile / API"] },
    { role: "Edge", nodes: ["API Gateway + Auth"] },
    { role: "Application", nodes: ["Business logic · per-tenant scoped"] },
    { role: "Intelligence", nodes: ["LLM / RAG · Azure OpenAI private endpoint"] },
    { role: "Foundation", nodes: ["Vector / data store", "Monitoring & cost controls"] },
];

function zeroPad(n: number) {
    return String(n).padStart(2, "0");
}

const INDUSTRIES = [
    {
        label: "FinTech",
        body: "AI-driven fraud detection, document intelligence, and regulatory compliance automation for financial institutions — with full data-residency controls.",
    },
    {
        label: "Healthcare",
        body: "HIPAA-aware clinical AI — patient triage assistants, medical document summarisation, and clinical-decision support with strict tenant isolation.",
    },
    {
        label: "Manufacturing",
        body: "Predictive maintenance, demand forecasting, and quality-control vision systems that run on your production line data.",
    },
    {
        label: "B2B SaaS",
        body: "LLM-powered knowledge and workflow tools that sit inside existing SaaS platforms and multiply productivity without replacing the tools your teams already use.",
    },
];

const NAV_ITEMS = [
    { id: "hero", label: "Overview" },
    { id: "challenges", label: "Business challenges" },
    { id: "definition", label: "What is it" },
    { id: "benefits", label: "What you get" },
    { id: "deliver", label: "What we deliver" },
    { id: "tech", label: "Technologies" },
    { id: "industries", label: "Industries" },
    { id: "process", label: "Our process" },
    { id: "architecture", label: "Architecture" },
    { id: "compliance", label: "Compliance" },
    { id: "why", label: "Why CloudSwift" },
    { id: "faqs", label: "FAQs" },
    { id: "related", label: "Related" },
];

const TECH_GROUPS = [
    {
        label: "AI / Model Layer",
        chips: ["Azure OpenAI", "OpenAI API", "Anthropic Claude", "RAG Architecture", "Vector Databases"],
    },
    {
        label: "Cloud Infrastructure",
        chips: ["Microsoft Azure", "AWS", "Kubernetes", "Serverless"],
    },
    {
        label: "Application & IaC",
        chips: ["Next.js", "Node.js", ".NET", "Python", "Terraform"],
    },
    {
        label: "Security & Compliance",
        chips: ["Entra ID", "SOC 2 Controls", "DPDP / CERT-In", "Zero Trust"],
    },
];

const CHALLENGES = [
    {
        tag: "Adoption",
        title: "Shadow AI Risk",
        body: "Teams start using public LLMs without oversight. Data leaks, compliance failures, and hallucinated outputs follow before any governance is in place.",
    },
    {
        tag: "Architecture",
        title: "Vendor Lock-in",
        body: "Picking a single AI vendor before the architecture is designed leaves organisations trapped when costs spike or capabilities fall short.",
    },
    {
        tag: "Economics",
        title: "Runaway Inference Costs",
        body: "LLM costs that look fine in a demo don't scale linearly. Teams without cost controls discover this after a pricing plan is already locked in.",
    },
    {
        tag: "Integration",
        title: "Legacy Data Silos",
        body: "AI is only as useful as the data it can access. Fragmented, unstructured, or siloed data kills ROI before the first model is trained.",
    },
];

function scrollToId(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function AiServiceDetail({
    item,
    category,
    basePath,
    related,
}: {
    item: OfferingItem;
    category: string;
    basePath: string;
    related: (OfferingItem & { category?: string })[];
}) {
    const [progress, setProgress] = useState(0);
    const [activeId, setActiveId] = useState("hero");
    const [activeDeliver, setActiveDeliver] = useState(0);
    const [hoveredStep, setHoveredStep] = useState(0);
    const heroRef = useRef<HTMLDivElement>(null);
    const [heroGone, setHeroGone] = useState(false);

    const contentNav = useMemo(
        () =>
            NAV_ITEMS.filter((n) => {
                if (n.id === "hero") return false;
                if (n.id === "deliver" && item.capabilities.length === 0) return false;
                if (n.id === "process" && item.steps.length === 0) return false;
                return true;
            }),
        [item.capabilities.length, item.steps.length]
    );

    const techRows = useMemo(() => {
        const rows = TECH_GROUPS.map((g) => ({ label: g.label, items: g.chips }));
        if (item.tags.length > 0) {
            rows.push({ label: "Service-specific", items: item.tags });
        }
        return rows;
    }, [item.tags]);

    const faqs = [
        {
            q: `What does ${item.title} involve at the enterprise level?`,
            a: item.detailedContent || item.desc,
        },
        {
            q: "How quickly can CloudSwift deliver a working AI solution?",
            a: "Depending on scope, a production-ready v1 typically ships in 8–16 weeks. Discovery and architecture are front-loaded so development sprints stay unblocked.",
        },
        {
            q: "How do you ensure data security and compliance?",
            a: "All solutions use Azure OpenAI with private endpoints. Your data stays in your Azure tenant, never processed by public models or used for training. Controls align with SOC 2, ISO 27001, DPDP, and CERT-In requirements.",
        },
        {
            q: "Do you work with Indian enterprises as well as US companies?",
            a: "Yes. Indian enterprises work directly with local engineering leadership in Bengaluru and Mumbai. US companies contract through CloudSwift's Delaware entity with architecture decisions handled in US-friendly hours.",
        },
    ];

    const activeCap = item.capabilities[activeDeliver] ?? item.capabilities[0];

    useEffect(() => {
        const sectionIds = contentNav.map((n) => n.id);
        const handleScroll = () => {
            const el = document.documentElement;
            const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
            setProgress(Math.min(100, Math.max(0, pct)));
            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const sec = document.getElementById(sectionIds[i]);
                if (sec && sec.getBoundingClientRect().top <= window.innerHeight * 0.4) {
                    setActiveId(sectionIds[i]);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [contentNav]);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => setHeroGone(!e.isIntersecting),
            { threshold: 0 }
        );
        if (heroRef.current) obs.observe(heroRef.current);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        setActiveDeliver(0);
        setHoveredStep(0);
    }, [item.id]);

    return (
        <div className={s.root}>
            <div className={s.progressBar} style={{ width: `${progress}%` }} aria-hidden />

            <div ref={heroRef} className={s.hero} id="hero">
                <nav className={s.breadcrumb} aria-label="Breadcrumb">
                    <Link href="/">Home</Link>
                    {" / "}
                    <Link href="/ai-services">AI Services</Link>
                    {" / "}
                    {item.title}
                </nav>
                <div className={s.heroCategory}>{category}</div>
                <h1 className={s.heroTitle}>{item.title}</h1>
                <div className={s.heroFooter}>
                    <Link href="/contact" className={s.bookLink}>
                        book a consultation ↗
                    </Link>
                    <Link href="/blog" className={s.bookLink}>
                        check out our blogs →
                    </Link>
                    <div className={s.expertLinkWrap}>
                        <Link href="/contact" className={s.expertLink}>
                            Get Expert Solution from our Senior AI Engineer
                        </Link>
                        <p className={s.expertNote}>Direct access — no sales call first.</p>
                    </div>
                </div>
                <button
                    className={s.scrollBtn}
                    aria-label="Scroll to content"
                    onClick={() => scrollToId("challenges")}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </button>
            </div>

            <div className={`${s.contentHeader} ${heroGone ? s.contentHeaderVisible : ""}`}>
                <div className={s.contentHeaderLeft}>
                    <span className={s.contentHeaderTitle}>{item.title}</span>
                </div>
                <div className={s.contentHeaderRight}>
                    <Link href="/blog" className={s.contentHeaderLink}>Our Blogs →</Link>
                    <Link href="/contact" className={s.contentHeaderBtn}>Book Now</Link>
                </div>
            </div>

            <div className={s.shell}>
                <aside className={s.opsRail} aria-label="Page sections">
                    <div className={s.opsRailLabel}>// on this page</div>
                    <ul>
                        {contentNav.map((nav) => (
                            <li key={nav.id}>
                                <a
                                    href={`#${nav.id}`}
                                    className={`${s.opsLink} ${activeId === nav.id ? s.opsLinkActive : ""}`}
                                >
                                    <span className={s.statusDot} />
                                    {nav.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>

                <div id="main-content" className={s.mainContent}>
                    <label className={s.jumpWrap}>
                        <span className={s.jumpLabel}>On this page</span>
                        <select
                            className={s.jumpSelect}
                            value={contentNav.some((n) => n.id === activeId) ? activeId : contentNav[0]?.id}
                            onChange={(e) => scrollToId(e.target.value)}
                        >
                            {contentNav.map((nav) => (
                                <option key={nav.id} value={nav.id}>{nav.label}</option>
                            ))}
                        </select>
                    </label>

                    <div className={s.tldr}>
                        <div className={s.tldrTitle}>// skim this page</div>
                        <ul>
                            <li>{item.desc}</li>
                            {item.capabilities.slice(0, 2).map((c) => <li key={c}>{c}</li>)}
                            <li>Delivered from Bengaluru &amp; Mumbai (India) and a Delaware entity (US clients).</li>
                        </ul>
                    </div>

                    <section id="challenges" className={s.section}>
                        <div className={s.sectionKicker}>// 02 — the problem</div>
                        <h2 className={s.h2}>Why AI initiatives stall before delivering value</h2>
                        <p className={s.lede}>
                            Most enterprises have the intention to adopt AI. They fail at the execution
                            problem — four hard engineering disciplines, needed simultaneously, before
                            there&apos;s ROI to justify a dedicated team.
                        </p>
                        <ol className={s.issueList}>
                            {CHALLENGES.map((c) => (
                                <li key={c.tag} className={s.issueRow}>
                                    <span className={s.issueTag}>{c.tag}</span>
                                    <div>
                                        <h3>{c.title}</h3>
                                        <p>{c.body}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section id="definition" className={s.section}>
                        <div className={s.sectionKicker}>// 03 — definition</div>
                        <h2 className={s.h2}>What is {item.title}?</h2>
                        <p className={s.lede}>{item.detailedContent || item.desc}</p>
                    </section>

                    <section id="benefits" className={s.section}>
                        <div className={s.sectionKicker}>// 04 — outcomes</div>
                        <h2 className={s.h2}>What you get</h2>
                        <ol className={s.outcomes}>
                            {BENEFITS.map(([title, body]) => (
                                <li key={title} className={s.outcome}>
                                    <span className={s.outcomeTitle}>{title}</span>
                                    <span className={s.outcomeLead} aria-hidden />
                                    <span className={s.outcomeBody}>{body}</span>
                                </li>
                            ))}
                        </ol>
                    </section>

                    {item.capabilities.length > 0 && (
                        <section id="deliver" className={s.section}>
                            <div className={s.sectionKicker}>// 05 — scope</div>
                            <h2 className={s.h2}>What we deliver</h2>
                            <div className={s.scope}>
                                <ul className={s.scopeIndex} role="list">
                                    {item.capabilities.map((cap, i) => (
                                        <li key={cap}>
                                            <button
                                                type="button"
                                                className={`${s.scopeIndexBtn} ${activeDeliver === i ? s.scopeIndexBtnHot : ""}`}
                                                onMouseEnter={() => setActiveDeliver(i)}
                                                onFocus={() => setActiveDeliver(i)}
                                                onClick={() => setActiveDeliver(i)}
                                                aria-current={activeDeliver === i ? "true" : undefined}
                                            >
                                                <span className={s.scopeIdx}>{zeroPad(i + 1)}</span>
                                                <span>{cap}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                <div className={s.scopePreview} aria-live="polite">
                                    <div className={s.scopePreviewMeta}>
                                        deliverable {zeroPad(activeDeliver + 1)}
                                        <span> / {zeroPad(item.capabilities.length)}</span>
                                    </div>
                                    <h3>{activeCap}</h3>
                                    <p>
                                        {item.capabilityDescs?.[activeCap] ??
                                            "CloudSwift engineers this capability with production-grade architecture, security controls, and ongoing monitoring baked in from day one."}
                                    </p>
                                </div>
                            </div>
                        </section>
                    )}

                    <section id="tech" className={s.section}>
                        <div className={s.sectionKicker}>// 06 — stack</div>
                        <h2 className={s.h2}>Technologies</h2>
                        <table className={s.stackTable}>
                            <thead>
                                <tr>
                                    <th scope="col">Layer</th>
                                    <th scope="col">Technologies</th>
                                </tr>
                            </thead>
                            <tbody>
                                {techRows.map((row) => (
                                    <tr key={row.label}>
                                        <th scope="row">{row.label}</th>
                                        <td>
                                            <ul className={s.stackBits}>
                                                {row.items.map((itemName) => (
                                                    <li key={itemName}>{itemName}</li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>

                    <section id="industries" className={s.section}>
                        <div className={s.sectionKicker}>// 07 — sectors</div>
                        <h2 className={s.h2}>Industries</h2>
                        <div className={s.sectorGrid}>
                            {INDUSTRIES.map((ind, i) => (
                                <article key={ind.label} className={s.sectorPanel}>
                                    <div className={s.sectorNum}>{zeroPad(i + 1)}</div>
                                    <div>
                                        <h3>{ind.label}</h3>
                                        <p>{ind.body}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    {item.steps.length > 0 && (
                        <section id="process" className={s.section}>
                            <div className={s.sectionKicker}>// 08 — delivery</div>
                            <h2 className={s.h2}>Our process</h2>
                            <p className={s.processHint}>Select a stage to read how it runs.</p>
                            <div
                                className={s.process}
                                style={{ ["--stops" as string]: String(item.steps.length) }}
                            >
                                <ol className={s.processLane}>
                                    {item.steps.map((step, i) => (
                                        <li
                                            key={step}
                                            className={`${s.processStop} ${hoveredStep === i ? s.processStopHot : ""} ${i < hoveredStep ? s.processStopDone : ""}`}
                                        >
                                            <button
                                                type="button"
                                                className={s.processBtn}
                                                onMouseEnter={() => setHoveredStep(i)}
                                                onFocus={() => setHoveredStep(i)}
                                                onClick={() => setHoveredStep(i)}
                                                aria-current={hoveredStep === i ? "step" : undefined}
                                            >
                                                <span className={s.processName}>{step}</span>
                                                <span className={s.processBeacon}>{zeroPad(i + 1)}</span>
                                            </button>
                                            {i < item.steps.length - 1 && (
                                                <span className={s.processWire} aria-hidden />
                                            )}
                                        </li>
                                    ))}
                                </ol>
                                <div className={s.processReadout} aria-live="polite">
                                    <div className={s.processReadoutIndex} aria-hidden>
                                        {zeroPad(hoveredStep + 1)}
                                    </div>
                                    <div className={s.processReadoutBody}>
                                        <div className={s.processReadoutMeta}>
                                            stage {zeroPad(hoveredStep + 1)}
                                            <span> / {zeroPad(item.steps.length)}</span>
                                        </div>
                                        <h3>{item.steps[hoveredStep]}</h3>
                                        <p>
                                            {item.stepDescs?.[item.steps[hoveredStep]] ??
                                                "CloudSwift engineers this stage with precision planning and production-grade quality gates built in."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    <section id="architecture" className={s.section}>
                        <div className={s.sectionKicker}>// 09 — reference architecture</div>
                        <h2 className={s.h2}>How it&apos;s built</h2>
                        <div className={s.arch}>
                            {ARCH_LAYERS.map((layer, i) => (
                                <div key={layer.role} className={s.archLayer}>
                                    <div className={s.archRole}>{layer.role}</div>
                                    <ul className={s.archNodes}>
                                        {layer.nodes.map((node) => (
                                            <li key={node}>{node}</li>
                                        ))}
                                    </ul>
                                    {i < ARCH_LAYERS.length - 1 && (
                                        <span className={s.archJoin} aria-hidden />
                                    )}
                                </div>
                            ))}
                        </div>
                        <p className={s.diagramCaption}>
                            Private Azure endpoints with per-tenant isolation from the API layer through the vector store.
                        </p>
                    </section>

                    <section id="compliance" className={s.section}>
                        <div className={s.sectionKicker}>// 10 — trust</div>
                        <h2 className={s.h2}>Compliance &amp; security</h2>
                        <div className={s.trustGrid}>
                            {COMPLIANCE_LINES.map((line) => (
                                <article key={line.label} className={s.trustItem}>
                                    <div className={s.trustMark}>in place</div>
                                    <h3>{line.label}</h3>
                                    <p>{line.desc}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section id="why" className={s.section}>
                        <div className={s.sectionKicker}>// 11 — differentiation</div>
                        <h2 className={s.h2}>Why CloudSwift</h2>
                        <div className={s.whyList}>
                            {WHY_CARDS.map((card) => (
                                <article key={card.idx} className={s.whyItem}>
                                    <div className={s.whyIdx}>{card.idx}</div>
                                    <h3>{card.title}</h3>
                                    <p>{card.desc}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section id="faqs" className={s.section}>
                        <div className={s.sectionKicker}>// 12 — questions</div>
                        <h2 className={s.h2}>Frequently asked questions</h2>
                        <div className={s.faqList}>
                            {faqs.map((faq) => (
                                <details key={faq.q} className={s.faqItem}>
                                    <summary>{faq.q}</summary>
                                    <p className={s.faqA}>{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </section>

                    <section id="related" className={s.section}>
                        <div className={s.sectionKicker}>// 13 — explore further</div>
                        <h2 className={s.h2}>Keep exploring</h2>
                        <div className={s.relatedGrid}>
                            {related.length > 0 && (
                                <div>
                                    <div className={s.relatedHeading}>Related services</div>
                                    {related.map((r) => (
                                        <Link key={r.id} href={`${basePath}/${r.id}`} className={s.relatedLink}>
                                            {r.title} →
                                        </Link>
                                    ))}
                                </div>
                            )}
                            <div>
                                <div className={s.relatedHeading}>Guides &amp; resources</div>
                                <Link href="/ai-services" className={s.relatedLink}>All AI Services →</Link>
                                <Link href="/contact" className={s.relatedLink}>Book a consultation →</Link>
                                <Link href="/blog" className={s.relatedLink}>Case studies &amp; blog →</Link>
                            </div>
                        </div>

                        <div className={s.bottomCta}>
                            <span className={s.bottomCtaText}>Ready to move forward?</span>
                            <div className={s.expertLinkWrap}>
                                <Link href="/contact" className={s.expertLink}>
                                    Get Expert Solution from our Senior AI Engineer
                                </Link>
                                <p className={s.expertNote}>Direct access — no sales call first.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
}

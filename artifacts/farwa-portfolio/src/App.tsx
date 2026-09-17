import { useEffect, useState, type ReactNode } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Bot, Check, Code2, Download, Linkedin, Menu, Phone, Scissors, Stethoscope, Workflow, X } from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import profilePhoto from '@assets/farwa-khan-profile.jpeg';
import resumePdf from '@assets/farwa-khan-resume.pdf';

const queryClient = new QueryClient();

const healthcareDemoUrl = 'https://www.youtube.com/watch?v=4ANk-fuJ5bg';
const barbershopDemoUrl = 'https://youtu.be/7yJtfv-b6WE';
const emailAddress = 'farwakhan5673@gmail.com';
const whatsappUrl = 'https://wa.me/923156943889?text=Hi%20Farwa%2C%20I%27d%20love%20to%20start%20a%20conversation%20about%20your%20AI%20automation%20work.';
const linkedinUrl = 'https://www.linkedin.com/in/farwakhan';

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    );
    const nodes = document.querySelectorAll('.reveal');
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const links = [
    ['About', '#about'],
    ['Work', '#work'],
    ['Experience', '#experience'],
    ['Contact', '#contact'],
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-foreground/10 bg-background/90 backdrop-blur-md">
      <div className="container-wide flex h-[72px] items-center justify-between">
        <a href="#top" onClick={closeMenu} className="group flex items-center gap-3" data-testid="link-home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background font-display text-lg italic">F</span>
          <span className="font-mono-custom text-[11px] uppercase tracking-[.22em] text-foreground/80">Farwa Khan</span>
        </a>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="nav-link font-mono-custom text-[11px] uppercase tracking-[.16em] text-foreground/70 transition-colors hover:text-foreground" data-testid={`link-nav-${label.toLowerCase()}`}>{label}</a>
          ))}
          <a href={resumePdf} download="Farwa-Khan-Resume.pdf" className="ml-2 inline-flex items-center gap-2 rounded-full border border-foreground/25 px-4 py-2 font-mono-custom text-[11px] uppercase tracking-[.12em] transition-colors hover:bg-foreground hover:text-background" data-testid="link-resume-header">
            Resume <Download size={13} strokeWidth={1.8} />
          </a>
        </nav>
        <button type="button" className="grid h-10 w-10 place-items-center rounded-full border border-foreground/20 md:hidden" onClick={() => setOpen(value => !value)} aria-label={open ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-foreground/10 bg-background px-5 pb-6 pt-4 md:hidden" aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <a key={href} href={href} onClick={closeMenu} className={`flex items-center justify-between border-b border-foreground/10 py-4 font-mono-custom text-xs uppercase tracking-[.15em] ${index === 0 ? 'border-t' : ''}`} data-testid={`link-mobile-${label.toLowerCase()}`}>
              {label} <ArrowUpRight size={15} />
            </a>
          ))}
          <a href={resumePdf} download="Farwa-Khan-Resume.pdf" onClick={closeMenu} className="mt-5 inline-flex items-center gap-2 font-mono-custom text-xs uppercase tracking-[.15em] text-primary" data-testid="link-resume-mobile">
            Download resume <Download size={14} />
          </a>
        </nav>
      )}
    </header>
  );
}

function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return (
    <div className="mb-7 flex items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[.2em] text-primary">
      <span className="grid h-6 w-6 place-items-center rounded-full border border-primary/40 text-[9px]">{number}</span>
      <span>{children}</span>
      <span className="h-px w-10 bg-primary/35" />
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-grid relative min-h-[720px] border-b border-foreground/10 pt-[72px]">
      <div className="container-wide grid min-h-[648px] items-center gap-12 py-16 lg:grid-cols-[1.15fr_.85fr] lg:py-20">
        <div className="relative z-10">
          <div className="reveal flex items-center gap-3 font-mono-custom text-[11px] uppercase tracking-[.2em] text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            AI automation engineer · remote / global
          </div>
          <h1 className="reveal delay-1 mt-7 max-w-[720px] text-balance font-display text-[clamp(4.4rem,9vw,8.25rem)] leading-[.86] tracking-[-.045em] text-foreground">
            I turn<br /><em className="text-primary">busywork</em><br />into momentum.
          </h1>
          <p className="reveal delay-2 mt-9 max-w-[470px] text-lg leading-8 text-foreground/70">
            I&apos;m Farwa Khan, an AI Automation Engineer helping businesses reduce repetitive work, capture more leads, and create smoother customer experiences with AI agents and connected workflows.
          </p>
          <div className="reveal delay-3 mt-9 flex flex-wrap items-center gap-4">
            <a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 font-mono-custom text-[11px] uppercase tracking-[.13em] text-primary-foreground transition-transform hover:-translate-y-1" data-testid="link-hero-work">
              See selected work <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        <div className="reveal delay-2 relative mx-auto w-full max-w-[400px] lg:mr-5">
          <div className="absolute -right-4 -top-8 z-20 grid h-24 w-24 place-items-center rounded-full bg-accent text-center font-mono-custom text-[9px] uppercase leading-4 tracking-[.14em] text-foreground floating-mark">
            human<br />systems<br />over hype
          </div>
          <div className="portrait-frame relative aspect-[.79] overflow-hidden rounded-[7rem_7rem_1.25rem_1.25rem] border-[10px] border-card bg-primary">
            <img src={profilePhoto} alt="Farwa Khan, AI Automation Engineer" className="h-full w-full object-cover object-top grayscale-[.1]" data-testid="img-profile" />
          </div>
          <div className="mt-5 flex items-end justify-between border-t border-foreground/20 pt-4">
            <span className="font-mono-custom text-[10px] uppercase tracking-[.17em] text-foreground/55">Based in Pakistan<br />Working globally</span>
            <span className="font-display text-3xl italic text-primary">01-05</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-foreground/10 py-3">
        <div className="marquee-track flex w-max items-center gap-7 font-mono-custom text-[10px] uppercase tracking-[.23em] text-foreground/45">
          <span>voice agents</span><span className="text-accent">·</span><span>workflow automation</span><span className="text-accent">·</span><span>healthcare systems</span><span className="text-accent">·</span><span>less busywork</span><span className="text-accent">·</span>
          <span>voice agents</span><span className="text-accent">·</span><span>workflow automation</span><span className="text-accent">·</span><span>healthcare systems</span><span className="text-accent">·</span><span>less busywork</span><span className="text-accent">·</span>
        </div>
      </div>
    </section>
  );
}

function About() {
  const principles = [
    ['01', 'Find the costly friction', 'Before choosing a model, I find the moment where a team loses time, leads, context, or patience.'],
    ['02', 'Connect the workflow', 'I bring APIs, webhooks, LLMs, and business tools together so repetitive work keeps moving automatically.'],
    ['03', 'Keep a human close', 'The system handles repeatable work, while people stay in control of the moments that need judgment.'],
  ];
  return (
    <section id="about" className="border-b border-foreground/10 py-24 lg:py-32">
      <div className="container-wide grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
        <div className="reveal">
          <SectionLabel number="01">A little context</SectionLabel>
          <p className="font-display text-4xl leading-[1] tracking-[-.02em] text-foreground lg:text-5xl">Automation should solve a business problem, not create another tool to manage.</p>
        </div>
        <div>
          <p className="reveal delay-1 max-w-[620px] text-[clamp(1.25rem,2.4vw,2rem)] leading-[1.35] tracking-[-.015em] text-foreground/85">
            I map where leads get lost, teams repeat themselves, or customers wait too long - then design AI agents and workflows that connect the right systems and move the next action forward.
          </p>
          <div className="mt-14 grid gap-8 border-t border-foreground/15 pt-7 md:grid-cols-3">
            {principles.map(([number, title, body], index) => (
              <article key={number} className={`reveal delay-${index + 2}`}>
                <span className="font-mono-custom text-[10px] text-accent">{number}</span>
                <h3 className="mt-4 font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-foreground/60">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  const projects = [
    { index: '01', icon: Stethoscope, type: 'Healthcare operations · Voice agent', title: 'AI Receptionist / AI Healthcare Voice Assistant', copy: 'A conversational front door for patient questions, information capture, appointment requests, and the handoffs that keep clinic teams moving.', tags: ['Voice AI', 'Vapi', 'MCP Servers'], color: 'bg-[#dce9e2]', demoUrl: healthcareDemoUrl },
    { index: '02', icon: Scissors, type: 'Customer operations · Voice agent', title: 'Barbershops / AI Voice Assistant', copy: 'A 24/7 receptionist that answers service questions, checks availability, captures customer details, and turns missed calls into booked appointments.', tags: ['Voice AI', 'n8n', 'Webhooks'], color: 'bg-[#f2dfd4]', demoUrl: barbershopDemoUrl },
  ];
  return (
    <section id="work" className="border-b border-foreground/10 py-24 lg:py-32">
      <div className="container-wide">
        <div className="reveal flex flex-wrap items-end justify-between gap-7">
          <div><SectionLabel number="02">Selected experiments</SectionLabel><h2 className="font-display text-5xl tracking-[-.04em] lg:text-7xl">Work that<br /><em className="text-primary">answers back.</em></h2></div>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map(({ index, icon: Icon, type, title, copy, tags, color, demoUrl }, i) => (
            <article key={title} className={`project-card reveal delay-${i + 1} ${color} group relative min-h-[420px] overflow-hidden rounded-[1.5rem] p-7 md:p-10`} data-testid={`card-project-${index}`}>
              <div className="flex items-start justify-between">
                <span className="font-mono-custom text-[10px] uppercase tracking-[.17em] text-foreground/55">{index} / 02</span>
                <span className="grid h-11 w-11 place-items-center rounded-full border border-foreground/20"><Icon size={20} strokeWidth={1.5} /></span>
              </div>
              <div className="absolute -bottom-16 -right-10 font-display text-[15rem] leading-none text-foreground/[.045]">{index}</div>
              <div className="relative mt-24 max-w-[450px]">
                <p className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-primary">{type}</p>
                <h3 className="mt-3 font-display text-4xl leading-[.96] tracking-[-.03em] md:text-5xl">{title}</h3>
                <p className="mt-5 max-w-[420px] text-sm leading-6 text-foreground/65">{copy}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {tags.map(tag => <span key={tag} className="rounded-full border border-foreground/20 px-3 py-1.5 font-mono-custom text-[10px] text-foreground/65">{tag}</span>)}
                </div>
              </div>
              <a href={demoUrl} target="_blank" rel="noreferrer" aria-label={`Open ${title} demo`} className="absolute bottom-8 right-8 grid h-12 w-12 place-items-center rounded-full bg-foreground text-background transition-transform hover:scale-110" data-testid={`link-project-${index}`}>
                <ArrowUpRight size={18} className="project-arrow" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-b border-foreground/10 py-24 lg:py-32">
      <div className="container-wide grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
        <div className="reveal"><SectionLabel number="03">The path so far</SectionLabel><h2 className="max-w-[300px] font-display text-5xl leading-[.94] tracking-[-.04em] lg:text-6xl">Built for the <em className="text-primary">real world.</em></h2></div>
        <div className="reveal delay-1">
          <div className="border-y border-foreground/20 py-7">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div><p className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-primary">Nov 2025 - Present</p><h3 className="mt-3 text-2xl font-semibold">AI Automation Engineer <span className="font-normal text-foreground/45">(Freelance, Remote)</span></h3><p className="mt-2 text-sm text-foreground/60">Torta · Dubai, UAE</p></div>
              <span className="rounded-full border border-primary/30 px-3 py-1 font-mono-custom text-[10px] uppercase tracking-[.12em] text-primary">Freelance</span>
            </div>
            <p className="mt-8 max-w-[620px] text-sm leading-7 text-foreground/65">Designed AI-powered automation solutions that reduce repetitive manual work, keep leads moving from capture to follow-up, and connect business systems through APIs, webhooks, LLMs, and n8n workflows.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Toolkit() {
  const skills = ['Python', 'JavaScript', 'Node.js', 'n8n', 'AI Automation', 'AI Agents', 'Prompt Engineering', 'LLM Integration', 'Workflow Automation', 'RAG', 'Vapi', 'MCP Servers', 'RESTful APIs', 'Webhooks', 'MongoDB', 'MySQL', 'WebSockets', 'SSE'];
  return (
    <section className="border-b border-foreground/10 bg-foreground py-24 text-background lg:py-28">
      <div className="container-wide grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
        <div className="reveal"><SectionLabel number="04">Working toolkit</SectionLabel><h2 className="font-display text-5xl leading-[.94] tracking-[-.04em] lg:text-6xl">The pieces<br />behind the <em className="text-accent">magic.</em></h2></div>
        <div className="reveal delay-1">
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill, index) => <span key={skill} className={`rounded-full border px-3.5 py-2 font-mono-custom text-[11px] transition-colors hover:border-accent hover:text-accent ${index < 5 ? 'border-accent/55 text-background' : 'border-background/20 text-background/65'}`} data-testid={`text-skill-${index}`}>{skill}</span>)}
          </div>
          <div className="mt-14 grid gap-6 border-t border-background/20 pt-7 text-sm text-background/55 sm:grid-cols-3">
            <div className="flex gap-3"><Bot size={18} className="shrink-0 text-accent" /><span>Agents that understand customer context</span></div>
            <div className="flex gap-3"><Workflow size={18} className="shrink-0 text-accent" /><span>Workflows that reduce manual work</span></div>
            <div className="flex gap-3"><Code2 size={18} className="shrink-0 text-accent" /><span>Systems that keep leads moving</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-36">
      <div className="container-wide">
        <div className="reveal max-w-[820px]">
          <SectionLabel number="05">Let&apos;s make room</SectionLabel>
          <h2 className="font-display text-[clamp(4rem,9vw,7.75rem)] leading-[.86] tracking-[-.05em]">Have a process<br />that could<br /><em className="text-primary">breathe?</em></h2>
          <p className="mt-10 max-w-[460px] text-lg leading-7 text-foreground/65">Tell me where leads get lost, customers wait, or your team repeats the same work. I&apos;ll help you find the smallest useful automation to start with.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Start a conversation with Farwa Khan on WhatsApp" className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-4 font-mono-custom text-[11px] uppercase tracking-[.13em] text-foreground transition-transform hover:-translate-y-1" data-testid="link-whatsapp-contact">
              Start a conversation <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href={resumePdf} download="Farwa-Khan-Resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-6 py-4 font-mono-custom text-[11px] uppercase tracking-[.13em] transition-colors hover:border-primary hover:text-primary" data-testid="link-resume-contact"><Download size={14} /> Resume</a>
          </div>
        </div>
        <div className="reveal delay-2 mt-20 grid gap-7 border-t border-foreground/15 pt-6 sm:grid-cols-3">
          <a href={`mailto:${emailAddress}`} className="group" data-testid="link-email-footer"><span className="font-mono-custom text-[10px] uppercase tracking-[.18em] text-foreground/45">Email</span><span className="mt-2 flex items-center gap-2 text-sm group-hover:text-primary">{emailAddress} <ArrowUpRight size={13} /></span></a>
          <a href="tel:+923156943889" className="group" data-testid="link-phone-footer"><span className="font-mono-custom text-[10px] uppercase tracking-[.18em] text-foreground/45">Phone</span><span className="mt-2 flex items-center gap-2 text-sm group-hover:text-primary"><Phone size={13} /> +92 3156943889</span></a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer" className="group" data-testid="link-linkedin-footer"><span className="font-mono-custom text-[10px] uppercase tracking-[.18em] text-foreground/45">Elsewhere</span><span className="mt-2 flex items-center gap-2 text-sm group-hover:text-primary"><Linkedin size={13} /> LinkedIn <ArrowUpRight size={13} /></span></a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="border-t border-foreground/10 py-6"><div className="container-wide flex flex-wrap items-center justify-between gap-4 font-mono-custom text-[10px] uppercase tracking-[.15em] text-foreground/45"><span>Farwa Khan · AI Automation Engineer</span><span className="flex items-center gap-2">Made with clarity <Check size={13} className="text-primary" /></span><a href="#top" className="flex items-center gap-2 hover:text-primary" data-testid="link-back-top">Back to top <ArrowDown size={13} className="rotate-180" /></a></div></footer>;
}

function Home() {
  useReveal();
  return <div className="site-shell min-h-[100dvh]"><Header /><main><Hero /><About /><Work /><Experience /><Toolkit /><Contact /></main><Footer /></div>;
}

function Router() {
  return <Switch><Route path="/" component={Home} /><Route component={NotFound} /></Switch>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><ErrorBoundary><Router /></ErrorBoundary></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;
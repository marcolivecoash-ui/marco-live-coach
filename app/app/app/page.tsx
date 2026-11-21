"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Play,
  CheckCircle2,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function Home() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [menuOpen, setMenuOpen] = useState(false);

  const isArabic = language === "ar";

  const content = {
    en: {
      nav: ["Home", "About", "Services", "Process", "Contact"],
      badge: "YOUR NEXT CHAPTER STARTS HERE",
      title: "BECOME THE",
      highlight: "BEST VERSION",
      last: "OF YOURSELF.",
      description:
        "Real transformation starts with one decision. Let's build the mindset, habits, and life you truly deserve.",
      primary: "Start Your Journey",
      secondary: "Discover My Story",
      stats: [
        ["100%", "Commitment"],
        ["1:1", "Personal Coaching"],
        ["24/7", "Growth Mindset"],
      ],
      aboutLabel: "MEET YOUR COACH",
      aboutTitle: "Your potential is bigger than your excuses.",
      aboutText:
        "I'm Marco. I help people gain clarity, build confidence, break limitations, and take meaningful action toward the life they want.",
      aboutPoints: [
        "Personalized coaching experience",
        "Clear goals and practical strategies",
        "Continuous support and accountability",
      ],
      aboutButton: "Learn More About Me",
      servicesLabel: "WHAT I OFFER",
      servicesTitle: "A better you starts with a plan.",
      services: [
        ["01", "Personal Coaching", "One-on-one guidance designed around your goals and challenges.", "user"],
        ["02", "Mindset Development", "Build a stronger mindset and overcome limiting beliefs.", "target"],
        ["03", "Life Transformation", "Create meaningful habits and take control of your direction.", "trend"],
      ],
      processLabel: "THE PROCESS",
      processTitle: "Simple steps. Real progress.",
      steps: [
        ["01", "Discover", "Understand where you are and where you want to go."],
        ["02", "Design", "Create a personalized roadmap for your transformation."],
        ["03", "Transform", "Take action, track progress, and become stronger."],
      ],
      ctaTitle: "Your future self is waiting.",
      ctaText: "Take the first step today. Your transformation starts with a conversation.",
      ctaButton: "Book Your Session",
      footer: "Built for growth. Designed for transformation.",
    },
    ar: {
      nav: ["الرئيسية", "من أنا", "الخدمات", "الرحلة", "تواصل"],
      badge: "فصل جديد من حياتك يبدأ هنا",
      title: "كن",
      highlight: "أفضل نسخة",
      last: "من نفسك.",
      description:
        "التغيير الحقيقي يبدأ بقرار واحد. دعنا نبني معًا عقليتك وعاداتك والحياة التي تستحقها.",
      primary: "ابدأ رحلتك",
      secondary: "اكتشف قصتي",
      stats: [
        ["100%", "التزام كامل"],
        ["1:1", "كوتشينج شخصي"],
        ["24/7", "عقلية التطور"],
      ],
      aboutLabel: "تعرف على الكوتش",
      aboutTitle: "إمكانياتك أكبر من أعذارك.",
      aboutText:
        "أنا ماركو. أساعد الأشخاص على اكتشاف أهدافهم وبناء الثقة وتجاوز القيود واتخاذ خطوات حقيقية نحو الحياة التي يريدونها.",
      aboutPoints: [
        "تجربة كوتشينج مصممة لك",
        "أهداف واضحة واستراتيجيات عملية",
        "متابعة ودعم مستمر",
      ],
      aboutButton: "اعرف المزيد عني",
      servicesLabel: "ماذا أقدم؟",
      servicesTitle: "نسخة أفضل منك تبدأ بخطة.",
      services: [
        ["01", "كوتشينج شخصي", "توجيه فردي مصمم حسب أهدافك والتحديات التي تواجهك.", "user"],
        ["02", "تطوير العقلية", "ابنِ عقلية أقوى وتجاوز المعتقدات التي تعيق تقدمك.", "target"],
        ["03", "تغيير الحياة", "اصنع عادات مؤثرة وتحكم في اتجاه حياتك.", "trend"],
      ],
      processLabel: "رحلة التغيير",
      processTitle: "خطوات بسيطة. تقدم حقيقي.",
      steps: [
        ["01", "اكتشف", "افهم أين أنت الآن وإلى أين تريد الوصول."],
        ["02", "خطط", "نصمم معًا خطة مناسبة لرحلتك."],
        ["03", "تغير", "ابدأ التنفيذ وتابع تقدمك وكن أقوى."],
      ],
      ctaTitle: "نسختك المستقبلية في انتظارك.",
      ctaText: "ابدأ أول خطوة اليوم. رحلتك الجديدة تبدأ بمحادثة.",
      ctaButton: "احجز جلستك",
      footer: "مصمم للنمو. مبني من أجل التغيير.",
    },
  };

  const t = content[language];

  const icons = [Users, Target, TrendingUp];

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen overflow-hidden bg-[#070b14] text-white"
    >
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#070b14]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-xl font-black tracking-tight">
            MARCO<span className="text-blue-500">.</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {t.nav.map((item, index) => (
              <a
                key={item}
                href={["#", "#about", "#services", "#process", "#contact"][index]}
                className="text-sm text-slate-400 transition hover:text-blue-400"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(isArabic ? "en" : "ar")}
              className="rounded-full border border-white/15 px-4 py-2 text-xs font-bold transition hover:border-blue-500"
            >
              {isArabic ? "EN" : "عربي"}
            </button>

            <a
              href="#contact"
              className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold transition hover:bg-blue-500 sm:block"
            >
              {t.primary}
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-5 border-t border-white/10 bg-[#070b14] p-6 md:hidden">
            {t.nav.map((item, index) => (
              <a
                key={item}
                onClick={() => setMenuOpen(false)}
                href={["#", "#about", "#services", "#process", "#contact"][index]}
                className="text-slate-300"
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section className="relative flex min-h-screen items-center pt-28">
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-bold tracking-wider text-blue-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
              {t.badge}
            </div>

            <h1 className="text-5xl font-black leading-[1.15] tracking-tight sm:text-6xl lg:text-7xl">
              {t.title}{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {t.highlight}
              </span>{" "}
              {t.last}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              {t.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-bold shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500"
              >
                {t.primary}
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 font-bold transition hover:border-blue-500"
              >
                <Play className="h-4 w-4" />
                {t.secondary}
              </a>
            </div>

            <div className="mt-16 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {t.stats.map(([number, label]) => (
                <div key={label}>
                  <div className="text-2xl font-black text-blue-400">{number}</div>
                  <div className="mt-2 text-xs text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-blue-500/30 to-cyan-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#17243b] to-[#0b1220] p-8">
              <div className="flex h-[470px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#101c30] text-center">
                <div className="mb-7 flex h-32 w-32 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/10 text-6xl font-black text-blue-400 shadow-2xl shadow-blue-500/20">
                  M
                </div>
                <h2 className="text-3xl font-black">MARCO</h2>
                <p className="mt-2 text-sm tracking-[0.35em] text-blue-400">
                  LIVE COACH
                </p>
                <div className="mt-8 h-px w-20 bg-blue-500/50" />
                <p className="mt-6 max-w-xs text-sm leading-7 text-slate-400">
                  {isArabic
                    ? "ابدأ رحلتك نحو نسخة أقوى وأفضل من نفسك."
                    : "Start your journey toward a stronger, better you."}
                </p>
              </div>

              <div className="absolute -bottom-3 -left-3 rounded-2xl border border-blue-400/20 bg-[#101c30] p-4 shadow-xl">
                <Zap className="h-6 w-6 text-blue-400" />
              </div>
              <div className="absolute -right-3 -top-3 rounded-2xl border border-blue-400/20 bg-[#101c30] p-4 shadow-xl">
                <TrendingUp className="h-6 w-6 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/5 bg-[#0a101d] py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-sm font-bold tracking-[0.25em] text-blue-400">
              {t.aboutLabel}
            </div>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              {t.aboutTitle}
            </h2>
            <p className="mt-7 text-lg leading-9 text-slate-400">
              {t.aboutText}
            </p>

            <div className="mt-8 space-y-5">
              {t.aboutPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-slate-300">{point}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 font-bold text-blue-400 hover:text-blue-300"
            >
              {t.aboutButton}
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>

          <div className="relative rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/20 to-cyan-500/5 p-10">
            <div className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#101a2b] text-center">
              <Target className="h-20 w-20 text-blue-400" />
              <h3 className="mt-8 text-3xl font-black">YOUR POTENTIAL</h3>
              <p className="mt-3 text-sm tracking-widest text-blue-400">
                HAS NO LIMITS
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-sm font-bold tracking-[0.25em] text-blue-400">
            {t.servicesLabel}
          </div>
          <h2 className="mt-5 max-w-2xl text-4xl font-black sm:text-5xl">
            {t.servicesTitle}
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {t.services.map(([number, title, description], index) => {
              const Icon = icons[index];

              return (
                <div
                  key={number}
                  className="group rounded-3xl border border-white/10 bg-[#0c1422] p-8 transition hover:-translate-y-2 hover:border-blue-500/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-blue-400">
                      {number}
                    </span>
                    <Icon className="h-8 w-8 text-blue-400 transition group-hover:scale-110" />
                  </div>
                  <h3 className="mt-12 text-2xl font-black">{title}</h3>
                  <p className="mt-5 leading-8 text-slate-400">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="border-y border-white/5 bg-[#0a101d] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-sm font-bold tracking-[0.25em] text-blue-400">
            {t.processLabel}
          </div>
          <h2 className="mt-5 text-4xl font-black sm:text-5xl">
            {t.processTitle}
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {t.steps.map(([number, title, description]) => (
              <div key={number} className="relative border-t border-blue-500/40 pt-8">
                <div className="text-5xl font-black text-blue-500/30">
                  {number}
                </div>
                <h3 className="mt-5 text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-8 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-28">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-blue-500/20 bg-gradient-to-br from-blue-600/20 to-[#0c1422] px-8 py-20 text-center sm:px-16">
          <div className="text-sm font-bold tracking-[0.25em] text-blue-400">
            MARCO LIVE COACH
          </div>
          <h2 className="mt-6 text-4xl font-black sm:text-6xl">
            {t.ctaTitle}
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            {t.ctaText}
          </p>
          <a
            href="mailto:hello@marcolivecoach.com"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-bold transition hover:bg-blue-500"
          >
            {t.ctaButton}
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row">
          <div className="text-lg font-black">
            MARCO<span className="text-blue-500">.</span>
          </div>
          <p className="text-sm text-slate-500">{t.footer}</p>
          <p className="text-xs text-slate-600">© 2026 Marco Live Coach</p>
        </div>
      </footer>
    </main>
  );
}

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import content from '../data/community.json';
import events from '../data/communityEvents.json';

function Community() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Daniel Udofa (Phantom) | Community & Growth';
    document.documentElement.classList.add('community-route');
    document.body.classList.add('community-route');
    return () => {
      document.title = prevTitle;
      document.documentElement.classList.remove('community-route');
      document.body.classList.remove('community-route');
    };
  }, []);
  const { hero, summary, stats, impactProofs, pillars, roles, whyMe, tools, education, campaigns } = content;

  return (
    <div className="min-h-screen bg-slate-950 text-rose-50 font-community selection:bg-rose-500/30 selection:text-white">
      {/* Warm gradient + soft grid (distinct from portfolio neon) */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950/80 via-slate-950 to-amber-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(251,113,133,0.25),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251, 191, 36, 0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 191, 36, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-rose-500/20 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link
            to="/"
            className="text-sm font-medium text-amber-200/90 transition hover:text-amber-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-md"
          >
            ← Back to portfolio
          </Link>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${hero.contact.email}`}
              className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:bg-amber-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-24 pt-12 sm:px-6">
        {/* Hero */}
        <section className="text-center sm:text-left" aria-labelledby="community-hero-heading">
          <p className="mb-3 inline-block rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-rose-200/90">
            Community &amp; growth
          </p>
          <h1
            id="community-hero-heading"
            className="font-community text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            {hero.title}
          </h1>
          <p className="mt-2 text-lg text-amber-200/95 sm:text-xl">{hero.name}</p>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-rose-100/90 sm:mx-0">
            “{hero.tagline}”
          </p>
          <p className="mt-3 text-sm text-rose-300/80">Also known as {hero.aliases[0]}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <a
              href={`mailto:${hero.contact.email}`}
              className="rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-rose-900/40 transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Let&apos;s talk
            </a>
            <a
              href={hero.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-rose-400/30 bg-white/5 px-6 py-3 text-sm font-semibold text-rose-50 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400/50"
            >
              LinkedIn
            </a>
            <a
              href={hero.contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-rose-400/30 bg-white/5 px-6 py-3 text-sm font-semibold text-rose-50 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400/50"
            >
              X (Twitter)
            </a>
          </div>
        </section>

        {/* About */}
        <section className="mt-20 rounded-2xl border border-rose-500/20 bg-white/[0.04] p-6 backdrop-blur-md sm:p-8 md:p-10" aria-labelledby="about-heading">
          <h2 id="about-heading" className="font-community text-2xl font-bold text-white md:text-3xl">
            About
          </h2>

          <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-14">
            {summary.portraitSrc && (
              <div className="mx-auto flex w-full max-w-[min(100%,320px)] shrink-0 justify-center lg:mx-0 lg:max-w-[280px] xl:max-w-[300px]">
                <figure className="m-0 w-full">
                  <div className="overflow-hidden rounded-2xl border border-rose-500/30 bg-slate-900/60 shadow-2xl shadow-black/50 ring-1 ring-white/10">
                    <img
                      src={summary.portraitSrc}
                      alt={summary.portraitAlt || 'Daniel Udofa'}
                      className="aspect-[3/4] w-full object-cover object-[center_18%]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="mt-3 text-center text-xs text-rose-300/75 lg:text-left">
                    At industry events — community &amp; brand representation
                  </figcaption>
                </figure>
              </div>
            )}

            <div className="min-w-0 flex-1 space-y-4 text-rose-100/90 leading-relaxed">
              {summary.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="pt-2 text-sm font-medium text-amber-200/90">{summary.brands}</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-16" aria-labelledby="impact-heading">
          <h2 id="impact-heading" className="font-community text-2xl font-bold text-white md:text-3xl">
            Impact &amp; highlights
          </h2>
          <p className="mt-2 max-w-2xl text-rose-200/85">
            Metrics and outcomes from recent ecosystem and social growth work (per portfolio materials).
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((s) => (
              <li
                key={s.label}
                className="rounded-xl border border-amber-500/15 bg-gradient-to-br from-amber-500/5 to-transparent p-6"
              >
                <p className="font-community text-3xl font-bold text-amber-300">{s.value}</p>
                <p className="mt-1 font-medium text-white">{s.label}</p>
                <p className="mt-2 text-sm text-rose-200/75">{s.detail}</p>
              </li>
            ))}
          </ul>

          {impactProofs?.length > 0 && (
            <div className="mt-12">
              <h3 className="font-community text-lg font-semibold text-amber-200/95">
                X (Twitter) analytics — screenshots
              </h3>
              <p className="mt-2 text-sm text-rose-200/80">
                Official account overview exports for the periods referenced above.
              </p>
              <ul className="mt-6 grid gap-8 lg:grid-cols-2">
                {impactProofs.map((proof) => (
                  <li key={proof.src} className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 shadow-lg shadow-black/40 ring-1 ring-white/5">
                    <figure className="m-0">
                      <img
                        src={proof.src}
                        alt={proof.alt}
                        className="w-full object-cover object-top"
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption className="border-t border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-rose-100/90">
                        {proof.caption}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Pillars */}
        <section className="mt-20" aria-labelledby="pillars-heading">
          <h2 id="pillars-heading" className="font-community text-2xl font-bold text-white md:text-3xl">
            What I do
          </h2>
          <p className="mt-2 max-w-2xl text-rose-200/85">
            Five pillars that drive measurable results for brands and communities.
          </p>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <li
                key={pillar.title}
                className="rounded-xl border border-rose-500/20 bg-white/[0.03] p-6 transition hover:border-rose-400/35 hover:bg-white/[0.05]"
              >
                <h3 className="font-community text-lg font-semibold text-amber-200">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-rose-100/85">{pillar.body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Events organized */}
        <section className="mt-20" aria-labelledby="events-heading">
          <h2 id="events-heading" className="font-community text-2xl font-bold text-white md:text-3xl">
            Events organized &amp; represented
          </h2>
          <p className="mt-2 max-w-2xl text-rose-200/85">
            Physical and industry events across Nigeria — from large-scale conferences to brand activations.
          </p>
          <ul className="mt-10 space-y-10">
            {events.map((ev) => (
              <li
                key={ev.id}
                className="overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-950/40 to-rose-950/25"
              >
                {ev.image ? (
                  <div className="grid gap-0 md:grid-cols-5 md:items-stretch">
                    <div className="relative md:col-span-2">
                      <img
                        src={ev.image}
                        alt={ev.imageAlt || ev.title}
                        className="h-56 w-full object-cover md:h-full md:min-h-[220px]"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-slate-950/40" />
                    </div>
                    <div className="flex flex-col justify-center p-6 md:col-span-3 md:p-8">
                      <p className="text-xs font-semibold uppercase tracking-wider text-amber-300/90">{ev.role}</p>
                      <h3 className="mt-1 font-community text-xl font-bold text-white">{ev.title}</h3>
                      <p className="mt-2 text-sm text-rose-200/80">
                        {ev.date} · {ev.location}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-rose-100/90">{ev.description}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-amber-300/90">{ev.role}</p>
                      <h3 className="mt-1 font-community text-xl font-bold text-white">{ev.title}</h3>
                      <p className="mt-2 text-sm text-rose-200/80">
                        {ev.date} · {ev.location}
                      </p>
                    </div>
                    <p className="max-w-xl text-sm leading-relaxed text-rose-100/90 sm:text-right sm:leading-relaxed">
                      {ev.description}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Campaign snapshots */}
        <section className="mt-20" aria-labelledby="campaigns-heading">
          <h2 id="campaigns-heading" className="font-community text-2xl font-bold text-white md:text-3xl">
            Campaign snapshots
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {campaigns.map((c) => (
              <li
                key={c.name}
                className="rounded-xl border border-rose-500/15 bg-white/[0.03] p-5"
              >
                <p className="text-xs font-medium text-amber-300/90">{c.date}</p>
                <h3 className="mt-1 font-community text-lg font-semibold text-white">{c.name}</h3>
                <p className="mt-2 text-sm text-rose-100/85">{c.summary}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section className="mt-20" aria-labelledby="roles-heading">
          <h2 id="roles-heading" className="font-community text-2xl font-bold text-white md:text-3xl">
            Selected roles
          </h2>
          <ul className="mt-8 space-y-8">
            {roles.map((role) => (
              <li key={role.company + role.title} className="border-l-2 border-amber-500/40 pl-6">
                <h3 className="font-community text-lg font-semibold text-white">
                  {role.title} · {role.company}
                  {role.region ? ` · ${role.region}` : ''}
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-rose-100/85">
                  {role.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-rose-300/80">
            Education: {education.degree}, {education.school}
          </p>
        </section>

        {/* Why work with me */}
        <section className="mt-20 rounded-2xl border border-rose-500/25 bg-rose-950/30 p-8 sm:p-10" aria-labelledby="why-heading">
          <h2 id="why-heading" className="font-community text-2xl font-bold text-white md:text-3xl">
            Why work with me
          </h2>
          <p className="mt-4 max-w-3xl text-rose-100/90 leading-relaxed">{whyMe.intro}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {whyMe.points.map((pt) => (
              <li key={pt.title} className="rounded-lg bg-black/20 p-4">
                <p className="font-semibold text-amber-200">{pt.title}</p>
                <p className="mt-1 text-sm text-rose-100/85">{pt.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-rose-100/90 italic">{whyMe.closing}</p>
        </section>

        {/* Tools */}
        <section className="mt-20" aria-labelledby="tools-heading">
          <h2 id="tools-heading" className="font-community text-2xl font-bold text-white md:text-3xl">
            Tools &amp; platforms
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {Object.entries(tools).map(([category, items]) => (
              <div key={category} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-300/90">{category}</h3>
                <p className="mt-3 text-sm text-rose-100/85">{items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <footer className="mt-24 border-t border-rose-500/20 pt-12 text-center sm:text-left">
          <h2 className="font-community text-2xl font-bold text-white">Let&apos;s build something that lasts</h2>
          <p className="mt-3 text-rose-200/85">
            Ready to scale your community and drive measurable growth? Connect via email or social.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a className="text-amber-200 underline-offset-4 hover:underline" href={`mailto:${hero.contact.email}`}>
              {hero.contact.email}
            </a>
            <span className="hidden text-rose-500/50 sm:inline">|</span>
            <a
              className="text-amber-200 underline-offset-4 hover:underline"
              href={hero.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <p className="mt-8 text-xs text-rose-400/70">
            Content sourced from Community &amp; Phantom portfolio PDFs. Main site:{' '}
            <Link to="/" className="text-amber-300 underline-offset-2 hover:underline">
              PhantomDev portfolio
            </Link>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default Community;

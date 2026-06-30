import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Faq,
  ImageSlot,
  PageBody,
  PageHero,
  Prose,
  RelatedLinks,
  Section,
} from '@/components/blocks'
import { SITE } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Cookie Run Classic Meta',
  description:
    'Current Cookie Run Classic account priorities for new players, score runs, Power+, rewards, upgrades, PC play, and route checks.',
  alternates: { canonical: '/cookie-run-classic-meta' },
}

const UPDATED = SITE.lastSiteUpdate

const FAQ = [
  {
    q: 'What should new accounts focus on now?',
    a: 'Focus on account binding, rewards, episode missions, one main runner setup, and upgrades that improve the run you repeat most.',
  },
  {
    q: 'Is meta the same as a tier list?',
    a: 'No. A tier list ranks options. Meta priorities tell you what to check and build for your current account stage.',
  },
  {
    q: 'When should I recheck my setup?',
    a: 'Recheck after new Cookies, pets, treasures, events, reward campaigns, or balance changes. Also recheck when your best run stops improving.',
  },
  {
    q: 'Should beginners copy score setups immediately?',
    a: 'No. Copy the idea, not the whole setup. Build consistency first, then swap toward score when your account can support it.',
  },
]

export default function MetaPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Meta"
        h1="Cookie Run Classic Meta"
        intro="The current priority is simple: protect your account, claim rewards, build one complete runner setup, then shift from survival to score when your route is stable."
        updated={UPDATED}
      />
      <PageBody>
        <Section id="meta-priorities" title="Current priority table">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">Area</th>
                  <th className="p-3 font-700">Current Focus</th>
                  <th className="p-3 font-700">What to do</th>
                  <th className="p-3 font-700">Recheck when</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'New account',
                    'Safe progress',
                    'Bind account, claim rewards, and follow missions.',
                    'A new event or reward set appears.',
                  ],
                  [
                    'Score runs',
                    'Complete setup',
                    'Pair Cookie, pet, and treasures around one route.',
                    'Your best score stops improving.',
                  ],
                  [
                    'Power+',
                    'Route support',
                    'Use it to clear tasks and test whether upgrades still matter.',
                    'A mission or episode wall blocks progress.',
                  ],
                  [
                    'Resources',
                    'Focused spending',
                    'Stop upgrading placeholders and build daily-use options.',
                    'You unlock a stronger main runner.',
                  ],
                ].map(([area, focus, action, recheck]) => (
                  <tr
                    key={area}
                    className="border-t-2 border-border bg-card align-top"
                  >
                    <td className="p-3 font-700 text-foreground">{area}</td>
                    <td className="p-3 text-muted-foreground">{focus}</td>
                    <td className="p-3 text-muted-foreground">{action}</td>
                    <td className="p-3 text-muted-foreground">{recheck}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="New account meta">
          <Prose>
            <p>
              New accounts should win by staying focused. Bind your account,
              collect rewards, clear episode missions, and build the setup you
              use every day. Early progress comes from avoiding waste as much as
              from finding a strong Cookie.
            </p>
          </Prose>
          <div className="mt-4">
            <ImageSlot
              title="Current event, reward, or account progress screen"
              description="Add a screenshot that shows the current event menu, reward page, Power+ prompt, or account progress screen. Use the image that best explains what players should check now."
              suggestedPath="/public/images/meta-current-priority.png"
            />
          </div>
        </Section>

        <Section title="Score meta">
          <Prose>
            <p>
              Score setups need all three parts: Cookie, pet, and treasures. If
              one part is weak, the whole route feels weak. Before changing your
              Cookie, check whether your pet timing, treasure value, or route
              consistency is the real issue.
            </p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Keep one score route and repeat it until mistakes are clear.</li>
              <li>Swap survival tools only after you survive without them.</li>
              <li>Upgrade broad-use treasures before narrow placeholders.</li>
            </ul>
          </Prose>
        </Section>

        <Section title="Power+ and resource checks">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Use Power+ to break walls',
                body: 'If a mission is close but not done, use Power+ to finish it, then return to building the base setup.',
              },
              {
                title: 'Spend after rewards',
                body: 'Claim Mail, events, and missions before upgrading. New rewards can change the best spend.',
              },
              {
                title: 'Check your daily runner',
                body: 'The setup you run most deserves resources before a setup you only plan to use later.',
              },
              {
                title: 'Practice on PC carefully',
                body: 'Use PC for repeated route practice after account sync and key mapping are stable.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border-2 border-border bg-card p-5"
              >
                <h3 className="font-heading text-lg font-600 text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Where to go next">
          <Prose>
            <p>
              If you are new, start with the{' '}
              <Link
                href="/cookie-run-classic-beginner-guide"
                className="font-700 text-primary hover:underline"
              >
                beginner guide
              </Link>
              . If you already have a runner, check the{' '}
              <Link
                href="/cookie-run-classic-tier-list"
                className="font-700 text-primary hover:underline"
              >
                Cookie priority page
              </Link>{' '}
              and then match pets and treasures around it.
            </p>
          </Prose>
        </Section>

        <Section id="faq" title="Meta FAQ">
          <Faq items={FAQ} />
        </Section>

        <RelatedLinks exclude="/cookie-run-classic-meta" />
      </PageBody>
    </main>
  )
}

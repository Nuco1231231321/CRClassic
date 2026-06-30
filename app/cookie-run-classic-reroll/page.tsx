import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Callout,
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
  title: 'Cookie Run Classic Reroll Guide',
  description:
    'Decide whether rerolling is worth it in Cookie Run Classic, what makes a keeper account, and what to do after keeping your first account.',
  alternates: { canonical: '/cookie-run-classic-reroll' },
}

const UPDATED = SITE.lastSiteUpdate

const FAQ = [
  {
    q: 'Is rerolling required in CookieRun Classic?',
    a: 'No. Most players should start playing, bind the account, collect rewards, and build one main setup before thinking about rerolling.',
  },
  {
    q: 'Who should reroll?',
    a: 'Reroll only if you want a specific starting Cookie, pet, or treasure and you are willing to repeat the opening route several times.',
  },
  {
    q: 'What makes an account worth keeping?',
    a: 'Keep an account that has a clear main runner direction, useful pet or treasure support, and enough rewards left to build that setup.',
  },
  {
    q: 'Should I reroll after spending resources?',
    a: 'Usually no. Once you have spent meaningful time and resources, improving your current setup is often faster than restarting.',
  },
]

export default function RerollPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Reroll"
        h1="Cookie Run Classic Reroll Guide"
        intro="Most players should not reroll first. Bind your account, claim rewards, clear early missions, then reroll only if you are chasing a specific start and accept the time cost."
        updated={UPDATED}
      />
      <PageBody>
        <Section id="reroll-decision" title="Should you reroll?">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[780px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">Player type</th>
                  <th className="p-3 font-700">Reroll value</th>
                  <th className="p-3 font-700">Time cost</th>
                  <th className="p-3 font-700">Better alternative</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'New casual player',
                    'Low',
                    'High compared with early rewards',
                    'Keep first account and follow missions.',
                  ],
                  [
                    'Score-focused player',
                    'Medium',
                    'Worth it only for a target setup',
                    'Define the target before restarting.',
                  ],
                  [
                    'Specific Cookie fan',
                    'Medium',
                    'Depends on patience',
                    'Stop once the account has your target direction.',
                  ],
                  [
                    'Already invested account',
                    'Low',
                    'Very high',
                    'Improve Cookie, pet, and treasure synergy.',
                  ],
                ].map(([type, value, cost, alternative]) => (
                  <tr
                    key={type}
                    className="border-t-2 border-border bg-card align-top"
                  >
                    <td className="p-3 font-700 text-foreground">{type}</td>
                    <td className="p-3 text-muted-foreground">{value}</td>
                    <td className="p-3 text-muted-foreground">{cost}</td>
                    <td className="p-3 text-muted-foreground">{alternative}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="When rerolling helps">
          <Prose>
            <p>
              Rerolling helps only when you know what you are trying to start
              with. A good reroll target is not just a rare pull; it is a
              starter direction that lets you build a Cookie, pet, and treasure
              setup with less wasted spending.
            </p>
          </Prose>
          <div className="mt-4">
            <ImageSlot
              title="Starter pull or account keep screen"
              description="Add a screenshot of the starter result, Cookie unlock, or early account screen that helps readers decide whether the account has a usable direction."
              suggestedPath="/public/images/reroll-keeper-account.png"
            />
          </div>
        </Section>

        <Section title="What makes a keeper account">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Clear main runner',
                body: 'You have a Cookie you are willing to use for missions and repeated runs.',
              },
              {
                title: 'Useful support',
                body: 'You have at least one pet or treasure that helps the main runner today.',
              },
              {
                title: 'Rewards still available',
                body: 'You have enough Mail, missions, and event rewards left to fund upgrades.',
              },
              {
                title: 'No early waste',
                body: 'You have not spent rare items on placeholders or backup setups.',
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

        <Section title="Fast route after keeping an account">
          <Callout title="Keep, bind, then build">
            Once you keep an account, bind it before spending. Then clear early
            missions and build one complete setup instead of chasing a second
            reroll target.
          </Callout>
          <Prose>
            <ol className="ml-5 list-decimal space-y-2">
              <li>Bind the account to Google, Apple, or DevPlay.</li>
              <li>Claim Mail and event rewards.</li>
              <li>Pick one Cookie as your main runner.</li>
              <li>Choose one pet that supports that runner.</li>
              <li>Use treasures that help your current route.</li>
              <li>
                Follow the{' '}
                <Link
                  href="/cookie-run-classic-beginner-guide"
                  className="font-700 text-primary hover:underline"
                >
                  beginner guide
                </Link>{' '}
                until your first week is stable.
              </li>
            </ol>
          </Prose>
        </Section>

        <Section title="Reroll mistakes">
          <Prose>
            <ul className="ml-5 list-disc space-y-1">
              <li>Restarting without a target.</li>
              <li>Keeping an account for one pull with no supporting setup.</li>
              <li>Spending rewards before deciding whether to keep the account.</li>
              <li>Rerolling so long that you miss easy first-week progress.</li>
            </ul>
          </Prose>
        </Section>

        <Section id="faq" title="Reroll FAQ">
          <Faq items={FAQ} />
        </Section>

        <RelatedLinks exclude="/cookie-run-classic-reroll" />
      </PageBody>
    </main>
  )
}

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
  title: 'Cookie Run Classic Beginner Guide',
  description:
    'A first-day and first-week Cookie Run Classic route for missions, coins, Power+, account binding, upgrades, pets, treasures, and daily checks.',
  alternates: { canonical: '/cookie-run-classic-beginner-guide' },
}

const UPDATED = SITE.lastSiteUpdate

const FAQ = [
  {
    q: 'What should I do first in CookieRun Classic?',
    a: 'Finish the tutorial, bind your account, claim available launch rewards, then follow episode missions instead of spending resources randomly.',
  },
  {
    q: 'Should I upgrade every Cookie early?',
    a: 'No. Choose one main runner and upgrade around that setup. Spreading coins across every Cookie slows your first week.',
  },
  {
    q: 'What is the best use of coins early?',
    a: 'Spend coins on the Cookie, pet, or treasure you use every day. Save coins when the upgrade does not help your current route.',
  },
  {
    q: 'When should I start caring about tier lists?',
    a: 'Use tier lists after you know your goal: episode missions, League score, coin farming, or a specific Cookie setup.',
  },
]

export default function BeginnerGuidePage() {
  return (
    <main>
      <PageHero
        breadcrumb="Beginner Guide"
        h1="Cookie Run Classic Beginner Guide"
        intro="Start with account safety, mission progress, and one focused runner setup. This first-day and first-week route keeps your coins, rewards, pets, and treasures moving in the right order."
        updated={UPDATED}
      />
      <PageBody>
        <Section id="route" title="Day 1 to Week 1 route">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">Stage</th>
                  <th className="p-3 font-700">Goal</th>
                  <th className="p-3 font-700">What to do</th>
                  <th className="p-3 font-700">What to avoid</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'First 30 minutes',
                    'Protect progress',
                    'Finish tutorial, open settings, bind account, claim Mail rewards.',
                    'Playing long sessions before account binding.',
                  ],
                  [
                    'Day 1',
                    'Unlock systems',
                    'Follow episode missions and use the rewards to support one main runner.',
                    'Upgrading every Cookie, pet, and treasure equally.',
                  ],
                  [
                    'Days 2-3',
                    'Build consistency',
                    'Repeat routes, learn obstacle timing, and upgrade the setup you use most.',
                    'Changing loadouts after every bad run.',
                  ],
                  [
                    'Week 1',
                    'Prepare for score',
                    'Move from survival to score treasures once you reach Bonus Time reliably.',
                    'Spending rare items on temporary placeholders.',
                  ],
                ].map(([stage, goal, action, avoid]) => (
                  <tr
                    key={stage}
                    className="border-t-2 border-border bg-card align-top"
                  >
                    <td className="p-3 font-700 text-foreground">{stage}</td>
                    <td className="p-3 text-muted-foreground">{goal}</td>
                    <td className="p-3 text-muted-foreground">{action}</td>
                    <td className="p-3 text-muted-foreground">{avoid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="First 30 minutes">
          <Prose>
            <ol className="ml-5 list-decimal space-y-2">
              <li>Finish the tutorial without spending extra resources.</li>
              <li>Open settings and bind your account to Google, Apple, or DevPlay.</li>
              <li>Check Mail and event menus for launch rewards.</li>
              <li>Run the first missions until new episode tasks open.</li>
              <li>Choose one runner setup and keep your early upgrades focused.</li>
            </ol>
          </Prose>
          <div className="mt-4">
            <ImageSlot
              title="First mission or beginner route screen"
              description="Add a screenshot from the tutorial, first episode mission list, or early route screen. The image should show what a new player should open first."
              suggestedPath="/public/images/beginner-first-mission.png"
            />
          </div>
        </Section>

        <Section title="Coins, Power+, and rewards">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: 'Coins',
                body: 'Spend coins on your active runner setup. If an upgrade does not help the route you run today, save the coins.',
              },
              {
                title: 'Power+',
                body: 'Treat Power+ as a route helper. Use it to clear missions or improve repeated runs, then check whether your base setup still needs upgrades.',
              },
              {
                title: 'Rewards',
                body: 'Claim Mail, event, and mission rewards before making upgrade decisions. A new reward can change what you should build next.',
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

        <Section title="Early upgrade order">
          <Callout title="Build one complete setup">
            Pick one Cookie, one pet, and three treasures for your current goal.
            Improve that setup before starting a second one.
          </Callout>
          <Prose>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                Cookie first when your run lacks distance, skill value, or score
                ceiling.
              </li>
              <li>Pet first when your Cookie is fine but the setup lacks support.</li>
              <li>
                Treasure first when the same treasure helps many Cookies and
                routes.
              </li>
              <li>
                Save rare items until the setup is part of your daily runs.
              </li>
            </ul>
            <p>
              Use the{' '}
              <Link
                href="/cookie-run-classic-tier-list"
                className="font-700 text-primary hover:underline"
              >
                Cookie tier list
              </Link>{' '}
              after you decide whether you need mission progress or League score.
            </p>
          </Prose>
        </Section>

        <Section title="Daily checklist">
          <Prose>
            <ul className="ml-5 list-disc space-y-1">
              <li>Claim Mail and event rewards.</li>
              <li>Check episode missions before spending resources.</li>
              <li>Run your main setup several times before changing it.</li>
              <li>Use codes from the codes page when new rewards are available.</li>
              <li>Stop upgrading when the next level does not help your route.</li>
            </ul>
          </Prose>
        </Section>

        <Section id="faq" title="Beginner guide FAQ">
          <Faq items={FAQ} />
        </Section>

        <RelatedLinks exclude="/cookie-run-classic-beginner-guide" />
      </PageBody>
    </main>
  )
}

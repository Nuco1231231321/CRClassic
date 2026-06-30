import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CODES_LAST_CHECKED } from '@/lib/data'
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

const OFFICIAL_COUPON_URL = 'https://coupon.devplay.com/coupon/crg/en'

export const metadata: Metadata = {
  title: 'Cookie Run Classic Code Redeem',
  description:
    'How to redeem Cookie Run Classic codes with DevPlay Account and Coupon Code fields, plus Mail rewards, restart steps, and account safety checks.',
  alternates: { canonical: '/cookie-run-classic-code-redeem' },
}

const STEPS = [
  {
    title: 'Open the coupon page',
    body: 'Use the in-game Event Coupon button or open the official DevPlay CookieRun Classic coupon page in your browser.',
  },
  {
    title: 'Enter DevPlay Account',
    body: 'Type the DevPlay Account tied to your save. Check the account screen before submitting so rewards go to the right save.',
  },
  {
    title: 'Enter Coupon Code',
    body: 'Paste the code exactly, submit it once, then fully restart CookieRun Classic before checking your in-game Mail.',
  },
]

const FAQ = [
  {
    q: 'Where do rewards go after redeeming a code?',
    a: 'Rewards are delivered to in-game Mail. Restart the game after submitting the coupon, then open Mail and claim the reward.',
  },
  {
    q: 'Can I use the same coupon twice?',
    a: 'No. Each coupon can be used once per account. If it says already used, check Mail before trying again.',
  },
  {
    q: 'Do I need to enter my password to redeem a code?',
    a: 'No. A normal coupon redeem asks for account and code fields, not your game password. Leave any page that asks for a password or promises free generators.',
  },
  {
    q: 'What if I entered the wrong account?',
    a: 'Rewards go to the account you entered. Before submitting future codes, copy the account details directly from the game account screen.',
  },
]

export default function RedeemPage() {
  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to redeem Cookie Run Classic codes',
    step: STEPS.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
      />
      <PageHero
        breadcrumb="Code Redeem"
        h1="Cookie Run Classic Code Redeem"
        intro="Redeem CookieRun Classic coupons by entering your DevPlay Account and Coupon Code on the official coupon page, restarting the game, then claiming rewards from Mail."
        updated={CODES_LAST_CHECKED}
      />
      <PageBody>
        <Section id="steps" title="Redeem in 3 steps">
          <ol className="grid gap-4 sm:grid-cols-3">
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                className="rounded-2xl border-2 border-border bg-card p-5"
              >
                <span className="flex size-9 items-center justify-center rounded-xl bg-primary font-heading font-700 text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-600 text-foreground">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href={OFFICIAL_COUPON_URL}
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 font-heading font-600 text-primary-foreground shadow-[0_4px_0_0_oklch(0.55_0.15_45)] transition-transform hover:-translate-y-0.5"
              rel="nofollow noopener"
              target="_blank"
            >
              Open coupon page
              <ArrowRight className="size-5" />
            </Link>
            <Link
              href="/cookie-run-classic-codes"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-border bg-card px-5 py-3 font-heading font-600 text-foreground transition-transform hover:-translate-y-0.5"
            >
              View active codes
            </Link>
          </div>
        </Section>

        <Section id="fields" title="What to enter">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">Field</th>
                  <th className="p-3 font-700">What it means</th>
                  <th className="p-3 font-700">Before submitting</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'DevPlay Account',
                    'The account tied to the save that should receive the reward.',
                    'Copy it from the game account screen and check spelling.',
                  ],
                  [
                    'Coupon Code',
                    'The reward code from the codes page or an in-game event.',
                    'Paste it exactly, with no extra spaces before or after.',
                  ],
                  [
                    'Mail',
                    'The in-game inbox where rewards are delivered.',
                    'Restart the game, then open Mail and claim the reward.',
                  ],
                ].map(([field, meaning, check]) => (
                  <tr
                    key={field}
                    className="border-t-2 border-border bg-card align-top"
                  >
                    <td className="p-3 font-700 text-foreground">{field}</td>
                    <td className="p-3 text-muted-foreground">{meaning}</td>
                    <td className="p-3 text-muted-foreground">{check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <ImageSlot
              title="DevPlay Account field"
              description="Add a screenshot showing the DevPlay Account field on the coupon page or the in-game account screen where the player copies the account value."
              suggestedPath="/public/images/redeem-devplay-account.png"
            />
            <ImageSlot
              title="Coupon Code field"
              description="Add a screenshot showing the Coupon Code input field and submit button. The image should make it obvious where players paste the code."
              suggestedPath="/public/images/redeem-coupon-code.png"
            />
            <ImageSlot
              title="Mail reward screen"
              description="Add a screenshot of the in-game Mail inbox after a reward arrives, so players know where to claim redeemed coupon rewards."
              suggestedPath="/public/images/redeem-mail-reward.png"
            />
          </div>
        </Section>

        <Section id="problems" title="Reward not showing?">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">Problem</th>
                  <th className="p-3 font-700">What to check</th>
                  <th className="p-3 font-700">Fix</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'No reward in Mail',
                    'Game restart and correct account',
                    'Fully close the game, reopen it, then check Mail again.',
                  ],
                  [
                    'Code already used',
                    'Mail and previous claims',
                    'Each coupon works once per account. Check whether it was already claimed.',
                  ],
                  [
                    'Invalid code',
                    'Capitalization and extra spaces',
                    'Paste the code again exactly, then submit once.',
                  ],
                  [
                    'Wrong save received it',
                    'DevPlay Account entered',
                    'Use the account details from the save you want to reward next time.',
                  ],
                ].map(([problem, check, fix]) => (
                  <tr
                    key={problem}
                    className="border-t-2 border-border bg-card align-top"
                  >
                    <td className="p-3 font-700 text-foreground">{problem}</td>
                    <td className="p-3 text-muted-foreground">{check}</td>
                    <td className="p-3 text-muted-foreground">{fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="safety" title="Account safety checklist">
          <Callout variant="warning" title="Use only the official coupon page">
            Coupon redeem does not require your password. Do not use mod APKs,
            crystal generators, or pages that ask for login passwords.
          </Callout>
          <Prose>
            <ul className="ml-5 list-disc space-y-1">
              <li>Open the coupon page from the game or the official DevPlay URL.</li>
              <li>Enter only the account field and coupon code field.</li>
              <li>Bind your game save before changing devices.</li>
              <li>Use the codes page for current coupons, then return here for fixes.</li>
            </ul>
          </Prose>
        </Section>

        <Section id="faq" title="Redeem FAQ">
          <Faq items={FAQ} />
        </Section>

        <RelatedLinks exclude="/cookie-run-classic-code-redeem" />
      </PageBody>
    </main>
  )
}

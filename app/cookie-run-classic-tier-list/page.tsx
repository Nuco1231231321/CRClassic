import type { Metadata } from 'next'
import {
  Callout,
  Faq,
  ImageFigure,
  PageBody,
  PageHero,
  Prose,
  RelatedLinks,
  Section,
  TierPill,
} from '@/components/blocks'
import { COOKIE_TIER_UPDATED, COOKIE_TIERS } from '@/lib/data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Cookie Run Classic Tier List: Cookie Rankings',
  description:
    'Cookie Run Classic Cookie upgrade priorities for beginners, score runs, coin farming, and long-term account planning.',
  path: '/cookie-run-classic-tier-list',
  image: '/images/cookie-tier-roster.webp',
  imageAlt: 'Cookie Run Classic Cookie roster and tier list preview',
})

const FAQ = [
  {
    q: 'Who should I upgrade first in CookieRun Classic?',
    a: 'Upgrade the Cookie you actually use for your main League or episode runs first. A focused main Cookie gives better progress than spreading coins across every new Cookie.',
  },
  {
    q: 'Should beginners chase only S-tier Cookies?',
    a: 'No. A beginner-friendly Cookie that clears missions and reaches Bonus Time reliably is often better early than a rare Cookie with no pet, treasure support, or upgrade levels.',
  },
  {
    q: 'When should I stop upgrading a Cookie?',
    a: 'Pause when the Cookie is no longer your main runner, when the next upgrade costs resources you need for treasures, or when you are upgrading only because the Cookie is new.',
  },
  {
    q: 'Do pets and treasures matter more than the Cookie?',
    a: 'They matter together. A strong Cookie without a useful pet and treasure setup can underperform, so build one complete runner setup before starting a second one.',
  },
]

export default function TierListPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Tier List"
        h1="Cookie Run Classic Tier List"
        intro="Start with one reliable main Cookie, then build score, pet, and treasure support around it. This guide ranks Cookie choices by how useful they are for early progress, League score runs, and upgrade planning."
        updated={COOKIE_TIER_UPDATED}
      />
      <PageBody>
        <Section id="cookie-priority" title="Cookie upgrade priority table">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">Cookie</th>
                  <th className="p-3 font-700">Tier</th>
                  <th className="p-3 font-700">Best Use</th>
                  <th className="p-3 font-700">Beginner Value</th>
                  <th className="p-3 font-700">Upgrade Priority</th>
                </tr>
              </thead>
              <tbody>
                {COOKIE_TIERS.map((cookie) => (
                  <tr
                    key={cookie.name}
                    className="border-t-2 border-border bg-card align-top"
                  >
                    <td className="p-3 font-700 text-foreground">
                      {cookie.name}
                    </td>
                    <td className="p-3">
                      <TierPill tier={cookie.tier} />
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {cookie.bestFor}
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {cookie.earlyValue}
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {cookie.upgradePriority}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="best-upgrades" title="Detailed S & A Tier Cookie Analysis">
          <Prose>
            <p>
              In *CookieRun: Classic*, character viability depends on two main criteria: raw scoring potential and resource generation capabilities. Leveling up characters yields stat points, but their active skills define their place in the meta:
            </p>
          </Prose>

          <div className="mt-6 space-y-6">
            {[
              {
                name: 'Princess Bari Cookie (Tier S — Sustain & Score Master)',
                desc: 'Bari gathers Flower Jellies to charge her sacred meter. When filled, she summons a Sacred Tree that cleanses all obstacles and grants high-value Spirit Jellies. Her built-in self-revival gives beginners and League runners a safety net that no other cookie matches.',
              },
              {
                name: 'Lotus Root Phantom Cookie (Tier S — Apex Score Ceiling)',
                desc: 'Designed for endgame scoring. Lotus Root Phantom produces high-scoring lotus notes that require active collection. While she has no survival traits, her raw point generation during active skill phases is unmatched. Best paired with Lotus Sitter.',
              },
              {
                name: 'Potato Salad Cookie (Tier S — Premier Gold Farmer)',
                desc: 'Periodically enters a cooking state, converting all standard jellies on the screen into high-value Gold Potato Jellies and coins. Essential for funding account-wide Energy upgrades. Best paired with Mr. Limeguard.',
              },
              {
                name: 'Buttercream Choco Cookie (Tier A — Relay Multiplier)',
                desc: 'Provides a massive flat percentage multiplier (up to 25% at max level) to your total gold earned, but ONLY when placed in the Relay (second runner) slot. Do not upgrade him early unless your primary Potato Salad Cookie is already leveled.',
              },
            ].map((cookie) => (
              <div key={cookie.name} className="rounded-2xl border-2 border-border bg-card p-5">
                <h3 className="font-heading text-lg font-700 text-foreground mb-2">
                  {cookie.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {cookie.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <ImageFigure
              src="/images/cookie-tier-roster.webp"
              alt="CookieRun Classic Cookie roster and upgrade screen"
              caption="Cookie roster and upgrade screen used to compare early upgrade priorities."
            />
          </div>
        </Section>

        <Section id="goals" title="Choosing by Progression Stage">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: '1. Day 1 Economy',
                body: 'Prioritize Potato Salad Cookie. Leveling him to level 5 is much more valuable than pulling duplicate treasures on Day 1, as it unlocks stable coin income.',
              },
              {
                title: '2. Quest Clearance',
                body: 'Switch to Princess Bari Cookie. Her self-revival keeps runs alive and ensures you clear the required distance without dying.',
              },
              {
                title: '3. League Scoring',
                body: 'Max out Lotus Root Phantom Cookie. She is extremely vulnerable to collisions, so only run her once you have memorized the league track layout.',
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

        <Section id="upgrade-traps" title="Cookie Upgrade Pitfalls to Avoid">
          <Callout variant="warning" title="Spreading gold across your roster slows progress">
            Gold upgrade costs increase exponentially. Upgrading five different cookies to level 5 is far less efficient than maxing out one S-tier main runner. Focus your gold on **Base Energy first**, and then pour all character gold into Potato Salad (for farming) or Princess Bari (for scoring/quests).
          </Callout>
        </Section>

        <Section id="faq" title="Cookie Tier List FAQ">
          <Faq items={FAQ} />
        </Section>

        <RelatedLinks exclude="/cookie-run-classic-tier-list" />
      </PageBody>
    </main>
  )
}

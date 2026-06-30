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
  TierPill,
} from '@/components/blocks'
import { TREASURE_TIER_UPDATED, TREASURE_TIERS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Cookie Run Classic Treasure Tier List',
  description:
    'Cookie Run Classic treasure upgrade priorities, spending checks, score treasures, survival treasures, and mistakes to avoid.',
  alternates: { canonical: '/cookie-run-classic-treasure-tier-list' },
}

const FAQ = [
  {
    q: 'Which treasures should I upgrade first?',
    a: 'Upgrade treasures that improve your main runner setup across many runs. Score and Bonus Time treasures usually give better long-term value than narrow one-route picks.',
  },
  {
    q: 'Should I upgrade coin treasures?',
    a: 'Use coin treasures when you need upgrade money, but do not let them consume resources needed for your main score setup.',
  },
  {
    q: 'When should I use rare treasure items?',
    a: 'Use them only after the treasure is part of your main loadout and you know what role it fills. Used items cannot be restored, so avoid spending on placeholders.',
  },
  {
    q: 'Are survival treasures bad?',
    a: 'No. They are useful while learning routes or clearing difficult missions. Replace them when you can survive without them and need more score.',
  },
]

export default function TreasureTierListPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Treasure Tier List"
        h1="Cookie Run Classic Treasure Tier List"
        intro="Treasures decide how far your resources go. Use this guide to choose score, survival, and daily-use treasures without wasting rare upgrade items."
        updated={TREASURE_TIER_UPDATED}
      />
      <PageBody>
        <Section id="treasure-priority" title="Treasure priority table">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[880px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">Treasure</th>
                  <th className="p-3 font-700">Tier</th>
                  <th className="p-3 font-700">Effect</th>
                  <th className="p-3 font-700">Best Use</th>
                  <th className="p-3 font-700">Upgrade Priority</th>
                </tr>
              </thead>
              <tbody>
                {TREASURE_TIERS.map((treasure) => (
                  <tr
                    key={treasure.name}
                    className="border-t-2 border-border bg-card align-top"
                  >
                    <td className="p-3 font-700 text-foreground">
                      {treasure.name}
                    </td>
                    <td className="p-3">
                      <TierPill tier={treasure.tier} />
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {treasure.effect}
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {treasure.bestFor}
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {treasure.upgradePriority}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="best-treasures" title="Detailed S & A Tier Treasure Analysis">
          <Prose>
            <p>
              Treasures offer passive, account-wide bonuses that scale infinitely. While cookies and pets shift in availability, maxing out your core S-tier treasures will secure your scoring base permanently:
            </p>
          </Prose>

          <div className="mt-6 space-y-6">
            {[
              {
                name: 'Gold Pocket Watch (Tier S — Apex Score Booster)',
                desc: 'Extends the total duration of the Bonus Time phase and multiplies all points collected within it. Since Bonus Time is the dense-scoring zone of every run, this is the single most important card to pull with Supreme tickets.',
              },
              {
                name: 'Bear Jelly’s Wristwatch (Tier S — Raw Point Multiplier)',
                desc: 'Passively increases the score of all Bear Jellies (Yellow, Pink, Ice) by a flat number. Because Bear Jellies represent over 60% of the jelly density in competitive leagues, this treasure is universally strong for all layouts.',
              },
              {
                name: 'Lucky Coin Pouch (Tier S — Economy Engine)',
                desc: 'Increases all coin pickup values by a flat percentage (up to 20% at max level). This is the cornerstone of Potato Salad gold-farming loops, allowing you to double your hourly gold farming efficiency.',
              },
              {
                name: 'Squishy Jelly Watch (Tier A — Skill Gauge Accelerator)',
                desc: 'Increases overall jelly spawn rate on the track, assisting cookies that require total jelly counts to trigger their active transformations (such as Princess Bari).',
              },
              {
                name: 'Sugar Swan Feather (Tier A — Collision Shield & Magnet)',
                desc: 'Grants an energy shield that absorbs one collision hit on start and introduces a moderate magnetic vacuum effect. This magnet pull lets you sweep up jellies without having to risk mistimed double-jumps.',
              },
            ].map((treasure) => (
              <div key={treasure.name} className="rounded-2xl border-2 border-border bg-card p-5">
                <h3 className="font-heading text-lg font-700 text-foreground mb-2">
                  {treasure.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {treasure.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <ImageSlot
              title="Treasure Deck & Upgrades"
              description="A screenshot of the Treasure inventory. Highlight the three equipped card slots and showing the upgrade button and Supreme ticket cost."
              suggestedPath="/images/treasure-upgrade-check.png"
            />
          </div>
        </Section>

        <Section id="treasure-formulas" title="The 3 Equipped Slot Formulas">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: 'Scoring Meta Formula',
                body: 'Gold Pocket Watch (S) + Bear Jelly’s Wristwatch (S) + Squishy Jelly Watch (A). Maxes out points during active skill triggers and Bonus Time.',
              },
              {
                title: 'Gold Farming Formula',
                body: 'Lucky Coin Pouch (S) + Sugar Swan Feather (A) + Squishy Jelly Watch (A). Magnet effect ensures you never miss a coin, while the Pouch multiplies values.',
              },
              {
                title: 'Sustain / Quest Formula',
                body: 'Sugar Swan Feather (A) + Cotton Candy Potion (B) + Bear Jelly’s Wristwatch (S). Focuses on extra lives, shields, and passive magnets for easy clears.',
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

        <Section id="spending-rules" title="Treasure Ticket Spending Rules">
          <Prose>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong>Unlock slots first:</strong> Never draw treasures until you have unlocked all 3 equipment slots. Running 3 low-level treasures yields far more stats than 1 high-level treasure.
              </li>
              <li>
                <strong>Level 3 milestone:</strong> Leveling treasures to level 3 unlocks their secondary passive triggers (like the Magnet effect on Sugar Swan Feather). Get your A-tier cards to level 3 before maxing out S-tier cards.
              </li>
              <li>
                <strong>Skip niche cards:</strong> Do not spend Supreme tickets upgrading situational cards (like coin multiplier pouches if you do not farm coins daily).
              </li>
            </ul>
          </Prose>
        </Section>

        <Section id="faq" title="Treasure Tier List FAQ">
          <Faq items={FAQ} />
        </Section>

        <RelatedLinks exclude="/cookie-run-classic-treasure-tier-list" />
      </PageBody>
    </main>
  )
}

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
} from '@/components/blocks'
import { SITE } from '@/lib/data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Cookie Run Classic Treasure Tier List: Upgrade Priority',
  description:
    'Cookie Run Classic treasure upgrade priorities, spending checks, score treasures, survival treasures, and mistakes to avoid.',
  path: '/cookie-run-classic-treasure-tier-list',
  image: '/images/treasure-upgrade-check.webp',
  imageAlt: 'Cookie Run Classic treasure upgrade checklist preview',
})

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
        updated={SITE.lastSiteUpdate}
      />
      <PageBody>
        <Section id="how-treasures-work" title="How the treasure system works">
          <Prose>
            <p>
              You can equip up to three treasures per run. The first slot is open from the start. The second and third slots cost crystals to unlock — and that should be your first crystal purchase, before you spend anything on treasure draws.
            </p>
            <p>
              Treasures fall into three broad categories. Every run needs a mix, but the balance shifts depending on what you are trying to do.
            </p>
          </Prose>
        </Section>

        <Section id="treasure-categories" title="Treasure categories at a glance">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">Category</th>
                  <th className="p-3 font-700">What it does</th>
                  <th className="p-3 font-700">Best for</th>
                  <th className="p-3 font-700">When to prioritize</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t-2 border-border bg-card align-top">
                  <td className="p-3 font-700 text-foreground">Score</td>
                  <td className="p-3 text-muted-foreground">Boosts jelly values, Bonus Time duration, or skill-gauge fill rate</td>
                  <td className="p-3 text-muted-foreground">League runs and score chasing</td>
                  <td className="p-3 text-muted-foreground">Once you can consistently survive the full run distance</td>
                </tr>
                <tr className="border-t-2 border-border bg-card align-top">
                  <td className="p-3 font-700 text-foreground">Survival</td>
                  <td className="p-3 text-muted-foreground">Grants shields, revival, or extra energy recovery</td>
                  <td className="p-3 text-muted-foreground">Quest clearance, story mode, and learning new maps</td>
                  <td className="p-3 text-muted-foreground">Early game and whenever you are stuck on a distance-based mission</td>
                </tr>
                <tr className="border-t-2 border-border bg-card align-top">
                  <td className="p-3 font-700 text-foreground">Economy</td>
                  <td className="p-3 text-muted-foreground">Raises coin pickup values or generates bonus items</td>
                  <td className="p-3 text-muted-foreground">Gold farming with Potato Salad Cookie</td>
                  <td className="p-3 text-muted-foreground">After unlocking all three slots and establishing a main runner</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="spending-priority" title="How to spend your upgrade resources">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border-2 border-border bg-card p-5">
              <h3 className="font-heading text-lg font-600 text-foreground">
                1. Unlock three slots first
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Your first crystals should go toward the second and third treasure slots. Running three treasures at low levels beats running one good treasure in a single slot.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-border bg-card p-5">
              <h3 className="font-heading text-lg font-600 text-foreground">
                2. Upgrade for your main runner
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Equip and upgrade treasures that support the one cookie you use every day. A score treasure is wasted if your runner dies before Bonus Time.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-border bg-card p-5">
              <h3 className="font-heading text-lg font-600 text-foreground">
                3. Level to 3 before going higher
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Many treasures unlock their secondary effect at level 3 — shields, magnets, or extra multiplier windows. Spread levels across your three equipped treasures before maxing any single one.
              </p>
            </div>
          </div>
        </Section>

        <Section id="loadout-strategies" title="Loadout strategies by game stage">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border-2 border-border bg-card p-5">
              <h3 className="font-heading text-lg font-600 text-foreground">
                Early game (days 1-3)
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Prioritize survival. A shield treasure that absorbs one hit and a magnet that pulls jellies into your path will keep runs alive longer than any score boost. The goal is distance, not points.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-border bg-card p-5">
              <h3 className="font-heading text-lg font-600 text-foreground">
                Mid game (farming phase)
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Switch one slot to an economy treasure that boosts coin pickups. Combined with Potato Salad Cookie and Mr. Limeguard, this accelerates your Energy level upgrades.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-border bg-card p-5">
              <h3 className="font-heading text-lg font-600 text-foreground">
                Late game (League scoring)
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Drop survival gear entirely. Run three score-focused treasures that extend Bonus Time, boost jelly values, and fill skill gauges faster. Every slot should push points.
              </p>
            </div>
          </div>
        </Section>

        <Section id="spending-rules" title="Ticket and resource spending rules">
          <Callout variant="warning" title="Rare upgrade items do not come back">
            Supreme tickets and rare treasure materials are limited. Spending them on a niche treasure you will replace next week will slow your progress by days.
          </Callout>
          <Prose>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong>Unlock slots first:</strong> Never draw or upgrade treasures seriously until you have all 3 equipment slots unlocked. Three low-level treasures are stronger than one high-level treasure alone.
              </li>
              <li>
                <strong>Upgrade what you equip:</strong> If a treasure is not in your active loadout, do not level it. Resources spent on unused treasures delay your actual progression.
              </li>
              <li>
                <strong>Check before ranking up:</strong> Some treasures change their behavior at certain level thresholds. Read the preview before confirming a rank-up so you do not waste the material on a secondary effect you do not need.
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

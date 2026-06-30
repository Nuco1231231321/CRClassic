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

        <Section title="Spending checklist">
          <Callout variant="warning" title="Used upgrade items cannot be restored">
            Before using rare treasure items, make sure the treasure is in your
            main loadout, helps your current goal, and will still be useful
            after you change Cookies.
          </Callout>
          <Prose>
            <ol className="ml-5 list-decimal space-y-2">
              <li>Choose your main Cookie and pet first.</li>
              <li>Pick treasures that support that setup.</li>
              <li>Run the same route several times and check what is limiting you.</li>
              <li>Upgrade only when the treasure fixes that limit.</li>
              <li>Stop if the treasure is only a temporary placeholder.</li>
            </ol>
          </Prose>
          <div className="mt-4">
            <ImageSlot
              title="Treasure inventory or upgrade confirmation"
              description="Add a screenshot of the treasure inventory, selected treasure details, or the upgrade confirmation screen. This is the best place to show where rare upgrade items are spent."
              suggestedPath="/public/images/treasure-upgrade-check.png"
            />
          </div>
        </Section>

        <Section title="Choose by use case">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Score treasures',
                body: 'Use these when your goal is League ranking. They should increase point value, Bonus Time value, pickup value, or route consistency.',
              },
              {
                title: 'Survival treasures',
                body: 'Use these when you die before the score route opens up. Replace them when you can clear the same path reliably.',
              },
              {
                title: 'Daily resource treasures',
                body: 'Use these for coin or farming sessions. Keep them separate from your best score loadout.',
              },
              {
                title: 'Placeholder treasures',
                body: 'Use them only until your main setup is ready. Do not spend rare upgrade items on them.',
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

        <Section title="Stop-upgrade rules">
          <Prose>
            <ul className="ml-5 list-disc space-y-1">
              <li>Stop if the treasure is not in your main three-treasure set.</li>
              <li>Stop if another treasure solves the same job with broader value.</li>
              <li>Stop if your Cookie or pet is the real bottleneck.</li>
              <li>Continue if the treasure improves most of your daily runs.</li>
            </ul>
            <p>
              Plan treasures together with your{' '}
              <Link
                href="/cookie-run-classic-tier-list"
                className="font-700 text-primary hover:underline"
              >
                Cookie priority
              </Link>{' '}
              and{' '}
              <Link
                href="/cookie-run-classic-pet-tier-list"
                className="font-700 text-primary hover:underline"
              >
                pet pairing
              </Link>
              .
            </p>
          </Prose>
        </Section>

        <Section id="faq" title="Treasure tier list FAQ">
          <Faq items={FAQ} />
        </Section>

        <RelatedLinks exclude="/cookie-run-classic-treasure-tier-list" />
      </PageBody>
    </main>
  )
}

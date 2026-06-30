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
import { COOKIE_TIER_UPDATED, COOKIE_TIERS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Cookie Run Classic Tier List',
  description:
    'Cookie Run Classic Cookie upgrade priorities for beginners, score runs, coin farming, and long-term account planning.',
  alternates: { canonical: '/cookie-run-classic-tier-list' },
}

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

        <Section title="Best first upgrades">
          <Prose>
            <p>
              Your first upgrade target should solve one job: clearing missions,
              reaching Bonus Time, or improving League score. Pick one main
              Cookie and keep it ahead of the rest of your roster until your run
              starts losing because of pets, treasures, or control mistakes
              instead of Cookie level.
            </p>
            <p>
              For most new accounts, the safest route is a stable runner first,
              then a score-focused Cookie after you have enough pet and treasure
              support. Do not drain coins into every unlock just to test them.
            </p>
          </Prose>
          <div className="mt-4">
            <ImageSlot
              title="Cookie roster or upgrade screen"
              description="Add a screenshot that shows the Cookie list, selected Cookie details, or the upgrade button so readers can connect this section to the in-game menu."
              suggestedPath="/public/images/cookie-tier-roster.png"
            />
          </div>
        </Section>

        <Section title="Pick by account goal">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: 'Early missions',
                body: 'Choose a Cookie that survives comfortably and helps you clear episode tasks. Consistent distance beats flashy scoring while your account is new.',
              },
              {
                title: 'League score',
                body: 'Choose a Cookie with strong point generation only after you can support it with a matching pet and score treasures.',
              },
              {
                title: 'Coin farming',
                body: 'Use coin-friendly options when you need upgrade money, but stop treating them as your main score setup once League progress slows.',
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

        <Section title="When to stop upgrading">
          <Callout title="Use this before spending coins">
            Upgrade only when the next level helps your current route. Pause if
            the Cookie is a backup, if you still lack a matching pet, or if the
            same resources would unlock a stronger treasure setup.
          </Callout>
          <Prose>
            <ul className="ml-5 list-disc space-y-1">
              <li>Stop when the Cookie is not part of your main three-run plan.</li>
              <li>Stop when your run fails from missed jumps, not low stats.</li>
              <li>
                Stop when your treasures are underleveled and give more value
                per resource.
              </li>
              <li>
                Continue when a level directly improves your best League route.
              </li>
            </ul>
          </Prose>
        </Section>

        <Section title="Common upgrade mistakes">
          <Prose>
            <ul className="ml-5 list-disc space-y-1">
              <li>Leveling every new Cookie equally and running out of coins.</li>
              <li>Ignoring pets, then blaming the Cookie for low score.</li>
              <li>Using a score Cookie for missions that need survival.</li>
              <li>Changing your main setup before learning the route.</li>
            </ul>
            <p>
              After choosing a Cookie, check the{' '}
              <Link
                href="/cookie-run-classic-pet-tier-list"
                className="font-700 text-primary hover:underline"
              >
                pet priority guide
              </Link>{' '}
              and{' '}
              <Link
                href="/cookie-run-classic-treasure-tier-list"
                className="font-700 text-primary hover:underline"
              >
                treasure guide
              </Link>{' '}
              before spending rare upgrade items.
            </p>
          </Prose>
        </Section>

        <Section id="faq" title="Cookie tier list FAQ">
          <Faq items={FAQ} />
        </Section>

        <RelatedLinks exclude="/cookie-run-classic-tier-list" />
      </PageBody>
    </main>
  )
}

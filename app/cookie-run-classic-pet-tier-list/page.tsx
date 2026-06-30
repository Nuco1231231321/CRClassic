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
import { PET_TIER_UPDATED, PET_TIERS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Cookie Run Classic Pet Tier List',
  description:
    'Best Cookie Run Classic pets to build first, with pairing rules, beginner value, score value, and upgrade mistakes to avoid.',
  alternates: { canonical: '/cookie-run-classic-pet-tier-list' },
}

const FAQ = [
  {
    q: 'What pet should I upgrade first?',
    a: 'Upgrade the pet that supports your main Cookie and current goal. A pet tied to your daily runner is more valuable than a high-rarity pet sitting unused.',
  },
  {
    q: 'Should I upgrade a pet without its best Cookie?',
    a: 'Only if the pet gives useful value on its own. If the pet depends on a specific Cookie skill, wait until you use that Cookie regularly.',
  },
  {
    q: 'Are survival pets worth using?',
    a: 'Yes while you are learning routes or clearing missions. Swap toward score pets when you can survive consistently without the extra safety.',
  },
  {
    q: 'How many pets should I build early?',
    a: 'Build one main score or progression pet first, then one backup for missions or survival. More than that usually spreads resources too thin.',
  },
]

export default function PetTierListPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Pet Tier List"
        h1="Cookie Run Classic Pet Tier List"
        intro="Build the pet that makes your main Cookie better. This page helps you choose pets for beginner progress, score runs, survival, and upgrade timing."
        updated={PET_TIER_UPDATED}
      />
      <PageBody>
        <Section id="pet-ranking" title="Pet ranking table">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">Pet</th>
                  <th className="p-3 font-700">Tier</th>
                  <th className="p-3 font-700">Best Pairing Type</th>
                  <th className="p-3 font-700">Best Use</th>
                  <th className="p-3 font-700">Upgrade Priority</th>
                </tr>
              </thead>
              <tbody>
                {PET_TIERS.map((pet) => (
                  <tr
                    key={pet.name}
                    className="border-t-2 border-border bg-card align-top"
                  >
                    <td className="p-3 font-700 text-foreground">
                      {pet.name}
                    </td>
                    <td className="p-3">
                      <TierPill tier={pet.tier} />
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {pet.pairedCookie}
                    </td>
                    <td className="p-3 text-muted-foreground">{pet.bestFor}</td>
                    <td className="p-3 text-muted-foreground">
                      {pet.upgradePriority}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="First pet to build">
          <Prose>
            <p>
              Your first pet should improve the run you repeat most. If you are
              clearing episode missions, pick consistency and safety. If you are
              chasing League score, pick point generation that works with your
              Cookie skill and treasure setup.
            </p>
            <p>
              Do not upgrade a pet just because it is rare. Upgrade it because
              it appears in your active loadout and changes your result.
            </p>
          </Prose>
          <div className="mt-4">
            <ImageSlot
              title="Pet roster or pet upgrade screen"
              description="Add a screenshot that shows the pet list, a selected pet, or the pet upgrade screen. This should help readers see where pet investment decisions happen."
              suggestedPath="/public/images/pet-tier-roster.png"
            />
          </div>
        </Section>

        <Section title="Cookie pairing rules">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">If your Cookie is...</th>
                  <th className="p-3 font-700">Choose a pet that...</th>
                  <th className="p-3 font-700">Avoid</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'A score runner',
                    'Adds point value, Bonus Time value, or more collectible targets.',
                    'Pure survival pets after you already survive the route.',
                  ],
                  [
                    'A mission clearer',
                    'Helps you stay alive, collect required items, or finish a task.',
                    'Score-only pets that do not help the mission condition.',
                  ],
                  [
                    'A coin farmer',
                    'Pulls in more pickups or supports longer low-risk runs.',
                    'Pets that require high-level score treasures to matter.',
                  ],
                ].map(([cookie, choose, avoid]) => (
                  <tr
                    key={cookie}
                    className="border-t-2 border-border bg-card align-top"
                  >
                    <td className="p-3 font-700 text-foreground">{cookie}</td>
                    <td className="p-3 text-muted-foreground">{choose}</td>
                    <td className="p-3 text-muted-foreground">{avoid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Upgrade mistakes">
          <Callout variant="warning" title="Do not build pets away from your main Cookie">
            A pet is part of a setup, not a separate trophy. If it does not help
            the Cookie you run today, save the resources for the pet that does.
          </Callout>
          <Prose>
            <ul className="ml-5 list-disc space-y-1">
              <li>Upgrading pets before choosing a main Cookie.</li>
              <li>Keeping a survival pet after you no longer need the safety.</li>
              <li>Ignoring pet timing and running into missed pickups.</li>
              <li>Building three pets when one focused pet would progress faster.</li>
            </ul>
            <p>
              If your score is stuck, compare your pet with your{' '}
              <Link
                href="/cookie-run-classic-tier-list"
                className="font-700 text-primary hover:underline"
              >
                Cookie upgrade plan
              </Link>{' '}
              before spending more.
            </p>
          </Prose>
        </Section>

        <Section id="faq" title="Pet tier list FAQ">
          <Faq items={FAQ} />
        </Section>

        <RelatedLinks exclude="/cookie-run-classic-pet-tier-list" />
      </PageBody>
    </main>
  )
}

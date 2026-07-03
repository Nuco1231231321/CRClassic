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
import { PET_TIER_UPDATED, PET_TIERS } from '@/lib/data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Cookie Run Classic Pet Tier List: Pairings & Upgrades',
  description:
    'Best Cookie Run Classic pets to build first, with pairing rules, beginner value, score value, and upgrade mistakes to avoid.',
  path: '/cookie-run-classic-pet-tier-list',
  image: '/images/pet-tier-roster.webp',
  imageAlt: 'Cookie Run Classic pet roster and tier list preview',
})

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

        <Section id="best-pets" title="Detailed S & A Tier Pet Analysis">
          <Prose>
            <p>
              Pets serve as critical support pillars. A S-tier Pet provides massive synergy multipliers when paired with its designated Cookie runner, but many also function as top-tier generalists:
            </p>
          </Prose>

          <div className="mt-6 space-y-6">
            {[
              {
                name: 'Mr. Limeguard (Tier S — Economy Multiplier)',
                desc: 'Drops Lime Potions that restore a small chunk of Energy and spawn coins. Paired with Potato Salad Cookie, these potions keep the run going longer and let his coin conversion cycle fire more times.',
              },
              {
                name: 'Lotus Sitter (Tier S — Dedicated Score Synergy)',
                desc: 'Generates lotus petal Jellies at regular intervals and gives Lotus Root Phantom Cookie a speed boost during skill windows. That extra speed means more ground covered in each activation.',
              },
              {
                name: 'Cotton Candy Birdie (Tier A — Beginner Reviver)',
                desc: 'Drops revival hearts and health-restoring items during the run. Useful while you are learning obstacle layouts, but swap to a scoring pet once you stop dying to the same sections.',
              },
            ].map((pet) => (
              <div key={pet.name} className="rounded-2xl border-2 border-border bg-card p-5">
                <h3 className="font-heading text-lg font-700 text-foreground mb-2">
                  {pet.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {pet.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <ImageFigure
              src="/images/pet-tier-roster.webp"
              alt="CookieRun Classic pet inventory and pairing screen"
              caption="Pet inventory and pairing screen for checking support value before upgrading."
            />
          </div>
        </Section>

        <Section id="pairing-meta" title="Synergy Pairing Rules">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">If your main runner is...</th>
                  <th className="p-3 font-700">Choose a pet that...</th>
                  <th className="p-3 font-700">Avoid</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'Potato Salad Cookie (Gold)',
                    'Mr. Limeguard. Extra Energy potions directly sustain coin cycles.',
                    'Score-only pets like Lotus Sitter.',
                  ],
                  [
                    'Lotus Root Phantom (Score)',
                    'Lotus Sitter. The speed bonus multiplies note production.',
                    'Coin scale or revival pets that dilute point scores.',
                  ],
                  [
                    'Princess Bari (Sustain/Quests)',
                    'Cotton Candy Birdie for extra hearts, or any survival pet that helps you stay alive longer.',
                    'Farming pets that do not help clear quest requirements.',
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

        <Section id="pet-errors" title="Pet Upgrading Traps to Avoid">
          <Callout variant="warning" title="Upgrade pets in lockstep with their runner">
            Do not waste gold leveling up Lotus Sitter if your Lotus Root Phantom Cookie is only level 1. Leveling a Pet past level 5 is extremely expensive. Always upgrade your main runner Cookie first, and match the Pet level to support the runner\'s passive stats.
          </Callout>
        </Section>

        <Section id="faq" title="Pet Tier List FAQ">
          <Faq items={FAQ} />
        </Section>

        <RelatedLinks exclude="/cookie-run-classic-pet-tier-list" />
      </PageBody>
    </main>
  )
}

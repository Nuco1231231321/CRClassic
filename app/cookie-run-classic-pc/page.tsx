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
import { PC_OPTIONS, PC_TIERS_UPDATED } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Cookie Run Classic PC Guide',
  description:
    'How to play Cookie Run Classic on PC with Google Play Games or Android emulators, plus account sync, controls, lag, crash, and safe download tips.',
  alternates: { canonical: '/cookie-run-classic-pc' },
}

const FAQ = [
  {
    q: 'Can I play CookieRun Classic on PC?',
    a: 'Yes. Start with Google Play Games for PC if the game is available in your region and account. If it is not available, use a trusted Android emulator and sign in with the same account system used on your phone.',
  },
  {
    q: 'What is the safest PC option?',
    a: 'Use official store clients first. If you use an emulator, download it from the emulator developer site, keep it updated, and never enter your game login on coupon or generator sites.',
  },
  {
    q: 'Will my phone progress sync to PC?',
    a: 'It can sync when your save is linked to Google, Apple, or DevPlay. Bind the account on your phone before trying a PC install.',
  },
  {
    q: 'What should I do if the game crashes on PC?',
    a: 'Update the emulator, update graphics drivers, lower resolution, close background apps, and restart the emulator before reinstalling the game.',
  },
]

export default function PcPage() {
  return (
    <main>
      <PageHero
        breadcrumb="PC Guide"
        h1="Cookie Run Classic PC Guide"
        intro="Play CookieRun Classic on PC by starting with an official store option, binding your account first, then setting keyboard controls for jump, slide, and menu actions."
        updated={PC_TIERS_UPDATED}
      />
      <PageBody>
        <Section id="pc-options" title="PC options comparison">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[840px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">Option</th>
                  <th className="p-3 font-700">Type</th>
                  <th className="p-3 font-700">Best For</th>
                  <th className="p-3 font-700">Setup</th>
                  <th className="p-3 font-700">Account Sync</th>
                </tr>
              </thead>
              <tbody>
                {PC_OPTIONS.map((option) => (
                  <tr
                    key={option.platform}
                    className="border-t-2 border-border bg-card align-top"
                  >
                    <td className="p-3 font-700 text-foreground">
                      {option.platform}
                    </td>
                    <td className="p-3 text-muted-foreground">{option.type}</td>
                    <td className="p-3 text-muted-foreground">
                      {option.bestFor}
                    </td>
                    <td className="p-3 text-muted-foreground">{option.setup}</td>
                    <td className="p-3 text-muted-foreground">
                      {option.accountSync}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Install route">
          <Prose>
            <ol className="ml-5 list-decimal space-y-2">
              <li>Open CookieRun Classic on your phone first.</li>
              <li>Bind your save to Google, Apple, or DevPlay in account settings.</li>
              <li>Install Google Play Games for PC and search for the game.</li>
              <li>
                If the game is unavailable there, install one trusted emulator
                and use its built-in store.
              </li>
              <li>Sign in with the same account, then confirm your save loads.</li>
              <li>Set keyboard controls for jump, slide, pause, and menu taps.</li>
            </ol>
          </Prose>
          <div className="mt-4">
            <ImageSlot
              title="PC install or key mapping screen"
              description="Add a screenshot of Google Play Games, the emulator store page, or the keyboard mapping screen. Pick the one that best matches the install route you recommend."
              suggestedPath="/public/images/pc-install-keymap.png"
            />
          </div>
        </Section>

        <Section title="Controls and performance">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Keyboard controls',
                body: 'Map jump and slide to large, easy keys. Keep menu taps on mouse clicks. Test controls in a low-pressure run before using them in League.',
              },
              {
                title: 'Resolution',
                body: 'Use a stable window size instead of constantly resizing. Lower resolution if the game stutters during obstacle-heavy sections.',
              },
              {
                title: 'Lag fixes',
                body: 'Close browsers and launchers, enable performance mode in the emulator, update graphics drivers, and restart the PC after major updates.',
              },
              {
                title: 'Account safety',
                body: 'Download only from official store or emulator sites. Do not use mod APKs, crystal generators, or coupon pages that ask for a password.',
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

        <Section title="Common problems and fixes">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
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
                    'Save is missing',
                    'Account binding on your phone',
                    'Bind the original save first, then sign in again on PC.',
                  ],
                  [
                    'Black screen',
                    'Graphics mode and emulator version',
                    'Switch graphics renderer, update emulator, then restart.',
                  ],
                  [
                    'Stutter during runs',
                    'Resolution and background apps',
                    'Lower resolution and close heavy apps before playing.',
                  ],
                  [
                    'Controls feel late',
                    'Key mapping and input delay',
                    'Use keyboard for jump and slide, mouse only for menus.',
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
          <div className="mt-4">
            <Callout title="Bind before switching devices">
              Link your account before installing on PC. An unlinked save can be
              difficult or impossible to restore after reset, uninstall, or
              device loss.
            </Callout>
          </div>
        </Section>

        <Section title="Next steps after setup">
          <Prose>
            <p>
              Once the game runs smoothly, use PC sessions for repeated League
              practice, route learning, and resource farming. New players should
              follow the{' '}
              <Link
                href="/cookie-run-classic-beginner-guide"
                className="font-700 text-primary hover:underline"
              >
                beginner route
              </Link>{' '}
              before investing heavily in Cookies, pets, or treasures.
            </p>
          </Prose>
        </Section>

        <Section id="faq" title="PC guide FAQ">
          <Faq items={FAQ} />
        </Section>

        <RelatedLinks exclude="/cookie-run-classic-pc" />
      </PageBody>
    </main>
  )
}

// Central content data for CookieRun Classic wiki.

export const SITE = {
  name: 'CRClassic.wiki',
  domain: 'crclassic.wiki',
  tagline: 'The practical CookieRun Classic hub',
  lastSiteUpdate: 'June 30, 2026',
  officialCouponUrl: 'https://coupon.devplay.com/cookierunclassic',
}

export type NavItem = {
  label: string
  href: string
  short: string
  blurb: string
}

export const PRIMARY_NAV: NavItem[] = [
  {
    label: 'Codes',
    href: '/cookie-run-classic-codes',
    short: 'Free crystals & rewards',
    blurb: 'Every active CookieRun Classic code with rewards and redeem steps.',
  },
  {
    label: 'Tier List',
    href: '/cookie-run-classic-tier-list',
    short: 'Best Cookies ranked',
    blurb: 'Cookies ranked for early progress, score runs and upgrade order.',
  },
  {
    label: 'Pet Tier List',
    href: '/cookie-run-classic-pet-tier-list',
    short: 'Best Pets ranked',
    blurb: 'The strongest pets for beginners, score runs and pairings.',
  },
  {
    label: 'Treasure Tier List',
    href: '/cookie-run-classic-treasure-tier-list',
    short: 'Best Treasures ranked',
    blurb: 'Treasures worth upgrading first for score and survival.',
  },
  {
    label: 'PC Guide',
    href: '/cookie-run-classic-pc',
    short: 'Play on desktop',
    blurb: 'Run CookieRun Classic on PC with Play Games or an emulator.',
  },
  {
    label: 'Code Redeem',
    href: '/cookie-run-classic-code-redeem',
    short: 'Step-by-step redeem',
    blurb: 'Redeem coupons with your DevPlay account or Player ID.',
  },
  {
    label: 'Beginner Guide',
    href: '/cookie-run-classic-beginner-guide',
    short: 'First-week route',
    blurb: 'A practical first-day and first-week route for new accounts.',
  },
  {
    label: 'Reroll',
    href: '/cookie-run-classic-reroll',
    short: 'Keep or restart',
    blurb: 'Decide whether rerolling is worth your time before investing.',
  },
  {
    label: 'Meta',
    href: '/cookie-run-classic-meta',
    short: 'What to focus on now',
    blurb: 'Current priorities for accounts, score runs, Power+, and upgrades.',
  },
  {
    label: 'Wiki Hub',
    href: '/cookie-run-classic-wiki',
    short: 'All guides',
    blurb: 'Find the right CookieRun Classic guide by task and account stage.',
  },
]

// ---------- Codes ----------
export type CodeStatus = 'active' | 'expired'
export type GameCode = {
  code: string
  reward: string
  status: CodeStatus
  added: string
  note?: string
}

export const CODES_LAST_CHECKED = 'June 30, 2026'

export const ACTIVE_CODES: GameCode[] = [
  {
    code: 'AMAZINGKIWICOOK2',
    reward: '20 Crystals',
    status: 'active',
    added: 'Jun 29, 2026',
    note: 'Confirmed working at last check. Case-sensitive.',
  },
  {
    code: 'CRCLASSICLAUNCH',
    reward: '3,000 Coins + 1 Energy Potion',
    status: 'active',
    added: 'Jun 25, 2026',
    note: 'Global launch reward. One use per account.',
  },
  {
    code: 'OVENBREAKBACK',
    reward: '10 Crystals + 5 Rainbow Cubes',
    status: 'active',
    added: 'Jun 26, 2026',
  },
  {
    code: 'WITCHESOVEN500',
    reward: '500 Coins',
    status: 'active',
    added: 'Jun 27, 2026',
  },
]

export const EXPIRED_CODES: GameCode[] = [
  {
    code: 'HELLOCOOKIE',
    reward: '1,000 Coins',
    status: 'expired',
    added: 'Jun 25, 2026',
  },
  {
    code: 'PREREG2MILLION',
    reward: '15 Crystals',
    status: 'expired',
    added: 'Jun 24, 2026',
    note: 'Pre-registration reward, now closed.',
  },
]

// ---------- Cookie tier list ----------
export type Tier = 'S' | 'A' | 'B' | 'C'
export type CookieTier = {
  name: string
  tier: Tier
  role: string
  bestFor: string
  earlyValue: string
  upgradePriority: string
}

export const COOKIE_TIER_UPDATED = 'June 28, 2026'

export const COOKIE_TIERS: CookieTier[] = [
  {
    name: 'Lotus Root Phantom Cookie',
    tier: 'S',
    role: 'Score / Combo',
    bestFor: 'Competitive League high scores',
    earlyValue: 'Hard to obtain early, but the ceiling is the highest in the game.',
    upgradePriority: 'Top priority once unlocked. Pair with Lotus Sitter pet.',
  },
  {
    name: 'Princess Bari Cookie',
    tier: 'S',
    role: 'Passive / Sustain',
    bestFor: 'Long score runs and steady point gain',
    earlyValue: 'Forgiving skill that suits new players chasing distance.',
    upgradePriority: 'Excellent first big investment for consistent leagues.',
  },
  {
    name: 'Pine Monk Cookie',
    tier: 'A',
    role: 'Progression / Travel',
    bestFor: 'Episode progression and travel events',
    earlyValue: 'Reliable all-rounder that clears stages comfortably.',
    upgradePriority: 'Strong second pick; great for clearing story content.',
  },
  {
    name: 'Fire Spirit Cookie',
    tier: 'A',
    role: 'Score / Burst',
    bestFor: 'Burst score with the right pet and treasures',
    earlyValue: 'Niche early because it needs support to shine.',
    upgradePriority: 'Upgrade after you have a stable score combo.',
  },
  {
    name: 'Pumpkin Pie Cookie',
    tier: 'B',
    role: 'Bonus Time',
    bestFor: 'Extending Bonus Time for extra points',
    earlyValue: 'Solid free option for mid-length runs.',
    upgradePriority: 'Upgrade only if it is your main score cookie.',
  },
  {
    name: 'GingerBrave',
    tier: 'B',
    role: 'Starter / Survival',
    bestFor: 'Learning the controls and early stages',
    earlyValue: 'Free starter; safe and easy to control.',
    upgradePriority: 'Low. Move on once you unlock an A-tier cookie.',
  },
  {
    name: 'Strawberry Cookie',
    tier: 'C',
    role: 'Utility / Coins',
    bestFor: 'Casual coin farming',
    earlyValue: 'Helpful for early coins, weak at scoring.',
    upgradePriority: 'Skip upgrades; use as a backup.',
  },
]

// ---------- Pet tier list ----------
export type PetTier = {
  name: string
  tier: Tier
  pairedCookie: string
  bestFor: string
  earlyValue: string
  upgradePriority: string
}

export const PET_TIER_UPDATED = 'June 28, 2026'

export const PET_TIERS: PetTier[] = [
  {
    name: 'Lotus Sitter',
    tier: 'S',
    pairedCookie: 'Lotus Root Phantom Cookie',
    bestFor: 'Top-end League score combos',
    earlyValue: 'Premium pairing; only matters once you have the cookie.',
    upgradePriority: 'Max alongside Lotus Root Phantom for the best ceiling.',
  },
  {
    name: 'Golden Cheesebird',
    tier: 'S',
    pairedCookie: 'Any score cookie',
    bestFor: 'Bonus point generation on long runs',
    earlyValue: 'Flexible and strong with almost any setup.',
    upgradePriority: 'Safe first pet to invest in for new players.',
  },
  {
    name: 'Glitter Pixel Flower',
    tier: 'A',
    pairedCookie: 'Bonus Time cookies',
    bestFor: 'Boosting Bonus Time scoring',
    earlyValue: 'Great value when paired with a Bonus Time cookie.',
    upgradePriority: 'Upgrade after your main score pet.',
  },
  {
    name: 'Cotton Candy Pup',
    tier: 'B',
    pairedCookie: 'Survival cookies',
    bestFor: 'Reviving and surviving longer',
    earlyValue: 'Useful while you learn to dodge obstacles.',
    upgradePriority: 'Low once your reactions improve.',
  },
  {
    name: 'Jelly Worm',
    tier: 'B',
    pairedCookie: 'Coin cookies',
    bestFor: 'Pulling extra jellies into your path',
    earlyValue: 'Decent free pet for steady points.',
    upgradePriority: 'Optional; situational pick.',
  },
  {
    name: 'Sparkling Star',
    tier: 'C',
    pairedCookie: 'Starter cookies',
    bestFor: 'Small early point bonuses',
    earlyValue: 'Fine as a placeholder until better pets drop.',
    upgradePriority: 'Skip upgrades.',
  },
]

// ---------- Treasure tier list ----------
export type TreasureTier = {
  name: string
  tier: Tier
  effect: string
  bestFor: string
  earlyValue: string
  upgradePriority: string
}

export const TREASURE_TIER_UPDATED = 'June 28, 2026'

export const TREASURE_TIERS: TreasureTier[] = [
  {
    name: 'Gold Pocket Watch',
    tier: 'S',
    effect: 'Extends Bonus Time duration',
    bestFor: 'Score runs that rely on Bonus Time',
    earlyValue: 'Massive multiplier once it is in your kit.',
    upgradePriority: 'Top treasure to upgrade with Supreme tickets.',
  },
  {
    name: 'Bear Jelly’s Wristwatch',
    tier: 'S',
    effect: 'Boosts Bear Jelly point value',
    bestFor: 'Maximizing point density on long runs',
    earlyValue: 'Pairs with any score-focused loadout.',
    upgradePriority: 'High priority alongside Gold Pocket Watch.',
  },
  {
    name: 'Squishy Jelly Watch',
    tier: 'A',
    effect: 'Increases jelly spawn / value',
    bestFor: 'Consistent point gain across stages',
    earlyValue: 'Strong, accessible early score treasure.',
    upgradePriority: 'Good third treasure slot to upgrade.',
  },
  {
    name: 'Sugar Swan Feather',
    tier: 'A',
    effect: 'Grants a shield on run start',
    bestFor: 'Surviving early obstacle-heavy sections',
    earlyValue: 'Helps beginners reach Bonus Time reliably.',
    upgradePriority: 'Upgrade if you keep dying early.',
  },
  {
    name: 'Hollow Energy Drink',
    tier: 'B',
    effect: 'Faster energy / boost recovery',
    bestFor: 'Aggressive boost-heavy playstyles',
    earlyValue: 'Situational; depends on your cookie.',
    upgradePriority: 'Medium. Only with a boost-reliant combo.',
  },
  {
    name: 'Lucky Coin Pouch',
    tier: 'C',
    effect: 'Increases coin pickup value',
    bestFor: 'Early coin farming',
    earlyValue: 'Useful for funding upgrades, not for score.',
    upgradePriority: 'Low; swap out for a score treasure later.',
  },
]

// ---------- PC options ----------
export type PcOption = {
  platform: string
  type: string
  bestFor: string
  setup: string
  accountSync: string
  notes: string
}

export const PC_TIERS_UPDATED = 'June 30, 2026'

export const PC_OPTIONS: PcOption[] = [
  {
    platform: 'Google Play Games (Beta)',
    type: 'Official PC app',
    bestFor: 'Most players who want the safest, simplest setup',
    setup: 'Install Google Play Games for PC, sign in, search the game.',
    accountSync: 'Native Google account sync',
    notes: 'Official Google client. Lightest install and easy keyboard mapping.',
  },
  {
    platform: 'LDPlayer',
    type: 'Android emulator',
    bestFor: 'Players who want detailed key-mapping controls',
    setup: 'Install LDPlayer, sign into Google Play, install the game.',
    accountSync: 'DevPlay / Google / Apple login',
    notes: 'Lightweight emulator with flexible controls. Verify before competitive use.',
  },
  {
    platform: 'MuMu Player',
    type: 'Android emulator',
    bestFor: 'A balanced emulator alternative',
    setup: 'Install MuMu Player, sign into Google Play, install the game.',
    accountSync: 'DevPlay / Google / Apple login',
    notes: 'Smooth on mid-range PCs. Keep graphics drivers updated.',
  },
  {
    platform: 'BlueStacks',
    type: 'Android emulator',
    bestFor: 'Players already using BlueStacks for other games',
    setup: 'Install BlueStacks, sign into Google Play, install the game.',
    accountSync: 'DevPlay / Google / Apple login',
    notes: 'Feature-rich but heavier. Close background apps for best results.',
  },
]

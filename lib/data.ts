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

export const COOKIE_TIER_UPDATED = 'June 30, 2026'

export const COOKIE_TIERS: CookieTier[] = [
  {
    name: 'Princess Bari Cookie',
    tier: 'S',
    role: 'Sustain / High Score',
    bestFor: 'Consistent competitive League score runs',
    earlyValue: 'Extremely forgiving due to her Flower Jelly gauge and Sacred Tree self-revival skill.',
    upgradePriority: 'Max first. She offers the highest score safety net for both beginners and veterans.',
  },
  {
    name: 'Lotus Root Phantom Cookie',
    tier: 'S',
    role: 'Extreme Scoring',
    bestFor: 'Endgame League leaderboard records',
    earlyValue: 'Difficult to unlock early, but has the absolute highest score ceiling in the game.',
    upgradePriority: 'Max immediately once unlocked. Best paired with Lotus Sitter.',
  },
  {
    name: 'Potato Salad Cookie',
    tier: 'S',
    role: 'Legendary Coin Farming',
    bestFor: 'Ultimate coin farming efficiency loops',
    earlyValue: 'The premier Legendary economy character. Unlocking him early speeds up early progression.',
    upgradePriority: 'Max immediately. Crucial to sustain the gold costs of subsequent S-tier upgrades.',
  },
  {
    name: 'Pine Monk Cookie',
    tier: 'A',
    role: 'Obstacle Clearance',
    bestFor: 'Story Mode and Tower of Frozen Waves progression',
    earlyValue: 'Reliable all-rounder that clears obstacles and sweeps stages comfortably.',
    upgradePriority: 'Highly recommended for clearing tricky level-based quests.',
  },
  {
    name: 'Buttercream Choco Cookie',
    tier: 'A',
    role: 'Passive / Relay Coin Bonus',
    bestFor: 'Relay (second-runner) position on coin runs',
    earlyValue: 'Unusable as a main runner, but yields massive passive coin multipliers at run end.',
    upgradePriority: 'Max out his level to unlock the highest flat coin-percentage bonus.',
  },
  {
    name: 'Fire Spirit Cookie',
    tier: 'A',
    role: 'Score / Burst',
    bestFor: 'Burst scoring during specific obstacle-dense zones',
    earlyValue: 'Niche choice because it requires high-level supporting treasures to excel.',
    upgradePriority: 'Upgrade after establishing a reliable daily farmer and scoring main.',
  },
  {
    name: 'Pumpkin Pie Cookie',
    tier: 'B',
    role: 'Bonus Time Extension',
    bestFor: 'Chasing high scores via Bonus Time strategies',
    earlyValue: 'Decent placeholder for extending runs if you lack S-tier sustain.',
    upgradePriority: 'Keep at mid-level unless running a specific Bonus Time build.',
  },
  {
    name: 'GingerBrave',
    tier: 'B',
    role: 'Starter / Basic Run',
    bestFor: 'Learning basic jump/slide physics',
    earlyValue: 'Default starter. Safe to control but lacks score ceiling.',
    upgradePriority: 'Low. Switch to Potato Salad or Bari as soon as they are pulled.',
  },
  {
    name: 'Strawberry Cookie',
    tier: 'C',
    role: 'Basic Coin Pickup',
    bestFor: 'Very early casual coin farming',
    earlyValue: 'Slightly helpful for Day 1 coins, completely outclassed by Potato Salad later.',
    upgradePriority: 'Do not invest. Save coins for S-tier economic characters.',
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

export const PET_TIER_UPDATED = 'June 30, 2026'

export const PET_TIERS: PetTier[] = [
  {
    name: 'Lotus Sitter',
    tier: 'S',
    pairedCookie: 'Lotus Root Phantom Cookie',
    bestFor: 'Endgame scoring synergy',
    earlyValue: 'Generates specialized Lotus Jellies and grants speed boosts to Lotus Root.',
    upgradePriority: 'Max alongside Lotus Root Phantom Cookie for maximum high scores.',
  },
  {
    name: 'Golden Cheesebird',
    tier: 'S',
    pairedCookie: 'Any scoring Cookie',
    bestFor: 'Long scoring runs & bear jelly density',
    earlyValue: 'Extremely flexible. Drops high-value cheese jellies regardless of runner.',
    upgradePriority: 'The safest, most versatile pet to level up first for general content.',
  },
  {
    name: 'Sold-Out Bread',
    tier: 'S',
    pairedCookie: 'Potato Salad Cookie',
    bestFor: 'High-speed coin grinding sessions',
    earlyValue: 'Regularly creates potion jellies that prolong runs and spawns extra high-value coin baskets.',
    upgradePriority: 'Max alongside Potato Salad Cookie to form the highest yielding economic team.',
  },
  {
    name: 'Glitter Pixel Flower',
    tier: 'A',
    pairedCookie: 'Bonus Time Cookies',
    bestFor: 'Extending and scoring in Bonus Time',
    earlyValue: 'Provides consistent value when running high Bonus Time configurations.',
    upgradePriority: 'Upgrade after establishing your main coin and score pets.',
  },
  {
    name: 'Cotton Candy Pup',
    tier: 'B',
    pairedCookie: 'Any Cookie (Survival)',
    bestFor: 'Early progression and learning obstacle patterns',
    earlyValue: 'Provides revives and extra health potions to save you from mistimed jumps.',
    upgradePriority: 'Keep low. Swap out for scoring pets once you learn stage layouts.',
  },
  {
    name: 'Jelly Worm',
    tier: 'B',
    pairedCookie: 'Coin/Basic Cookies',
    bestFor: 'Pulling stray jellies into your path',
    earlyValue: 'Decent free companion that acts as a mini-magnet.',
    upgradePriority: 'Low. Replace with S-tier magnet treasures or S-tier pets.',
  },
  {
    name: 'Sparkling Star',
    tier: 'C',
    pairedCookie: 'Starter Cookies',
    bestFor: 'Day 1 minor point boosts',
    earlyValue: 'Basic placeholder pet. Outclassed immediately after your first tutorial pulls.',
    upgradePriority: 'Do not upgrade.',
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

export const TREASURE_TIER_UPDATED = 'June 30, 2026'

export const TREASURE_TIERS: TreasureTier[] = [
  {
    name: 'Gold Pocket Watch',
    tier: 'S',
    effect: 'Extends Bonus Time duration & multiplier',
    bestFor: 'Score-dense runs relying on Bonus Time',
    earlyValue: 'The single most important score multiplier in the game.',
    upgradePriority: 'Spend your Supreme tickets to max this first. Essential for S-tier scores.',
  },
  {
    name: 'Bear Jelly’s Wristwatch',
    tier: 'S',
    effect: 'Significantly boosts Bear Jelly values',
    bestFor: 'Density-heavy scoring runs',
    earlyValue: 'Massive passive scoring boost that works on all maps and runners.',
    upgradePriority: 'Max out alongside Gold Pocket Watch. S-tier versatility.',
  },
  {
    name: 'Lucky Coin Pouch',
    tier: 'S',
    effect: 'Increases all coin pickup values by a flat %',
    bestFor: 'Coin farming economy loops',
    earlyValue: 'Allows you to easily double your coins earned per run when maxed.',
    upgradePriority: 'Max immediately to speed up all subsequent character/pet level costs.',
  },
  {
    name: 'Squishy Jelly Watch',
    tier: 'A',
    effect: 'Increases overall jelly spawn rate',
    bestFor: 'Consistent score runs and filling skill gauges',
    earlyValue: 'Highly accessible score treasure that helps fill skill meters faster.',
    upgradePriority: 'Excellent choice to upgrade as your third general treasure slot.',
  },
  {
    name: 'Sugar Swan Feather',
    tier: 'A',
    effect: 'Grants an energy shield and magnetic pull',
    bestFor: 'New players struggling to survive obstacle density',
    earlyValue: 'Acts as a safety net and helps collect jellies without precise positioning.',
    upgradePriority: 'Upgrade to level 3-4 for the magnet effect, then pivot to score treasures.',
  },
  {
    name: 'Hollow Energy Drink',
    tier: 'B',
    effect: 'Speeds up skill gauge recovery',
    bestFor: 'Dash-reliant or skill-reliant Cookies',
    earlyValue: 'Situational. Only useful for cookies with powerful active dash skills.',
    upgradePriority: 'Medium. Only upgrade if you are running a dash-heavy meta build.',
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

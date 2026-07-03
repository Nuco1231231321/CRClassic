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
    earlyValue: 'Her Flower Jelly gauge charges a Sacred Tree that revives her once per run. That single revive makes her the safest pick for both new players and League grinders.',
    upgradePriority: 'Max first. She offers the best score safety net in the roster — forgiving enough for beginners, strong enough for veterans.',
  },
  {
    name: 'Lotus Root Phantom Cookie',
    tier: 'S',
    role: 'Extreme Scoring',
    bestFor: 'Endgame League leaderboard records',
    earlyValue: 'Hard to unlock early, but once you do, no other cookie pushes score higher. The ceiling is real, it just takes practice to reach it.',
    upgradePriority: 'Max immediately once unlocked. Best paired with Lotus Sitter.',
  },
  {
    name: 'Potato Salad Cookie',
    tier: 'S',
    role: 'Legendary Coin Farming',
    bestFor: 'Ultimate coin farming efficiency loops',
    earlyValue: 'The go-to cookie for gold. Unlock him early and your whole account moves faster — upgrades, Energy levels, everything costs coins and he prints them.',
    upgradePriority: 'Max immediately. His gold output sustains the upgrade costs for the rest of your S-tier roster.',
  },
  {
    name: 'Fire Spirit Cookie',
    tier: 'A',
    role: 'Score / Burst',
    bestFor: 'Burst scoring during obstacle-dense zones',
    earlyValue: 'He shines in bursts during dense obstacle sections, but only if you have strong treasures backing him up. Not a first pick.',
    upgradePriority: 'Upgrade after you have a reliable daily farmer and scoring main in place.',
  },
  {
    name: 'Buttercream Choco Cookie',
    tier: 'A',
    role: 'Passive / Relay Coin Bonus',
    bestFor: 'Relay (second-runner) position on coin runs',
    earlyValue: 'Do not put him in the lead slot. His value comes at the end of a run — the relay bonus multiplies your gold by a flat percentage. Worth leveling once your main farmer is set.',
    upgradePriority: 'Max out his level to unlock the highest flat coin-percentage bonus, but only after your primary runner is upgraded.',
  },
  {
    name: 'GingerBrave',
    tier: 'C',
    role: 'Starter / Basic Run',
    bestFor: 'Learning basic jump/slide physics',
    earlyValue: 'You start with him. He handles fine and the controls click fast, but there is no real scoring potential. Swap him the moment you pull something better.',
    upgradePriority: 'Low. Switch to Potato Salad or Bari as soon as you pull them.',
  },
  {
    name: 'Strawberry Cookie',
    tier: 'C',
    role: 'Basic Coin Pickup',
    bestFor: 'Very early casual coin farming',
    earlyValue: 'Picks up basic coins okay on day one. That is about it. Once Potato Salad shows up, she stays benched.',
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
    name: 'Mr. Limeguard',
    tier: 'S',
    pairedCookie: 'Potato Salad Cookie',
    bestFor: 'High-speed coin grinding sessions',
    earlyValue: 'Drops Lime Potions that restore Energy and spawn extra coins. Combined with Potato Salad, these potions extend run duration and maximize his coin conversion cycles.',
    upgradePriority: 'Max alongside Potato Salad Cookie to form the highest yielding economic team.',
  },
  {
    name: 'Lotus Sitter',
    tier: 'S',
    pairedCookie: 'Lotus Root Phantom Cookie',
    bestFor: 'Endgame scoring synergy',
    earlyValue: 'Generates specialized Lotus Jellies and grants speed boosts to Lotus Root during her skill windows.',
    upgradePriority: 'Max alongside Lotus Root Phantom Cookie for maximum high scores.',
  },
  {
    name: 'Cotton Candy Birdie',
    tier: 'A',
    pairedCookie: 'Any Cookie (Survival)',
    bestFor: 'Early progression and learning obstacle patterns',
    earlyValue: 'Drops revival hearts and extra health items. Great for learning stage layouts without burning through your energy.',
    upgradePriority: 'Keep low. Swap out for scoring pets once you learn stage layouts.',
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

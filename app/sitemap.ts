import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/data'

const BASE_URL = `https://${SITE.domain}`
const LAST_MODIFIED = new Date('2026-06-30T00:00:00+08:00')

export const dynamic = 'force-static'

const ROUTES = [
  { path: '/', priority: 1 },
  { path: '/cookie-run-classic-codes', priority: 0.8 },
  { path: '/cookie-run-classic-code-redeem', priority: 0.8 },
  { path: '/cookie-run-classic-tier-list', priority: 0.8 },
  { path: '/cookie-run-classic-pet-tier-list', priority: 0.8 },
  { path: '/cookie-run-classic-treasure-tier-list', priority: 0.8 },
  { path: '/cookie-run-classic-pc', priority: 0.8 },
  { path: '/cookie-run-classic-beginner-guide', priority: 0.8 },
  { path: '/cookie-run-classic-reroll', priority: 0.8 },
  { path: '/cookie-run-classic-meta', priority: 0.8 },
  { path: '/cookie-run-classic-wiki', priority: 0.8 },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route.path === '/' ? '' : route.path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'daily',
    priority: route.priority,
  }))
}

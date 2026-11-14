import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every fact on a profile says where it came from:
//   listing = the agent's own listing says so
//   checked = we confirmed it against a public record (give the source link)
//   unknown = nobody has told us yet; a question for the agent
const fact = z.object({
  label: z.string(),
  value: z.string(),
  status: z.enum(['listing', 'checked', 'unknown']).default('listing'),
  source: z.string().url().optional(),
});

const churches = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/churches' }),
  schema: z.object({
    name: z.string(),
    century: z.string().optional(), // roman numerals, e.g. "XIV"; leave out if unknown
    place: z.string(),
    region: z.string(),
    country: z.enum(['France', 'England', 'Scotland', 'Wales', 'Italy', 'Ireland']),
    price: z.string(),
    currency: z.enum(['€', '£']).default('€'),
    agent: z.string(),
    listingUrl: z.string().url().optional(),
    lastChecked: z.coerce.date(),
    status: z.enum(['for sale', 'under offer', 'saved']).default('for sale'),
    specimen: z.boolean().default(false), // true = invented example, not a real building
    summary: z.string(),
    seller: z.string(),
    moneyGoes: z.string(),
    heritageClass: z.string(),
    verdict: z.enum(['Preserve as found', 'Light use', 'Convertible']),
    verdictReason: z.string(),
    difficulty: z.number().int().min(1).max(5),
    photos: z
      .array(z.object({ src: z.string(), alt: z.string(), credit: z.string(), focus: z.string().optional() }))
      .default([]),
    sections: z.array(z.object({ title: z.string(), items: z.array(fact) })).default([]),
    story: z.array(z.object({ when: z.string(), what: z.string() })).default([]),
    storyNote: z.string().optional(),
    storySources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
    works: z
      .array(
        z.object({
          phase: z.enum(['Now', 'Next', 'Later']),
          item: z.string(),
          basis: z.enum(['listing', 'photos', 'record', 'assumed']),
          low: z.number().optional(), // euros; leave both out if not costed
          high: z.number().optional(),
        }),
      )
      .default([]),
    seen: z.array(z.string()).default([]), // what the listing photographs show
    upkeep: z.object({ low: z.number(), high: z.number(), covers: z.string() }).optional(),
    estimateNote: z.string().optional(),
    grantNote: z.string().optional(),
    faults: z.array(z.string()).default([]),
    costs: z
      .array(z.object({ label: z.string(), amount: z.string(), basis: z.string() }))
      .default([]),
    nearby: z
      .array(z.object({ name: z.string(), note: z.string(), url: z.string().url().optional() }))
      .default([]),
    contacts: z
      .array(z.object({ role: z.string(), name: z.string(), url: z.string().url().optional() }))
      .default([]),
  }),
});

export const collections = { churches };

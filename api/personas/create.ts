/**
 * POST /api/personas/create
 *
 * 責務: HTTPの入出力とバリデーションのみ。
 *       ビジネスロジックは src/lib/services に委譲する（ここには書かない）。
 *       今回はDB保存・認証は行わない。
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import { MBTI_TYPES } from '../../src/lib/services/mbti';
import { generatePersonaTemplate } from '../../src/lib/services/personaTemplate';

const createPersonaSchema = z.object({
  mbti: z.enum(MBTI_TYPES),
});

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const parsed = createPersonaSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      error: 'Invalid request body',
      details: parsed.error.flatten().fieldErrors,
    });
  }

  const persona = generatePersonaTemplate(parsed.data.mbti);
  return res.status(200).json(persona);
}

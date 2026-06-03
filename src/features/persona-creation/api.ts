/**
 * persona-creation feature のAPIクライアント。
 *
 * components/ から直接 fetch を呼ばないため、HTTPの詳細はこの feature 層に閉じ込める。
 */

import type { MbtiType } from '../../lib/services/mbti';

export interface PersonaTemplateResponse {
  mbti: MbtiType;
  template: string;
}

/** POST /api/personas/create を呼び、人格ひな型を取得する。 */
export async function createPersona(mbti: MbtiType): Promise<PersonaTemplateResponse> {
  const res = await fetch('/api/personas/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mbti }),
  });

  if (!res.ok) {
    throw new Error(`人格ひな型の生成に失敗しました (status: ${res.status})`);
  }

  return (await res.json()) as PersonaTemplateResponse;
}

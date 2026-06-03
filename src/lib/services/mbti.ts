/**
 * MBTI 16タイプの定義。
 * フロント・API・サービス層で共有する単一の真実(source of truth)。
 * HTTPやフレームワークには一切依存しない純粋な定数。
 */

export const MBTI_TYPES = [
  'INTJ',
  'INTP',
  'ENTJ',
  'ENTP',
  'INFJ',
  'INFP',
  'ENFJ',
  'ENFP',
  'ISTJ',
  'ISFJ',
  'ESTJ',
  'ESFJ',
  'ISTP',
  'ISFP',
  'ESTP',
  'ESFP',
] as const;

export type MbtiType = (typeof MBTI_TYPES)[number];

/** 任意の文字列が有効なMBTIタイプかを判定する型ガード。 */
export function isMbtiType(value: unknown): value is MbtiType {
  return typeof value === 'string' && (MBTI_TYPES as readonly string[]).includes(value);
}

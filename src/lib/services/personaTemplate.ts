/**
 * 人格ひな型生成サービス（ビジネスロジック）。
 *
 * - MBTIタイプを受け取り、対応する人格ひな型テキストを返す。
 * - HTTP・フレームワークの型には依存しない（純粋関数）。
 * - DB保存・認証・外部API呼び出しは今回は行わない。
 *
 * NOTE: 各テキストは初期のプレースホルダ。
 *       将来的にLLMによる生成やDB管理へ差し替える前提。
 */

import { MBTI_TYPES, type MbtiType } from './mbti';

/** MBTIタイプ → 人格ひな型テキストの対応表。 */
const PERSONA_TEMPLATES: Record<MbtiType, string> = {
  INTJ: '戦略家。長期的な視点で物事を構造化し、独立して目標へ突き進む人格のひな型です。',
  INTP: '論理学者。物事の原理を探究し、概念を抽象的に組み立てることを好む人格のひな型です。',
  ENTJ: '指揮官。目標達成のために人と仕組みを統率し、決断を恐れない人格のひな型です。',
  ENTP: '討論者。新しい可能性を見つけて議論し、既存の枠組みに挑む人格のひな型です。',
  INFJ: '提唱者。理想を内に秘め、他者の本質を見抜いて静かに導く人格のひな型です。',
  INFP: '仲介者。自分の価値観に忠実で、内面の世界と理想を大切にする人格のひな型です。',
  ENFJ: '主人公。人の成長を促し、周囲を巻き込んで前向きに導く人格のひな型です。',
  ENFP: '運動家。好奇心と情熱にあふれ、人とのつながりから着想を得る人格のひな型です。',
  ISTJ: '管理者。責任感が強く、秩序と実績を重んじて着実に物事を進める人格のひな型です。',
  ISFJ: '擁護者。献身的で思いやりがあり、身近な人を静かに支える人格のひな型です。',
  ESTJ: '幹部。現実的な判断で組織をまとめ、ルールと効率を重視する人格のひな型です。',
  ESFJ: '領事官。協調性が高く、周囲の調和と他者への配慮を大切にする人格のひな型です。',
  ISTP: '巨匠。手を動かして問題を解決し、状況に冷静かつ柔軟に対応する人格のひな型です。',
  ISFP: '冒険家。感性豊かで自由を愛し、今この瞬間を大切に生きる人格のひな型です。',
  ESTP: '起業家。行動力に富み、リスクを取りながら状況を切り拓く人格のひな型です。',
  ESFP: 'エンターテイナー。社交的で快活、その場を明るくし人を楽しませる人格のひな型です。',
};

export interface PersonaTemplate {
  mbti: MbtiType;
  template: string;
}

/**
 * 指定されたMBTIタイプに対応する人格ひな型を生成する。
 * @throws 未知のMBTIタイプが渡された場合
 */
export function generatePersonaTemplate(mbti: MbtiType): PersonaTemplate {
  const template = PERSONA_TEMPLATES[mbti];
  if (!template) {
    throw new Error(`Unknown MBTI type: ${mbti}`);
  }
  return { mbti, template };
}

/** 全タイプぶんのひな型（テスト・一覧表示用）。 */
export function allPersonaTemplates(): PersonaTemplate[] {
  return MBTI_TYPES.map((mbti) => generatePersonaTemplate(mbti));
}

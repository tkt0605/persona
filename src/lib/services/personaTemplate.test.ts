import { describe, it, expect } from 'vitest';
import { generatePersonaTemplate, allPersonaTemplates } from './personaTemplate';
import { MBTI_TYPES } from './mbti';

describe('generatePersonaTemplate', () => {
  it('指定したMBTIに対応するひな型を返す', () => {
    const result = generatePersonaTemplate('INTJ');
    expect(result.mbti).toBe('INTJ');
    expect(result.template).toContain('戦略家');
  });

  it('16タイプすべてが空でないひな型テキストを持つ', () => {
    for (const mbti of MBTI_TYPES) {
      const { template } = generatePersonaTemplate(mbti);
      expect(template.length).toBeGreaterThan(0);
    }
  });

  it('未知のMBTIタイプを渡すと例外を投げる', () => {
    // @ts-expect-error 不正な値を意図的に渡す
    expect(() => generatePersonaTemplate('XXXX')).toThrow();
  });
});

describe('allPersonaTemplates', () => {
  it('16タイプぶんのひな型を返す', () => {
    expect(allPersonaTemplates()).toHaveLength(16);
  });
});

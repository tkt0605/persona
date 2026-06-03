/**
 * MBTI選択 → 人格ひな型表示 の縦の流れを担う feature コンポーネント。
 *
 * - 16個のMBTIボタンから1つを選んで送信。
 * - 入力バリデーション（feature層の責務）を行ってからAPIを呼ぶ。
 * - 結果（ひな型テキスト）を結果表示エリアに描画する。
 */

import { useState } from 'react';
import { MBTI_TYPES, isMbtiType, type MbtiType } from '../../lib/services/mbti';
import { createPersona, type PersonaTemplateResponse } from './api';
import './PersonaCreation.css';

export function PersonaCreation() {
  const [selected, setSelected] = useState<MbtiType | null>(null);
  const [result, setResult] = useState<PersonaTemplateResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit() {
    // 入力バリデーション（feature層の責務）
    if (!isMbtiType(selected)) {
      setError('MBTIを1つ選択してください。');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const persona = await createPersona(selected);
      setResult(persona);
    } catch (e) {
      setError(e instanceof Error ? e.message : '予期しないエラーが発生しました。');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="persona-creation">
      <h1>あなたのMBTIを選んでください</h1>

      <div className="mbti-grid">
        {MBTI_TYPES.map((mbti) => (
          <button
            key={mbti}
            type="button"
            className={`mbti-button${selected === mbti ? ' is-selected' : ''}`}
            aria-pressed={selected === mbti}
            onClick={() => setSelected(mbti)}
          >
            {mbti}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="submit-button"
        disabled={!selected || loading}
        onClick={handleSubmit}
      >
        {loading ? '生成中…' : '送信して人格ひな型を見る'}
      </button>

      <section className="result-area" aria-live="polite">
        {error && <p className="result-error">{error}</p>}
        {result && (
          <div className="result-card">
            <h2>{result.mbti} の人格ひな型</h2>
            <p>{result.template}</p>
          </div>
        )}
        {!error && !result && !loading && (
          <p className="result-placeholder">ここに人格ひな型が表示されます。</p>
        )}
      </section>
    </main>
  );
}

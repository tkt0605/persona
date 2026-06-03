import { PersonaCreation } from './features/persona-creation/PersonaCreation';

// App は最上位コンポーネント。機能固有ロジックは持たず feature へ委譲する。
export default function App() {
  return <PersonaCreation />;
}

import { useState } from 'react';
import Questions from './components/Questions';
import Title from './components/Title';

const App = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };
  return (
    <main>
      <section className="container">
        <Title />
        <Questions toggleQuestion={toggleQuestion} activeId={activeId} />
      </section>
    </main>
  );
};
export default App;

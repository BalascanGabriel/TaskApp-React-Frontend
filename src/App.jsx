//Practic e o variabila care pointeaaza spre imaginea aia

import { CORE_CONCEPTS } from './data'
import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton';

function App() {
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>

          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>Components</TabButton>
          </menu>

        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

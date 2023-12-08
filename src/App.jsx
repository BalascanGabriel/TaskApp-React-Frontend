//Practic e o variabila care pointeaaza spre imaginea aia

import { CORE_CONCEPTS } from './data'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton/TabButton';

function App() {

  let tabContent = 'Please click a button'

  function handleSelect(selectedButton) {
    tabContent = selectedButton
    console.log(selectedButton)
  }

  //test sa vad daca face commit bine
  //inca un test pt contributions

  return (
    <div>
      <Header />

      <main>
        <h2>Time to get started!</h2>

        <section id="core-concepts">
          <h2>Core concepts : </h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples : </h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

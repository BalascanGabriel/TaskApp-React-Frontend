
import reactImg from '../../assets/react-core-concepts.png'
import componentsImg from '../../assets/components.png'
const reactDescriptions = ['Fundamental', 'Crucial', 'Core']
import './Header.css'

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

//export component and import it where used
export default function Header() {
    return (
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
  
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
  }
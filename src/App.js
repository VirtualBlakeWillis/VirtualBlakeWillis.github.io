import { Hero, Nav, Projects, Socials} from './components'
import './components/index.css'

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <header className="App-header">
        <Hero />
      </header>
      <Projects />
      <Socials />
    </div>
  );
}

export default App;

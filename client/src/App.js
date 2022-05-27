import './App.css';
import { About } from './components/About.jsx';
import { Contact } from './components/Contact.jsx';
import { Projects } from './components/Projects.jsx';
function App() {
  return (
    <div className="App">
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

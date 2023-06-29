import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import About from './pages/About';
import ContactMe from './pages/ContactMe';
import Skills from './pages/Skills';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<Layout />}>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/skills" element={<Skills />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

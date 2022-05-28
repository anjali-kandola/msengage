import './App.css';
import Cards from './components/Cards';
import Carousel from './components/Carousel';
import Features from './components/Features';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Performance from './components/Performance';
import Tech from './components/Tech';
function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Cards />
      <Tech />
      <Form />
      <Performance />
      <Features />
    </>
  );
}

export default App;

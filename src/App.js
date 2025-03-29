import "./styles.css";
import {register} from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import NavBar from '../src/components/navbar'
import Home from '../src/pages/home'
import About from '../src/pages/about'
import Projects from "./pages/projects";

function App() {
  register();
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;

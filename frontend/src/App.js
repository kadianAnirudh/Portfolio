import logo from './logo.svg';
import './App.scss';
import { About, Work, Skills, Testimonials, Footer, Header } from './container';
import { Navbar } from './components'

function App() {
  return (
    <div className="app">
      <Navbar/>
<Header/>
<About/>
<Work/>
<Skills/>
<Testimonials/>
<Footer/>

    </div>
  );
}

export default App;

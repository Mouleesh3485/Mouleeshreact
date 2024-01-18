import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar';

import Slider from './Components/Slider';
import AboutUs from './Components/Aboutus';
import Service from './Components/Service';
import Item from './Components/Item';
import TeamMembers from './Components/Team';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <AboutUs />
      <Service />
      <Item />
      <TeamMembers />
      <Footer />
    </div>
  );
}

export default App;

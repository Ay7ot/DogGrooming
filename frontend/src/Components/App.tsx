// frontend/src/App.js
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Services from './Services';
import Rates from './Rates';
import Schedule from './Schedule';
import Contact from './Contact';
import BookAppointment from './BookAppointment';
import Gallery from './Gallery';
import CallButton from './CallButton';

function App() {

  return (
    <div className="App font-poppins scroll-smooth">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/rates' element={<Rates />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/bookAppointment' element={<BookAppointment />} />
        <Route path='/gallery' element={<Gallery />} />  
      </Routes>
      <CallButton />
    </div>
  );
}

export default App;

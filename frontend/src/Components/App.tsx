// frontend/src/App.js
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Services from './Services';
import Rates from './Rates';
import Schedule from './Schedule';
import Contact from './Contact';
import BookAppointment from './BookAppointment';

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
      </Routes>
    </div>
  );
}

export default App;

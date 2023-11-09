import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/notesState';
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';


function App() {
  return (
    <NoteState>
      <BrowserRouter>
        <Navbar />
        {/* <Alert message="This is Roshan App" /> */}
        <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;

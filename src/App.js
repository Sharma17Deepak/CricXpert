import './App.css';
import Home from "./components/Home";
import NavBar from './components/NavBar';
import News from './components/News';
import Players from './components/Players';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Series from './components/Series';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/news' element={<News/>}></Route>
        <Route path='/players' element={<Players/>}></Route>
        <Route path='/series' element={<Series/>}></Route>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

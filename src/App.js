
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BookForm from './components/BookForm';
import Books from './components/Books';


function App() {
  return (
    
    <div className="App">
      
      <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/bookForm' element={<BookForm/>}/>
                <Route path='/books' element={<Books/>}/>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

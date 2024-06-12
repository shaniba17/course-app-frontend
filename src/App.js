import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddCourse from './components/AddCourse';
import DeleteCourse from './components/DeleteCourse';
import SearchCourse from './components/SearchCourse';
import ViewCourse from './components/ViewCourse';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<AddCourse/>}/>
     <Route path='/search' element={<SearchCourse/>}/>
     <Route path='/delete' element={<DeleteCourse/>}/>
     <Route path='/view' element={<ViewCourse/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

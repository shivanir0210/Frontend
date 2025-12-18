
import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import StudentList from './component/StudentList';
import AddStudent from './component/AddStudent';
import EditStudent from './component/EditStudent';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StudentList/>}/>
      <Route path="/add" element={<AddStudent/>}/>
      <Route path="/edit/:id" element={<EditStudent/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

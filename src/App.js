// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Users from './Components/Users';
import CreateUsers from './Components/CreateUsers';
import UpdateUsers from './Components/UpdateUsers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Users />}></Route>
            <Route path='/create' element={<CreateUsers />}></Route>
            <Route path='/update/:index' element={<UpdateUsers />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

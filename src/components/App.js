// import logo from './logo.svg';
// import { Container } from 'react-bootstrap'
import {Routes, Route}  from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Landing';
import NavbarCustom from './Navbar';
// import ProjectItem from '../ProjectItem';
import Profile from './profile';
import ProjectItem from './ProjectItem';

function App() {
  return (
    <div className='body'>
      <NavbarCustom/>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<ProjectItem />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>
  );
}

export default App;

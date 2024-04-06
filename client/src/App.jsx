import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';






export default function App() {
  return (
 <BrowserRouter>
 <Header/>
 <Routes>
<Route path="/" element={<Home />}/>
<Route path="/sign-in" element={<SignIn />}/>
<Route path="/sign-up" element={<SignUp />}/>
<Route path="dashboard" element={<Dashboard/>}/>
<Route path="projects" element={<Projects/>}/>
<Route path="about" element={<About/>}/>

 </Routes>

<Footer/>
 
 </BrowserRouter>
  );
}

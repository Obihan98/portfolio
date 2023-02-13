import './index.scss';
import Navbar from './Navbar';
import Background from './Background';
import Home from '../Home';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';
import EducationExperience from '../EducationExperience';
import Contact from '../Contact';

const Layout = () => {
    return <>
        <Navbar/>
        <main className='main'>
            <Background/>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <EducationExperience/>
            <Contact/>
        </main>
    </>
}

export default Layout;
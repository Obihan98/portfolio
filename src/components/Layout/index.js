import './index.scss';
import Navbar from './Navbar';
import Background from './Background';
import Home from '../Home';
import About from '../About';
import Skills from '../Skills';
import Services from '../Services';
import Qualifications from '../Qualifications';
import Contact from '../Contact';

const Layout = () => {
    return <>
        <Navbar/>
        <main className='main'>
            <Background/>
            <Home/>
            <About/>
            <Skills/>
            <Services/>
            <Qualifications/>
            <Contact/>
        </main>
    </>
}

export default Layout;
import './index.scss';
import Navbar from './Navbar';
import Background from './Background';
import Home from '../Home';
import About from '../About';
import Skills from '../Skills';

const Layout = () => {
    return <>
        <Navbar/>
        <main className='main'>
            <Background/>
            <Home/>
            <About/>
            <Skills/>
        </main>
    </>
}

export default Layout;
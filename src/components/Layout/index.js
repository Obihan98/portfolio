import './index.scss';
import Navbar from '../Navbar';
import Background from '../Background';
import Home from '../Home';
import About from '../About';

const Layout = () => {
    return <>
        <Navbar/>
        <main className='main'>
            <Background/>
            <Home/>
            <About/>
        </main>
    </>
}

export default Layout;
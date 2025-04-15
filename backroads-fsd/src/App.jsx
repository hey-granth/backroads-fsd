import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Tours from'./components/Tours';
import Services from './components/Services';

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Tours />
            <Footer />
        </div>
    );
}
export default App;
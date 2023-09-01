import About from '../components/about/About';
import Projects from '../components/Projects/Projects';
import carlosImage from '../images/CarlosSalameFullStackDeveloper.png';
import "./Home.css"



function Home() {
  return (
    <div >
        <img src={carlosImage} alt="Carlos Salame" />
    <About />
    <br/>
    <br />
    <br/>
    <br />
    <br/>
    <br />
    <br/>
    <br />
    <br/>
    <br />
    <br/>
    <br />
  
<Projects />
    </div>
  )
}

export default Home
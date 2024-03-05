import SecondSlider from './secondSlider'
import SimpleSlider from './simpleSlider'
import React from 'react'
import Nav from '../navigation/nav'
import './home.css';
import Footer from '../footer/footer';

function Home() {

  return (
  <>
    <div className='section'>
      <div className='navigation'>
      <Nav/>
      </div>
      
      <div className='slider'>
        <div className='sliderItems'>
          <h1>get the first job in your life</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda officia eveniet eaque, perferendis expedita consequatur porro ullam dignissimos aliquid non voluptatibus quae et facere mollitia exercitationem numquam. Ducimus, reiciendis. Quaerat.</p>
          <button>Get Started</button>
        </div>
        <div className='imageSlider'>
           <img src="/images/sociale.png" alt="slider" />
        </div>

      </div>

          {/* ----------------------------- CARD --------------------------------------------- */}


      <div className='card'>

        <h1>The last job</h1>

        <div className='cardContent'>
        <div className='content'>
          <div className='cardImage'>
            <img src="/images/imageFull.png" alt='image'/>
          </div>
          <div className='cardText'>
            <h2> Full Stack</h2>
            <p>Notre société est en train de chercher des developpeur web Pour un projet web/Plateforme...</p>
          </div>
          <div className='cardBtn'>
            <button>details</button>
          </div>
        </div>


        <div className='content'>
          <div className='cardImage'>
            <img src="/images/imageFull.png" alt='image'/>
          </div>
          <div className='cardText'>
            <h2> Full Stack</h2>
            <p>Notre société est en train de chercher des developpeur web Pour un projet web/Plateforme...</p>
          </div>
          <div className='cardBtn'>
            <button>details</button>
          </div>
        </div>


        <div className='content'>
          <div className='cardImage'>
            <img src="/images/imageFull.png" alt='images'/>
          </div>
          <div className='cardText'>
            <h2> Full Stack</h2>
            <p>Notre société est en train de chercher des developpeur web Pour un projet web/Plateforme...</p>
          </div>
          <div className='cardBtn'>
            <button>details</button>
          </div>
        </div>


        <div className='content'>
          <div className='cardImage'>
            <img src="/images/imageFull.png" alt='images'/>
          </div>
          <div className='cardText'>
            <h2> Full Stack</h2>
            <p>Notre société est en train de chercher des developpeur web Pour un projet web/Plateforme...</p>
          </div>
          <div className='cardBtn'>
            <button>details</button>
          </div>
        </div>
        </div>
        <div className='cardBtnLast'>
          <button>more</button>
        </div>
      </div>


          {/* ------------------------------------------- PROFILES -------------------------------------- */}


      <div className='profile'>
        <h1>DERNIERS PROFILS</h1>
        <SimpleSlider/>
      </div>
        

      {/* ----------------------------------------------- ENTREPRIS ----------------------------*/}


      <div className='entreprise'>
        <h1>Entreprises du moment</h1>
        <SecondSlider/>
      </div>

      {/* ----------------------------------------------- FOOTER ----------------------------*/}

      <div className="footer">
        <Footer/>
      </div>
    </div>
  </>
  )
}

export default Home;

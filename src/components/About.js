import React from 'react'
import photo from './images/PhotoRond.png'
import Footer from './Footer'


function About(props) {
  return (
    <div>


    <div className='main-navbar about-navbar' >
    <div className='main-navbar-left' onClick={()=>{props.onMain()}}>Ilian Bounaceur</div>
    <div className='main-navbar-right' >
      <div>À PROPOS</div>
      <div>TRAVAUX</div>
      <div> <i class="fa-brands fa-instagram"></i> </div>
      <div>FR</div>
    </div>
  </div>
  <div className='about-container'>
    <div className='about-element'> <img className='about-photo' src={photo} alt="selfie d'Ilian" /> </div>
    <div className='about-element' >Ilian Bounaceur</div>
    <div className='about-element'>Illustrateur/Graphiste</div>
    <div className='about-element'>ilian.bounaceur@gmail.com</div>
    <div className='about-element about-main-text'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

<br></br><br></br>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</div>
<div className='trait' ></div>
    <div className='about-section ' >
        <h4>Infos sur le recrutement</h4>
        <p>intéréssé par</p>
        <div className='about-blackbg-element'>
            <div><i class="fa-solid fa-check"></i> Emploi Permanent</div>
            <div><i class="fa-solid fa-check"></i> Contrat </div>
            <div><i class="fa-solid fa-check"></i> Freelance</div>
        </div>

    </div>
    <div className='trait'></div>
 
    <div className='about-section ' >
        <h4>Contact</h4>
        <p>intéréssé par</p>
        <div className='about-blackbg-element'>
        <div> ilian.bounaceur@gmail.com</div>
           
        </div>
        <div className='about-blackbg-element'>
            <div><i class="fa-regular fa-envelope"></i> <i class="fa-brands fa-instagram"></i>  </div>
 

        </div>

    </div>
    <div className='trait'></div>

    <div className='about-section ' >
        <h4>Compétences</h4>
        <div className='about-skills'>

          <div className='about-single-element'>
            Illustration
        </div>        
         <div className='about-single-element'>
            Logo Design
        </div>

        <div className='about-single-element'>
            Character Design
        </div>

        <div className='about-single-element'>
            Vector Art
        </div>
   
        
        
        </div>
       

    </div>
    <div className='trait'></div>

    <div className='about-section ' >
        <h4>Logiciels</h4>
        <div className='about-skills'>

          <div className='about-single-element'>
            Illustrator
        </div>        
         <div className='about-single-element'>
            Photoshop
        </div>

        <div className='about-single-element'>
            Clip Studio Paint
        </div>

        
        
        </div>
       

    </div>
    
    
    <div></div>
    <div></div>
    <div></div>
  </div>
  
  <Footer />
  
  
  
  </div>
  )
}

export default About
import React from "react";
import { LightgalleryItem } from "react-lightgallery";
import { useParams } from "react-router-dom";


function Gallery() {
  const [onSketches, setOnSketches] = React.useState(false);
  const [onLogos, setOnLogos] = React.useState(false);
  const [onDigitalIllustrations, setOnDigitalIllustrations] =
    React.useState(false);
    const { category } = useParams();

  // const [onAll, setOnAll] = React.useState(true);

  const sketches = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
  ];
  const logos = ["1.jpg", "2.jpg"];

  const digitalIllustrations = ["1.jpg", "2.jpg", "3.jpg"];

  const all = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
  ];

  React.useEffect(() => {
    console.log(category);
    if (category === "1") {
      switchToAll();
    }
    if (category === "2") {
      console.log("ping");
      switchToSketches();
    }
    if (category === "3") {
      switchToLogos();
    }
    if (category === "4") {
      switchToDigit();
    }
  }, []);

  function switchToSketches() {
    setOnLogos(false);
    setOnDigitalIllustrations(false);
    // setOnAll(false);
    setOnSketches(true);
  }
  function switchToLogos() {
    console.log('pressed')
    setOnDigitalIllustrations(false);
    // setOnAll(false);
    setOnSketches(false);
    setOnLogos(true);
  }

  function switchToDigit() {
    setOnLogos(false);
    // setOnAll(false);
    setOnSketches(false);
    setOnDigitalIllustrations(true);
  }

  function switchToAll() {
    setOnLogos(false);
    setOnDigitalIllustrations(false);

    setOnSketches(false);
    // setOnAll(true);
  }

  return (
    <div>
  <div className="under-navbar">
  <div className="under-navbar-text">
    <div className="pointOnClick" onClick={switchToAll}>
      TOUT
    </div>
    <div className="pointOnClick" onClick={switchToSketches}>
      SKETCHES
    </div>
    <div className="pointOnClick" onClick={switchToLogos}>
      LOGOS
    </div>
    <div className="pointOnClick" onClick={switchToDigit}>
      DIGITAL ILLUSTRATION
    </div>
  </div>
</div>

<div className="gallery">
  {/* <div className="gallery-element"></div> */}
  {/* <img className="gallery-image" src={process.env.PUBLIC_URL + '/images/sketches/1.jpg'}></img> */}
  {onLogos === true
    ? logos.map((i) => {
        return (
                      
          <LightgalleryItem   src={process.env.PUBLIC_URL + `/images/logos/${i}`}>
          <div className="image-container"><img alt='Illustration' className="gallery-image pointOnClick" src={process.env.PUBLIC_URL + `/images/logos/${i}`} /></div>
        
</LightgalleryItem>

        );
      })
    : onSketches === true
    ? sketches.map((i) => {
        return (
          <LightgalleryItem   src={process.env.PUBLIC_URL + `/images/sketches/${i}`}>
          <div  className="image-container"><img alt='Illustration' className="gallery-image pointOnClick" src={process.env.PUBLIC_URL + `/images/sketches/${i}`} /></div>
        
</LightgalleryItem>
        );
      })
    : onDigitalIllustrations === true
    ? digitalIllustrations.map((i) => {
        return (<LightgalleryItem   src={process.env.PUBLIC_URL + `/images/digitalIllustration/${i}`}>
          <div className="image-container"><img alt='Illustration' className="gallery-image pointOnClick" src={process.env.PUBLIC_URL + `/images/digitalIllustration/${i}`} /></div>
        
</LightgalleryItem>
        );
      })
    : all.map((i) => {
        return (<LightgalleryItem   src={process.env.PUBLIC_URL + `/images/all/${i}`}>
          <div className="image-container"><img alt='Illustration' className="gallery-image pointOnClick" src={process.env.PUBLIC_URL + `/images/all/${i}`} /></div>
        
</LightgalleryItem>
        );
      })}
</div>
</div>
    
  );
}

export default Gallery;

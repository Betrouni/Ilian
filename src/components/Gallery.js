import React from "react";
import Footer from "./Footer";

function Gallery(props) {
  const [onSketches, setOnSketches] = React.useState(false);
  const [onLogos, setOnLogos] = React.useState(false);
  const [onDigitalIllustrations, setOnDigitalIllustrations] =
    React.useState(false);
  // const [onAll, setOnAll] = React.useState(true);

  const sketches = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
  ];
  const logos = ["1.jpg", "2.jpg",];

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

  function switchToSketches() {
    setOnLogos(false);
    setOnDigitalIllustrations(false);
    // setOnAll(false);
    setOnSketches(true);
  }
  function switchToLogos() {
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
      <div className="gallery-navbar">
        <div className="main-navbar">
          <div
            className="main-navbar-left"
            onClick={() => {
              props.onMain();
            }}
          >
            Ilian Bounaceur
          </div>
          <div className="main-navbar-right">
            <div
              onClick={() => {
                props.onAbout();
              }}
            >
              À PROPOS
            </div>
            <div>TRAVAUX</div>
            <div>
              {" "}
              <i class="fa-brands fa-instagram"></i>{" "}
            </div>
            <div>FR</div>
          </div>
        </div>
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
      </div>

      <div className="gallery">
        {/* <div className="gallery-element"></div> */}
        {/* <img className="gallery-image" src={process.env.PUBLIC_URL + '/images/sketches/1.jpg'}></img> */}
        {onLogos === true
          ? logos.map((i) => {
              return (
                <img
                  className="gallery-image pointOnClick"
                  src={process.env.PUBLIC_URL + `/images/logos/${i}`}
                ></img>
              );
              console.log(i);
            })
          : onSketches === true
          ? sketches.map((i) => {
              return (
                <img
                  className="gallery-image pointOnClick"
                  src={process.env.PUBLIC_URL + `/images/sketches/${i}`}
                ></img>
              );
              console.log(i);
            })
          : onDigitalIllustrations === true
          ? digitalIllustrations.map((i) => {
              return (
                <img
                  className="gallery-image pointOnClick"
                  src={
                    process.env.PUBLIC_URL + `/images/DigitalIllustration/${i}`
                  }
                ></img>
              );
              console.log(i);
            })
          : all.map((i) => {
              return (
                <img
                  className="gallery-image pointOnClick"
                  src={process.env.PUBLIC_URL + `/images/all/${i}`}
                ></img>
              );
              console.log(i);
            })}

        {/* <div className="gallery-element"></div>
        <div className="gallery-element"></div>
        <div className="gallery-element"></div>
        <div className="gallery-element"></div>
        <div className="gallery-element"></div>
        <div className="gallery-element"></div>
        <div className="gallery-element"></div>
        <div className="gallery-element"></div>
        <div className="gallery-element"></div>
        <div className="gallery-element"></div>
        <div className="gallery-element"></div>
        <div className="gallery-element"></div> */}
        {/* <img src={process.env.PUBLIC_URL + '/images/test.jpg'}/> */}
      </div>

      <Footer />
    </div>
  );
}

export default Gallery;

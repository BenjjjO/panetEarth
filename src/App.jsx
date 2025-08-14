import React from "react";
import bgVideo from "./assets/bgVideo.mp4";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/hero.jsx";
import Services from "./components/Services/services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Banner2 from "./components/Banner/Banner2.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Aos from "aos";
import "aos/dist/aos.css"

const App = () => {
  React.useEffect(()=>{
    Aos.init({
      duration:1200,
      easing:"ease-in-out"
    })
  });
  return (
    <>
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          src={bgVideo}
        ></video>
        <Navbar />
        <Hero />
        
      </div>
      <div>
       <Services/>
       <Banner/>
       <Banner2/>
       <Footer/>
      </div>
    </>
  );
};

export default App;

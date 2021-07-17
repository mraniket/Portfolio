import React, { useEffect } from 'react';
import './Home.css';
import AOS from "aos";
import Grid from '@material-ui/core/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../images/feelingProud.svg';
import img2 from '../images/fullstack.svg';
import imgcss from '../images/css3.svg';
import imgjs from '../images/javascript.gif';
import imghtml from '../images/html-5.svg';
import imgreact from '../images/react.gif';
import imgphp from '../images/php.png';
import imgboots from '../images/bootstrap.png';
import imgphpm from '../images/phpmyadmin.png';
import 'font-awesome/css/font-awesome.min.css';


export default function Home() {

  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);


  return (
    
      <div class="container-fluid">



          <div class="row row1" >
            <div class="col-sm-6" id="intro" data-aos="fade-in">
              <div className="intro">
                 <p>Hello ! :) I'm Aniket </p>
                 <p className="introSubtitle">Working in virtual world as a Computer Engineer.
                 You are visiting my porfolio, 
                 I hope it will found you little intresting.</p>
              </div>
              <div className="fa_icons">
                
                <a href="https://github.com" target="_blank" className="github">
                 <i class="fa fa-github"></i>
                </a>
                <a href="https://twitter.com/TheAniket_" target="_blank" className="twitter">
                 <i class="fa fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/aniket-shinde-4b72341b5/" target="_blank" className="linkedin">
                 <i class="fa fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/theaniket_007/" target="_blank" className="insta" >
                 <i class="fa fa-instagram"></i>
                </a>
                
              </div>
              <div className="intro">
              <button className="btn"><a className="btn" href="https://drive.google.com/file/d/1CMV_JrW1HNsTAKWl4sF2a4LAwecfjzjL/view?usp=sharing" target="_blank">My Resume</a></button>
              </div>
            </div>
            <div class="col-sm-6" id='imagealign' data-aos="fade-in">
              <img src={img1}   class="img1 float-end"></img>
            </div>  
          </div>

          <h1 className="mid1" data-aos="zoom-in-up" >My Intrests</h1>

      {/* second row */}
          

      <div class="row" >
            <div class="col-sm-6" id='imagealign' data-aos="flip-left" data-aos-duration="900">
              <img src={img2}   class="img2"></img>
            </div>  
            <div class="col-sm-6" id="intro"  data-aos-duration="900">
              <div className="skill">
                 <p> Full Stack Development </p>
              </div>
              <div className="skill_explain" data-aos="flip-right">
                <p>🌟 Developing responsive dynamic web applications skillfully using React and php frameworks</p><br/>
                <p>🌟 Skillfully using the html, css, javascript, bootstrap for designing the we applications </p><br/>
              </div>

              <div className="skill_badges" data-aos="flip-left">
                
               <img src={imghtml} className="htmlsvg"></img>
               <img src={imgcss} className="csspng"></img>
               <img src={imgjs} className="jsgif" ></img>
               <img src={imgboots} className="bootspng" ></img>
               <img src={imgreact} className="reactgif" ></img>
               <img src={imgphp} className="phppng" ></img>
               <img src={imgphpm} className="phpmyadminpng" ></img>
              </div>
            </div>
          </div>

          <p className="mid2"   >Made with ❤️️ by mrAniket</p>
    

      </div>
    
    
  );
}

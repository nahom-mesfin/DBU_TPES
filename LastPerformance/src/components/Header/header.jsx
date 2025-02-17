import React from 'react';
import './header.css';
import grad from '../Assets/hero-img.png';
import graddd from '../Assets/why-us.png';
import dbu from'../Assets/dbsss.jpg'
import { BiLogoHtml5, BiLogoAndroid, BiBuilding } from 'react-icons/bi';
import photo1 from '../Assets/nahom.jpg';

function Header() {
  return (
    <div id='all'>
      <div id='navbarr'>
        <nav>
          <h1>Debre Brehan University</h1>
        </nav>   
      </div>

      {/* Second nav */}
      <div id='secnavbar'>
        <nav>
        <img src={dbu} alt="Logo" id="logo"  width={100} height={50} />
          <li id="list_nav"> 
            <a href="Header" id="nav_link">Home</a>
          </li> 
          <li id="list_nav"> 
            <a href="#secondright" id="nav_link">Needs</a>
          </li>
          <li id="list_nav"> 
            <a href="#thirdpage" id="nav_link">Members</a>
          </li>
          <li id="list_nav"> 
            <a href="#fourthpage" id="nav_link">Contact Us</a>
          </li>
          <li id="list_nav"> 
            <a href="/login" id="nav_link">Login</a>
          </li>
        </nav>
      </div>

      <div id='firstPage'>
        <div id='firstPage1'>
          <h1>DBU Teachers Performance Evaluation System</h1>
          <p>The Debre Brehan University Teachers Performance Evaluation System is a comprehensive digital tool designed to enhance the quality of education and academic administration at Debre Brehan University, one of Ethiopia's prominent higher education institutions.</p>
          <div id='buttons'>
            <button id='button1'>
              <a href="RegistrationForm" id="nav_link">Teacher</a> 
            </button>
            <button>
              <a href="RegistrationForm" id="nav_link">Student</a>  
            </button>
          </div>
        </div>
        <div id='firstPage2'></div>
        <div id="firstimage">
          <img src={grad} alt="" />
        </div>
      </div>

      <div id="secondpage">
        <div id="secondleft">
          <img src={graddd} alt="" height={700} width={700} />
        </div>
        <div id="secondright">
          <h1>Need of Performance Evaluation</h1>
          <p id='par1'>Teacher performance evaluation is a critical component in educational institutions for several reasons. It involves systematically reviewing and assessing the effectiveness of teachers in fostering learning and their impact on student achievement.</p>
          <p id='par2'>Feedback for Improvement: Regular evaluations provide teachers with feedback on their teaching methods, helping them identify strengths and areas for improvement.</p>
          <p id='par2'>Teacher Performance Evaluation: Teachers are evaluated on their teaching effectiveness, teaching skills, and teaching methods.</p>
          <p id='par3'>Ensuring Standards: Evaluations help ensure that teachers meet certain educational standards and are accountable for their students' performance.</p>
          <p id='par4'>Alignment with Student Needs: Evaluations can help teachers adapt their methods to better suit the diverse learning needs of their students.</p>
          <p id='par5'>Alignment with Student Needs: Evaluations can help teachers adapt their methods to better suit the diverse learning needs of their students.</p>
          <p id='par6'>Alignment with Student Needs: Evaluations can help teachers adapt their methods to better suit the diverse learning needs of their students.</p>
        </div>
      </div>

      <div id="thirdpage">
        <h1>Our Members</h1>
        <div id='third1'>  
          <p id='box1'>
          <h2> Students</h2> 
          In our Teacher Performance Evaluation System, students have the opportunity to log in and provide valuable feedback on their teachers.
          </p>
          <p id="box2">
          <h2> Teachers</h2> 

          Teachers log into the system to view evaluation results and feedback, and to evaluate their peers.
          </p>
          <p id="box3">
          <h2> Dept Head </h2> 

          The department head serves as the system admin, overseeing evaluations and ensuring smooth operation.
          </p>
          <p id="box4">
          <h2> College Dean </h2> 

          Collage Dean logs in to the system to evaluate both department heads and teachers.
          </p>
        </div>
      </div>

      <div id="fourthpage">
        <h1>Contact Us</h1>
        <div id='fourth1'>  
          <div id='fourthfirst'>
            <p>Developers</p>
            <p id="esru">
              <a href="mailto:esraelwendimu@gmail.com">Esrael Wendimu</a> 
            </p>           
             <p id="nahi">
             <a href="mailto:Nahommesfin116@gmail.com">Nahom Mesfin</a> 
              </p>
            <p id="nati">
            <a href="mailto:nathanamu17@gmail.com">Dembelo Abebe</a> 
              </p>
          </div>
          <div id="fourthsecond">
            <p>Contact Colleges</p>
            <p id="kenu">Mr. Temesgen T</p>
            <p id="hale">0911223344</p>
          </div>
          <div id="fourththird">
            <p>About Dbu</p>
            <p id="rich">https://dbu.edu.et/</p>
            
          </div>
        </div>
      </div>

      <div id="fifthpage">
        <h4>Copyright &copy; 2024, Debre Berhan University.</h4>
      </div>
    </div>
  );
}

export default Header;


import {FaHtml5,FaCss3Alt,FaReact,FaNodeJs,FaGithub, FaGamepad} from "react-icons/fa"
import {TbBrandJavascript} from "react-icons/tb"
import {SiMongodb,SiRedux,SiExpress,SiBootstrap,SiNetlify,SiJava,SiUnrealengine,SiUnity,SiBlender,SiCsharp} from "react-icons/si"
import Githubcalendar from "react-github-calendar";

import './Skills.css'

function Skills  () {

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title about_skills'>Skills</h2>
     

      <div id='container' className='skills__list'>

      <li  className='skills__list-item btn btn--plain'>
          <SiUnity size={80} id="color"/>
          <h5 > Unity</h5>
        </li>


        <li  className='skills__list-item btn btn--plain'>
          <SiCsharp size={80} id="color"/>
          <h5>C#</h5>
        </li>

        <li  className='skills__list-item btn btn--plain'>
          <SiBlender size={80} id="color"/>
          <h5>Blender</h5>
        </li>

        <li  className='skills__list-item btn btn--plain'>
          <SiUnrealengine size={80} id="color"/>
          <h5>Unreal Engine 5 Basics</h5>
        </li>


        <li  className='skills__list-item btn btn--plain'>
          <FaGamepad size={80} id="color"/>
          <h5>Game Design</h5>
        </li>

         <li  className='skills__list-item btn btn--plain'>
          <FaHtml5 size={80} id="color" />
          <h5> HTML5  </h5>
        </li>

        <li  className='skills__list-item btn btn--plain'>
          <FaCss3Alt size={80} id="color"/>
          <h5> CSS3</h5>
        </li>


        <li  className='skills__list-item btn btn--plain'>
          <TbBrandJavascript size={80} id="color"/>
          <h5> JavaScript</h5>
        </li>

        <li  className='skills__list-item btn btn--plain'>
          <SiJava size={80} id="color"/>
          <h5> Java</h5>
        </li>


        

        <li  className='skills__list-item btn btn--plain'>
          <FaGithub size={80} id="color"/>
          <h5>GitHub</h5>
        </li>


        <li  className='skills__list-item btn btn--plain'>
          <SiNetlify size={80} id="color"/>
          <h5>Netlify</h5>
        </li>

 
      </div>

      {/* <div id="gitstatus">
        <h2 className="section__title">Days I <span className="about_skills"> Coded</span></h2>
      
       <Githubcalendar
          username="imbickydutta"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          color="#2978b5"
    
        />
      </div> */}
    </section>
  )
}

export default Skills

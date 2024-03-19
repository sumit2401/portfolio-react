import React from "react";
import styled from "styled-components";

const Skills = () => {
  return (
    <SkillStyle>
      <div className="skills" id="skills">
        <h2 className="skill-heading">Skills</h2>
        <div className="skill-list">
          <ul >
            <li>Java</li>
            <li>Javascript(ES6+)</li>
            <li>ReactJs</li>
            <li>NodeJS</li>
            <li>ExpressJs</li>
            <li>MongoDB</li>
            <li>SQL</li>

          </ul>
        </div>
      </div>
    </SkillStyle>
  );
};

const SkillStyle = styled.div`
  .skills {
  
    display: flex;
    width: 500px;
    height: 200px;
    margin-top: 500px;
    margin-left: 400px;
    justify-content: space-between;
   
}
.skill-heading{
    font-size: 26px;
     &::before {
      counter-increment: section 2;
      content: "0" counter(section) ".";
      margin-right: 10px;
      color: #64ffda;
      font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
      font-size: clamp(16px, 3vw, 20px);
      font-weight: 400;
    }
    &::after {
      content: "";
      display: block;
      position: relative;
      margin-top: -14px;
      width: 300px;
      height: 1px;
      margin-left: 120px;
      background-color: #495670;
    }
}

.skill-list{
    display: flex;
    margin-left: -420px;

    ul{
        display: flex;
        gap: 20px;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        list-style: none;
        
        
    }
    ul li{
        width: 40px;
        position: relative;
        color: #8892b0;
        font-size: 14px;
        font-family:
        'Fira Code',
        'Fira Mono',
        'Roboto Mono',
        monospace;
        transition: transform 0.3s ease;
       
    
    
        &::before{
         content: "▹";
        position: relative;
        left: -20px;
        color: #64ffda;
        font-size: 14px;
        line-height: 12px
        
        }

    &:nth-child(n+5){
        margin-left: 400px;
    }

    &:hover{
        transform: translateX(10px);
        color: #64ffda;
        font-size: 16px;
        transition-property: transform, color;
        transition-duration: 400ms;
        transition-timing-function: ease-in-out;
    }
    }

}

@media(max-width:1440px){
  .skills{
    margin-left: 200px;
  }
}

@media(max-width:1024px) {
   .skills{
        width: 400px;
        
        margin-left: 120px;
        text-align: center;
        /* align-items: center; */
        /* justify-content: center; */
        
    }

    .skill-heading::after{
       width: 200px;
    }
   .skill-list:nth-child(n-4){
    margin-left: -300px;
   }
   

}
@media(max-width:768px) {
    .skills{
        width: 200px;
        
        margin-left: 80px;
        text-align: center;
        /* align-items: center; */
        /* justify-content: center; */
        
    }

    .skill-heading::after{
       width: 200px;
    }
   
   .skill-list ul{
    flex-wrap: wrap;
    margin-left: 120px;
    margin-top: 40px;


  }

  .skill-list ul li:nth-child(n+5){
  
    margin-left: 150px;
  }

}
@media(max-width:425px) {

    .skills{
        width: 200px;
        margin-left: 50px;
        text-align: center;
        /* align-items: center; */
        /* justify-content: center; */
        
    }
    

    .skill-heading::after{
       width: 200px;
    }

   
  .skill-list ul{
flex-wrap: wrap;
margin-left: 120px;
margin-top: 40px;
width: 300px;



  }

  .skill-list ul li{
    margin-left: -10px;
    
  }

  .skill-list ul li:nth-child(n+5){
    margin-left: 80px;
  }

}
@media  (max-width:375px){

    margin-left: -25px;

    .skill-list{
        margin-left: -50px;
        margin-top: 10px;
    }

    .skill-list ul{
        flex-direction: column;
        flex-wrap: nowrap;
        width: 500px;
        margin-left: 280px;
    }

     .skill-list ul li:nth-child(n+5){
  
    margin-left: -140px;
  }

  .skill-list ul li{
    
    margin-left: -140px;
  }

  .skill-heading::after{
    width: 120px;
  }

    
}

@media  (max-width:320px){

    margin-left: -25px;

    .skill-list{
        margin-left: -50px;
        margin-top: 20px;
    }

    .skill-list ul{
        flex-direction: column;
        flex-wrap: nowrap;
    }

     .skill-list ul li:nth-child(n+5){
  
    margin-left: -140px;
  }

  .skill-list ul li{
    
    margin-left: -140px;
  }

  .skill-heading::after{
    width: 120px;
  }

    
}


`;

export default Skills;

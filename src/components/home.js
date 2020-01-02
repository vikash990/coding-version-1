import React from 'react';
import styled from 'styled-components';
import {NavLink,withRouter } from 'react-router-dom';
import { Slide } from 'react-slideshow-image'


import logoh from '../Images/html.jpg';
import logor from '../Images/react.png';
import logon from '../Images/nodejs.jpg';
import logom from '../Images/mongodb.png';
import logoml from '../Images/machine.jpg';
import logoc from '../Images/c.jpg';
import logoj from '../Images/java.png';
import logoa from '../Images/algorithm.jpg';
import logo1 from '../Images/coding1.jpg';
 import logo2 from '../Images/coding2.jpg';
 import logo3 from '../Images/coding3.jpg';
 import logo4 from '../Images/coding4.jpg';
 

const ContentWrapper = styled('div')`
    min-height: 70vh;
`;

const ContainerSlideWrapper =styled('div')`
           
            width:100%;
            margin: auto;
            min-height:40vh;
  `
  const ImageFirstWrapper =styled('div')`
   
            height: 500px;
            width:100%;
            text-aling:center;
  `
  const proprietes = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true
}


const FirstWrapper =styled('div')`

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-top:5px;
    margin-left:60px;
    marging-right:40px;
    


`
const SecondWrapper=styled('div')`

    display:flex;
    flex-direction:row;
    


`
const ImageWrapper=styled('img')`

    margin-right: 100px;
    border-radius: 10px;


`
const NavLinkWrapper= styled(NavLink)`
    
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      justify-content: center;
  
`
const LogoWrapper =styled('div')`

     display:flex;
     flex-flow:row;
     margin-right: 100px;
     margin-left: 300px;
     margin-top:30px;
     margin-bottom:50px;
     
`
const HeadingWrapper=styled('h4')`
     margin-left:65px;




`

class Home extends React.Component{

    render(){
        return(
           <ContentWrapper>
               <ContainerSlideWrapper>
              <Slide {...proprietes}>
                <ImageFirstWrapper>
                   <img src ={logo1} alt="coding1"/>
                </ImageFirstWrapper>
                <ImageFirstWrapper>
                  <img src ={logo2} alt="coding2"/>
                </ImageFirstWrapper>
                <ImageFirstWrapper>
                <img src ={logo3} alt="coding3"/>
                </ImageFirstWrapper>
                <ImageFirstWrapper>
                <img src ={logo4} alt="coding4"/>
                </ImageFirstWrapper>
              </Slide>

           </ContainerSlideWrapper> 
               <FirstWrapper>
                    <div>
                        <p>Why Coding?</p>
                        <h4>Enhance Your Coding Skills</h4>
                        <p>We are here to fill the gap between the students and their dreams.</p>
                        <p> Enroll with our online programs with our experts and give your career a lift</p>
                    </div>
                    
        
                </FirstWrapper>
                
                    <div>
                    <HeadingWrapper>What we teach.</HeadingWrapper>
                       <LogoWrapper>
                            <NavLinkWrapper to ="/web-development" exact><a href="/web-development"><ImageWrapper src={logoh}/></a></NavLinkWrapper>
                            <NavLinkWrapper to ="/web-development" exact><a href="/web-development"><ImageWrapper src={logor}/></a></NavLinkWrapper>
                            <NavLinkWrapper to ="/web-development" exact><a href="/web-development"><ImageWrapper src={logon}/></a></NavLinkWrapper>
                            <NavLinkWrapper to ="/web-development" exact><a href="/web-development"><ImageWrapper src={logom}/></a></NavLinkWrapper>
                            
                       </LogoWrapper>
                       <LogoWrapper>
                            <NavLinkWrapper to ="/machine-learning" exact><a href="/web-development"><ImageWrapper src={logoml}/></a></NavLinkWrapper>
                            <NavLinkWrapper to ="/c++" exact><a href="/web-development"><ImageWrapper src={logoc}/></a></NavLinkWrapper>
                            <NavLinkWrapper to ="/java" exact><a href="/web-development"><ImageWrapper src={logoj}/></a></NavLinkWrapper>
                            <NavLinkWrapper to ="/algorithm" exact><a href="/web-development"><ImageWrapper src={logoa}/></a></NavLinkWrapper>
                            
                       </LogoWrapper>
                    </div>
                         
                    <div>
                     </div>
                     <div>
                      </div>
                
              
            </ContentWrapper>

        );

    }

}
export default Home;
import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';

import logo from '../Images/vikash.jpg';

const ContentWrapper = styled('div')`
    min-height: 70vh;
`;

const ImageWrapper=styled('img')`

    margin-right: 100px;
    border-radius: 10px;


`

const FirstWrapper =styled('div')`
    margin: 50px;
`

class AboutUs extends React.Component{

    render(){
        return(
           <ContentWrapper> 
               <Row>
                   <Col sm={6} xs={12}>  
                        <FirstWrapper>
                                <h4>Founder</h4>
                                <p>Vikash Dubey</p>
                            <ImageWrapper src={logo}></ImageWrapper>
                        </FirstWrapper>
                    </Col>
                    <Col sm={6} xs={12}>
                    <FirstWrapper>
                       <p>Hi Students,</p>
                        <p> Number of students graduate every year but they are left unemployed.</p>
                        <p> They pay lot of money for graduation but lack in skills.</p>
                        <p>We are here to train students so that they can enhance their career.</p>
                        <p> We will help students to explore their potential.</p>
                        <p>Students can enroll with our online class and our expert will be there taking the class.</p>
                        <p>We will conduct doubts session.</p>
                        <h4>   Our mission:- </h4>
                        <h6>1) Unlock students potential.</h6>
                        <h6>2)Enhance there skills.'</h6>
                        <h6> 3)Teach them in a right way.</h6>
                        </FirstWrapper>
                    </Col>
                </Row>           
           
           </ContentWrapper>

        );

    }

}
export default AboutUs;
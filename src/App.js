import React from 'react';
import styled from 'styled-components';
import Profile from './reuseableComponents/Profile';
import { Button } from 'react-bootstrap';
import headshotTest from './images/headshot-test.jpg';

const Header = styled.h1`
    padding: 15px;
`;

const BrandName = styled.h1`
    font-weight: 200;
    font-size: 2rem;
    letter-spacing: 0.1rem;

`;

const BrandSpan = styled.span`
    font-weight: 800;
`;

const Container = styled.div`
    margin: 20px;
    padding: 20px;
    border: 1px solid black;
    height: 50vh;
`;

const ImgContainer = styled.div`
    border: 1px solid black;
    width: 200px;
    height: 200px;
`;

const HeadshotImage = styled.img`
    width: 100%;
    height: 100%;
`;

const App = () => {
    return (
        <div>
            <Header>
                <BrandName>Connecticut<BrandSpan>Coders</BrandSpan></BrandName>
            </Header>
            <main>
                <div>
                    <h3>Connecticut Codes was created in 2021.. blah blah blah</h3>
                </div>
                {/* <Container>
                    <ImgContainer>
                        <HeadshotImage src={headshotTest} alt="Connecticut Codes member" />
                    </ImgContainer>
                    <h1>Name</h1>
                    <h2>Bio - Add some information about yourself</h2>
                    <p>Software development related media links</p>
                    <p>Embedded Video</p>
                </Container>
                <p>Add card-like elements that bring users to a separate personal page with more information about a specific member. From there, users have an option to go to the portfolio, contact directly, or visit social media.</p> */}
            </main>
            <footer>
                <p>Contact Information</p>
                <p>Group email</p>
                <p>Group phone number</p>
            </footer>
            <Profile />
            
        </div>
    );
}

export default App;
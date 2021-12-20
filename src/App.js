import React from 'react';

import styled from 'styled-components';

const BrandName = styled.h1`
    color: red;
    font-weight: 200;
`;

const BrandSpan = styled.span`
    font-weight: 800;
`;

const App = () => {
    return (
        <div>
            <header>
                <BrandName>Connecticut<BrandSpan>Coders</BrandSpan></BrandName>
            </header>
            <main>
                <p>Add card-like elements that bring users to a separate personal page with more information about a specific member. From there, users have an option to go to the portfolio, contact directly, or visit social media.</p>
            </main>
            <footer>
                <p>Contact Information</p>
                <p>Group email</p>
                <p>Group phone number</p>
            </footer>
        </div>
    );
}

export default App;
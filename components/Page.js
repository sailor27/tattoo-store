import React, { Component } from 'react';
import Meta from './Meta';
import Header from './Header';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';

const theme = {
  green: `#059033`,
  black: `black`

}

const StyledPage = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Lato');
   html {
    box-sizing: border-box;
    font-size: 12px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 2;
    font-family: 'Lato', sans-serif;
  }

   a {
    text-decoration: none;
    color: ${theme.green};
  }
`;

class Page extends Component {
  render(){

    return (
      <ThemeProvider theme={theme}>
       <StyledPage>
        <Meta/>
         <Header theme/>
        </StyledPage>
      </ThemeProvider>
    )
  }
};

export default Page;
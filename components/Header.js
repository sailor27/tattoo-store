import Nav from './Nav';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import styled from 'styled-components';

const Logo = styled.h1`
  font-size: 3rem;
  margin-left: 2rem;
  font-family: 'Abril Fatface', cursive;
  position: relative;
  z-index: 2;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  a {
    padding: 0.5rem 1rem;
    color: ${props => props.theme.green};
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (min-width: 375px){
    .weed {
      background-position: center;
      background-size: cover;
      height: 35px;
      width: 35px;
      background-image: url(../static/sparkling_mj.gif_c200);
    }
  }

  @media (min-width: 775px){
    font-size: 5rem;
    .weed {
      height: 85px;
      width: 85px;
    }
  }
  
    @media (max-width: 1300px) {
    margin: 0;
  }

`;

const StyledHeader = styled.header`
  .bar {

    border-bottom: 5px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;


const Header = () => (
  <StyledHeader>
    <div className='bar'>
      <Logo>
        <div className='weed'/>
        <Link href='/'>
          <a>Gay Famous</a>
        </Link>
        <div className='weed'/>
      </Logo>
      <Nav/>
    </div>
  </StyledHeader>
)

export default Header;
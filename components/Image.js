import React from 'react'
import styled from 'styled-components';

const StyledImage = styled.li`
  list-style: none;
  border: 2px solid ${props => props.color};
  width: ${props => props.width}px;
  height:${props => props.height}px;
  background-image: url(${props => props.url});
  align-self:center;
`;

const Image = (props) => {
  const { url, title, caption, width, height } = props;
  return(
    <StyledImage
      // color={"blue"}
      // width={width}
      height={height}
      url={url}
    >
   
   </StyledImage>
  );

}


export default Image;
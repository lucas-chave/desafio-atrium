import React from 'react';
import styled from 'styled-components';

const ListFooter = (props) => {
  const { title, links } = props;
  const arrLinks = links || []
  return (
    <div>
      <Title>{title}</Title>
      <Links>
        { arrLinks.map((course, index) => (
          <li key={ index }>{ course }</li>
        ))}
      </Links>
    </div>
  );
}

const Title = styled.h4`
  font-family: PT Sans;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  color: #0087E9;
  margin: 13px 0px;
`;

const Links = styled.ul`
  margin: 0;
  padding: 0;
  li {
    font-family: PT Sans;
    font-weight: normal;
    font-size: 17px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #0087E9;
    margin: 13px 0;
    list-style: none;
  }
`;

export default ListFooter;
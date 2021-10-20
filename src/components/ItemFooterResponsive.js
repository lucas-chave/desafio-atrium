import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemFooterResponsive = (props) => {
  const { title, links, key } = props;
  const [dropdown, setDropdown] = useState(false);

  return (
    <Container onClick={() => setDropdown(!dropdown) } key={key}>
      <h5 >{ title }</h5>
      {dropdown && (
      <ul>
        {links.map((link, index) => <li key={ index }>{ link }</li>) }
      </ul>)}
    </Container>
  );
};

ItemFooterResponsive.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

const Container = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  border: 1px solid #0087E9;
  border-radius: 10px;
  margin: 5px;
  position: relative;
  h5 {
    font-family: PT Sans;
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
    color: #0087E9;
    margin: 13px 0px;
    text-align: center;
  }

  ul {
    margin: 0;
    padding: 0 auto;
    li {
      background: #fff;
      list-style: none;
      font-family: PT Sans;
      font-weight: normal;
      font-size: 17px;
      line-height: 22px;
      display: flex;
      align-items: center;
      color: #0087E9;
      margin: 13px 0px;
    }
  }
`;

export default ItemFooterResponsive;
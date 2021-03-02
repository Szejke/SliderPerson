import React from 'react';
import styled from 'styled-components/macro';
import SliderPerson from 'components/organisms/SliderPerson/SliederPerson';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Home = () => {
  return (
    <StyledWrapper>
      <SliderPerson />
    </StyledWrapper>
  );
};

export default Home;

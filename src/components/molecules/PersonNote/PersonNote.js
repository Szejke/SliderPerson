import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { H1 } from 'components/atoms/Paragraphs/Paragraphs';
import AwatarPerson from 'components/atoms/AwatarPerson/AwatarPerson';

const StyledWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.note};
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
  padding: 2%;
  min-width: 20rem;
  min-height: 20rem;
  max-width: 70rem;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledH1 = styled(H1)`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colorPrimary};
`;

const PersonNote = ({ name, avatarUrl }) => {
  return (
    <StyledWrapper>
      <AwatarPerson alt={name} src={avatarUrl} />
      <StyledH1>{name}</StyledH1>
    </StyledWrapper>
  );
};

PersonNote.propTypes = {
  name: PropTypes.string,
  avatarUrl: PropTypes.string,
};

PersonNote.defaultProps = {
  name: '',
  avatarUrl: '',
};

export default PersonNote;

import React, { useState, useEffect } from 'react';
import PersonNote from 'components/molecules/PersonNote/PersonNote';
import Button from 'components/atoms/Buttons/Button';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPersonsAction } from 'redux/actions/persons';
import { getPerson } from 'redux/selector/person';
import { usersGithub } from 'data/usersGithub.json';
import { useTranslation } from 'react-i18next';
import { P } from 'components/atoms/Paragraphs/Paragraphs';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const PersonNoteWrapper = styled.div`
  padding: 2rem;
  min-width: 40rem;
  min-height: 20rem;
`;



const SliderPerson = ({ persons, loading, error, getPersons }) => {
  const { t } = useTranslation();
  const [numberUser, setNumberUser] = useState(() => 0);

  const chckPersonExistinStore = () => {
    return persons.some((e) => e.login === usersGithub[numberUser].user);
  };

  useEffect(() => {
    if (!chckPersonExistinStore()) {
      getPersons(usersGithub[numberUser].user);
    }
  }, [numberUser]);

  const handleClick = (stateButton) => {
    let index = numberUser + stateButton;
    if (index === usersGithub.length) {
      index = 0;
    } else if (index < 0) {
      index = usersGithub.length - 1;
    }
    setNumberUser(index);
  };

  const personNote = () => {
    const { id, name, avatarUrl } = persons.filter(
      (e) => e.login === usersGithub[numberUser].user,
    )[0];
    return <PersonNote key={id} name={name} avatarUrl={avatarUrl} />;
  };

  return (
    <StyledWrapper>
      <Button onClick={() => handleClick(-1)}>{t('previous')}</Button>
      <PersonNoteWrapper>
        {loading && <P data-testid="loading">{t('loading')}</P>}
        {persons.length === 0 && !loading && <P>{t('emptyPersons')}</P>}
        {error && !loading && <P>{error}</P>}
        {chckPersonExistinStore() && <>{personNote()}</>}
      </PersonNoteWrapper>
      <Button onClick={() => handleClick(1)}>{t('next')}</Button>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  const { persons, loading, error } = getPerson(state);
  return { persons, loading, error };
};

const mapDispatchToProps = (dispatch) => ({
  getPersons: (userName) => dispatch(getPersonsAction(userName)),
});

SliderPerson.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      avatar_url: PropTypes.string,
      length: PropTypes.number,
    }),
  ),

  loading: PropTypes.bool,
  error: PropTypes.string,
  getPersons: PropTypes.func.isRequired,
};

SliderPerson.defaultProps = {
  persons: [],
  loading: false,
  error: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderPerson);

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import PersonNote from './PersonNote';

describe(' Tests for Person Note', () => {
  it('Test Props For Person Note', () => {
    const name = 'defaultValueTitle';
    const avatarUrl = 'https://artyaunt.com/wp-content/uploads/2019/09/member-default.jpg';

    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <PersonNote name={name} avatarUrl={avatarUrl} />
      </Provider>,
    );

    const image = getByAltText(name);

    expect(getByText(name)).toBeInTheDocument();
    expect(image.src).toEqual(avatarUrl);
  });
});

import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18n';
import SliederPerson from './SliederPerson';

describe('Tests for SliderPerson', () => {
  it('Test Props For SliderPerson', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <SliederPerson />
        </I18nextProvider>
      </Provider>,
    );

    const elementformStorne = await waitFor(() => getByText('No Persons Available'));
    expect(elementformStorne).toBeInTheDocument();
  });
});

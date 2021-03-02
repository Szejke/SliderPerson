import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import SliederPerson from './SliederPerson';

storiesOf('organisms/SliederPerson', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('SliederPerson', () => {
    return <SliederPerson />;
  });

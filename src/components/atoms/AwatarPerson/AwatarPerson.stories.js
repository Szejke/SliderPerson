import React from 'react';
import { storiesOf } from '@storybook/react';
// import { withKnobs, select } from '@storybook/addon-knobs';
import MyImage from 'assets/my.jpg';
import AwatarPerson from './AwatarPerson';

storiesOf('atoms/AwatarPerson', module)
  // .addDecorator(withKnobs)
  .add('AwatarPerson', () => {
    return <AwatarPerson src={MyImage} />;
  });

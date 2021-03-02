import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';


storiesOf('atoms/Button', module).add('primary button', () => {
  return <Button>Primary</Button>;
});
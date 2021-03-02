import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import PersonNote from './PersonNote';

storiesOf('molecules/PersonNote', module)
  .addDecorator(withKnobs)
  .add('PersonNote', () => {
    const labelName = 'labelName';
    const labelAvatarUrl = 'avatarURl';

    const defaultNameValue = 'defaultValueTitle';
    const defaultAvatarUrl = 'https://artyaunt.com/wp-content/uploads/2019/09/member-default.jpg';

    const groupId = 'GROUP-ID1';

    const nameValue = text(labelName, defaultNameValue, groupId);
    const avatarUrl = text(labelAvatarUrl, defaultAvatarUrl, groupId);

    return <PersonNote name={nameValue} avatarUrl={avatarUrl} />;
  });

import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

// export default {
//   component: Button,
//   title: 'List',
// } as Meta;

// export const DefaultText = () => (
//   <Button>
//     This is a text
//   </Button>
// );

storiesOf('stories of', module).add('button', ()=> <Button> button</Button>);
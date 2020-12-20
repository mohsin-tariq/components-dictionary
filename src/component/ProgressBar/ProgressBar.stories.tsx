import React from 'react';
import { storiesOf } from '@storybook/react';
import ProgressBar from './ProgressBar';

// export default {
//   component: Button,
//   title: 'List',
// } as Meta;

// export const DefaultText = () => (
//   <Button>
//     This is a text
//   </Button>
// );

storiesOf('stories of', module).add('Progress Bar', ()=> <ProgressBar width={75} />);
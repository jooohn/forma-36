import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, selectV2 } from '@storybook/addon-knobs/react';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import Pill from './Pill';

storiesOf('Components|Pill', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <Pill
        status={selectV2(
          'Status',
          {
            'Primary (default)': 'primary',
            Positive: 'positive',
            Negative: 'negative',
          },
          'primary',
        )}
        extraClassNames={text('Extra Class Names', '')}
        label={text('label', 'johannes.bugiel@contentful.com')}
      />
    )),
  )
  .add(
    'onDrag',
    withInfo()(() => (
      <Pill
        status={selectV2(
          'Status',
          {
            'Primary (default)': 'primary',
            Positive: 'positive',
            Negative: 'negative',
          },
          'primary',
        )}
        extraClassNames={text('Extra Class Names', '')}
        label={text('label', 'johannes.bugiel@contentful.com')}
        onDrag={action('onDrag')}
      />
    )),
  )
  .add(
    'onClose',
    withInfo()(() => (
      <Pill
        status={selectV2(
          'Status',
          {
            'Primary (default)': 'primary',
            Positive: 'positive',
            Negative: 'negative',
          },
          'primary',
        )}
        extraClassNames={text('Extra Class Names', '')}
        label={text('label', 'johannes.bugiel@contentful.com')}
        onClose={action('onClick')}
      />
    )),
  );

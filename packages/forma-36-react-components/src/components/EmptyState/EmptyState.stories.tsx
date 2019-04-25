import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import EmptyState from './EmptyState';
import Button from '../Button';

const imageUrl =
  'data:imageProps/png;base64,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';

storiesOf('Components|EmptyState', module)
  .addParameters({
    propTypes: EmptyState['__docgenInfo'],
  })
  .add('default', () => (
    <EmptyState
      className={text('className', '')}
      headingProps={{ text: 'Heading' }}
      descriptionProps={{
        text:
          'This is a descriptionProps for the empty state. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate, sem a porttitor porttitor, velit nulla lacinia dolor, sit amet interdum ligula lectus hendrerit sem. Aliquam ultricies viverra tincidunt.',
      }}
    />
  ))
  .add('with illustration', () => (
    <EmptyState
      className={text('className', '')}
      headingProps={{ text: 'Heading' }}
      imageProps={{
        url: imageUrl,
        width: '340px',
        height: '250px',
        description: 'Image descriptionProps',
      }}
      descriptionProps={{
        text:
          'This is a descriptionProps for the empty state. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate, sem a porttitor porttitor, velit nulla lacinia dolor, sit amet interdum ligula lectus hendrerit sem. Aliquam ultricies viverra tincidunt.',
      }}
    />
  ))
  .add('with children', () => (
    <EmptyState
      className={text('className', '')}
      headingProps={{ text: 'Heading' }}
      descriptionProps={{
        text:
          'This is a descriptionProps for the empty state. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate.',
      }}
    >
      <Button>A button</Button>
    </EmptyState>
  ));

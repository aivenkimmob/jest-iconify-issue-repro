import React from 'react';
import { Icon } from '@iconify/react'
import { render } from '@testing-library/react';
import addIcon from '@iconify/icons-teenyicons/add-outline';

describe('<Icon />', () => {
  it('something', () => {
    render(
      <>
        <Icon icon={addIcon} />
      </>,
    );

    expect(true).toStrictEqual(true);
  });
});

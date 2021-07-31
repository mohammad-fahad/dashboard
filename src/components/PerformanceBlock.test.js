import React from 'react';
import { render } from '@testing-library/react';
import PerformanceBlock from './PerformanceBlock';

describe('<PerformanceBlock />', () => {
  it('Should render CGPACards based on the given mocks', () => {
    const { getAllByTestId } = render(<PerformanceBlock />)
    const cgpaCards = getAllByTestId('cgpa-cards');

    expect(cgpaCards.length).toEqual(6)
  })
})
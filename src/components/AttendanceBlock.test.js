import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AttendanceBlock from './AttendanceBlock';

describe('<AttendanceBlock />', () => {
  it('Should display the required attendance for the choosen semester is 5', () => {
    const { getByText, getByTestId } = render(<AttendanceBlock />)

    const semSelectTag =  getByTestId('select-sem')
    fireEvent.change(semSelectTag, {target: {value: '5'}})

    const attendance = getByText('73');
    expect(attendance).toBeTruthy();
  })

  it('Should display the required attendance for the choosen semester is 4', () => {
    const { getByText, getByTestId } = render(<AttendanceBlock />)

    const semSelectTag =  getByTestId('select-sem')
    fireEvent.change(semSelectTag, {target: {value: '4'}})

    const attendance = getByText('62');
    expect(attendance).toBeTruthy();
  })
})
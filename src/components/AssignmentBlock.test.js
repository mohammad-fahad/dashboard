import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AssignmentBlock from './AssignmentBlock';

describe('<AssignmentBlock />', () => {
  it('Should display the required number of teachers when the choosen semester is accounts', () => {
    const { getAllByText, getByTestId } = render(<AssignmentBlock />)

    const semSelectTag =  getByTestId('select-subject')
    fireEvent.change(semSelectTag, {target: {value: 'Accounts'}})

    const AccountsRows = getAllByText('accounts test');
    expect(AccountsRows.length).toEqual(2);
  })

  it('Should display the required number of teachers when the choosen semester is Economics', () => {
    const { getAllByText, getByTestId } = render(<AssignmentBlock />)

    const semSelectTag =  getByTestId('select-subject')
    fireEvent.change(semSelectTag, {target: {value: 'Economics'}})

    const economicsRow = getAllByText('really looooooonnnnnnnnnnnggggggggg ttext');
    expect(economicsRow.length).toEqual(1);
  })
});
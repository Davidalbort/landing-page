import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { List } from '../../components/List/List';

describe('<List />', () => {
    const dataMock = {
        listItem: ['banana','uva', 'papaya'],
        typeList: 'ul'
    }
    test('Render of component', () => {
        render(<List listItem={dataMock.listItem}/>)
        const item = screen.getByText('banana');
        expect(item).toBeInTheDocument();
    })
});
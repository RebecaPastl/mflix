/**
 * @jest-environment jsdom
 */

import {screen, render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import Navbar from '../Navbar';

it('creates All Movies link', () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );

    expect(screen.getByText(/All Movies/i)).toBeTruthy();

});

it('creates Movies by Genre link', () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );

    expect(screen.getByText(/Movies by Genre/i)).toBeTruthy();

});


it('does not create Wrong link', () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );

    expect(screen.queryByText(/Wrong/i)).toBeNull();

});

it('renders 3 links - icon, all movies, movies by genre', () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );
  
    expect(screen.getAllByRole('link')).toHaveLength(3);

});


it('renders an svg icon', () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );
  
    expect(screen.getAllByRole('img')).toHaveLength(1);

});


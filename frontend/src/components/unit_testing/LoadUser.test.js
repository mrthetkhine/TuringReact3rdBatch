import axios from 'axios';
import { render, screen,waitFor } from '@testing-library/react';

import LoadUser from './LoadUser';
import React from "react";
jest.mock('axios');
const fakeUsers = [{
    "id": 1,
    "name": "Test User 1",
    "username": "testuser1",
}, {
    "id": 2,
    "name": "Test User 2",
    "username": "testuser2",
}];

test('renders LoadUser', async() => {
    axios.get.mockResolvedValue({ data: fakeUsers });
    render(<LoadUser />);

    const text = screen.getByText(/load user/i);
    expect(text).toBeInTheDocument();

});
test('display LoadUser', async() => {
    axios.get.mockResolvedValue({ data: fakeUsers });
    render(<LoadUser />);

    const userListElement = await waitFor(() => screen.getByTestId('user-list'));
    expect(userListElement).toBeInTheDocument();
});
test('it displays a row for each user', async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });
    render(<LoadUser />);


    const userList = await waitFor(() => screen.findAllByTestId('user-item'));
    expect(userList).toHaveLength(2);
});
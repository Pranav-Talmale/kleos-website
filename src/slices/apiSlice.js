import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://c26f0c3b-83ad-4192-9336-57bf1fcfe548-00-355av64wpleyz.sisko.replit.dev/',
    credentials: 'include'
});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({}),
});
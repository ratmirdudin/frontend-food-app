import {apiSlice} from "../apiSlice";

export const authUrl = 'api/auth';

const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: body => ({
                url: `${authUrl}/login`, method: 'post', body: {...body}
            })
        }),
        register: builder.mutation({
            query: body => ({
                url: `${authUrl}/register`, method: 'post', body: {...body}
            })
        }),
    }),
    overrideExisting: false,
})

export const {useLoginMutation, useRegisterMutation} = authApiSlice;
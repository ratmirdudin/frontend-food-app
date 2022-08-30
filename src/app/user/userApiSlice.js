import {apiSlice} from "../apiSlice";

const userUrl = 'api/users';

const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCurrentUser: builder.query({
            query: () => `${userUrl}/me`
        }),
    }),
    overrideExisting: false,
})

export const {useGetCurrentUserQuery} = userApiSlice;
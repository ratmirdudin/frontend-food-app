import {createApi} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {getTokens, logout, saveAuth} from "./auth/authService";

const baseUrl = 'http://localhost:8080/';

const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
        const {accessToken} = getTokens()
        if (accessToken) {
            headers.set("Authorization", `Bearer ${accessToken}`)
        }
        return headers
    }
})

const baseQueryWithReAuth = async (args, api, extraOptions) => {
    let result = null

    try {
        result = await baseQuery(args, api, extraOptions)
    } catch (e) {
        // console.log(e)
    }
    // console.log("Первый результат: ", result)
    if (result?.error && result?.error?.status === 403) {
        // try to get a new token
        const {refreshToken} = getTokens()
        const refreshResult = refreshToken
            ? await baseQuery(`/api/auth/refreshToken/${refreshToken}`, api, extraOptions)
            : null
        // console.log("Второй результат: ", refreshResult)
        if (refreshResult?.data) {
            // console.log("Попытка второго раза")
            // store the new token
            saveAuth(refreshResult.data)

            // retry the initial query
            result = await baseQuery(args, api, extraOptions)
        } else {
            logout()
        }
    }
    console.log("И всё:", result)
    return result
};

export const apiSlice = createApi({
    baseQuery: baseQueryWithReAuth,
    endpoints: () => ({})
});
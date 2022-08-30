import {apiSlice} from "../apiSlice";

const foodUrl = 'api/foods';

const foodApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllFoods: builder.query({
            query: (args) => {
                const {page = 1, limit = 4} = args
                return {
                    url: `${foodUrl}`,
                    params: {page, limit}
                }
            }
        }),
    }),
    overrideExisting: false,
})

export const {useGetAllFoodsQuery} = foodApiSlice;
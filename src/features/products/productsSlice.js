import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],
    searchString: ''
}

const productsSlice = createSlice({
        name: "products",
        initialState,
        reducers: {
            setSearchString: (state, action) => {
                state.searchString = action.payload.searchString;
            },
        },
        extraReducers: (builder) => {
            builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.products = action.payload || []
            })
        }
    }
)


export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts',
    async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        return data
    }
)

export const {setSearchString} = productsSlice.actions

export const selectAllProducts = state => {
    if (state.products.searchString) {
        const result = state.products.products.filter((item) => {
            return item.title.toLowerCase().includes(state.products.searchString.toLowerCase())
        })
        return result

    }
    return state.products.products
}


export default productsSlice.reducer
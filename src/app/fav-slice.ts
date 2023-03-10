import Api from "@/common/axios";
import { user } from "@/common/users";
import { FavCat } from "@/pages/Favorites";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "./hooks";

interface IFavCatState {
    cats?: FavCat[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: IFavCatState = {
    cats: [],
    loading: 'idle'
}

export const getFavorites = createAsyncThunk<any, user>('favorite/getFavorites', async (userData) => {
    try {
        const res = await Api.get('/favourites', { params: { 'sub_id': userData.token } });
        let favs: Array<FavCat> = [];
        res.data.map((cat: FavCat) => {
            favs.push({ id: cat.id, image: { id: cat.image.id, url: cat.image.url } });
        });
        return favs;
    } catch (error) {
        console.log(error);
    }
})

const favSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        removeFavorite(state: IFavCatState, action: PayloadAction<number>) {
            const removeFavorite = state.cats?.filter(
                (cat) => cat.id != action.payload
            )
            state.cats = removeFavorite
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getFavorites.pending, state => {
            state.loading = 'pending'
        })
        builder.addCase(getFavorites.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.cats = action.payload
        })
        builder.addCase(getFavorites.rejected, (state, action) => {
            state.loading = 'failed'
            state.cats = []
        })
    }
})

export const favActions = favSlice.actions

export default favSlice
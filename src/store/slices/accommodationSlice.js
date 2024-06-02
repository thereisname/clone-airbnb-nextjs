import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAccommodation = createAsyncThunk(
  'accommodation/fetchAccommodation',
  async (accommodationId) => {
    const response = await fetch(`/api/accommodations/${accommodationId}`)
    const data = await response.json()
    return data
  },
)

const accommodationSlice = createSlice({
  name: 'accommodation',
  initialState: {
    data: null,
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccommodation.pending, (state) => {
        state.loading = 'loading'
        state.error = null
      })
      .addCase(fetchAccommodation.fulfilled, (state, action) => {
        state.loading = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchAccommodation.rejected, (state, action) => {
        state.loading = 'failed'
        // state.error = action.error.message
      })
  },
})

export const selectAccommodation = (state) => state.accommodation

export default accommodationSlice.reducer

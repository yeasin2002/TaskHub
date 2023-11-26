import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  participants: [],
  nameAndDescription: [],
  sortByAccenting: true,
  searchValue: "",
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setParticipants: (state, action) => {
      if (state.participants.includes(action.payload)) {
        state.participants = state.participants.filter((participant) => participant !== action.payload)
      } else {
        state.participants.push(action.payload)
      }
    },
    setNameAndDescription: (state, action) => {
      if (state.nameAndDescription.includes(action.payload)) {
        state.nameAndDescription = state.participants.filter((element) => element !== action.payload)
      } else {
        state.nameAndDescription.push(action.payload)
      }
    },
    setSortByAccenting: (state) => {
      state.sortByAccenting = (pre) => !pre
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload
    },
  },
})

export const { setNameAndDescription, setParticipants, setSearchValue, setSortByAccenting } = searchSlice.actions
export default searchSlice

import { createSlice } from "@reduxjs/toolkit";

export const calendarDataSlice = createSlice({
  name: "addToCalendar",
  initialState: {
    day: 1,
    bookingData: 'Presencial',
    time: 12,
    count: 12,
  },
  reducers: {
    dateToCalendar: (state, action) => {
      Object.assign(state.value, action.payload);
    },
  },
});

export const { dateToCalendar } = calendarDataSlice.actions;

export default calendarDataSlice.reducer;

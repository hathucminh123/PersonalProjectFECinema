import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingState {
  movieId: string | null;
  movieTitle: string | null;
  movieAge: string | null;
  moviePoster: string | null;

  cinemaId: string | null;
  showtimeId: string | null;
  date: string | null;

  selectedSeats: string[];
  selectedCombos: { id: string; quantity: number }[];
  paymentMethod: string | null;
}

const initialState: BookingState = {
  movieId: null,
  movieTitle: null,
  movieAge: null,
  moviePoster: null,

  cinemaId: null,
  showtimeId: null,
  date: null,

  selectedSeats: [],
  selectedCombos: [],
  paymentMethod: null,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setMovie(state, action: PayloadAction<{ id: string; title: string; age: string; poster: string }>) {
      state.movieId = action.payload.id;
      state.movieTitle = action.payload.title;
      state.movieAge = action.payload.age;
      state.moviePoster = action.payload.poster;
    },
    setCinema(state, action: PayloadAction<string>) {
      state.cinemaId = action.payload;
    },
    setShowtime(state, action: PayloadAction<string>) {
      state.showtimeId = action.payload;
    },
    setDate(state, action: PayloadAction<string>) {
      state.date = action.payload;
    },
    selectSeat(state, action: PayloadAction<string>) {
      if (!state.selectedSeats.includes(action.payload)) {
        state.selectedSeats.push(action.payload);
      }
    },
    removeSeat(state, action: PayloadAction<string>) {
      state.selectedSeats = state.selectedSeats.filter(s => s !== action.payload);
    },
    setCombos(state, action: PayloadAction<{ id: string; quantity: number }[]>) {
      state.selectedCombos = action.payload;
    },
    setPaymentMethod(state, action: PayloadAction<string>) {
      state.paymentMethod = action.payload;
    },
    resetBooking(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setMovie,
  setCinema,
  setShowtime,
  setDate,
  selectSeat,
  removeSeat,
  setCombos,
  setPaymentMethod,
  resetBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;

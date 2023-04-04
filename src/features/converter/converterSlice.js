import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
};

export const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    convertToDecimal: (state, action) => {
      let binary = String(action.payload)
      let largestExponent = binary.length - 1
      let product = 0

      for ( let i = 0; i < binary.length; i++ ){
        if ( binary[i] === '1' ){
          product += 2 ** largestExponent
          largestExponent--    
        } else {
          largestExponent--
        }
      }

      state.value = product
    },
  }
});

export const { convertToDecimal } = converterSlice.actions;

export const selectConvertion = (state) => state.converter.value;

export default converterSlice.reducer;

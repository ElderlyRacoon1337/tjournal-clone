import { HYDRATE } from 'next-redux-wrapper';
import { CreateUserDto } from './../../utils/api/types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import axios from '../../utils/api';
import { LoginDto } from '@/utils/api/types';
import { setCookie } from 'nookies';

// export const login = createAsyncThunk('user/login', async (dto: LoginDto) => {
//   const { data } = await axios.post('auth/login', dto);
//   setCookie(null, 'access_token', data.access_token, {
//     maxAge: 30 * 24 * 60 * 60,
//     path: '/',
//   });
//   return data;
// });

// export const registration = createAsyncThunk(
//   'user/register',
//   async (dto: CreateUserDto) => {
//     const { data } = await axios.post('auth/register', dto);
//     setCookie(null, 'access_token', data.access_token, {
//       maxAge: 30 * 24 * 60 * 60,
//       path: '/',
//     });
//     return data;
//   }
// );

// export const getMe = createAsyncThunk('user/me', async (token: string) => {
//   const { data } = await axios.get('users/me', {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return data;
// });

export enum LoadingStatus {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface UserState {
  data: any;
  loadingStatus: LoadingStatus;
}

const initialState: UserState = {
  data: null,
  loadingStatus: LoadingStatus.NEVER,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(login.pending, (state) => {
    //   state.data = null;
    //   state.loadingStatus = LoadingStatus.LOADING;
    // });
    // builder.addCase(login.fulfilled, (state, action) => {
    //   state.data = action.payload;
    //   state.loadingStatus = LoadingStatus.LOADED;
    // });
    // builder.addCase(login.rejected, (state) => {
    //   state.data = null;
    //   state.loadingStatus = LoadingStatus.ERROR;
    // });

    // builder.addCase(registration.pending, (state) => {
    //   state.data = null;
    //   state.loadingStatus = LoadingStatus.LOADING;
    // });
    // builder.addCase(registration.fulfilled, (state, action) => {
    //   state.data = action.payload;
    //   state.loadingStatus = LoadingStatus.LOADED;
    // });
    // builder.addCase(registration.rejected, (state) => {
    //   state.data = null;
    //   state.loadingStatus = LoadingStatus.ERROR;
    // });

    builder.addCase(HYDRATE, (state, action: any) => {
      if (action.payload.user.data) {
        state.data = { ...action.payload.user.data };
        state.loadingStatus = LoadingStatus.LOADED;
      }
    });
  },
});

export const { setUserData } = user.actions;

export default user.reducer;

// selectors
export const selectUserData = (state: RootState) => state.user.data;
export const selectIsAuth = (state: RootState) => Boolean(state.user.data);

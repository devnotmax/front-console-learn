// // src/redux/features/userSlice.ts
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { IuserSession } from "@/interfaces/Auth";

// interface UserState {
//   dataUser: IuserSession | null;
//   isLoading: boolean;
// }

// const initialState: UserState = {
//   dataUser: null,
//   isLoading: true,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setUser: (state, action: PayloadAction<IuserSession | null>) => {
//       state.dataUser = action.payload;
//       state.isLoading = false; // Indica que ya no está cargando
//     },
//     logout: (state) => {
//       state.dataUser = null;
//       state.isLoading = false; // Indica que ya no está cargando
//     },
//     updateUserImage: (state, action: PayloadAction<string>) => {
//       if (state.dataUser) {
//         state.dataUser.user.image = action.payload;
//       }
//     },
//     setLoading: (state, action: PayloadAction<boolean>) => {
//       state.isLoading = action.payload;
//     },
//   },
// });

// // Exportar las acciones generadas por el slice
// export const { setUser, logout, updateUserImage, setLoading } =
//   userSlice.actions;

// // Exportar el reducer del slice
// export default userSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IuserSession } from "@/interfaces/Auth";

// Estado inicial cargado desde localStorage
const storedUser = typeof window !== "undefined" ? localStorage.getItem("userSession") : null;

interface UserState {
  dataUser: IuserSession | null;
  isLoading: boolean;
}

const initialState: UserState = {
  dataUser: storedUser ? JSON.parse(storedUser) : null,
  isLoading: !storedUser, // Comienza como verdadero si no hay datos guardados
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IuserSession | null>) => {
      state.dataUser = action.payload;
      state.isLoading = false;

      // Guardar datos en localStorage
      if (action.payload) {
        localStorage.setItem("userSession", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("userSession");
      }
    },
    logout: (state) => {
      state.dataUser = null;
      state.isLoading = false;
      localStorage.removeItem("userSession");
    },
    updateUserImage: (state, action: PayloadAction<string>) => {
      if (state.dataUser) {
        state.dataUser.user.image = action.payload;
        localStorage.setItem("userSession", JSON.stringify(state.dataUser));
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, logout, updateUserImage, setLoading } = userSlice.actions;
export default userSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IuserSession } from "@/interfaces/Auth";

// Load user data from localStorage if available
const storedUser = typeof window !== "undefined" ? localStorage.getItem("userSession") : null;

interface UserState {
  dataUser: IuserSession | null;
  isLoading: boolean;
  selectedCourseId?: string; // Add selectedCourseId to the state
}

const initialState: UserState = {
  dataUser: storedUser ? JSON.parse(storedUser) : null,
  isLoading: !storedUser, // Set to true if no stored user data is found
  selectedCourseId: undefined, // Initialize as undefined
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<IuserSession | null>) => {
      state.dataUser = action.payload;
      state.isLoading = false;

      // Store data in localStorage
      if (action.payload) {
        localStorage.setItem("userSession", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("userSession");
      }
    },
    logout: (state: UserState) => {
      state.dataUser = null;
      state.isLoading = false;
      state.selectedCourseId = undefined; // Reset selected course ID on logout
      localStorage.removeItem("userSession");
    },
    updateUserImage: (state: UserState, action: PayloadAction<string>) => {
      if (state.dataUser) {
        state.dataUser.user.image = action.payload;
        localStorage.setItem("userSession", JSON.stringify(state.dataUser));
      }
    },
    setLoading: (state: UserState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setCourseId: (state: UserState, action: PayloadAction<string>) => {
      state.selectedCourseId = action.payload;
    },
  },
});

export const { setUser, logout, updateUserImage, setLoading, setCourseId } = userSlice.actions;
export default userSlice.reducer;

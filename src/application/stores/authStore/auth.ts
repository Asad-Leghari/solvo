import { create } from "zustand";
import axios from "axios";

interface User {
  email: string;
  username: string;
  password: string;
}

interface UsersState {
  email: string;
  username: string;
  password: string;

  users: User[];
  loading: boolean;
  error: string | null;

  setEmail: (value: string) => void;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  resetForm: () => void;

  registerUser: () => Promise<void>;
}

const useAuthStore = create<UsersState>((set, get) => ({
  email: "",
  username: "",
  password: "",
  users: [],
  loading: false,
  error: null,

  setEmail: (value) => set({ email: value }),
  setUsername: (value) => set({ username: value }),
  setPassword: (value) => set({ password: value }),
  resetForm: () => set({ email: "", username: "", password: "" }),

  registerUser: async () => {
    const { email, username, password } = get();
    set({ loading: true, error: null });
    try {
      const response = await axios.post<User>("/api/user", {
        username,
        email,
        password,
      });
      set((state) => ({
        users: [...state.users, response.data],
        loading: false,
      }));
      get().resetForm();
      console.log("User registered:", response.data);
    } catch (err: any) {
      set({ error: err.message || "Failed to register user", loading: false });
    }
  },
}));

export default useAuthStore;

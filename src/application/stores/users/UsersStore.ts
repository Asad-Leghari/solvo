// src/application/stores/users/UsersStore.ts
import { create } from "zustand";
import axios from "axios";

interface User {
  id: string;
  email: string;
  username: string;
}

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
  createUser: (data: {
    username: string;
    email: string;
    password: string;
  }) => Promise<void>;
}

const useUsersStore = create<UsersState>((set) => ({
  users: [],
  loading: false,
  error: null,

  // fetch all users
  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get("/api/user");
      const users = response.data.data.map((u: any) => ({
        id: u._id,
        email: u.email,
        username: u.username,
      }));
      set({ users, loading: false });
    } catch (err: any) {
      set({ error: err.message || "Failed to fetch users", loading: false });
    }
  },

  // create user
  createUser: async (data) => {
    set({ loading: true, error: null });
    try {
      await axios.post("/api/user", data); // 🔥 send schema fields
      // refresh users list
      const response = await axios.get("/api/user");
      const users = response.data.data.map((u: any) => ({
        id: u._id,
        email: u.email,
        username: u.username,
      }));
      set({ users, loading: false });
    } catch (err: any) {
      set({ error: err.message || "Failed to create user", loading: false });
    }
  },
}));

export default useUsersStore;

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
}

const useUsersStore = create<UsersState>((set) => ({
  users: [],
  loading: false,
  error: null,
  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get("/api/user"); // 🔥 plural, check route name
      // Response shape: { success: true, data: [...] }
      const users = response.data.data.map((u: any) => ({
        id: u._id, // 🔥 map _id to id
        email: u.email,
        username: u.username,
      }));

      set({ users, loading: false });
    } catch (err: any) {
      set({ error: err.message || "Failed to fetch users", loading: false });
    }
  },
}));

export default useUsersStore;

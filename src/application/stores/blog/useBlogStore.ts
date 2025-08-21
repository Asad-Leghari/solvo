import { create } from "zustand";
import axios from "axios";
import { Blog } from "@/types/Blog";

interface BlogStore {
  blogs: Blog[];
  loading: boolean;
  error: string | null;
  fetchBlogs: () => Promise<void>;
}

export const useBlogStore = create<BlogStore>((set) => ({
  blogs: [],
  loading: false,
  error: null,

  fetchBlogs: async () => {
    try {
      set({ loading: true, error: null });

      const res = await axios.get("http://localhost:3000/api/blog");

      // normalize API response into Blog[]
      const rawData = Array.isArray(res.data) ? res.data : res.data?.data || [];

      const normalized: Blog[] = rawData.map((item: any) => ({
        id: item._id,
        title: item.title,
        description: item.description,
        image: item.image,
        category: item.category,
        createdBy: item.createdBy?.username || "Anonymous",
        createdAt: item.createdAt,
      }));

      set({ blogs: normalized, loading: false });
    } catch (err: any) {
      set({ error: err.message || "Failed to fetch blogs", loading: false });
    }
  },
}));

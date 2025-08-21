// store/useBlogStore.ts
import { create } from "zustand";
import axios from "axios";
import { Blog } from "@/types/Blog";

interface BlogStore {
  blogs: Blog[];
  loading: boolean;
  error: string | null;
  fetchBlogs: () => Promise<void>;
  createBlog: (blog: Omit<Blog, "id" | "createdAt">) => Promise<void>;
}

export const useBlogStore = create<BlogStore>((set, get) => ({
  blogs: [],
  loading: false,
  error: null,

  fetchBlogs: async () => {
    try {
      set({ loading: true, error: null });
      const res = await axios.get("http://localhost:3000/api/blog");

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

  createBlog: async (blog) => {
    try {
      set({ loading: true, error: null });
      const res = await axios.post("http://localhost:3000/api/blog", blog);

      // merge new blog into state
      const newBlog: Blog = {
        id: res.data._id,
        title: res.data.title,
        description: res.data.description,
        image: res.data.image,
        category: res.data.category,
        createdBy: res.data.createdBy?.username || "Anonymous",
        createdAt: res.data.createdAt,
      };

      set({ blogs: [...get().blogs, newBlog], loading: false });
    } catch (err: any) {
      set({ error: err.message || "Failed to create blog", loading: false });
    }
  },
}));

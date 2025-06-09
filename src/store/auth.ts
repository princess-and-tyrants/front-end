import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  accessToken: string | null;
  isLoggedIn: boolean;
  setToken: (accessToken: string) => void;
  clearToken: () => void;
}

export const getAccessToken = () => {
  const raw = localStorage.getItem("auth-storage");
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);

    return parsed.state?.accessToken ?? null;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      isLoggedIn: false,
      setToken: (accessToken) =>
        set({
          accessToken,
          isLoggedIn: true,
        }),
      clearToken: () =>
        set({
          accessToken: null,
          isLoggedIn: false,
        }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        accessToken: state.accessToken,
        isLoggedIn: state.isLoggedIn,
      }),
    }
  )
);

export default useAuthStore;

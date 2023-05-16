import create from 'zustand';
import { persist } from 'zustand/middleware'

type favoritesReposState = {
    favoritesReposId: number[]
    addFavoriteRepo: (id: number) => void
    removeFavoriteRepo: (id: number) => void
}

export const useFavoritesReposStore = create(persist<favoritesReposState>(
    (set) => ({
        favoritesReposId: [],
        addFavoriteRepo: (id: number) =>
          set((state) => ({
            favoritesReposId: [...state.favoritesReposId, id],
          })),
        removeFavoriteRepo: (id: number) =>
          set((state) => ({
            favoritesReposId: state.favoritesReposId.filter(
              (repoId) => repoId !== id
            ),
          })),
      }) ,{
        name: 'favorites-repos'
    })
);
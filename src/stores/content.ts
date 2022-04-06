import { defineStore } from 'pinia'

import type { Store } from "@/types";

export const useContentStore = defineStore({
  id: 'content',
  state: (): Store => ({
    pages: {
      clothes: {
        name: 'Clothes Store',
        products: [
          { slug: 'newsboy-cap' },
          { slug: 'socks' }
        ],
        blogs: [
          { slug: 'top-three-hats' }
        ]
      },
      hat: {
        name: 'Hat Store',
        products: [
          { slug: 'newsboy-cap' }
        ],
        blogs: [
          { slug: 'top-three-hats' }
        ]
      }
    }
  }),
  getters: {
    getPages: (state: Store) => {
      return (slug: string) => state.pages[slug]
    },
  },
  actions: {}
})

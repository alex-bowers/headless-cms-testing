import { defineStore } from 'pinia'

export const useContentStore = defineStore({
  id: 'content',
  state: () => ({
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
    getPages: (state) => {
      return (slug) => state.pages[slug]
    },
  },
  actions: {}
})

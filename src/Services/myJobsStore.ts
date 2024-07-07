import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Job } from './type';

type StoreData = {
  jobs: Job[];
  addJob: (job: Job) => void;
  removeJob: (id: number) => void;
  reset: () => void;
};

export const useJobStore = create<StoreData>()(
  persist(
    (set) => ({
      jobs: [],
      addJob: (job) =>
        set((state) => ({
          jobs: [...state.jobs, job],
        })),
      removeJob: (id) =>
        set((state) => ({
          jobs: state.jobs.filter((job) => job.id !== id),
        })),
      reset: () => set({ jobs: [] }),
    }),
    {
      name: 'job-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

// import { create } from 'zustand';
// import { persist, createJSONStorage } from 'zustand/middleware';
// import { Data, Product } from './Types';

// type StoreData = {
//   cart: Data;
//   addToCart: (product: Product) => void;
//   removeFromCart: (id: number) => void;
// };

// const useCartStore = create<StoreData>()(
//   persist(
//     (set, get) => ({
//       cart: [],
//       addToCart: (product) =>
//         set((state) => {
//           const cart = get().cart;
//           if (!cart[product.id]) {
//             return { cart: [...state.cart, product] };
//           }

//           return { cart: state.cart };
//         }),
//       removeFromCart: (id) =>
//         set((state) => ({ cart: state.cart.filter((p) => p.id !== id) })),
//     }),
//     {
//       name: 'cart-storage',
//       storage: createJSONStorage(() => sessionStorage),
//     }
//   )
// );

// //   (set) => (
// //   {
// //   cart: [],
// //   addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
// //   removeFromCart: (id) =>
// //     set((state) => ({ cart: state.cart.filter((p) => p.id !== id) })),
// // }
// // )

// export default useCartStore;

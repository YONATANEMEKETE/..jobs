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
      name: 'jobs',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

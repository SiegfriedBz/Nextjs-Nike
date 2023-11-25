import { create } from 'zustand'

type State = {
  mobileMenuIsOpen: boolean
}
type Actions = {
  toggleMobileMenu: (value: boolean | ((value: boolean) => boolean)) => void
  closeMobileMenu: () => void
}

type StoreType = State & Actions

export const useAppStore = create<StoreType>((set) => ({
  mobileMenuIsOpen: false,
  toggleMobileMenu: () =>
    set((state) => {
      return {
        mobileMenuIsOpen: !state.mobileMenuIsOpen,
      }
    }),
  closeMobileMenu: () =>
    set((state) => {
      return {
        mobileMenuIsOpen: false,
      }
    }),
}))

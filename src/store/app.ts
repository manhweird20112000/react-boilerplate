import { create } from 'zustand'
import type { MenuTheme } from 'antd/es/menu/MenuContext'

type State = {
    theme: MenuTheme
}

type Action = {
    setTheme(val: MenuTheme): void
}

export const useAppStore = create<State & Action>((setState) => ({
  theme: 'light',
  setTheme (val: MenuTheme) {
    setState((state) => ({ ...state, theme: val }))
  }
}))

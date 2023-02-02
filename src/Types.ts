import type { ReactNode } from "react"
import type { StyleProp, TextStyle } from "react-native"

export type EventToRender = {
  title?: ReactNode | ContentProps
  description?: ReactNode | ContentProps
  time: ContentProps
  icon: ReactNode
  pressAction?: () => void
}

export type ContentProps = { content: string; style?: StyleProp<TextStyle> }

export type PartiallyOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type PartiallyRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
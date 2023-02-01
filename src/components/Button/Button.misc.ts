import { ReactNode, ButtonHTMLAttributes } from 'react'

export enum StyleVariant {
  'outlined',
  'contained'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
  children?: ReactNode
  title?: string;
  variant?: StyleVariant
  loading?: boolean
}

import { CSSProperties } from 'react'
import styles from '../styles/global.module.css'

interface Props {
  style?: CSSProperties
  rotate?: string
  onClick: () => void
}
export function Indicator({ onClick, style }: Props) {
  return (
    <img
      src={'/indi.png'}
      className={styles.indicator}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  )
}

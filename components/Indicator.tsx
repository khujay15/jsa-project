import { CSSProperties } from 'react'

interface Props {
  style?: CSSProperties
  rotate?: string
  onClick: () => void
}
export function Indicator({ onClick, style }: Props) {
  return (
    <img
      src={'/indi.png'}
      style={{
        width: '35px',
        height: '35px',
        position: 'absolute',
        cursor: 'pointer',
        ...style,
      }}
      onClick={onClick}
    />
  )
}

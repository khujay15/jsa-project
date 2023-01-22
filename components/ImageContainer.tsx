import { ReactNode } from 'react'

interface Props {
  src?: string
  style?: any
  pageNumber?: number
  indicator?: ReactNode
}
export const ImageContainer = ({ src, style, pageNumber, indicator }: Props) => {
  const imageSrc = pageNumber ? `/${pageNumber}.JPG` : src

  return (
    <>
      <img src={imageSrc} style={style ? style : { height: '100vh' }} />
      {indicator}
    </>
  )
}

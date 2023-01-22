import { ReactNode } from 'react'
import Image from 'next/image'

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
      <Image alt="Image" src={imageSrc} style={style ? style : { height: '100vh' }} />
      {indicator}
    </>
  )
}

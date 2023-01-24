import globalStyle from '../styles/global.module.css'
import { ImageMap } from '@qiuz/react-image-map'
import { ReactNode } from 'react'

interface Props {
  mapArea: any[]
  // eslint-disable-next-line no-unused-vars
  onMapClick: (area?, index?) => void
  src: string
  indicator?: ReactNode
}
export function ImageMapContainer({ mapArea, onMapClick, src, indicator }: Props) {
  const map = mapArea.map((area) => ({ render: () => <div className={globalStyle.mapArea} />, ...area }))

  return (
    <div
      style={{
        width: '70%',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ImageMap src={src} map={map} onMapClick={onMapClick} />
      {indicator}
    </div>
  )
}

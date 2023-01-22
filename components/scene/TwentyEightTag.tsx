import { ImageMap } from '@qiuz/react-image-map'
import { useRouter } from 'next/router'
import { useState } from 'react'
import globalStyle from '../../styles/global.module.css'

export function TwentyEightTag() {
  const mapArea = [
    {
      width: '91.1765557163531%',
      height: '55.23671497584542%',
      left: '4.920405209840864%',
      top: '41.98067632850242%',
      render: () => <div className={globalStyle.mapArea} />,
    },
  ]
  const router = useRouter()
  const [isButtonClick, setIsButtonClicked] = useState(false)

  return (
    <div
      style={{
        width: '40vw',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ImageMap src="/28-tag.png" map={mapArea} onMapClick={() => setIsButtonClicked(true)} />
      {isButtonClick && (
        <img
          src="/9-card.png"
          style={{ position: 'absolute', cursor: 'pointer', width: '20vw', bottom: '5vw' }}
          onClick={() => router.push({ query: { page: '28-1' } })}
        />
      )}
    </div>
  )
}

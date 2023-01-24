import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../../styles/Three.module.css'
import globalStyle from '../../styles/global.module.css'
import { Indicator } from '../Indicator'
import { ImageMap } from '@qiuz/react-image-map'
import { useAudio } from '../useAudio'

export function NineFirst() {
  const mapArea = [
    {
      width: '11.002894356005791%',
      height: '10.455598455598455%',
      left: '44.42836468885673%',
      top: '15.945945945945939%',
      render: () => (
        <div
          style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          className={globalStyle.mapArea}
        >
          ⬇
        </div>
      ),
    },
  ]

  const router = useRouter()
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false)
  const [clicked, setClicked] = useState<string[]>([])

  const { curAudio } = useAudio({ audioUrl: '/audio/photo.wav' })

  return (
    <div
      style={{
        width: '70%',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ImageMap
        src="/9-1.jpg"
        map={mapArea}
        onMapClick={() => {
          curAudio?.play()
          setIsButtonClicked(true)
        }}
      />
      <Indicator
        style={{
          bottom: '10%',
          transform: 'rotate(180deg)',
        }}
        onClick={() => router.push({ query: { page: 9, hasPhoto: 1 } })}
      />
      {isButtonClicked && (
        <img
          src="/9-card.png"
          className={styles.card}
          style={clicked.includes('task') ? { display: 'none' } : {}}
          onClick={() => setClicked((prev) => [...prev, 'task'])}
        />
      )}
    </div>
  )
}

import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../../styles/Three.module.css'
import globalStyle from '../../styles/global.module.css'
import { Indicator } from '../Indicator'
import { ImageMap } from '@qiuz/react-image-map'

export function NineFirst() {
  const mapArea = [
    {
      width: '11.002894356005791%',
      height: '10.455598455598455%',
      left: '44.42836468885673%',
      top: '15.945945945945939%',
      render: () => <div className={globalStyle.mapArea} />,
    },
  ]

  const router = useRouter()
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false)
  const [clicked, setClicked] = useState<string[]>([])
  console.log(window.location.hash)

  return (
    <div
      style={{
        width: '70%',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ImageMap src="/9-1.jpg" map={mapArea} onMapClick={() => setIsButtonClicked(true)} />
      <Indicator
        style={{
          bottom: '10%',
          transform: 'rotate(180deg)',
        }}
        onClick={() => router.push({ query: { page: 9 } })}
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

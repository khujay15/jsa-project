import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../../styles/Three.module.css'
import globalStyles from '../../styles/global.module.css'
import { ImageMap } from '@qiuz/react-image-map'

export function Three() {
  const mapArea = [
    {
      width: '20.549927641099856%',
      height: '29.53667953667954%',
      left: '66.7443017366136%',
      top: '28.957528957528954%',
      render: () => <div className={globalStyles.mapArea} />,
    },
    {
      width: '4.341534008683068%',
      height: '6.370656370656371%',
      left: '87.87310057887122%',
      top: '50.38610038610039%',
      render: () => <div className={globalStyles.mapArea} />,
    },
  ]
  const router = useRouter()

  const [clicked, setClicked] = useState<string[]>([])

  return (
    <div
      style={{
        width: '70%',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ImageMap src="/3.jpg" map={mapArea} onMapClick={() => router.push({ query: { page: 4 } })} />
      <img
        src="/3-record.png"
        className={styles.record}
        style={clicked.includes('record') ? { display: 'none' } : {}}
        onClick={() => setClicked((prev) => [...prev, 'record'])}
      />
      <img
        src="/3-task.png"
        className={styles.sheet}
        style={clicked.includes('task') ? { display: 'none' } : {}}
        onClick={() => setClicked((prev) => [...prev, 'task'])}
      />
      <img
        src="/3-card.png"
        className={styles.card}
        style={clicked.includes('card') ? { display: 'none' } : {}}
        onClick={() => setClicked((prev) => [...prev, 'card'])}
      />
    </div>
  )
}

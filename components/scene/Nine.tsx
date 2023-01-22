import { useRouter } from 'next/router'
import { ImageMap } from '@qiuz/react-image-map'
import { Indicator } from '../Indicator'
import styles from '../../styles/global.module.css'

const mapArea = [
  {
    width: '20.409551374819102%',
    height: '33.04247104247104%',
    left: '38.92908827785818%',
    top: '45.86872586872586%',
    render: () => <div className={styles.mapArea} />,
  },
]

export function Nine() {
  const router = useRouter()
  const onMapClick = () => {
    router.push({ query: { page: '9-1' } })
  }

  return (
    <div
      style={{
        width: '70vw',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ImageMap src="/9.JPG" map={mapArea} onMapClick={onMapClick} />
      <Indicator
        style={{
          bottom: '10%',
          transform: 'rotate(180deg)',
        }}
        onClick={() => router.push({ query: { ...router.query, page: 8 } })}
      />
    </div>
  )
}

import { ImageMap } from '@qiuz/react-image-map'
import { useRouter } from 'next/router'
import styles from '../../styles/global.module.css'
import { useAudio } from '../useAudio'

const mapArea = [
  {
    width: '34.157742402315485%',
    height: '8.5%',
    left: '13.024602026049203%',
    top: '43.58657465495608%',
    render: () => <div className={styles.mapArea} />,
  },
]

export function Two() {
  const router = useRouter()
  const { curAudio } = useAudio({ audioUrl: '/audio/door-bell.mp3' })

  function handleMapClick() {
    curAudio.play()
    router.push({ query: { page: 3 } })
  }

  return (
    <div
      style={{
        width: '650px',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ImageMap src={'/2.png'} map={mapArea} onMapClick={handleMapClick} />
    </div>
  )
}

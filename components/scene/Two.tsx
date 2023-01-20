import { ImageMap } from '@qiuz/react-image-map'
import { useRouter } from 'next/router'
import styles from '../../styles/global.module.css'

const mapArea = [
  {
    width: '34.157742402315485%',
    height: '6%',
    left: '13.024602026049203%',
    top: '43.58657465495608%',
    render: () => <div className={styles.mapAreaHover} />,
  },
]

export function Two() {
  const router = useRouter()

  function handleMapClick() {
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

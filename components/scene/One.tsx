import { useRouter } from 'next/router'
import { ImageMap } from '@qiuz/react-image-map'
import styles from '../../styles/global.module.css'

const mapArea = [
  // 문
  {
    width: '12.45007235890015%',
    height: '35.22007722007722%',
    left: '38.350217076700396%',
    top: '46.833976833976834%',
    render: () => <div className={styles.mapAreaHover} />,
  },
  // 초인종
  {
    width: '3.556439942112884%',
    height: '5.094594594594594%',
    left: '51.374819102749605%',
    top: '55.07953667953671%',

    render: () => <div className={styles.mapArea} />,
  },
  // 창문
  {
    width: '12.318379160636763%',
    height: '15.984555984555982%',
    left: '62.083936324167844%',
    top: '45.447876447876475%',
    render: () => <div className={styles.mapArea} />,
  },
]

export function One() {
  const router = useRouter()
  const onMapClick = (area: any, index: number) => {
    switch (index) {
      case 0:
        return
      case 1:
        router.push({ query: { page: 2 } })
        return
      case 2:
        return
      default:
        return
    }
  }

  return (
    <div
      style={{
        width: '70vw',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ImageMap src="/1.JPG" map={mapArea} onMapClick={onMapClick} />
    </div>
  )
}

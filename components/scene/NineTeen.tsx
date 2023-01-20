import { useRouter } from 'next/router'
import { Indicator } from '../Indicator'
import { ImageMap } from '@qiuz/react-image-map'
import styles from '../../styles/global.module.css'

const mapArea = [
  {
    width: '7.670043415340087%',
    height: '38.22393822393823%',
    left: '50.680625904486256%',
    top: '28.764478764478763%',
    render: () => <div className={styles.mapAreaHover} />,
  },
]

export function NineTeen() {
  const router = useRouter()
  return (
    <div
      style={{
        width: '70%',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ImageMap src="/19.jpg" map={mapArea} />
      <Indicator
        style={{
          bottom: '45%',
          right: '33%',
          transform: 'rotate(45deg)',
        }}
        onClick={() => router.push({ query: { page: 8 } })}
      />
    </div>
  )
}

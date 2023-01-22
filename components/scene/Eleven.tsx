import { useRouter } from 'next/router'
import globalStyle from '../../styles/global.module.css'
import { Indicator } from '../Indicator'
import { ImageMap } from '@qiuz/react-image-map'

export function Eleven() {
  const mapArea = [
    {
      width: '8.253256150506513%',
      height: '8.911196911196907%',
      left: '30.535455861070915%',
      top: '43.35907335907335%',
      render: () => <div className={globalStyle.mapArea} />,
    },
  ]

  const router = useRouter()
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
      <ImageMap src="/11.JPG" map={mapArea} onMapClick={() => router.push({ query: { page: 12 } })} />
      <Indicator
        style={{
          bottom: '50%',
          right: '20%',
          transform: 'rotate(90deg)',
        }}
        onClick={() => router.push({ query: { page: 13 } })}
      />
    </div>
  )
}

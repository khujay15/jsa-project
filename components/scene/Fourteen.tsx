import { useRouter } from 'next/router'
import globalStyle from '../../styles/global.module.css'
import { Indicator } from '../Indicator'
import { ImageMap } from '@qiuz/react-image-map'

export function Fourtenn() {
  const mapArea = [
    {
      width: '16.78726483357453%',
      height: '47.68339768339768%',
      left: '18.408556439942114%',
      top: '36.87258687258687%',
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
      <ImageMap src="/14.PNG" map={mapArea} onMapClick={() => router.push({ query: { page: 12 } })} />
      <Indicator
        style={{
          bottom: '10%',
          transform: 'rotate(180deg)',
        }}
        onClick={() => router.push({ query: { page: 14 } })}
      />
    </div>
  )
}

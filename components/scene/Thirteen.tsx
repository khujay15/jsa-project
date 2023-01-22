import { useRouter } from 'next/router'
import globalStyle from '../../styles/global.module.css'
import { Indicator } from '../Indicator'
import { ImageMap } from '@qiuz/react-image-map'
import { useAudio } from '../useAudio'
import { useEffect } from 'react'

export function Thirteen() {
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
  const { curAudio } = useAudio({ audioUrl: '/audio/phone.mp4' })

  useEffect(() => {
    if (router.query.audioPlayed) return
    curAudio?.play()
  }, [router.query, curAudio])

  return (
    <div
      style={{
        width: '70%',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ImageMap src="/13.JPG" map={mapArea} onMapClick={() => router.push({ query: { page: 14 } })} />
      <Indicator
        style={{
          bottom: '50%',
          right: '40%',
          transform: 'rotate(270deg)',
        }}
        onClick={() => router.push({ query: { page: 15 } })}
      />
    </div>
  )
}

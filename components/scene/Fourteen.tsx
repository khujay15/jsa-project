import { useRouter } from 'next/router'
import { Indicator } from '../Indicator'
import { ImageMapContainer } from '../ImageMapContainer'
import { useAudio } from '../useAudio'

export function Fourteen() {
  const mapArea = [
    {
      width: '19.685962373371922%',
      height: '36.26966292134831%',
      left: '26.62807525325615%',
      top: '43.258426966292134%',
    },
  ]

  const router = useRouter()
  const { curAudio } = useAudio({ audioUrl: '/audio/phone-up.mp4' })

  return (
    <div
      style={{
        width: '60%',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ImageMapContainer
        src="/14.PNG"
        mapArea={mapArea}
        onMapClick={() => {
          curAudio?.play()
          const newAudio = new Audio('/audio/phone-talk.mp4')
          newAudio.play()
        }}
        indicator={
          <Indicator
            style={{
              bottom: '10%',
              right: '20%',
              transform: 'rotate(90deg)',
            }}
            onClick={() => router.push({ query: { page: 13, audioPlayed: 0 } })}
          />
        }
      />
    </div>
  )
}

{
  /* <ImageMap src="/14.PNG" map={mapArea} onMapClick={() => router.push({ query: { page: 12 } })} />
<Indicator
  style={{
    bottom: '10%',
    transform: 'rotate(180deg)',
  }}
  onClick={() => router.push({ query: { page: 14 } })}
/> */
}

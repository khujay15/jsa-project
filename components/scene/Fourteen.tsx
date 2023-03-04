import { useRouter } from 'next/router'
import { Indicator } from '../Indicator'
import { ImageMapContainer } from '../ImageMapContainer'
import { useAudio } from '../useAudio'
import { SubscriptionBox } from '../Subscription'
import { useState } from 'react'

const mapArea = [
  {
    width: '19.685962373371922%',
    height: '36.26966292134831%',
    left: '26.62807525325615%',
    top: '43.258426966292134%',
  },
]

const subFourteen = [
  {
    author: '???',
    text: '뭐해? 빨리 계단으로 내려와! 지금 당장 이 곳을 벗어나야해. 그들이 실험을 시작했어! 나 지금 밑에 있다고!',
    enText: `What are you doing? Come down the stairs! We need to get out of here right now. They started the experiment! I'm downstairs right now!`,
  },
  {
    author: 'Mr.Schluss',
    text: '무슨 말이지?',
    enText: `What does it mean?`,
  },
]

export function Fourteen() {
  const router = useRouter()
  const { curAudio } = useAudio({ audioUrl: '/audio/phone-up.mp4' })
  const [isTelClick, setIsTelClick] = useState(false)

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
          setIsTelClick(true)
        }}
        indicator={
          <Indicator
            style={{
              bottom: '10%',
              right: '20%',
              transform: 'rotate(90deg)',
            }}
            onClick={() => router.push({ query: { page: 13, audioPlayed: 1 } })}
          />
        }
      />
      {isTelClick && <SubscriptionBox textSequence={subFourteen} />}
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

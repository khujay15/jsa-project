import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Indicator } from '../Indicator'
import { useAudio } from '../useAudio'
import { ImageMapContainer } from '../ImageMapContainer'
import { SubscriptionBox } from '../Subscription'

const mapArea = [
  {
    width: '15.199710564399421%',
    height: '10.841698841698841%',
    left: '21.562952243125906%',
    top: '36.02316602316602%',
  },
  {
    width: '15.199710564399421%',
    height: '10.841698841698841%',
    left: '64.25470332850941%',
    top: '36.602316602316606%',
  },
  {
    width: '5.214182344428365%',
    height: '6.980694980694981%',
    left: '37.33719247467439%',
    top: '28.88030888030888%',
  },
  {
    width: '5.214182344428365%',
    height: '6.980694980694981%',
    left: '42.83646888567294%',
    top: '28.687258687258687%',
  },
  {
    width: '5.214182344428365%',
    height: '6.980694980694981%',
    left: '48.3357452966715%',
    top: '28.494208494208493%',
  },
]
const subTwelve = [
  {
    author: 'Mr.Schluss',
    text: '오! 라디오가 여기 있었군.',
  },
]

export function Twelve() {
  const router = useRouter()
  const [clicked, setClicked] = useState<number>(null)
  const { curAudio, setCurAudio } = useAudio({ audioUrl: '' })

  useEffect(() => {
    return () => {
      curAudio?.pause()
    }
  }, [curAudio])

  function handleAudio(index, url) {
    setClicked(index)
    if (curAudio) {
      curAudio.pause()
    }
    if (index === clicked) {
      setClicked(null)
      return
    }

    const audio = new Audio(url)
    audio.play()
    setCurAudio(audio)
  }

  return (
    <>
      <ImageMapContainer
        src={'/12.PNG'}
        mapArea={mapArea}
        onMapClick={(_, index) => {
          if (index === 0) {
            handleAudio(0, '/audio/radio-c1.mp4')
          }
          if (index === 1) {
            handleAudio(1, '/audio/radio-c2.mp4')
          }
          if (index === 2) {
            handleAudio(2, '/audio/radio-c3.mp4')
          }
          if (index === 3) {
            handleAudio(3, '/audio/radio-c4.mp3')
          }
          if (index === 4) {
            handleAudio(4, '/audio/radio-c5.mp4')
          }
        }}
        indicator={
          <>
            <Indicator
              style={{
                bottom: '10%',
                transform: 'rotate(180deg)',
              }}
              onClick={() => router.push({ query: { page: 11 } })}
            />
          </>
        }
      />
      <SubscriptionBox textSequence={subTwelve} />
    </>
  )
}

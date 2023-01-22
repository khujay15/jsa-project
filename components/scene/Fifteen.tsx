import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Indicator } from '../Indicator'
import { useAudio } from '../useAudio'

export function Fifteen() {
  const router = useRouter()
  const { curAudio } = useAudio({ audioUrl: '/audio/light.wav' })
  useEffect(() => {
    curAudio?.play()
    return () => {
      curAudio?.pause()
    }
  }, [curAudio])
  return (
    <>
      <video style={{ height: '100vh' }} autoPlay muted loop>
        <source src="/15.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Indicator
        style={{
          bottom: '60%',
          left: '50%',
          transform: 'rotate(220deg)',
        }}
        onClick={() => router.push({ query: { page: 16 } })}
      />
    </>
  )
}

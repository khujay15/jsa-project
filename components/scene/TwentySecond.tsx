import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAudio } from '../useAudio'

export function TwentySecond() {
  const { curAudio } = useAudio({ audioUrl: '/audio/trap.mp4' })
  const router = useRouter()
  useEffect(() => {
    if (!curAudio) return
    curAudio.loop = true
    curAudio?.play()
    return () => {
      curAudio?.pause()
    }
  }, [curAudio])

  useEffect(() => {
    setTimeout(() => {
      router.push({ query: { page: 'end' } })
    }, 3000)
  }, [])

  return (
    <>
      <video style={{ height: '100vh' }} autoPlay muted loop poster="20-2.jpeg">
        <source src="/20-2-rec.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  )
}

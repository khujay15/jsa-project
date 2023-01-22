import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ImageMapContainer } from '../ImageMapContainer'
import { useAudio } from '../useAudio'

export function Forty() {
  const { curAudio } = useAudio({ audioUrl: '/audio/locked.mp4' })
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      curAudio?.play()
    }, 1000)
  }, [curAudio])

  return (
    <ImageMapContainer
      src="/40.JPG"
      mapArea={[
        {
          width: '18.34976483357453%',
          height: '20.077220077220076%',
          left: '81.65023516642546%',
          top: '25.482625482625483%',
        },
      ]}
      onMapClick={() => router.push({ query: { page: 41 } })}
    />
  )
}

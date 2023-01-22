import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ImageContainer } from '../ImageContainer'

export function FourtyOne() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push({ query: { page: 'end' } })
    }, 1500)
  }, [])
  return <ImageContainer style={{ height: '60vh' }} src="/41-end.png" />
}

import { useRouter } from 'next/router'
import { ImageContainer } from '../ImageContainer'
import { Indicator } from '../Indicator'

export function ThirtyNine() {
  const router = useRouter()

  return (
    <ImageContainer
      src="/39.JPG"
      indicator={
        <Indicator
          style={{
            bottom: '10%',
            transform: 'rotate(90deg)',
          }}
          onClick={() => router.push({ query: { page: 40 } })}
        />
      }
    />
  )
}

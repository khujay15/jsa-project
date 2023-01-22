import { useRouter } from 'next/router'
import { ImageContainer } from '../ImageContainer'
import { Indicator } from '../Indicator'

export function Five() {
  const router = useRouter()

  return (
    <ImageContainer
      pageNumber={5}
      indicator={
        <Indicator
          style={{
            bottom: '45%',
            marginLeft: '50px',
            transform: 'rotate(180deg)',
          }}
          onClick={() => router.push({ query: { page: 6 } })}
        />
      }
    />
  )
}

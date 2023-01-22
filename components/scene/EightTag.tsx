import { useRouter } from 'next/router'
import { ImageContainer } from '../ImageContainer'
import { Indicator } from '../Indicator'
import { SubscriptionBox } from '../Subscription'

const subNoPhoto = [
  {
    text: '당신의 ID카드에 아직 사진이 등록되지 않아 해당 구역으로 진입이 불가능합니다.',
  },
]
export function EightTag() {
  const router = useRouter()

  return (
    <>
      <ImageContainer
        src="/8-tag-1.png"
        indicator={
          <>
            {router.query?.hasPhoto && (
              <img
                src="/9-card.png"
                style={{ position: 'absolute', cursor: 'pointer', width: '20vw' }}
                onClick={() => router.push({ query: { page: '7-2' } })}
              />
            )}

            <Indicator
              style={{
                bottom: '10%',
                right: '10%',
                transform: 'rotate(90deg)',
              }}
              onClick={() => router.push({ query: { page: '8' } })}
            />
          </>
        }
      />
      {!router.query?.hasPhoto && <SubscriptionBox textSequence={subNoPhoto} />}
    </>
  )
}

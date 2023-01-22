import { useRouter } from 'next/router'
import { ImageContainer } from '../ImageContainer'
import { Indicator } from '../Indicator'
import { SubscriptionBox } from '../Subscription'

const subSeven = [
  {
    author: 'Mr.Schluss',
    text: '좋은 아침입니다. 저는 오늘부터 새로운 보안직원으로 입사하게 된 Schluss입니다.',
  },
  {
    author: 'Blue Flag Mann',
    text: '...',
  },
  {
    author: 'Mr.Schluss',
    text: '안녕하세요?',
  },
  {
    author: 'Blue Flag Mann',
    text: '...',
  },
  {
    author: 'Mr.Schluss',
    text: '저기요? 제가 지금 라디오를 찾고 있는데요. 혹시 어디에 있는지 아시나요?',
  },
  {
    author: 'Blue Flag Mann',
    text: '라-디-오',
  },
  {
    text: '(방금 무슨 소리지? 굉장한 소음이 들렸다.)',
  },
  {
    author: 'Blue Flag Mann',
    text: '글쎄요. 회사가 워낙 넓어서요. 하지만 조심하세요. 어느 구역은 시간이 다르게 흐르기도 하니까요.',
  },
]

export function SevenSecond() {
  const router = useRouter()
  return (
    <>
      <ImageContainer
        src="/7-2.JPG"
        indicator={
          <Indicator
            style={{
              bottom: '55%',
              left: '30%',
              transform: 'rotate(270deg)',
            }}
            onClick={() => router.push({ query: { page: 10 } })}
          />
        }
      />
      <SubscriptionBox textSequence={subSeven} />
    </>
  )
}

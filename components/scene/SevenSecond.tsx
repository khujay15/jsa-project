import { useRouter } from 'next/router'
import { ImageContainer } from '../ImageContainer'
import { Indicator } from '../Indicator'
import { SubscriptionBox } from '../Subscription'
import { useAudio } from '../useAudio'

export function SevenSecond() {
  const router = useRouter()

  const { curAudio } = useAudio({ audioUrl: '/audio/radio-noise.mp4' })
  const subSeven = [
    {
      author: 'Mr.Schluss',
      text: '좋은 아침입니다. 저는 오늘부터 새로운 보안직원으로 입사하게 된 Schluss입니다.',
      enText: `Good morning. I'm Schluss, and I'm a new security employee from today.`,
    },
    {
      author: 'Blue Flag Mann',
      text: '...',
      enText: '...',
    },
    {
      author: 'Mr.Schluss',
      text: '안녕하세요?',
      enText: `Hello?`,
    },
    {
      author: 'Blue Flag Mann',
      text: '...',
      enText: '...',
    },
    {
      author: 'Mr.Schluss',
      text: '저기요? 제가 지금 라디오를 찾고 있는데요. 혹시 어디에 있는지 아시나요?',
      enText: 'Excuse me? I’m looking for the radio. Do you know where it is?',
    },
    {
      author: 'Blue Flag Mann',
      text: '라-디-오',
      enText: `Ra-Di-O`,
      onActive: () => curAudio?.play(),
    },
    {
      text: '(방금 무슨 소리지? 굉장한 소음이 들렸다.)',
      enText: '(What was that sound? I heard a very weird noise.)',
    },
    {
      author: 'Blue Flag Mann',
      text: '글쎄요. 회사가 워낙 넓어서요. 하지만 조심하세요. 어느 구역은 시간이 다르게 흐르기도 하니까요.',
      enText: `Well, the company is so huge. But be careful. In some areas, time passes differently.`,
    },
  ]

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

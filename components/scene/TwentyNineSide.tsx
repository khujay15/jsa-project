import { useRouter } from 'next/router'
import { ImageContainer } from '../ImageContainer'
import { Indicator } from '../Indicator'
import { SubscriptionBox } from '../Subscription'

const subTwnetynineSide = [
  {
    author: 'Space mann ',
    text: `‘Ungleich’ 놈들은 어디있는거야? 이봐 당신 이곳엔 무슨 일이지? 혹시 너도 ‘Ungleich’의 한패야?`,
  },
  {
    author: 'Mr.Schluss',
    text: '아니요. 저는 보안팀에 새로 입사한 Schulss 입니다. 그저 회사를 둘러보고 있었습니다.',
  },
  {
    author: 'Space mann ',
    text: '이 곳은 출입금지야. 괜한 오해 받기 싫으면 규칙대로 행동해.',
  },
]
export function TwentyNineSide() {
  const router = useRouter()
  return (
    <>
      <ImageContainer
        src="/29-b-p.png"
        indicator={
          <>
            <Indicator
              style={{
                bottom: '10%',
                transform: 'rotate(180deg)',
              }}
              onClick={() => router.push({ query: { page: 29 } })}
            />
          </>
        }
      />
      <SubscriptionBox textSequence={subTwnetynineSide} />
    </>
  )
}

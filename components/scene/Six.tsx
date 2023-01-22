import { useRouter } from 'next/router'
import { useState } from 'react'
import { ImageMapContainer } from '../ImageMapContainer'
import { Indicator } from '../Indicator'
import { SubscriptionBox } from '../Subscription'

const subSix = [
  {
    author: 'Mr.Schluss',
    text: 'Hello? 도움이 필요하신가요?',
  },
  {
    text: '(그는 반응이 없다)',
  },
  {
    author: 'Mr.Schluss',
    text: '오! 당신은 분명히 도움이 필요해보이네요.',
  },
  {
    author: 'Box man',
    text: '알면 멍청하게 서있지 말고 라디오나 틀어줘!',
  },
  {
    author: 'Mr.Schluss',
    text: '네? 박스를 먼저 치우는게 낫지 않을까요? 라디오라뇨? 라디오는 어디에 있죠?',
  },
  {
    author: 'Box man',
    text: '라디오 속엔 세상이 있다고. 박스는 건들지마. 난 지금 굉장한 안정감을 느끼는 중이야.',
  },
  {
    author: 'Mr.Schluss',
    text: '그렇다면 라디오는 어디에 있나요?',
  },
  {
    author: 'Box man',
    text: '그건 모르지 알아서 찾아봐. 저기 어딘가 있겠지.',
  },
]

const mapArea = [
  {
    width: '58.18089725036179%',
    height: '80.91891891891889%',
    left: '25.904486251808972%',
    top: '12.857142857142856%',
  },
]

export function Six() {
  const router = useRouter()
  const [isBoxClick, setIsBoxClick] = useState(false)
  return (
    <>
      <ImageMapContainer
        src="/6.JPG"
        mapArea={mapArea}
        indicator={
          <Indicator
            style={{
              bottom: '50%',
              left: '20%',
              transform: 'rotate(270deg)',
            }}
            onClick={() => router.push({ query: { page: 7 } })}
          />
        }
        onMapClick={() => setIsBoxClick(true)}
      />
      {isBoxClick && <SubscriptionBox textSequence={subSix} />}
    </>
  )
}

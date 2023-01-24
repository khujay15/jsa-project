import { useRouter } from 'next/router'
import { useState } from 'react'
import { ImageContainer } from '../ImageContainer'
import { Indicator } from '../Indicator'
import { SubscriptionBox } from '../Subscription'
import Styles from '../../styles/global.module.css'

const subSixteen = [
  {
    author: 'Mr.Certain',
    text: '오! 진정한 JSA의 직원이 되신건가요?',
    enText: `oh! Have you finally become a true employee of JSA?`,
  },
  {
    author: 'Mr.Schluss',
    text: '안녕하세요. 저를 아시나요? 저는 이번에 보안팀에 근무하게 된 Schluss입니다. 방금 전화를 건게 당신인가요?',
    enText: `Hello? Do you know me? I’m the newcomer from today. Are you the one who just called?`,
  },
  {
    author: 'Mr.Certain',
    text: '새로운 직원이라고요? 아 그렇군요. 제가 착각한 모양입니다. 아니요. 저는 우연히 이 길을 지나가고 있던 것 뿐입니다. 보안상의 이유로 곳곳에 trap이 설치 되어있으니 조심하세요.',
    enText: `Are you a newcomer? Oh, I see. It looks like I was mistaken. No. I was just passing this road by chance. For security reasons, traps are installed everywhere, so be careful.`,
  },
  {
    author: 'Mr.Schluss',
    text: '그렇군요. 친절하시네요. 감사합니다.',
    enText: `Okay. You’re so sweet. Thanks.`,
  },
]

export function SixTeen() {
  const router = useRouter()

  const [isSubFinish, setIsSubFinish] = useState(false)
  const [showImage, setShowImage] = useState(true)
  return (
    <>
      <ImageContainer
        pageNumber={16}
        indicator={
          <Indicator
            style={{
              bottom: '50%',
            }}
            onClick={() => router.push({ query: { page: 17 } })}
          />
        }
      />
      {showImage && (
        <img
          src="/16-p.PNG"
          className={isSubFinish ? Styles.fadeOutImage : ''}
          style={{ position: 'absolute', width: '30vw', marginBottom: '10vw' }}
        />
      )}
      <SubscriptionBox
        textSequence={subSixteen}
        onFinishSub={() => {
          setIsSubFinish(true)
          setTimeout(() => {
            setShowImage(false)
          }, 2000)
        }}
      />
    </>
  )
}

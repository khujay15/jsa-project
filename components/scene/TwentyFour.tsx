import { useRouter } from 'next/router'
import { useState } from 'react'
import { ImageMapContainer } from '../ImageMapContainer'
import { Indicator } from '../Indicator'
import { SubscriptionBox } from '../Subscription'
import Styles from '../../styles/global.module.css'

const subTwnetyfour = [
  {
    author: 'Twins',
    text: `오! 우리는 아무 짓도 안했어요. 우린 ‘Ungleich’가 절대 아니에요!`,
  },
  {
    author: 'Mr.Schluss',
    text: '네? 저는 단지 보안팀 직원으로서 회사를 둘러보던 중입니다.',
  },
  {
    author: 'Twins',
    text: '오 제발 믿어주세요. 우리는 일주일을 공평하게 나누기 위해 같은 스웨터를 입기까지 한다고요.',
  },
  {
    author: 'Mr.Schluss',
    text: '날짜를 나눠서 입어도 되잖아요.',
  },
  {
    author: 'Twins',
    text: '그건 불공평하잖아요. 일주일은 7일인 인걸요.',
  },
  {
    author: 'Mr.Schluss',
    text: '아하 그럼 곤란하겠네요.',
  },
]

export function TwentyFour() {
  const router = useRouter()
  const [isSubFinish, setIsSubFinish] = useState(false)
  const [showImage, setShowImage] = useState(true)

  return (
    <>
      <ImageMapContainer
        src="/24.jpg"
        onMapClick={() => router.push({ query: { page: 25 } })}
        mapArea={[
          {
            width: '7.670043415340087%',
            height: '38.22393822393823%',
            left: '50.680625904486256%',
            top: '28.764478764478763%',
          },
        ]}
        indicator={
          <Indicator
            style={{
              bottom: '40%',
              right: '35%',
              transform: 'rotate(30deg)',
            }}
            onClick={() => router.push({ query: { page: 26 } })}
          />
        }
      />
      {router.query?.showTwins && showImage && (
        <img
          className={isSubFinish ? Styles.fadeOutImage : ''}
          style={{ position: 'absolute', width: '30vw', right: '30%' }}
          src="/24-p.PNG"
        />
      )}
      {router.query?.showTwins && (
        <SubscriptionBox
          textSequence={subTwnetyfour}
          onFinishSub={() => {
            setTimeout(() => {
              setShowImage(false)
            }, 2000)
            setIsSubFinish(true)
          }}
        />
      )}
    </>
  )
}

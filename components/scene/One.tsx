import { useRouter } from 'next/router'
import { ImageMap } from '@qiuz/react-image-map'
import styles from '../../styles/global.module.css'
import { SubscriptionBox, TextSequence } from '../Subscription'
import { useState } from 'react'

const mapArea = [
  // 문
  {
    width: '12.45007235890015%',
    height: '35.22007722007722%',
    left: '38.350217076700396%',
    top: '46.833976833976834%',
    render: () => <div className={styles.mapArea} />,
  },
  // 초인종
  {
    width: '3.556439942112884%',
    height: '5.094594594594594%',
    left: '51.374819102749605%',
    top: '55.07953667953671%',

    render: () => <div className={styles.mapArea} />,
  },
  // 창문
  {
    width: '12.318379160636763%',
    height: '15.984555984555982%',
    left: '62.083936324167844%',
    top: '45.447876447876475%',
    render: () => <div className={styles.mapArea} />,
  },
]

const subOne: TextSequence[] = [
  {
    text: '항공 우주 산업 회사의 새로운 보안팀 직원으로 취직하게 된 Mr.Schluss. <br /> 평범한 회사처럼 보이지만 최근 사내 ‘Ungleich’라는 불법 스쾃의 활동으로 골머리를 썩고있다.',
  },
]

const subBlue: TextSequence[] = [
  {
    text: '첫 출근에 너무 예의가 없는게 아닐까? ',
    author: 'Mr.Schluss',
  },
]
const subWindow: TextSequence[] = [
  {
    text: '첫 출근에 훔쳐보는건 너무 음침한 것 같다.',
    author: 'Mr.Schluss',
  },
]

export function One() {
  const router = useRouter()
  const [isBlueDoorClicked, setIsBlueDoorClicked] = useState<boolean>(false)
  const [isWindowClicked, setIsWindowClicked] = useState<boolean>(false)

  const onMapClick = (area: any, index: number) => {
    switch (index) {
      case 0:
        setIsBlueDoorClicked(true)
        return
      case 1:
        router.push({ query: { page: 2 } })
        return
      case 2:
        setIsWindowClicked(true)
        return
      default:
        return
    }
  }

  return (
    <div
      style={{
        width: '70vw',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ImageMap src="/1.JPG" map={mapArea} onMapClick={onMapClick} />
      <SubscriptionBox textSequence={subOne} />
      {isBlueDoorClicked && <SubscriptionBox textSequence={subBlue} />}
      {isWindowClicked && <SubscriptionBox textSequence={subWindow} />}
    </div>
  )
}

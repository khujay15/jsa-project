import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../../styles/Three.module.css'
import globalStyles from '../../styles/global.module.css'
import { ImageMap } from '@qiuz/react-image-map'
import { SubscriptionBox } from '../Subscription'

const mapArea = [
  {
    width: '20.549927641099856%',
    height: '29.53667953667954%',
    left: '66.7443017366136%',
    top: '28.957528957528954%',
    render: () => <div className={globalStyles.mapArea} />,
  },
  {
    width: '4.341534008683068%',
    height: '6.370656370656371%',
    left: '87.87310057887122%',
    top: '50.38610038610039%',
    render: () => <div className={globalStyles.mapArea} />,
  },
]
const textSequence = [
  {
    author: '???',
    text: '반갑습니다. Mr. Schluss. 최근 우리 회사는 불법 스쾃 ‘Ungleich’ 때문에 많은 피해를 보고 있습니다. ‘Equal Space, Equal Mankind’의 모토를 가진 우리 회사의 근간을 위협하는 그들은 주로 신입 직원들에게 접근하여 잘못된 사상을 주입시켜 선동하니 부디 그들의 흔적을 찾아주세요. ',
    enText: `Nice to meet you, Mr. Schluss. Recently, our company has been suffering a lot from illegal squatter 'Ungleich'. Threatening the foundation of our company, which has the motto of ‘Equal Space, Equal Mankind’, they mainly approach new employees and incite them to instigate false ideas, so please patrol our company.`,
  },
  {
    author: '???',
    text: '이것은 당신이 입사 지원서에 제출하신 내용으로 발급된 ID카드와 서류들입니다. 회사 내 원활한 이동을 위해 제일 먼저 ID카드에 등록될 사진을 촬영하십시오. 엘리베이터에 탑승하면 자동으로 해당 층수에 도착할 것입니다. 참고로 우리는 전 직원의 완벽한 자유를 보장합니다. 그러기 위해서는 근간에 규칙이라는 것이 존재합니다. 돌발행동은 엄격히 금지되어 있습니다.그럼 행운을 빕니다.',
    enText: `These are the ID card and documents you submitted to the job application form. Take photos that will be registered on your ID card first for smooth movement within our company. Once you get on the elevator, you will automatically arrive on the floor. For your information, we guarantee the complete freedom of all employees. In order to do that, we have rules. Unexpected behavior is strictly prohibited. Good luck.`,
  },
]

export function Three() {
  const router = useRouter()

  const [clicked, setClicked] = useState<string[]>([])
  const [showDoc, setShowDoc] = useState<boolean>(false)

  return (
    <div
      style={{
        width: '70vw',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ImageMap src="/3.jpg" map={mapArea} onMapClick={() => router.push({ query: { page: 4 } })} />
      {showDoc && (
        <>
          <img
            src="/3-record.png"
            className={styles.record}
            style={clicked.includes('record') ? { display: 'none' } : {}}
            onClick={() => setClicked((prev) => [...prev, 'record'])}
          />
          <img
            src="/3-task.png"
            className={styles.sheet}
            style={clicked.includes('task') ? { display: 'none' } : {}}
            onClick={() => setClicked((prev) => [...prev, 'task'])}
          />
          <img
            src="/3-card.png"
            className={styles.card}
            style={clicked.includes('card') ? { display: 'none' } : {}}
            onClick={() => setClicked((prev) => [...prev, 'card'])}
          />
        </>
      )}

      <SubscriptionBox textSequence={textSequence} onFinishSub={() => setShowDoc(true)} />
    </div>
  )
}

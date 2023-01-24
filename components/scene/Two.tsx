import { ImageMap } from '@qiuz/react-image-map'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../../styles/global.module.css'
import { SubscriptionBox } from '../Subscription'
import { useAudio } from '../useAudio'

const mapArea = [
  {
    width: '34.157742402315485%',
    height: '8.5%',
    left: '13.024602026049203%',
    top: '43.58657465495608%',
    render: () => <div className={styles.mapArea} />,
  },
]

const subTwo = [
  {
    author: '???',
    text: '누구세요?',
    enText: 'Hello?',
  },
  {
    author: 'Mr.Schluss',
    text: '안녕하세요. 오늘부터 보안팀으로 출근하게 된 Schluss Jung 입니다.',
    enText: `Hello, I'm Schluss Jung, and work as a security team from today.`,
  },
  {
    author: '???',
    text: '반갑습니다. 들어오세요.',
    enText: 'Welcome. Come in.',
  },
]

export function Two() {
  const router = useRouter()
  const { curAudio } = useAudio({ audioUrl: '/audio/door-bell.mp3' })
  const [isBellClicked, setIsBellClicked] = useState(false)

  function handleMapClick() {
    curAudio.play()
    setIsBellClicked(true)
  }

  return (
    <div
      style={{
        width: '650px',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ImageMap src={'/2.png'} map={mapArea} onMapClick={handleMapClick} />
      {isBellClicked && (
        <SubscriptionBox textSequence={subTwo} onFinishSub={() => router.push({ query: { page: 3 } })} />
      )}
    </div>
  )
}

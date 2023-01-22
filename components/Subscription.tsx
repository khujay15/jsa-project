export interface TextSequence {
  text: string
  author?: string
}
interface Props {
  textSequence: TextSequence[]
  onFinishSub?: () => void
}

import { useEffect, useState } from 'react'
import styles from '../styles/global.module.css'

export function SubscriptionBox({ textSequence, onFinishSub }: Props) {
  const [curIndex, setCurIndex] = useState<number>(0)
  const [finishSub, setFinishSub] = useState<boolean>(false)

  useEffect(() => {
    if (curIndex === textSequence.length) {
      onFinishSub?.()
      setFinishSub(true)
    }
  }, [curIndex])
  if (finishSub) return null

  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.subscriptionBox} onClick={() => setCurIndex((prev) => prev + 1)}>
        <div className={styles.author}>{textSequence[curIndex]?.author}</div>
        <span dangerouslySetInnerHTML={{ __html: textSequence[curIndex]?.text }}></span>
      </div>
    </>
  )
}

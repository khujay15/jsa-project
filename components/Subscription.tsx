export interface TextSequence {
  text: string
  author?: string
  enText: string
}
interface Props {
  textSequence: TextSequence[]
  onFinishSub?: () => void
}

import { useEffect, useState } from 'react'
import styles from '../styles/global.module.css'
import { usePage } from './usePage'

export function SubscriptionBox({ textSequence, onFinishSub }: Props) {
  const [curIndex, setCurIndex] = useState<number>(0)
  const [finishSub, setFinishSub] = useState<boolean>(false)
  const { isKorean } = usePage()

  useEffect(() => {
    if (curIndex === textSequence.length) {
      onFinishSub?.()
      setFinishSub(true)
    }
  }, [curIndex])
  if (finishSub) return null

  const noAuthorStyle = !textSequence[curIndex]?.author
    ? {
        alignItems: 'center',
        padding: '0px',
      }
    : {}

  const curText = isKorean ? textSequence[curIndex]?.text : textSequence[curIndex]?.enText

  return (
    <>
      <div className={styles.overlay}></div>
      <div
        className={styles.subscriptionBox}
        onClick={() => setCurIndex((prev) => prev + 1)}
        style={{ ...noAuthorStyle }}
      >
        <div className={styles.author}>{textSequence[curIndex]?.author}</div>
        <span dangerouslySetInnerHTML={{ __html: curText }}></span>
      </div>
    </>
  )
}

import { useEffect, useState } from 'react'

interface Props {
  audioUrl?: any
}
export function useAudio({ audioUrl }: Props) {
  const [curAudio, setCurAudio] = useState<HTMLAudioElement>(null)
  useEffect(() => {
    if (!audioUrl) return
    const audio = new Audio(audioUrl)
    setCurAudio(audio)
  }, [audioUrl])

  return {
    curAudio,
    setCurAudio,
  }
}

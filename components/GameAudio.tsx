interface Props {
  audio: HTMLAudioElement
}
export function GameAudio({ audio }: Props) {
  return (
    <div style={{ position: 'absolute', color: 'white' }}>
      <div onClick={() => audio?.play()}>play</div>
      <div onClick={() => audio?.pause()}>stop</div>
    </div>
  )
}

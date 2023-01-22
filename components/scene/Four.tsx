import { useRouter } from 'next/router'

export function Four({ setCurAudio }: any) {
  const router = useRouter()

  return (
    <div
      style={{
        display: 'flex',
        width: '400px',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img src="/4-logo.png" style={{ width: '400px' }} />
      <img
        src="/4-start.png"
        style={{ width: '200px', marginRight: '5px', cursor: 'pointer' }}
        onClick={() => {
          router.push({ query: { page: 5 } })
          const audio = new Audio('/audio/main-bgm.mp4')
          audio.loop = true
          setCurAudio(audio)
        }}
      />
    </div>
  )
}

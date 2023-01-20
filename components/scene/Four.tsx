import { useRouter } from 'next/router'

export function Four() {
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
        style={{ width: '200px', marginRight: '5px' }}
        onClick={() => router.push({ query: { page: 5 } })}
      />
    </div>
  )
}

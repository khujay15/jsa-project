import { One } from '../components/scene'

export default function PageOne() {
  return (
    <>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}
      >
        <style jsx global>{`
          body {
            padding: 0px;
            margin: 0px;
          }
        `}</style>
        <One />
      </div>
    </>
  )
}

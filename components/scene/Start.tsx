import { ImageContainer } from '../ImageContainer'

export function Start({ onStart }) {
  return (
    <>
      <ImageContainer src="/intro.jpg" />
      <div
        style={{
          position: 'absolute',
          color: 'orange',
          fontSize: '40px',
          cursor: 'pointer',
          bottom: '10%',
          border: '1px solid orange',
          padding: '2px 6px 2px 6px',
        }}
        onClick={onStart}
      >
        Start
      </div>
    </>
  )
}

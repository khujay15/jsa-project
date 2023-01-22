import { useEffect } from 'react'
import { ImageContainer } from '../ImageContainer'
function imagePreload(urls: string[]) {
  urls.forEach((url) => {
    const img = new Image()
    img.src = url
  })
}

function audioPreload(urls: string[]) {
  urls.forEach((url) => {
    const audio = new Audio()
    audio.src = url
  })
}

export function Start({ onStart }) {
  useEffect(() => {
    imagePreload([
      '/1.JPG',
      '/2.png',
      '/3-card.png',
      '/3-record.png',
      '/3-task.png',
      '/3.jpg',
      '/4-logo.png',
      '/4-start.png',
      '/5.JPG',
      '/6.JPG',
      '/7.JPG',
      '/7-2.JPG',
      '/8.JPG',
      '/8-tag-1.png',
      '/9-1.jpg',
      '/9-card.png',
      '/9.JPG',
      '/10.JPG',
      '/11.JPG',
      '/12.PNG',
      '/13.JPG',
      '/14.PNG',
      '/16-p.PNG',
      '/16.JPG',
      '/17-1.PNG',
      '/17-2.PNG',
      '/17.JPG',
      '/18.JPG',
      '/19-a.JPG',
      '/20-1.jpg',
      '/20-2.jpeg',
      '/20.JPG',
      '/21.JPG',
      '/22.JPG',
      '/23.JPG',
      '/24-p.PNG',
      '/25.jpg',
      '/26.jpeg',
      '/28.jpeg',
      '/28-1.jpeg',
      '/28-2.jpg',
      '/29-b-p.png',
      '/29-b.jpeg',
      '/29.jpeg',
      '/30.jpeg',
      '/31-1.jpeg',
      '/32.jpg',
      '/33.jpg',
      '/34.jpg',
      '/35.jpeg',
      '/36.jpeg',
      '/38.jpg',
      '/39.JPG',
      '/40.JPG',
      '/41-end.png',
    ])
  }, [])

  useEffect(() => {
    audioPreload([
      '/audio/begin.wav',
      '/audio/door-bell.mp3',
      '/audio/main-bgm.mp4',

      '/audio/radio-c1.mp4',
      '/audio/radio-c2.mp4',
      '/audio/radio-c3.mp4',
      '/audio/radio-c4.mp3',
      '/audio/radio-c5.mp4',

      '/audio/phone.mp4',
      '/audio/phone-up.mp4',
      '/audio/phone-talk.mp4',
    ])
  }, [])

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

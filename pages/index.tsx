/* eslint-disable react/no-unknown-property */
import { useRouter } from 'next/router'
import { ImageContainer } from '../components/ImageContainer'
import { One, Two, Three, Four } from '../components/scene'
import { Indicator } from '../components/Indicator'
import { NineTeen } from '../components/scene/NineTeen'

const IndexPage = () => {
  const router = useRouter()
  const { query } = router

  function renderPage() {
    switch (query.page) {
      case '1':
        return <One />
      case '2':
        return <Two />
      case '3':
        return <Three />
      case '4':
        return <Four />
      case '5':
        return (
          <ImageContainer
            pageNumber={5}
            indicator={
              <Indicator
                style={{
                  bottom: '45%',
                  marginLeft: '50px',
                  transform: 'rotate(180deg)',
                }}
                onClick={() => router.push({ query: { page: 6 } })}
              />
            }
          />
        )
      case '6':
        return (
          <ImageContainer
            pageNumber={6}
            indicator={
              <Indicator
                style={{
                  bottom: '50%',
                  left: '20%',
                  transform: 'rotate(270deg)',
                }}
                onClick={() => router.push({ query: { page: 7 } })}
              />
            }
          />
        )
      case '7':
        return (
          <ImageContainer
            pageNumber={7}
            indicator={
              <Indicator
                style={{
                  bottom: '45%',
                  marginLeft: '50px',
                  transform: 'rotate(270deg)',
                }}
                onClick={() => router.push({ query: { page: 8 } })}
              />
            }
          />
        )

      case '8':
        return (
          <ImageContainer
            pageNumber={8}
            indicator={
              <>
                <Indicator
                  style={{
                    bottom: '30%',
                    right: '30%',
                    transform: 'rotate(90deg)',
                  }}
                  onClick={() => router.push({ query: { page: 9 } })}
                />
                <Indicator
                  style={{
                    bottom: '30%',
                    left: '40%',
                    transform: 'rotate(270deg)',
                  }}
                  onClick={() => router.push({ query: { page: '8-tag-1' } })}
                />
              </>
            }
          />
        )
      case '8-tag-1':
        return (
          <ImageContainer
            src="/8-tag-1.png"
            indicator={
              <>
                <Indicator
                  style={{
                    bottom: '10%',
                    transform: 'rotate(180deg)',
                  }}
                  onClick={() => router.push({ query: { page: 8 } })}
                />
              </>
            }
          />
        )
      case 'light-stair':
        return (
          <>
            <video style={{ height: '100vh' }} autoPlay muted loop>
              <source src="/light-stair.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Indicator
              style={{
                bottom: '60%',
                left: '50%',
                transform: 'rotate(220deg)',
              }}
              onClick={() => router.push({ query: { page: 8 } })}
            />
          </>
        )
      case '19':
        return <NineTeen />
      default:
        return <One />
    }
  }
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}
    >
      <style jsx global>{`
        body {
          padding: 0px;
          margin: 0px;
        }
      `}</style>
      {renderPage()}
    </div>
  )
}

export default IndexPage

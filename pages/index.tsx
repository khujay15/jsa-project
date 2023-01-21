/* eslint-disable react/no-unknown-property */
import { useRouter } from 'next/router'
import { ImageContainer } from '../components/ImageContainer'
import { One, Two, Three, Four, Nine, NineFirst } from '../components/scene'
import { Indicator } from '../components/Indicator'
import { Eleven } from '../components/scene/Eleven'
import { Thirteen } from '../components/scene/Thirteen'
import { ImageMapContainer } from '../components/ImageMapContainer'
import { TwentySecond } from '../components/scene/TwentySecond'

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
      case '7-2':
        return (
          <ImageContainer
            src="/7-2.jpg"
            indicator={
              <Indicator
                style={{
                  bottom: '55%',
                  left: '30%',
                  transform: 'rotate(270deg)',
                }}
                onClick={() => router.push({ query: { page: 10 } })}
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
                    bottom: '33%',
                    right: '30%',
                    transform: 'rotate(90deg)',
                  }}
                  onClick={() => router.push({ query: { page: 9 } })}
                />
                <Indicator
                  style={{
                    bottom: '33%',
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
                    bottom: '80%',
                  }}
                  onClick={() => router.push({ query: { page: '7-2' } })}
                />

                <Indicator
                  style={{
                    bottom: '10%',
                    transform: 'rotate(180deg)',
                  }}
                  onClick={() => router.push({ query: { page: '8-1' } })}
                />
              </>
            }
          />
        )
      case '9':
        return <Nine />
      case '9-1':
        return <NineFirst />

      case '10':
        return (
          <ImageContainer
            pageNumber={10}
            indicator={
              <>
                <Indicator
                  style={{
                    bottom: '40%',
                  }}
                  onClick={() => router.push({ query: { page: 11 } })}
                />
              </>
            }
          />
        )
      case '11':
        return <Eleven />
      case '12':
        return <ImageContainer src={'/12.PNG'} />
      case '13':
        return <Thirteen />
      case '14':
        return (
          <ImageContainer
            src="/14.PNG"
            indicator={
              <>
                <Indicator
                  style={{
                    bottom: '20%',
                    transform: 'rotate(180deg)',
                  }}
                  onClick={() => router.push({ query: { page: 13 } })}
                />
              </>
            }
          />
        )
      case '15':
        return (
          <>
            <video style={{ height: '100vh' }} autoPlay muted loop>
              <source src="/15.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Indicator
              style={{
                bottom: '60%',
                left: '50%',
                transform: 'rotate(220deg)',
              }}
              onClick={() => router.push({ query: { page: 16 } })}
            />
          </>
        )
      case '16':
        return (
          <ImageContainer
            pageNumber={16}
            indicator={
              <Indicator
                style={{
                  bottom: '50%',
                }}
                onClick={() => router.push({ query: { page: 17 } })}
              />
            }
          />
        )
      case '17':
        return (
          <ImageMapContainer
            src="17.JPG"
            mapArea={[
              {
                width: '7.091172214182344%',
                height: '45.94594594594595%',
                left: '34.32751447178003%',
                top: '27.606177606177607%',
              },
              {
                width: '3.61794500723589%',
                height: '8.108108108108105%',
                left: '42.43171128798842%',
                top: '37.06563706563707%',
              },
            ]}
            onMapClick={(_, index) => {
              if (index === 0) {
                router.push({ query: { page: '17-1' } })
              }
              if (index === 1) {
                router.push({ query: { page: '17-2' } })
              }
            }}
            indicator={
              <Indicator
                style={{
                  bottom: '50%',
                  right: '40%',
                  transform: 'rotate(90deg)',
                }}
                onClick={() => router.push({ query: { page: 18 } })}
              />
            }
          />
        )
      case '17-1':
        return (
          <ImageContainer
            src="/17-1.PNG"
            indicator={
              <Indicator
                style={{
                  bottom: '10%',
                  transform: 'rotate(180deg)',
                }}
                onClick={() => router.push({ query: { page: 17 } })}
              />
            }
          />
        )

      case '17-2':
        return (
          <ImageContainer
            src="/17-2.PNG"
            indicator={
              <Indicator
                style={{
                  bottom: '10%',
                  transform: 'rotate(180deg)',
                }}
                onClick={() => router.push({ query: { page: 17 } })}
              />
            }
          />
        )
      case '18':
        return (
          <ImageMapContainer
            src="/18.JPG"
            mapArea={[
              {
                width: '9.696092619392186%',
                height: '27.027027027027028%',
                left: '43.300018089725036%',
                top: '51.737451737451735%',
              },
            ]}
            onMapClick={() => router.push({ query: { page: 19 } })}
          />
        )
      case '19':
        return (
          <ImageContainer
            src="/19.JPG"
            indicator={
              <Indicator
                style={{
                  bottom: '40%',
                }}
                onClick={() => router.push({ query: { page: 20 } })}
              />
            }
          />
        )
      case '20':
        return (
          <ImageMapContainer
            mapArea={[
              {
                width: '7.963820549927641%',
                height: '15.667953667953668%',
                left: '45.58610709117221%',
                top: '27.335907335907333%',
              },
            ]}
            src="/20.JPG"
            onMapClick={() => router.push({ query: { page: '20-1' } })}
            indicator={
              <Indicator
                style={{
                  bottom: '40%',
                  transform: 'rotate(90deg)',
                }}
                onClick={() => router.push({ query: { page: 21 } })}
              />
            }
          />
        )
      case '20-1':
        return (
          <ImageMapContainer
            src="/20-1.jpg"
            mapArea={[
              {
                width: '16.502170767004344%',
                height: '57.94594594594595%',
                left: '8.5383502170767%',
                top: '10.926640926640914%',
              },
            ]}
            onMapClick={() => router.push({ query: { page: '20-2' } })}
            indicator={
              <Indicator
                style={{
                  bottom: '10%',
                  transform: 'rotate(180deg)',
                }}
                onClick={() => router.push({ query: { page: 20 } })}
              />
            }
          />
        )
      case '20-2':
        return <TwentySecond />

      case '21':
        return (
          <ImageContainer
            src="/21.JPG"
            indicator={
              <Indicator
                style={{
                  bottom: '50%',
                  right: '20%',
                  transform: 'rotate(90deg)',
                }}
                onClick={() => router.push({ query: { page: 22 } })}
              />
            }
          />
        )
      case '22':
        return (
          <ImageContainer
            src="/22.JPG"
            indicator={
              <Indicator
                style={{
                  bottom: '50%',
                  right: '20%',
                  transform: 'rotate(90deg)',
                }}
                onClick={() => router.push({ query: { page: 23 } })}
              />
            }
          />
        )

      case '23':
        return (
          <ImageContainer
            src="/23.JPG"
            indicator={
              <Indicator
                style={{
                  bottom: '10%',
                  // transform: 'rotate(90deg)',
                }}
                onClick={() => router.push({ query: { page: 24 } })}
              />
            }
          />
        )
      case '24':
        return (
          <ImageMapContainer
            src="/24.jpg"
            onMapClick={() => router.push({ query: { page: 25 } })}
            mapArea={[
              {
                width: '7.670043415340087%',
                height: '38.22393822393823%',
                left: '50.680625904486256%',
                top: '28.764478764478763%',
              },
            ]}
            indicator={
              <Indicator
                style={{
                  bottom: '40%',
                  right: '35%',
                  transform: 'rotate(30deg)',
                }}
                onClick={() => router.push({ query: { page: 26 } })}
              />
            }
          />
        )

      case '25':
        return (
          <ImageContainer
            src="/25.jpg"
            indicator={
              <Indicator
                style={{
                  bottom: '10%',
                  transform: 'rotate(180deg)',
                }}
                onClick={() => router.push({ query: { page: 24 } })}
              />
            }
          />
        )
      case '26':
        return (
          <ImageMapContainer
            src="/26.jpeg"
            mapArea={[
              {
                width: '15.054992764109986%',
                height: '24.54826254826255%',
                left: '40.23154848046312%',
                top: '18.262548262548258%',
              },
              {
                width: '15.054992764109986%',
                height: '17.212355212355213%',
                left: '57.163531114327085%',
                top: '36.79536679536679%',
              },
            ]}
            onMapClick={(_, index) => {
              if (index === 0) router.push({ query: { page: 28 } })
              if (index === 1) router.push({ query: { page: 27 } })
            }}
          />
        )

      case '27':
        return (
          <>
            <video style={{ height: '100vh' }} autoPlay muted loop preload="auto">
              <source src="/27.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Indicator
              style={{
                bottom: '10%',
                transform: 'rotate(180deg)',
              }}
              onClick={() => router.push({ query: { page: 26 } })}
            />
          </>
        )

      case '28':
        return (
          <ImageMapContainer
            src="/28.jpeg"
            mapArea={[
              {
                width: '11.147612156295223%',
                height: '20.687258687258687%',
                left: '43.99421128798842%',
                top: '23.66795366795368%',
              },
            ]}
            onMapClick={() => router.push({ query: { page: '28-1' } })}
            indicator={
              <>
                <Indicator
                  style={{
                    bottom: '10%',
                    right: '20%',
                    transform: 'rotate(90deg)',
                  }}
                  onClick={() => router.push({ query: { page: 28 } })}
                />
                <Indicator
                  style={{
                    bottom: '10%',
                    left: '20%',
                    transform: 'rotate(270deg)',
                  }}
                  onClick={() => router.push({ query: { page: 28 } })}
                />
              </>
            }
          />
        )
      case '28-1':
        return (
          <ImageMapContainer
            src="/28-1.jpeg"
            mapArea={[
              {
                width: '53.11577424023154%',
                height: '17.598455598455597%',
                left: '23.878437047756872%',
                top: '41.62162162162162%',
              },
            ]}
            onMapClick={() => router.push({ query: { page: '28-2' } })}
          />
        )
      case '28-2':
        return (
          <ImageContainer
            src="/28-2.jpg"
            indicator={
              <Indicator
                style={{
                  bottom: '10%',
                  transform: 'rotate(180deg)',
                }}
                onClick={() => router.push({ query: { page: 28 } })}
              />
            }
          />
        )
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
      {renderPage()}
    </div>
  )
}

export default IndexPage

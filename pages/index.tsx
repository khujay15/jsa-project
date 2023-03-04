/* eslint-disable react/no-unknown-property */
import { useRouter } from 'next/router'
import { ImageContainer } from '../components/ImageContainer'
import { One, Two, Three, Four, Nine, NineFirst } from '../components/scene'
import { Indicator } from '../components/Indicator'
import { Eleven } from '../components/scene/Eleven'
import { Thirteen } from '../components/scene/Thirteen'
import { ImageMapContainer } from '../components/ImageMapContainer'
import { TwentySecond } from '../components/scene/TwentySecond'
import { TwentyEightTag } from '../components/scene/TwentyEightTag'
import { ThirtySeven } from '../components/scene/ThirtySeven'
import { ThirtyNine } from '../components/scene/ThirtyNine'
import { useAudio } from '../components/useAudio'
import { Five } from '../components/scene/Five'
import { Twelve } from '../components/scene/Twelve'
import { Fourteen } from '../components/scene/Fourteen'
import { Fifteen } from '../components/scene/Fifteen'
import { Forty } from '../components/scene/Forty'
import { Six } from '../components/scene/Six'
import { EightTag } from '../components/scene/EightTag'
import { SevenSecond } from '../components/scene/SevenSecond'
import { SixTeen } from '../components/scene/Sixteen'
import { TwentyFour } from '../components/scene/TwentyFour'
import { ThirtyOne } from '../components/scene/ThirtyOne'
import { TwentyNineSide } from '../components/scene/TwentyNineSide'
import { FourtyOne } from '../components/scene/FourtyOne'
import Head from 'next/head'
import { Start } from '../components/scene/Start'

const IndexPage = () => {
  const router = useRouter()
  const { query } = router

  const { curAudio, setCurAudio } = useAudio({ audioUrl: '/audio/begin.wav' })

  const pushPage = (page) => router.push({ query: { page } })
  const movePage = (page) => () => pushPage(page)

  function renderPage() {
    switch (query.page) {
      case '1':
        return <One />
      case '2':
        return <Two />
      case '3':
        return <Three />
      case '4':
        if (curAudio !== null) {
          curAudio.pause()
        }
        return <Four setCurAudio={setCurAudio} />
      case '5':
        if (curAudio !== null) {
          curAudio.play()
        }
        return <Five />
      case '6':
        return <Six />
      case '7':
        return (
          <ImageContainer
            src="/7.JPG"
            indicator={
              <Indicator
                style={{
                  bottom: '10%',
                  marginLeft: '50px',
                }}
                onClick={() => router.push({ query: { page: 8 } })}
              />
            }
          />
        )
      case '7-2':
        return <SevenSecond />

      case '8':
        return (
          <ImageContainer
            src="/8.JPG"
            indicator={
              <>
                <Indicator
                  style={{
                    bottom: '33%',
                    right: '29%',
                    transform: 'rotate(90deg)',
                  }}
                  onClick={() => router.push({ query: { ...router.query, page: 9 } })}
                />
                <Indicator
                  style={{
                    bottom: '33%',
                    left: '35%',
                    transform: 'rotate(270deg)',
                  }}
                  onClick={() => router.push({ query: { ...router.query, page: '8-tag-1' } })}
                />
              </>
            }
          />
        )
      case '8-tag-1':
        return <EightTag />
      case '9':
        return <Nine />
      case '9-1':
        return <NineFirst />

      case '10':
        return (
          <ImageContainer
            src="/10.JPG"
            indicator={
              <>
                <Indicator
                  style={{
                    bottom: '10%',
                  }}
                  onClick={movePage(11)}
                />
              </>
            }
          />
        )
      case '11':
        return <Eleven />
      case '12':
        return <Twelve />
      case '13':
        return <Thirteen />
      case '14':
        return <Fourteen />
      case '15':
        return <Fifteen />
      case '16':
        return <SixTeen />
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
                  right: '20%',
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
            src="/19-a.JPG"
            indicator={
              <Indicator
                style={{
                  bottom: '10%',
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
                  bottom: '10%',
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
                }}
                onClick={() => router.push({ query: { page: 24 } })}
              />
            }
          />
        )
      case '24':
        return <TwentyFour />

      case '25':
        return (
          <ImageContainer
            src="/25-f.jpg"
            indicator={
              <Indicator
                style={{
                  bottom: '10%',
                  transform: 'rotate(180deg)',
                }}
                onClick={() => router.push({ query: { page: 24, showTwins: 1 } })}
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
            <video style={{ height: '100vh' }} autoPlay muted loop preload="auto" poster="/27-poster.jpg">
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
            onMapClick={() => router.push({ query: { page: '28-tag' } })}
            indicator={
              <>
                <Indicator
                  style={{
                    bottom: '50%',
                    right: '20%',
                    transform: 'rotate(90deg)',
                  }}
                  onClick={() => router.push({ query: { page: 32 } })}
                />
                <Indicator
                  style={{
                    bottom: '50%',
                    left: '31.5%',
                  }}
                  onClick={() => router.push({ query: { page: 29 } })}
                />
              </>
            }
          />
        )
      case '28-tag':
        return <TwentyEightTag />
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
      case '29':
        return (
          <ImageContainer
            src="/29.jpeg"
            indicator={
              <>
                <Indicator
                  style={{
                    bottom: '30%',
                  }}
                  onClick={movePage(30)}
                />
                <Indicator
                  style={{
                    bottom: '25%',
                    left: '40%',
                    transform: 'rotate(270deg)',
                  }}
                  onClick={movePage('29-b')}
                />
                <Indicator
                  style={{
                    bottom: '10%',
                    transform: 'rotate(180deg)',
                  }}
                  onClick={movePage(28)}
                />
              </>
            }
          />
        )
      case '29-b':
        return (
          <ImageMapContainer
            mapArea={[
              {
                width: '9.845151953690303%',
                height: '16.633204633204627%',
                left: '38.06078147612156%',
                top: '36.6023166023166%',
              },
            ]}
            src="/29-b.jpeg"
            onMapClick={movePage('29-b-p')}
            indicator={
              <>
                <Indicator
                  style={{
                    bottom: '10%',
                    transform: 'rotate(180deg)',
                  }}
                  onClick={movePage(29)}
                />
              </>
            }
          />
        )
      case '29-b-p':
        return <TwentyNineSide />
      case '30':
        return (
          <ImageMapContainer
            mapArea={[
              { width: '33%', height: '27.83011583011583%', left: '34.87698986975398%', top: '44.1312741312741%' },
            ]}
            src="/30.jpeg"
            onMapClick={movePage(31)}
            indicator={
              <>
                <Indicator
                  style={{
                    bottom: '10%',
                    transform: 'rotate(180deg)',
                  }}
                  onClick={movePage(29)}
                />
              </>
            }
          />
        )
      case '31':
        return <ThirtyOne />
      case '31-1':
        return (
          <ImageContainer
            src="/31-1.jpeg"
            indicator={
              <Indicator
                style={{
                  bottom: '10%',
                  transform: 'rotate(180deg)',
                }}
                onClick={() => router.push({ query: { page: 31, talkFinish: 1 } })}
              />
            }
          />
        )

      case '32':
        return (
          <ImageContainer
            src="/32.jpg"
            indicator={
              <Indicator
                style={{
                  bottom: '10%',
                }}
                onClick={movePage(33)}
              />
            }
          />
        )
      case '33':
        return (
          <ImageMapContainer
            mapArea={[
              {
                width: '9.696092619392186%',
                height: '18.725868725868725%',
                left: '44.602478292329955%',
                top: '21.042471042471043%',
              },
              {
                width: '7.525325615050652%',
                height: '11.003861003861005%',
                left: '56.179902315484796%',
                top: '27.7992277992278%',
              },
            ]}
            src="/33.jpg"
            onMapClick={(_, index) => {
              if (index === 0) pushPage(34)
              if (index === 1) pushPage(38)
            }}
          />
        )

      case '34':
        return (
          <ImageMapContainer
            src="/34.jpg"
            mapArea={[
              {
                width: '8.253256150506513%',
                height: '19.142857142857142%',
                left: '81.04196816208396%',
                top: '21.35135135135135%',
              },
            ]}
            onMapClick={movePage(39)}
          />
        )
      case '35':
        return (
          <ImageContainer
            src="/35.jpeg"
            indicator={
              <Indicator
                style={{
                  bottom: '50%',
                  right: '20%',
                  transform: 'rotate(90deg)',
                }}
                onClick={movePage(36)}
              />
            }
          />
        )

      case '36':
        return (
          <ImageContainer
            src="/36.jpeg"
            indicator={
              <Indicator
                style={{
                  bottom: '50%',
                  right: '20%',
                  transform: 'rotate(90deg)',
                }}
                onClick={movePage(37)}
              />
            }
          />
        )

      case '37':
        return <ThirtySeven />

      case '38':
        return (
          <ImageContainer
            src="/38.jpg"
            indicator={
              <Indicator
                style={{
                  bottom: '10%',
                }}
                onClick={movePage(35)}
              />
            }
          />
        )
      case '39':
        return <ThirtyNine />

      case '40':
        return <Forty />
      case '41':
        return <FourtyOne />
      case 'end':
        return (
          <>
            <img src="/end.png" />
            <div
              style={{ position: 'absolute', color: 'white', bottom: '20vw', fontSize: '20px', cursor: 'pointer' }}
              onClick={() => (window.location.href = '/')}
            >
              retry
            </div>
          </>
        )

      default:
        return (
          <Start
            onStart={() => {
              curAudio.play()
              router.push({ query: { page: 1 } })
            }}
          />
        )
    }
  }
  return (
    <>
      <Head>
        <link rel="preload" href="/2.png" as="image" />
        <link rel="preload" href="/15.mp4" as="video" />
        <link rel="preload" href="/27.mp4" as="video" />
        <link rel="preload" href="/37-end.mp4" as="video" />

        <link rel="preload" href="/4-logo.png" />
      </Head>
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
    </>
  )
}

export default IndexPage

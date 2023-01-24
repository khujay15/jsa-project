import { useRouter } from 'next/router'
import { ImageMapContainer } from '../ImageMapContainer'
import { Indicator } from '../Indicator'
import { SubscriptionBox } from '../Subscription'

const subThirtyOne = [
  {
    author: 'Mr.Middle',
    text: '안녕하세요 나는 회사의 분석관 인사팀 Mr.middle입니다 <br /> 당신은 최근 우리 회사 내에서 일어나는 두 진영의 대립에 대해서 얼마나 알고 있죠?',
    enText: `Hello. I’m Mr.middle, the analyst of the company.How much do you know about the recent confrontation between the two camps within our company?`,
  },
  {
    author: 'Mr.Schluss',
    text: 'Ungleich와의 대립 말인가요? ',
    enText: `You mean confrontation with Ungleich?`,
  },
  {
    author: 'Mr.Middle',
    text: '네 이것에 대한 당신의 생각이 궁금하네요.',
    enText: `Yes. I'm curious about your thoughts.`,
  },
  {
    author: 'Mr.Schluss',
    text: '글쎄요 저는 이제 입사한 신입이라 잘 모르겠어요. 하지만 저는 회사가 추구하는 이념이 제게 더 다가옵니다.',
    enText: `Well, I'm new to the company, so I don't know. However, the ideology pursued by the company comes closer to me.`,
  },
  {
    author: 'Mr.Middle',
    text: '그렇다면 당신은 ungleich를 반대하나요?',
    enText: `So are you against ‘Ungleich’?`,
  },
  {
    author: 'Mr.Schluss',
    text: '음… 굳이 말한다면 그렇다고 볼 수 있죠? 저는 평화를 깨는 존재를 싫어하지 않는 편이라고 할 수 있죠',
    enText: `Well… if I had to say so. I don't like people who break the peace.`,
  },
  {
    author: 'Mr.Middle',
    text: '그렇군요. 당신은 ‘Ungleich’에 대해 얼마나 알고 있죠?',
    enText: `Okay. How much do you know about ‘Ungleich’?`,
  },

  {
    author: 'Mr.Schluss',
    text: '잘 알지는 못해요. 그저 그들이 직원들을 선동하여 사내 분란을 일으킨다는 사실 밖에요',
    enText: `Not that much I guess? It's just that they incite our employees to cause internal riots.`,
  },
  {
    author: 'Mr.Middle',
    text: '그렇다면 당신은 그것을 잘 알지도 못하는데 벌써 싫어한다고 판단한것인가요?',
    enText: `So you don't even know them well, but you’ve already decided that you don't like them?`,
  },
  {
    author: 'Mr.Schluss',
    text: '네 겉으로 보기엔 그들은 정말 불법 스쾃이니까요',
    enText: `Yes. on the surface, they're really illegal squatter.`,
  },
  {
    author: 'Mr.Middle',
    text: '하지만 그 안에 속하지 않고서는 그들을 판단할 수 없지 않을까요? 아 참고로 저는 그들을 옹호하는 것이 아닙니다 <br /> 우리 회사와 ungleich 둘 다 해당되는 이야기니까요. 그저 당신의 의견을 듣고 싶었습니다.',
    enText: `But wouldn't you be able to judge them without belonging to them? Oh, by the way, I'm not defending them. It's an analysis that applies to both our company and ‘Unleich’. I just wanted to hear your opinion.`,
  },
  {
    author: 'Mr.Schluss',
    text: '하지만 저는 세상에 절대적으로 지커야 할 규칙이 존재하는 이유가 있다고 믿습니다.',
    enText: `But I believe there's a reason why there's a rule in the world that should be absolutely strict.`,
  },

  {
    author: 'Mr.Middle',
    text: '그렇다면 당신 눈에는 내가 규칙을 잘 지키고 있다고 판단하시나요?',
    enText: `Then do you think I'm following the rules well from your perspective?`,
  },
  {
    author: 'Mr.Schluss',
    text: '글쎄요. 잘 모르겠지만 그럴 것이라고 믿어요.',
    enText: `Well? I don't know. But I believe so.`,
  },
  {
    author: 'Mr.Middle',
    text: '그렇군요. 나가보세요',
    enText: `Alright. You may go.`,
  },
]

export function ThirtyOne() {
  const router = useRouter()

  return (
    <>
      <ImageMapContainer
        mapArea={[
          {
            width: '10.134587554269176%',
            height: '11.227799227799228%',
            left: '40.08683068017367%',
            top: '55.907335907335906%',
          },
          {
            width: '20.11577424023155%',
            height: '53.47490347490347%',
            left: '57.48236251808974%',
            top: '43.050193050193045%',
          },
        ]}
        onMapClick={(_, index) => {
          if (index === 0) router.push({ query: { page: '31-1' } })
        }}
        src="/31.jpeg"
        indicator={
          <Indicator
            style={{
              bottom: '10%',
              transform: 'rotate(180deg)',
            }}
            onClick={() => router.push({ query: { page: 30 } })}
          />
        }
      />
      {!router.query.talkFinish && <SubscriptionBox textSequence={subThirtyOne} />}
    </>
  )
}

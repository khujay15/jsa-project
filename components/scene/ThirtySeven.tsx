import { useRouter } from 'next/router'
import { SubscriptionBox } from '../Subscription'

const subThirtySeven = [
  {
    author: 'Mr.Fainter',
    text: '어서오세요. 이 곳은 우리 J.S.A의 13번째 실험체 &lt;Glück Machine&gt;  입니다. <br /> 당신은 우리의 n번째 실험대상자로 선정되었습니다. 우리는 실험체의 무의식을 분석하여 우리 JSA회사의 미래 인재를 찾는 새로운 양자역학을 발견하였습니다. 우리 회사 J.S.A는 이 실험을 통해 자격이 있는 인재를 선별하고 육성하기로 결정했습니다.',
    enText: `Welcome. This is our J.S.A test subject, the &lt;Glück Machine-8&gt;. <br /> You have been selected for our 513th dispatch. In the meantime, we analyzed the unconscious of the test subject and discovered new quantum mechanics to find future talent for our J.S.A company. Our company, J.S.A, decided to select, nurture, and dispatch qualified personnel through this experiment.`,
  },
  {
    author: 'Mr.Schluss',
    text: '네 뭐라고요? 제가 왜 실험에 참가해야하죠? 저는 이미 이 회사에 다니고 있는걸요?',
    enText: `What? Why do I have to participate in the experiment? I'm already working at this company.`,
  },
  {
    author: 'Mr.Fainter',
    text: '이 실험은 극비로 진행되었습니다. 이 곳에 남은 모든 직원들은 이 과정을 통과했다는 것을 알려드려야겠군요. ',
    enText: `This experiment was conducted in strict confidence. I have to let you know that all the remaining employees here have passed this course.`,
  },
  {
    author: 'Mr.Schluss',
    text: '이상하네요. 나는 로비로 가는 길을 찾고 있을 뿐입니다.',
    enText: `That's ridiculous. I was just doing my job. I'll go to the lobby and ask. Please tell me the way to the lobby.`,
  },
  {
    author: 'Mr.Fainter',
    text: '걱정마세요. 우리가 빅데이터를 사용해 최적의 미래로 보내드릴게요. 만약 당신이 적합한 사람이라면요.',
    enText: `Don’t worry. We will dispatch you to an optimized future using the big data we have collected. <br /> Oh, if you're the right person.`,
  },
  {
    author: 'Mr.Schluss',
    text: '무슨 소리에요? 당장 나가겠어요.',
    enText: `What are you talking about? I'm leaving right now.`,
  },
  {
    author: 'Mr.Fainter',
    text: '나가기 위해서는 먼저 들어와야 합니다. 시간은 한 방향으로만 흐르고 있어요. Don’t ever look back. 어차피 돌아갈 수 없습니다',
    enText: `You got to get in to get out. Time is only flowing in one direction. Don’t ever look back. We can't go back anyway. Don't you want a world where all love awaits?`,
  },
  {
    author: 'Mr.Schluss',
    text: '제 안전은 누가 보장하죠? 만약 제가 이 회사에 어울리지 않는 인재라면 왜 저를 채용했죠?',
    enText: `Who guarantees my safety? If I'm not the right person for this company, why did you hire me?`,
  },
  {
    author: 'Mr.Fainter',
    text: '글쎄요. 제가 아는 한 이 기계는 안전했습니다만… 그것 또한 이 굿럭 머신의 분석에 따라 달라질 수도 있습니다. 자 이제 당신의 무의식이 말하는 당신의 미래는 무엇일까요. 우리의 Glück Machine은 실험체의 정신을 분석하여 개개인 맞춤 서비스를 제공합니다. 이 방은 당신을 로비로 안내할수도, 따뜻한 당신의 집으로 안내할 수도 또 102938억 광년 떨어진 plant-736으로 안내할 수도 있습니다.',
    enText: `Well, as far as I know, this machine was safe, but... It may also depend on the analysis of this Glück Machine. Now let's find out who you are through your subconscious mind. Our Glück Machine analyzes the subject's mind and provides personalized service and provides personalized service. This room can take you to the lobby, to your warm home, or to plant-736, 10293.8 billion light years away.`,
  },
  {
    author: 'Mr.Schluss',
    text: '이게 무슨 소리죠? 당신이 분명 로비로 통하는 길이라고 했잖아요.',
    enText: `What does this mean? You said it was definitely the way to the lobby.`,
  },
  {
    author: 'Mr.Fainter',
    text: '아니요. 나는 그러길 바란다고 했습니다. 우리는 당신의 무의식을 분석하여 최적의 미래로 안내합니다. 만약 1234억년 떨어진 화성으로 가도 원망하지마세요. 조작되지 않은 순수한 당신의 무의식을 바탕으로 이 방이 결정할 것입니다. 어떤 미래가 펼쳐지고 있을지 너무 설레지 않나요? 당신은 그럴 자격이 있는 사람이였을테니까요.',
    enText: `No, I said I hope so. We analyze your unconsciousness and guide you to the optimal future. If you go to plant-736 which is 10293.8 billion light years away, don't blame it. This room will decide based on your pure unconsciousness, which is not manipulated. Aren't you excited about the future? Because you were the one who deserved it.`,
  },
  {
    author: 'Mr.Schluss',
    text: '정말 지긋지긋하네요. 고작 기계따위가 정한 내 미래를 감당하라고요?  내가 왜요! 나는 평생 착한 일만 하며 건실한 직장에 취직하고 근면성실하게 살았는데. 나는 너무 억울해요. 내가 아는 한 삶은 이렇게 불공평하지 않습니다.',
    enText: `I'm sick of it. Do you want me to live up to my future set by that machine? Why me? All my life, I did good things, got a decent job, and lived diligently. I'm so upset. Life isn't this unfair as far as I know.`,
  },
  {
    author: 'Mr.Fainter',
    text: '삶은 공평해요. 특히 이 곳에서는 더욱 더 공평하죠. 우리는 누구보다도 공평함을 추구 하고 있습니다. <br />음… 그렇다면 당신의ㅡ카르마때문이라고 생각해보세요. 한결 낫죠? 자 그럼 Good luck~',
    enText: `Life is fair. Especially here, it's even more equal. We are seeking equality more than anyone else. Well…. Then think it's because of your Karma. It's much better, isn’t it? Then, good luck!`,
  },
]

export function ThirtySeven() {
  const router = useRouter()
  return (
    <>
      <video style={{ height: '100vh' }} autoPlay muted loop poster="/37-poster.jpg">
        <source src="/37-end.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <SubscriptionBox
        textSequence={subThirtySeven}
        onFinishSub={() => {
          router.push({ query: { page: 'end' } })
        }}
      />
    </>
  )
}

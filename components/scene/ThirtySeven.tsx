import { useRouter } from 'next/router'
import { SubscriptionBox } from '../Subscription'

const subThirtySeven = [
  {
    author: 'Mr.Fainter',
    text: '어서오세요. 이 곳은 우리 j.s.a의 13번째 실험체 <Glück Machine>  입니다. <br /> 당신은 우리의 n번째 실험대상자로 선정되었습니다. 우리는 실험체의 무의식을 분석하여 우리 JSA회사의 미래 인재를 찾는 새로운 양자역학을 발견하였습니다. 우리 회사 J.S.A는 이 실험을 통해 자격이 있는 인재를 선별하고 육성하기로 결정했습니다.',
  },
  {
    author: 'Mr.Schluss',
    text: '네 뭐라고요? 제가 왜 실험에 참가해야하죠? 저는 이미 이 회사에 다니고 있는걸요?',
  },
  {
    author: 'Mr.Fainter',
    text: '이 실험은 극비로 진행되었습니다. 이 곳에 남은 모든 직원들은 이 과정을 통과했다는 것을 알려드려야겠군요. ',
  },
  {
    author: 'Mr.Schluss',
    text: '이상하네요. 나는 로비로 가는 길을 찾고 있을 뿐입니다.',
  },
  {
    author: 'Mr.Fainter',
    text: '네 이 방안에 당신이 원하는 로비로 통하는 길이 있길 바랍니다.',
  },
  {
    author: 'Mr.Schluss',
    text: '무슨 소리에요? 당장 나가겠어요.',
  },
  {
    author: 'Mr.Fainter',
    text: '나가기 위해서는 먼저 들어와야 합니다. 시간은 한 방향으로만 흐르고 있어요. Don’t never look back. 어짜피 돌아갈 수 없습니다',
  },
  {
    author: 'Mr.Schluss',
    text: '제 안전은 누가 보장하죠? 만약 제가 이 회사에 어울리지 않는 인재라면 왜 저를 채용했죠?',
  },
  {
    author: 'Mr.Fainter',
    text: '글쎄요. 제가 아는 한 이 기계는 안전했습니다만… 그것 또한 이 굿럭 머신의 분석에 따라 달라질 수도 있습니다. 자 이제 당신의 무의식이 말하는 당신의 미래는 무엇일까요. 우리의 Glück Machine은 실험체의 정신을 분석하여 개개인 맞춤 서비스를 제공합니다. 이 방은 당신을 로비로 안내할수도, 따뜻한 당신의 집으로 안내할 수도 또 102938억 광년 떨어진 plant-736으로 안내할 수도 있습니다.',
  },
  {
    author: 'Mr.Schluss',
    text: '이게 무슨 소리죠? 당신이 분명 로비로 통하는 길이라고 했잖아요.',
  },
  {
    author: 'Mr.Fainter',
    text: '아니요. 나는 그러길 바란다고 했습니다. 우리는 당신의 무의식을 분석하여 최적의 미래로 안내합니다. 만약 1234억년 떨어진 화성으로 가도 원망하지마세요. 조작되지 않은 순수한 당신의 무의식을 바탕으로 이 방이 결정할 것입니다. 어떤 미래가 펼쳐지고 있을지 너무 설레지 않나요? 당신은 그럴 자격이 있는 사람이였을테니까요.',
  },
  {
    author: 'Mr.Schluss',
    text: '정말 지긋지긋하네요. 고작 기계따위가 정한 내 미래를 감당하라고요?  내가 왜요! 나는 평생 착한 일만 하며 건실한 직장에 취직하고 근면성실하게 살았는데. 나는 너무 억울해요. 내가 아는 한 삶은 이렇게 불공평하지 않습니다.',
  },
  {
    author: 'Mr.Fainter',
    text: '삶은 공평해요. 특히 이 곳에서는 더욱 더 공평하죠. 우리는 누구보다도 공평함을 추구 하고 있습니다. <br />음… 그렇다면 당신의ㅡ카르마때문이라고 생각해보세요. 한결 낫죠? 자 그럼 Good luck~',
  },
]

export function ThirtySeven() {
  const router = useRouter()
  return (
    <>
      <video style={{ height: '100vh' }} autoPlay muted loop>
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

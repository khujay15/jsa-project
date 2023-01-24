import { useRouter } from 'next/router'
import { ImageContainer } from '../ImageContainer'
import { SubscriptionBox } from '../Subscription'

const subThirtyNine = [
  {
    author: 'Snowman',
    text: '어서와. 오랫동안 외로웠어. 마침  나와 이야기를 나눠줄 사람이 필요했던 참인데.들어봐. <br /> 누가 그러더라. “이 세상은 매우 공평해. 누구나 자신의 권리를 누릴 수 있고, 세상은 아름답고 안정적이지. 그러므로 착한 사람에게는 좋은 일만. 나쁜 사람에게는 나쁜 일만 있을거야.”라고. 나는 이해가 안가서.',
    enText: `Welcome!. I've been lonely for so long. I just needed someone to talk to me.<br /> Listen, someone said that. "This world is very equal. Everyone can enjoy their rights, and the world is beautiful and stable. Therefore, only good things happen to good people. There will only be bad things for bad people." but I don't understand.`,
  },
  {
    author: 'Mr.Schluss',
    text: '음. 잘 모르겠는데. 착한 사람에게 뭔가 문제가 있었나보지. <br /> 가령 착한 사람이 아니였을수도 있잖아? 그리고 난 특별히 범죄를 저지른 적은 없어. 그렇다면 난 착한 사람이 아닐까?  ',
    enText: `Well, isn't that right?`,
  },
  {
    author: 'Snowman',
    text: '너는 착한 사람이야? 나쁜 사람이야?',
    enText: `Are you a good person? Are you a bad person?`,
  },
  {
    author: 'Mr.Schluss',
    text: '글쎄. 일단 나는 ungleich가 아니야. 그리고 공평한 세상을 추구해. <br /> 그러니까 나는 공평한 사람이지. 공평하다는 것은 좋은 것이니까 나는 착한 사람인거고.',
    enText: `Well, first of all, I'm not the ‘Unleich’. And seek a equal world. So I'm a equal man. Being equal is a good thing, so I'm a good person. And I've never committed a crime in particular. Then am I not a good person?`,
  },
  {
    author: 'Snowman',
    text: '그렇다면 세상이 공평하다면 왜 착한 인간에게 나쁜 일은 끊임없이 일어나는걸까?',
    enText: `Then, if the world is equal, why does bad things happen constantly to good people?`,
  },
  {
    author: 'Mr.Schluss',
    text: '그 사람이 착한 사람이 아니였나보지.',
    enText: `There must have been something wrong with a good man. Maybe he wasn't a nice guy.`,
  },
  {
    author: 'Snowman',
    text: '그래? 지금까지 한 관찰은 미래에 대해 어떤 단서도 되지 못하는걸?',
    enText: `Really? I don't think the observations you've made so far have any clue about the future.`,
  },
  {
    author: 'Mr.Schluss',
    text: '무슨 말이 하고 싶은거야?',
    enText: `What do you want to say?`,
  },
  {
    author: 'Snowman',
    text: '글쎄…',
    enText: `Hmm…Well.`,
  },
  {
    author: 'Mr.Schluss',
    text: '그만해. 이제 내가 떠나게 해줘.',
    enText: `Stop. Please let me out.`,
  },
  {
    author: 'Snowman',
    text: '그래. 이야기 즐거웠어. 잘가 Good boy.',
    enText: `Alright. Nice talk. Good bye. Good boy.`,
  },
]

export function ThirtyNine() {
  const router = useRouter()

  return (
    <>
      <ImageContainer src="/39.JPG" />
      <SubscriptionBox textSequence={subThirtyNine} onFinishSub={() => router.push({ query: { page: 40 } })} />
    </>
  )
}

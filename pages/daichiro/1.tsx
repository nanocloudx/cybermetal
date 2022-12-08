import {Title} from '../../components/Title'
import {Pagination} from '../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={29}>
      <Title
        title={'NFTで億万長者になる方法'}
        description={'巷で話題のNFTを理解して一攫千金を狙います'}
        author={'daichiro.eth'}
        image={'/daichiro/author.png'}
      />
      <strong>
        THIS IS NOT FINANCIAL ADVICE, THIS IS NOT LEGAL ADVICE.
      </strong>
      <p>
        (この話は投資を勧めるものでも、法的な助言を促すものでもありません)
      </p>
      <br />
      <p>
        こんにちは。daichiro.eth です。
        みなさんは、「NFT」という単語を聞いたことがあるでしょうか。
        そうです。仮想通貨や Web3、メタバースなどと同時に語られる、あの「NFT」です。
        果たしてこれらは未来のインターネットを作るものなのか、これで億万長者になることはできるのか。
      </p>
      <br />
      <p>
        知りたいですよね？
      </p>
      <br />
      <p>
        この書物を手にすることができたあなたは幸運の持ち主です。
        なぜなら NFT とは何かを理解し、これからのインターネットの入口を知ることができるからです。
        最後に億万長者への第一歩を記すので、ぜひ飛ばさずに読んでいってください。
      </p>
      <h2>
        1. NFT は絵であるという最大の誤解
      </h2>
      <p>
        よくニュースで目にするのが、「xx氏のNFTアートが1億円で販売！」というようなものではないでしょうか。
        この見出しは一見「NFT=アート」であり、デジタルな絵に高値がつくのだと認識してしまいます。
        このニュースこそが NFT を誤解させ、また正しい理解の妨げになっていると確信しています。
      </p>
      <p>
        少しNFTに理解のある方は、NFT の日本語訳とその意味を知っています。
        NFT は Non-Fungible Token の略で「非代替性トークン」と訳すことができます。
        つまり、他に変えることができない、ただ一つのトークンなのです。
        これを先ほどの理解と照らし合わせると「xx氏のアートはインターネットにありながら、
        世界に一つだけだから価値があるのだろう」という予測ができます。
        と同時にパソコンの操作に詳しいあなたは次の事実に気がつきます。
        「インターネットにあるんだから、コピペしてしまえば世界に一つではないのでは？」
      </p>
      <p>
        あなたの予測と気がついた事実はどちらも正しいです。
        ただし、NFT についての理解が間違っているので矛盾があるように思えてしまうのですね。
      </p>
    </Pagination>
  )
}

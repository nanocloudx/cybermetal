import {Title} from '../../../components/Title'
import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination author={'kinoppyd'} pageCount={1}>
      <Title
        title={'チーズ作るよ'}
        description={'チーズを作りますがマジでコスパは悪いです'}
        author={'kinoppyd'}
        image={'/2023/author/kinoppyd.jpg'}
        twitter={'＠GhostBrain'}
        website={'https://kinoppyd.dev/blog'}
      />
      <p>チーズは作れます。もちろん、チーズ工房とか工場の話ではなく、ご家庭の話です。チーズの原料はその種類にもよりますが、基本的に動物の乳です。多くの場合は牛か羊か山羊のミルクでしょう。チーズは、その乳のなかにあるカゼインというタンパク質を凝固させ、生成されるカード(curd)とよばれる物資を取り出し固めて作られます。チーズの種類によって製造過程が様々で、種類によっては大きく異なります。ですが、全てのチーズに共通しているのは、一番最初に乳からカードを作り出して成形するという工程です。自宅で気軽に作れるチーズは、フレッシュタイプと呼ばれるチーズです。他のチーズのようにカビや熟成を必要としないので、気軽に作れます。あまりにも気軽に作れて逆に面白くないので、その中でもある程度工程のあるモッツァレラチーズを実際に作ってみましょう。</p>
      <h2>チーズの歴史</h2>
      <p>チーズは加工食品としては人類の歴史の中でも古い方の食べ物に分類され、その起源に関しては様々な説があり、確実な歴史は不明です。実際、日本のチーズを製造しているメーカーや、牛乳や乳製品関連の一般社団法人、大学の講義資料、Wikipediaなどを当たってみてもどれもこれも微妙に違う記述がされています。とはいえ、おおよそ紀元前6000年頃に人類は動物を家畜化し動物の乳を飲む習慣が生まれ、紀元前4000年頃にチーズの制作が始まったという話が共通して出てくるので、そのあたりの話なのではないかと思います。紀元前3000年前のインドの仏典にチーズに関する記述があったり、紀元前2000年頃にアラビアを旅する人が持つ、羊の胃袋で作られた水筒に保存された乳が固まりチーズの原型が作られた逸話などから、おおよそ西アジアあたりからチーズの製法が生まれ、世界中に伝播していったのではないかと言われています。日本においても、孝徳天皇の時代に百済から蘇という名の乳製品が献上されたという記録が残っており、これがおそらく日本における最古のチーズファーストコンタクトだったとされています。のちの醍醐天皇の時代にも蘇を作らせたという記録が残っています。醍醐という言葉はチーズを表す言葉としても知られていますし、醍醐味という言葉の語源にもなっています。そもそも醍醐とは仏教の言葉で、乳を煮詰めてチーズらしきものを作る過程を雑念を断ち余計な物を排除するという教えに例えた、いかにもラリの極まった悟り感覚の言葉です。</p>
      <p>その後、チーズは今日まで緩やかな時間をかけながらも激しい進化を遂げてきました。気の狂ったくらい水分を抜いたり、カビの力を借りて水分を抜きつつうま味を引き出したり、塩をぶちまけて酒で洗うことを繰り返したりなど、味も製法もわりとエキセントリックな変化と進化を続けてきた食材です。近代においても、一度作ったチーズをもう一回ぶっ壊してもう一回チーズを作るなどの、訳のわからない手法などが開発されています。</p>
    </Pagination>
  )
}

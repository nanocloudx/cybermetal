import {Title} from '../../components/Title'
import {Image} from '../../components/Image'
import {Pagination} from '../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={12}>
      <Title
        title={'お酒を蒸留するということ'}
        description={'お酒を蒸留する方法や効果はいろいろあるんだねって話'}
        author={'kinoppyd'}
        image={'/kinoppyd/author.jpeg'}
        twitter={'@GhostBrain'}
        website={'https://kinoppyd.dev'}
      />
      <h2>お酒の蒸留の話</h2>
      <p>
        ここ一年ほど、ウイスキーに興味を持っていろいろと飲んだり、ウイスキーに関する研究を眺めたりしていました。ウイスキーを作る工程の一つに、蒸留というものがあります。蒸留という工程のことは知っていましたし、理科の実験の記憶で蒸留というのはどういう操作なのかも知っていました。しかし、実際のお酒を造る上での蒸留の方法や、そのための機材、そしてそれらの組み合わせでどのような種類のお酒ができるかを知らず、面白がって調べてみたことをまとめてみました。
      </p>
      <h2>お酒の種類</h2>
      <p>
        お酒の種類は様々ありますが、製造方法で大まかに分けると二種類に分けることができます。醸造酒、そして蒸留酒です。他にも混成酒というものがありますが、これは醸造酒か蒸留酒をさらに加工するものなので、大まかな分類からは除きます。
      </p>
      <p>
        醸造酒と呼ばれるお酒に属するのは、ビール、日本酒、ワインなどです。アルコール度数は１パーセントから３０パーセント未満ほどの間のものがほとんどで、お酒の種類によって一般的な度数は変わります。ビールは５から１０の間、日本酒やワインは１５から２０の間が多いです。対して蒸留酒と呼ばれるお酒に属するのは、ウイスキー、焼酎、泡盛、ジン、ウオッカ、テキーラ、ラムなどがあります。アルコール度数は２５パーセントから９６パーセントまでの間で、一般的には３０から５０パーセントの間であることがほとんどです。つまり、アルコール度数だけで醸造酒か蒸留酒かを見分けるには、アルコール度数がおおよそ２０パーセント未満か以上かで判断することができます。
      </p>
      <p>
        もちろん、醸造酒と蒸留酒の違いは製造過程にあり、アルコール度数の違いではありません。では、なぜアルコール度数で判断することができるのでしょうか？　その答えは、２０パーセントのアルコール度数を超えるためには、お酒を造る過程で蒸留という工程を経ないと簡単には実現できないからです。そして、蒸留という工程を経たお酒のことを蒸留酒と呼ぶので、アルコール度数が２０パーセントを超えているお酒のことを蒸留酒と判断することができます。もちろん、例外的に２０パーセントを超える醸造酒や、２０パーセントを下回る蒸留酒も存在するので、確実に判断することはできませんが、多くの場合は当てはまります。
      </p>
    </Pagination>
  )
}

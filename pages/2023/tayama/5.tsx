import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={999}>
      <h2>暗雲</h2>
      <p>神経内科に来てみたものの、この複視の診療にあたったドクターたちの中でも神経内科が最も困惑することになったようです。普段は神経の問題で手なり足なりに疾患を抱えている患者を診ているであろうところ、眼の外転神経がピンポイントで動かない患者が送り込まれてきたわけですから。</p>
      <p>神経内科の初手はとりあえず血液検査です。患者の体験としては健康診断の採血と全く同じですが、検査項目はもっとずっと多いものです。葉酸に、抹消血液に、念のため甲状腺も付けとくか......とドクターがつぶやくのを、今度は眼科のときとは対照的になんもわからんという顔で聞き流します。検査の結果はすべて正常値。異常がなかったのはいいニュースですが、わかりやすい異常があってほしかったというのも正直な気持ちです。ちなみにこの血液検査がめっちゃ診察費高くてびっくらこいた。3割負担で15,000円とかいきました。</p>
      <p>血液検査が正常となると、次は筋電図でもやっとくかという話になります。筋肉に針を指して生体電流を測定したり、神経に電気ショックを流してみたりするわけです。足に電極を貼って電流を流すと、自分の意志に反して足がビクンビクン動いて愉快ですが、この検査の結果も正常でした。別に手足が動かないわけじゃないんだから当然ですね。知ってた。ドクターはもっとよく知ってたことでしょう。厄介な症状を押し付けてごめんねという気持ちが溢れてきます。</p>
      <p>そろそろドクターも途方に暮れる様子を隠せなくなってきます。もう一度MRIいっとくかとなりました。この時点で眼科で受けたMRIの結果は出ているのですが、今度は造影剤を使ってのリトライです。より強力な検査とはいえ、そもそも強く疑われる疾患があるわけでもなく、結果はやはり正常。神経症状は自然に治ることもあるからと、神経内科も経過観察に入ります。が、これも望みは薄いでしょう。こちとら何年経過観察してきたと思っとんのや、と。</p>
      <p>神経内科に通う間も、定期的に眼科にも通って経過観察を続けます。ここでふと気になったことがあったので、眼科のドクターに聞いてみました。今は病因を探しているが、そうではなくて対症療法はできないのかと。ドクターは答えて曰く、症状を抑える特殊な眼鏡があるにはあるが、使いづらくて効果も薄いのでオススメはしていないとのこと。本格的に手詰まり感が漂い始めます。</p>
      <p>気づけば暦は7月になっていました。最初に町医者に掛かったのは2月、聖路加の初診は3月ですから、もう半年が経っています。だというのに、まだ検査ばかりで治療も処方もできていません。</p>
      <p>ここで神経内科のドクターから提案がありました。なんでも都内に神経眼科の病院があるらしく、そこでなら進展があるかもしれないと。藁にもすがりたい状況であることを別にしても、神経眼科という名前は筆者の症状にぴったりに見えます。諸手を挙げて紹介状を書いてもらうのでした。ここで神経内科は診療終了、眼科は経過観察となります。</p>
    </Pagination>
  )
}

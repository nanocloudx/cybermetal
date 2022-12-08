import {Title} from '../../components/Title'
import {Image} from '../../components/Image'
import {Pagination} from '../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={69}>
      <p><strong>1-c）超音波検査</strong></p>
      <p>女性には婦人科検診でおなじみのアレです。腟内に超音波を発生させる器具を入れて、子宮の中の様子などを調べます。卵胞の大きさを見て排卵時期を予想したり、排卵が起きたことが見れたりします。排卵後の場合、子宮の壁に黒い孔が見えるので、「あーここ卵が抜け落ちた跡なのね」などと見えるのは面白かったです。</p>
      <p>超音波検査では子宮内膜の厚さや子宮内に筋腫があるかなども調べます。筋腫の場所や大きさによっては、妊娠・出産に影響があることもあるそうです。著者の場合、子宮筋腫はあるものの、大きさ、場所ともに邪魔になるものではないということで、そのまま据え置かれました。子宮筋腫自体はあまり珍しいものではなく、女性の3〜4人に1人の割合であるそうです。</p>
      <p><strong>2）排卵に関する検査</strong></p>
      <p><strong>2-a）クラミジア検査</strong></p>
      <p>クラミジアは、日本国内で最も多い性感染症の1つとされています。女性の場合は特に自覚症状がなく、感染に気付いていない人も多いようです。しかし、卵管に炎症が起きて卵管が詰まったり、お腹の中に癒着を起こして不妊の原因になることから、検査をして見つかった場合には治療を行います。治療としては抗生物質を飲むだけなのですが、性感染症は男女でうつしあってしまう可能性があるため、もし見つかった場合にはパートナーと一緒に治療する必要があります。</p>
      <p><strong>2-b）子宮卵管造影検査</strong></p>
      <p>子宮の入り口から造影剤を注入してレントゲン検査を行い、卵管が詰まっていないかどうかを調べる検査です。簡単に言えば、胃のバリウム検査の子宮版です。が、さすがにバリウムのように排出はできないので、身体に吸収され尿から排出される造影剤を使うようです。この検査は生理中には行えないため、生理が始まった日に電話をして検査日を予約しました。</p>
      <p>そして、この検査がめちゃくちゃ痛いです。造影剤が膣内に逆流しないようにするため、子宮の中に管を入れて膣内で風船を膨らませます。さらに卵管に造影剤を流し込むためのカテーテルも子宮内に入れていきます。検査前には鎮痛剤を服用しますが、筆者の感覚では「身体の中にある（実際には存在しない）睾丸をねじられた感じ」の痛みでした…。検査後は抗生物質を飲み、入浴は控えるように言われます。</p>
      <p>なお、この造影検査で卵管の通りが良くなることがあり、検査の後6か月は妊娠しやすいゴールデンタイムになるそうです。</p>
      <p><strong>3）精子に関する検査</strong></p>
      <p>2017年の世界保健機関（WHO）の調査によると、不妊のうち、男性のみに原因があるケースが24％、男女両方に原因がある場合が24％で、合計すると不妊の48％は男性にも原因があるそうです。</p>
    </Pagination>
  )
}

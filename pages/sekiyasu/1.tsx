import {Title} from '../../components/Title'
import {Image} from '../../components/Image'
import {Pagination} from '../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={43}>
      <Title
        title={'田舎に引越したので自動車を買った'}
        description={'田舎暮らしにクルマは必需品でしょ？持っていなかったら人権ないよね？'}
        author={'かえで@office_acer'}
        image={'/sekiyasu/author.jpeg'}
        twitter={'@office_acer'}
      />
      <p>
        初めまして。筆者はoffice ACERという音楽サークルを主催しており、そちらで楽曲を発表したりしているのですが、音楽とは関係ない話題ということでこちらに寄稿する運びとなりました。あまり誰かの参考になるような話ではないと思いますが、ご笑納いただけますと幸いです。
      </p>
      <p>
        さて筆者ですが、昨年（2021年）の年末に長年暮らした首都圏を離れ、群馬県にある実家に引っ越しました。もう少し首都圏で暮らしたいとは思っていたのですが、
      </p>
      <ul>
        <li>当時住んでいた借家が取り壊されることとなり転居を余儀なくされた</li>
        <li>遠からず実家に戻ることが家族会議で決まっていた</li>
        <li>勤務先がリモートワーク施策を進めていて遠方に引っ越したとしても退職する必要がなかった</li>
      </ul>
      <p>
        といった事情が重なった結果、実家に戻ることとなった次第です。
        そして実家に戻ってから数ヶ月。生活も落ち着いた頃、ある野望を実行することにしました。それは「マイカー所有」。ほらまあ、群馬県といえば一人一台が当たり前の文化圏として有名ですし。とはいえ親の自動車もあり、公私含めて東京に出る機会は多いものの基本的には鉄道利用なので、どちらかというと「近い将来に個人所有が許されなくなる可能性が高い内燃機関動車、それも3ペダルMT（マニュアルトランスミッション）の自動車を乗っておきたい」という気持ちが主だったというのが正直なところです。
      </p>
      <h2>候補車と試乗</h2>
      <p>
        購入の候補ですが、先述のとおりMT車となると今となっては選択肢は限られており。まずはということで、試乗が比較的容易な以下車種について今年（2022年）の6月から7月にかけて試乗してきました。
      </p>
      <ul>
        <li>マツダ ロードスター 990S</li>
        <li>スバル BRZ R</li>
        <li>スズキ スイフト スポーツ</li>
      </ul>
      <p>
        ロードスターは運転の楽しさはあるものの2シーターの上にトランクも狭く実用性に難ありそう。BRZは排気量が大きいだけあり出力に余裕は感じるものの小回りがきかず自宅での保管が大変そう、かつ他2車より車両価格・維持費とも高額になるのが厳しい。スイフトはアクセル操作による出力の出方がピーキーに感じたけど*恐らくは慣れの範囲、他2車と違って前輪駆動という残念ポイントはあるけれど、取り回し・実用性・価格とどれを取っても最有力候補かな…というか試乗する前からほぼスイフト一択だったのですけどね。試乗自体が念のためという感じではありました。
      </p>
      <small>*実際に所有した個体ではピーキーさを感じなかったので、試乗車固有の特性だったのかも</small>
    </Pagination>
  )
}

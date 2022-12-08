import {Title} from '../../components/Title'
import {Image} from '../../components/Image'
import {Pagination} from '../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={73}>
      <p>心拍がわかるようになるのが7週目ごろ。ここで心拍が計測できると、不妊治療クリニックは卒業。紹介状を書いてもらい、産院に転院するようになります。同時に、役所に行って母子手帳をもらってきたりします。</p>
      <p>最近はお産ができる病院も限られてきているので、産院は早めにリサーチしておくとよいでしょう。選び方はいくつかありますが、自宅や実家から近いか、無痛分娩など自分が希望する出産方法が選べるか、病院や病室の雰囲気が良いか、何かあった場合に対応してもらえる体制があるか、などを基準に選ぶと良いかと思います。</p>
      <p>筆者の場合は、自宅からさほど離れていない病院を選んで紹介状を書いてもらいました。出産を希望する病院には早めに申し込んでおかないと枠が埋まってしまう可能性があるので、手続きは早めにすることをお勧めします。</p>
      <p>なお、心拍が確認できたところで安心はできません。日本産科婦人科学会によると、医療機関で確認された妊娠の15％前後が流産になるといい、その8割は妊娠12週未満で起きるそうです。早期流産の多くは染色体異常など赤ちゃんの側に原因があるということで、こちらでできることはあまりなさそうなのですが、心のダメージは大きいです。妊娠後は、だいたい12週までは2週間に1度、24週までは4週間に1度病院に通って妊婦健診を受けることになります。その後35週目までは再び2週間に1度、出産が近づいてくる36週〜40週は毎週検診を受け、出産に備えていきます。</p>
      <p>また、重要な検査として風しん抗体検査があります。妊婦が風しんにかかると、赤ちゃんが目や耳、心臓などに先天性の障害をもつ「先天性風しん症候群」になる可能性があります。特に1962年4月2日から1979年4月1日生まれの男性は、学校で風しんの予防接種を受ける機会がなかった世代であり、風しんにかかるリスクが高く、妊婦にうつしてしまう恐れがあります。風しんの抗体検査と予防接種は無料で受けられる自治体が多いので、子どもをもつことを考える人は男女とも抗体検査を受けておきましょう。（妊婦の場合は妊婦健診に組み込まれているかと思います）</p>
      <h2>4. 終わりに</h2>
      <p>筆者の場合、年齢の割には比較的AMHの値が高かったこと、パートナーの精子の質も良かったことなどから、人工授精のみで子どもを授かることができました。とはいえ、まだ出産にまでは至っておらず、大きくなったお腹を抱え、日々変わる体調と格闘する日々です。次の寄稿では、家族が増えた話を書けるといいなぁなどと思っております。</p>
      <p>そして子どもが欲しいけどなかなかできない、パートナーと話し合うきっかけが掴みにくい、などと悩んでいる人がいたら、ぜひ不妊治療という選択肢を考えてみて欲しいと思います。不妊治療クリニックに行くと、こんなに多くの人が子どもができなくて悩んでいるのかと驚きます。まずは気軽な気持ちで、一歩踏み出してみていただければ幸いです。</p>
      <ul style={{marginTop: '1rem'}}>
        <li>*1 https://np-complete-books.s3.amazonaws.com/pdf/C100.pdf</li>
        <li>*2 M．Sara Rosenthal.The Fertility Sourcebook.Third Edition</li>
        <li>*3 令和２年（2020）人口動態統計月報年計（概数）の概況</li>
        <li>*4 Justin Chu Reprod Health.2019; 16: 105.</li>
      </ul>
    </Pagination>
  )
}

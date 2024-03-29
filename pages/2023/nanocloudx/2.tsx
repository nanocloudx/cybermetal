import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination author={'nanocloudx'} pageCount={2}>
      <h2>免責</h2>
      <p><strong>この記事は結婚を強く推奨するものではない。</strong>価値観や生き方は人それぞれだ。<br/>本稿の対象読者は「結婚願望があるのに何もしていない人」に向けたものである。
      </p>
      <p>また、事実婚やDINKs、LGBTQ+、熟年層など、もしかすると本稿の内容が当てはまらない場合もあるので、その点は何卒ご容赦いただきたい。</p>
      <h2>爆速で結婚しよう</h2>
      <p>ここからが本題である。</p>
      <p>離婚経験のある筆者が言っても説得力がないが、たとえ合理性が無かったとしても、結婚とは尊いものだと私は思う。一人で生きていくほうが楽だったとしても、誰かと生きていきたいと願うことは素晴らしいことではないか。</p>
      <Image href={'/2023/nanocloudx/nanocloudx1.jpg'} widthPercentage={90} description={'既婚者の幸福度は沈み込みが緩やか'}/>
      <p>人生における<strong>幸福感は５０歳前後で最低になる</strong>との論文がある[^2][^3]。中高年期に訪れる幸福感の沈み込みを緩和できるのは「金」と「結婚」の２つらしい。関係良好な夫婦は独身よりも人生の幸福感が高く、中高年期の沈み込みも緩和されていることがわかる。(ちなみに富裕層は既婚だろうが未婚だろうが幸福感は高いらしい。宝くじも買うか...)
      </p>
      <p>さあ、幸せの高みを目指そうじゃないか。<strong>爆速で結婚しましょう。</strong></p>
    </Pagination>
  )
}

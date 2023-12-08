import {Title} from '../../../components/Title'
import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination author={'happo31'} pageCount={1}>
      <Title
        title={'分かりやすくもないAndroid端末購入ガイド'}
        description={'に見せかけたベンチマーク主義へのアンチテーゼ'}
        author={'happo31'}
        image={'/2023/author/happo31.png'}
        misskey={'@happo31'}
        website={'happo31sprogblog.hatenablog.jp'}
      />
      <p><strong>※以下の文章はすべて独自研究に基づくものです。</strong></p>
      <h2>まえがき</h2>
      <p>お初にお目にかかります、happo31と申します。</p>
      <p>本項の内容は拙ブログにて掲載した記事を本向けに微修正を施したものです。</p>
      <p>こういう文章はインターネットにだけ残すよりも、なんとなく本に残っているほうが数年経ってから見たときの威力が増すのではないかという思いから寄稿させて頂く運びとなりました。</p>
      <p>この記事を書いた経緯ですが、インターネットにはITに対する知識もないような素人が訳知り顔でガジェットをレビューするブログが蔓延っており、彼らがいかに適当なことを言っているのかを僕の視点で批判したい気持ちが溢れてしまい、思わず合計2日ほどで書きました。</p>
      <p>ようするにガイドに見せかけた、ただのお気持ち表明です。（お気持ち表明っていう表現もそろそろ死語ですかね）</p>
      <p>ちなみに、僕は特に常日頃からガジェットを買い漁っているわけではなく、具体名を上げている端末のうち実際に使ったことのあるものはわずか（すぐ下の所持歴を参照）なため、詳しくは後述しますが、実際の使用感については各自でお店に行って触ることを推奨いたします。</p>
      <p>真面目な解説が欲しい人はGoogleが出してる公式ガイド[1]などを見ましょう、よっぽど有意義だと思います。</p>
      <p>happo31 のスマートフォン所持歴</p>
      <ul>
        <li>T-01A</li>
        <li>Xperia A</li>
        <li>Xperia Z3 Compact</li>
        <li>Pixel3</li>
        <li>Pixel5</li>
        <li>Pixel8(現在)</li>
      </ul>
    </Pagination>
  )
}

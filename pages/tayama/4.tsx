import {Title} from '../../components/Title'
import {Image} from '../../components/Image'
import {Pagination} from '../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={8}>
      <p>
        一方、エドワード・エルガーによる行進曲『威風堂々』[^5] のよく知られた第一番中間部は、四分のリズムで刻まれるベース音に進行を預けながら、主旋律は表拍による終止を多用していて、曲名にふさわしい堂々とした安定感を生んでいます。
      </p>
      <Image href={'/tayama/4.png'} description={'Figure 4. 夜に駆ける'} />
      <Image href={'/tayama/5.png'} description={'Figure 5. 威風堂々（第一番中間部）'} />
      <p>
        小節頭を伸ばすと終止を感じさせるからといって、必ずしもすべての楽曲がそのように終わるわけではありません。例えば fhána によるアニメ『Fate/kaleid liner プリズマ☆イリヤ ツヴァイ ヘルツ！』の主題歌『ワンダーステラ』[^6] は裏拍で終わる曲です。しかしながらこの終わり方は壮大なフィナーレを感じさせるものではなく、続くはずのメロディーが突然打ち切られたような喪失感を与えます。曲後の一小節分の静寂の余韻を味わってこそ本曲は本当の終わりを迎える、と感じられるのではないでしょうか。
      </p>
      <Image href={'/tayama/6.png'} description={'Figure 6. ワンダーステラ'} />
      <p>
        そうすると、五・七・五のリズムは終止・継続・終止の連なりと捉えることができます。この終止と進行のバランスの良い並びが俳句のリズムの心地よさである、と結論づけていいのではないでしょうか。
      </p>
    </Pagination>
  )
}

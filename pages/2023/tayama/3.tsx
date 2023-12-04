import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={999}>
      <p>ここまでの診療の中で、筆者の中には一つの疑問がありました。筆者には物が二重に視えているのですが、それは筆者の知覚の中のことに過ぎません。わたしの視界はわたしにしか視えないのに、物が二重に視えているとどうすれば客観的に示すことができるのか？　これが近視であれば、ランドルト環の欠けている方向を答えさせることで示すことができます。視えている人が視えていないように装うことはできてしまいますが、その逆はできません。同じように、複視であれば合格できないようなテストを設計することは可能なのでしょうか？検査室の中にはその答えがありました。分かってしまえば小学生でも作れるほど単純な検査器で筆者に診断が下りることになります。</p>
      <p>その検査器は、端的に言えば一対のプロジェクタとレーザーポインタでした。プロジェクタはグリッドと、その格子に打たれた3×3個の点を映し出します。その点を順繰りにレーザーポインタで指していくだけの簡単な検査です。ただし、プロジェクタは緑の光を放ち、レーザーポインタは赤い光を放ちます。そしてこの検査は、緑と赤のセロファンを貼った眼鏡をかけて行うのです。アナグリフ（3D眼鏡で2色刷りのものを見る、原始的な裸眼立体視）と同じ眼鏡ですね。要するに、左目で見た点を右目で見たレーザーポインタで指し示せ、という検査です。これを左右のセロファンを入れ替えてもう一度行います。診療明細には立体視検査とありますが、ググった限りでは無数にある立体視検査法のうちの一つであるようです。</p>
      <Image href={'/2023/tayama/tayama2.png'} widthPercentage={80} description={'図：立体視検査法の概略図'} />
      <p>この検査結果を見たドクターは、満を持して複視の診断を下しました。筆者がレーザーポインタで指した場所がズレていたからですが、ドクターが注目したのはそれだけではありません。両目とも同じくらいズレていたというところです。</p>
      <p>複視というのは両目の焦点が合わないために起こりますが、なぜ焦点が合わないのかというと、筆者の場合眼球を外側に向かって動かすこと（外転運動）ができていないからです。ではなぜできていないのかというと、おそらく外傷などにより物理的に外転運動が阻害されているのでは *ない* とわかります。両目とも同じくらいズレていたからです。これが物理起因だとすると両目とも同じ程度の外傷なり腫瘍なりを抱えていることになりますが、偶然そのようなことが起こるとは考えづらいです。そうすると、眼球やその外転運動を行う外直筋には問題がなく、外直筋を動かす神経が機能していないことになります。</p>
    </Pagination>
  )
}

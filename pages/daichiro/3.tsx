import {Title} from '../../components/Title'
import {Image} from '../../components/Image'
import {Pagination} from '../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={31}>
      <p>
        いわゆる「成功した」NFT プロジェクトの中には、次のような性質のものがあります。
      </p>
      <ul>
        <li>
          有名アーティストが発行したオリジナルの絵
        </li>
        <li>
          保有していることで何かしらの特典が受けられると定められたトークン
        </li>
        <li>
          ゲームのアイテム
        </li>
      </ul>
      <p>
        「絵」「特典」「アイテム」これらに共通することは、
        メタデータの中身やプロジェクトの思想といった、 NFT 以外の部分を示しているということです。
        個人的には、 NFT の仕組み自体に大した価値はなく、
        それをどう使うかということで価値が生まれると思っています。
      </p>
      <p>
        ではどのように使うと嬉しいのでしょうか。
      </p>
      <h2>
        4. NFT の使いみち
      </h2>
      <p>
        我々がさんざん意識させられている「絵」ですが、円に換算して億単位で取引されている物があるのは事実です。
        これに関してはアートですので、今までにあるアートと同じと考えることができます。
        例えば「モナ・リザ」の本物はめちゃくちゃに価値がありますが（1兆円以上？）、それのレプリカはどうでしょう。
        物によりますが、大体5,000円もあれば買えるのではないでしょうか。
        明らかに、本物は価値が高いですね。
        実物があるアートはこのように本物と偽物の区別がつきやすいのですが、デジタルアートはそうではありませんでした。
        <br />
        …NFT が生まれる前までは。
      </p>
      <p>
        デジタルアートは複製がアナログに比べてはるかに容易ですが、 NFT にすることでオリジナルとそれ以外の区別ができるようになりました。
        つまり、デジタルコンテンツもアナログのように「一点モノ」を作れるようになりました。
        オリジナルをそこまでのお金を出して所有することの意味についてはここでは触れませんが、とにかくそれに価値がついているということです。
      </p>
      <p>
        次に、保有していることで何らかの特典が受けられるトークンについて。
        これは会員権やチケットと同じ用途で NFT を使用するということです。
        持っていると発行者が運営しているお店で割引を受けられる NFT というのも実際に存在します。
        NFT は複製不可能という性質を利用しているのですね。
      </p>
      <p>
        最後に、ゲームのアイテムも NFT になっています。
        複製不可能であるという性質はチート防止に役立ちます。
        NFT だとゲーム外（＝NFT のマーケットプレイス）で取引ができるため、
        ゲームのサービスが終了してもアイテムがなくならないということにはなります。
        まあ、価値はほぼなくなると思いますが。
      </p>
      <p>
        メタデータの性質をうまく利用した NFT プロジェクトもあります。
        NFT を保有し続けていると、その時間に応じて絵が変わっていくものもあります。
        また、ゲームのアイテムを使うと絵が進化していく、なんてのもあります。
      </p>
      <p>
        NFT の絵が変わる？NFT は唯一のものだから絵が変わることはないのでは？
        と今までの説明の理解だとそう解釈する方がいるかもしれません。
        NFT の標準規格を満たすだけでは NFT の絵は変わる可能性があります。
      </p>
    </Pagination>
  )
}

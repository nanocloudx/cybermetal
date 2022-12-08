import {Title} from '../../components/Title'
import {Image} from '../../components/Image'
import {Pagination} from '../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={9}>
      <h2>余論</h2>
      <p>
        俳句の魅力は継続と終止のリズムという音楽的特性、モーラ等時性という日本語の言語的特性に裏打ちされるものであることを見てきました。それを考えると、俳句という形式が日本でのみ花開いたのも自然なことであるといえるかもしれません。なぜならば、モーラ等時性という性質を持つ言語は日本語以外には全く見られない [^7] からです。
      </p>
      <p>
        近年では俳句の文化は海外にも広がりを見せ、英語で詠まれる俳句も増えてきました。英語による俳句はモーラではなく音節を数えて五・七・五となるように詠まれることが多いようですが、これでは日本語の俳句のようなリズムを感じるのは難しいと言わざるをえないでしょう。音節数の制約を持った短いポエムという形式は興味深いものですが、その制約が鑑賞上の長所になっているとまでは言い難いです。やはり五・七・五を楽しむには日本語ということでしょう。
      </p>
      <Image href={'/tayama/7.png'} description={'Figure 7. 英語で詠まれた俳句の例 [^8]'} widthPercentage={50} />
      <p>
        逆に英語の特性を生かした形式があるとしたら、それはどんなものになるでしょうか。英語はアクセント等時性の言語であり、文章の中で強く発声するところが定期的に出現します。このアクセントを一層際立たせるために、たとえばアクセントを同じ音節・母音で揃えるというアイデアが考えられるでしょう。それは突き詰めれば韻を踏むということになり、実際に英語詩に取り入れられているスタイルです。あるいは、日本語の伝統的な詩作に韻を踏むことが根付かなかったのも、日本語がアクセント等時性でない（あるいはそもそも強弱アクセントではなく抑揚アクセントの言語である）ためと言えるかもしれません。
      </p>
    </Pagination>
  )
}

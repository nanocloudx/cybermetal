import {Pagination} from '../../../components/Pagination'
import {PrologueContainer} from '../../../components/PrologueContainer'

export default function Page() {
  return (
    <Pagination author={'prologue'} pageCount={1}>
      <PrologueContainer>
        <h3>プロローグ</h3>
        <p>ノイズすら飲み込むような真っ黒な海を、
          <ruby>飛行機
            <rt>エアプレーン</rt>
          </ruby>
          のナビゲーションライトが切り裂いていく。数え切れないほどのランナーたちが輝いては消えていった、
          <ruby>東京湾
            <rt>ポート</rt>
          </ruby>
          の凍てつくようないつもの風景。
        </p>
      </PrologueContainer>
    </Pagination>
  )
}

import {Pagination} from '../../../components/Pagination'
import {PrologueContainer} from '../../../components/PrologueContainer'

export default function Page() {
  return (
    <Pagination author={'prologue'} pageCount={2}>
      <PrologueContainer>
        <p>バーテンダーは興味なさそうにそのチップをうなじの後ろにあるスロットに差し込み、ロードしながら薄ら笑いを浮かべていた。</p>
        <p style={{textAlign: 'right'}}>寄稿：檻総文人</p>
      </PrologueContainer>
    </Pagination>
  )
}

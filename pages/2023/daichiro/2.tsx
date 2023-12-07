import {Pagination} from '../../../components/Pagination'
import {FullSizeImage} from '../../../components/FullSizeImage'

export default function Page() {
  return (
    <Pagination author={'daichiro'} pageCount={2}>
      <FullSizeImage href={'/2023/daichiro/daichiro2.png'}/>
    </Pagination>
  )
}

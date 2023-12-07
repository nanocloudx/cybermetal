import {Pagination} from '../../../components/Pagination'
import {FullSizeImage} from '../../../components/FullSizeImage'
import {getPageCount} from '../pageCount'

export default function Page() {
  return (
    <Pagination page={getPageCount('daichiro', 4)}>
      <FullSizeImage href={'/2023/daichiro/daichiro4.png'}/>
    </Pagination>
  )
}

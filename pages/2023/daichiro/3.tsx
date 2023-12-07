import {Pagination} from '../../../components/Pagination'
import {FullSizeImage} from '../../../components/FullSizeImage'
import {getPageCount} from '../pageCount'

export default function Page() {
  return (
    <Pagination page={getPageCount('daichiro', 3)}>
      <FullSizeImage href={'/2023/daichiro/daichiro3.png'}/>
    </Pagination>
  )
}
import {Pagination} from '../../../components/Pagination'
import {FullSizeImage} from '../../../components/FullSizeImage'

export default function Page() {
  return (
    <Pagination author={'daichiro'} pageCount={4}>
      <FullSizeImage href={'/2023/daichiro/daichiro4.png'}/>
    </Pagination>
  )
}

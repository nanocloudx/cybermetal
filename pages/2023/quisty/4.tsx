import {Pagination} from '../../../components/Pagination'
import {FullSizeImage} from '../../../components/FullSizeImage'

export default function Page() {
  return (
    <Pagination author={'quisty'} pageCount={4}>
      <FullSizeImage href={'/2023/quisty/quisty4.png'}/>
    </Pagination>
  )
}

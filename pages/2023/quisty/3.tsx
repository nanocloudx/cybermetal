import {Pagination} from '../../../components/Pagination'
import {FullSizeImage} from '../../../components/FullSizeImage'

export default function Page() {
  return (
    <Pagination author={'quisty'} pageCount={3}>
      <FullSizeImage href={'/2023/quisty/quisty3.png'}/>
    </Pagination>
  )
}

import {Pagination} from '../../../components/Pagination'
import {FullSizeImage} from '../../../components/FullSizeImage'

export default function Page() {
  return (
    <Pagination author={'quisty'} pageCount={2}>
      <FullSizeImage href={'/2023/quisty/quisty2.png'}/>
    </Pagination>
  )
}

import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'
import {FullSizeImage} from '../../../components/FullSizeImage'
import {getPageCount} from '../pageCount'

export default function Page() {
  return (
    <Pagination page={getPageCount('daichiro', 1)}>
      <FullSizeImage href={'/2023/daichiro/daichiro1.png'} />
    </Pagination>
  )
}

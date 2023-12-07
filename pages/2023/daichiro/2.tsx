import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'
import {FullSizeImage} from '../../../components/FullSizeImage'
import {getPageCount} from '../pageCount'

export default function Page() {
  return (
    <Pagination page={getPageCount('daichiro', 2)}>
      <FullSizeImage href={'/2023/daichiro/daichiro2.png'} />
    </Pagination>
  )
}

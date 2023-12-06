import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'
import {FullSizeImage} from '../../../components/FullSizeImage'

export default function Page() {
  return (
    <Pagination page={999}>
      <FullSizeImage href={'/2023/quisty/quisty4.png'} />
    </Pagination>
  )
}

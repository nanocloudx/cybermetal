import {Pagination} from '../../../components/Pagination'
import {ImageTwoColumn} from '../../../components/ImageTwoColumn'
import {Image} from '../../../components/Image'

export default function Page() {
  return (
    <Pagination author={'kuri'} pageCount={8}>
      <h3>サイバーメタルチンピラガール</h3>
      <Image href={'/2023/kuri/kuri19.png'} widthPercentage={90}/>
    </Pagination>
  )
}

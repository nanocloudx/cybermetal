import {Pagination} from '../../components/Pagination'
import {Image} from '../../components/Image'

export default function Page() {
  return (
    <Pagination author={'omake'} pageCount={1}>
      <h2>おまけ：サイバーメタルチンピラねこ</h2>
      <Image href={'/2023/omake/omake1.jpg'} description={'愚かな人間どもよ'} widthPercentage={50}/>
      <Image href={'/2023/omake/omake2.jpg'} description={'わかっているじゃないか'} widthPercentage={50}/>
    </Pagination>
  )
}

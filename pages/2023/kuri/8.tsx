import {Pagination} from '../../../components/Pagination'
import {ImageTwoColumn} from '../../../components/ImageTwoColumn'
import {Image} from '../../../components/Image'

export default function Page() {
  return (
    <Pagination author={'kuri'} pageCount={8}>
      <h3>サイバーメタルチンピラガール</h3>
      <Image href={'/2023/kuri/kuri19.png'} widthPercentage={90}/>
      <p>表紙の娘も生成してもらいました。呪文は「サイバーメタルチンピラガール」のみです。</p>
      <p>ガールをつけないと男しか出てきませんでした。チンピラの多様化とAIのジェンダー配慮が急務です。</p>
    </Pagination>
  )
}

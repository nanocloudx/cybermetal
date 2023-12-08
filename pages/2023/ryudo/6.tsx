import {Pagination} from '../../../components/Pagination'
import {Image} from '../../../components/Image'

export default function Page() {
  return (
    <Pagination author={'ryudo'} pageCount={6}>
      <p>好きなジャンルの即売会を開いて、好きなジャンルが発展する、、、最高じゃないですか。毎回成功するとも限らないし、失敗の方がはるかに多い即売会、、、不思議な魅力ですねｗ</p>
      <p>近年即売会の数が減っていたり、発表するだけならネットで良いじゃんと言う話をよく聞きます。しかし！！我々はリアルに生きてるんです！！生きてる以上動けて、生で感じられる体が有るなら絶対リアルイベントは楽しいんです！！これは絶対誰にも変えられない不変のものです！！なので、即売会開いて誰も来なかったらどうしようなんて考えなくて大丈夫！！考えるのはどうすれば面白くなるか？だけでいいんです！！</p>
      <p>幸い世の中には沢山のイベント主催が居ます。私以外にもきっと彼らは、この地獄、、、楽しみをやる人には快く色々教えてくれると思います。私たちは何時でも皆様をお待ちしております！！即売会名は決まりましたか？</p>
      <h3>グルコミ当日の様子</h3>
      <Image href={'/2023/ryudo/ryudo1.jpg'} widthPercentage={75} description={'サークルさんが新作準備中'} />
      <Image href={'/2023/ryudo/ryudo2.jpg'} widthPercentage={75} description={'大人気のお振舞生ハムは、1日で原木が骨になります！'} />
    </Pagination>
  )
}

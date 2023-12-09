import {Atogaki} from '../../components/Atogaki'
import {Pagination} from '../../components/Pagination'

export default function Page() {
  return (
    <Pagination author={'atogaki'} pageCount={1}>
      <div>
        <h2>編集後記</h2>
        <p>タイトルが意味不明と定評のある「<strong>サイバーメタルチンピラ</strong>」ですが、お楽しみいただけたでしょうか？私含め著者たちもタイトルの意味はわかりません(意味など考えずに命名したので当然なのですが)。一部の著者から「チンピラのくせに行儀が良すぎる」と謎の苦情が殺到し、チンピラ性の違い(？)で大喧嘩したこともありました。意味がわからん。</p>
        <p>表紙絵は昨年に引き続きAIによって生成されました。「サイバーメタルチンピラガール」という単語だけで表紙の彼女が生まれました。AIの進化は凄まじいものを感じますね。</p>
        <p>本誌は「<strong>ノンジャンルなんでもあり情報誌</strong>」として年１回の頒布を目指しております。2022年に続いて2023年も製本できたこと大変嬉しく思います。来年2024年末も皆様にお会いできることを楽しみにしております。せーの、インターネット最高！！！</p>
        <p style={{textAlign: 'right'}}>編集担当 なのくろ</p>
      </div>
      <div style={{marginTop: '1rem'}}>
        <h2>著者からひとこと</h2>
        <div>
          <Atogaki author={'だいちろ'} image={'/2023/author/daichiro.png'} message={'4年ぶりの新作でした。（衝撃の事実）'}/>
          <Atogaki author={'kinoppyd'} image={'/2023/author/kinoppyd.jpg'} message={'牛乳は味が嫌いで飲めないんだけど、加工乳はだいたいなんでも好きです'}/>
          <Atogaki author={'冬椿'} image={'/2023/author/fuyutsubaki.png'} message={'㊙情報：感受性はちゃんと寝ると上がるので、寝ると名画に感じやすい'}/>
          <Atogaki author={'kuri'} image={'/2023/author/kuri.jpg'} message={'打ち上げはすし〇んまいで'}/>
          <Atogaki author={'ryudo'} image={'/2023/author/ryudo.jpg'} message={'同人イベント開催するのまじで楽しいので、皆も軽率に好きなジャンルで開催しよう！！'}/>
          <Atogaki author={'きすちぃ'} image={'/2023/author/quisty.png'} message={'サイバーメタルチンピラ体験、とても楽しかったです！'}/>
          <Atogaki author={'happo31'} image={'/2023/author/happo31.png'} message={'「サイバーメタルチンピラ」のOSがAndroidだったら嫌だな'}/>
          <Atogaki author={'kusano_k'} image={'/2023/author/kusano.png'} message={'ルービックキューブをポチりましょう。'}/>
          <Atogaki author={'tayama0324'} image={'/2023/author/tayama.jpg'} message={'Mein Führer, I can see!'}/>
          <Atogaki author={'なのくろ'} image={'/2023/author/nanocloudx.jpg'} message={'嫁は乃木坂&欅坂46合同オーディションの最終審査まで進んだのに辞退したらしい'}/>
          <Atogaki author={'ながいたん'} image={'/2023/author/nagaitan.jpg'} message={'1年前には存在しなかった赤子がもう伝い歩きしている人生の不思議'}/>
          <Atogaki author={'匿名チンピラ（埼玉県在住）'} image={'/2023/author/shodai.png'} message={'10年のダンジョン探索の知見を共有することができて幸せです'}/>
        </div>
      </div>
    </Pagination>
  )
}

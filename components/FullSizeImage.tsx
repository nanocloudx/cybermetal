import * as React from 'react'
import s from './FullSizeImage.module.scss'

type Props = {
  href: string
}

export const FullSizeImage: React.FC<Props> = (props) => {
  return (
    <div className={s.main}>
      <img className={s.image} src={props.href} />
    </div>
  )
}

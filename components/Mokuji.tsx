import * as React from 'react'
import s from './Mokuji.module.scss'

type Props = {
  title?: string
  description: string
  author?: string
  page: number
  break?: boolean
}

export const Mokuji: React.FC<Props> = (props) => {
  return (
    <div className={s.main}>
      <p className={s.page}>{props.page}</p>
      <div>
        {props.title && (
          <h1 className={s.title} style={props.break ? {lineHeight: 1} : undefined}>
            {props.title}
            {props.break && <br />}
            <span className={s.author}>{props.author}</span>
          </h1>
        )}
        <p className={s.description}>{props.description}</p>
      </div>
    </div>
  )
}

import * as React from 'react'
import s from './Pagination.module.scss'
import {PropsWithChildren} from 'react'
import {getPageCount} from '../utils/2023/pageCount'

type Props = {
  author?: string
  pageCount?: number
  page?: number // deprecated
}

export const Pagination: React.FC<PropsWithChildren<Props>> = (props) => {
  if (props.author && props.pageCount) {
    return (
      <div className={s.main}>
        {props.children}
        <p className={s.page}>{getPageCount(props.author, props.pageCount)}</p>
      </div>
    )
  }
  if (props.page) {
    return (
      <div className={s.main}>
        {props.children}
        <p className={s.page}>{props.page}</p>
      </div>
    )
  }
  return (
    <div className={s.main}>
      {props.children}
    </div>
  )
}

import * as React from 'react'
import s from './Pagination.module.scss'
import {PropsWithChildren} from 'react'
import {getPageCount} from '../pages/2023/pageCount'

type Props = {
  author: string
  pageCount: number
}

export const Pagination: React.FC<PropsWithChildren<Props>> = (props) => {
  return (
    <div className={s.main}>
      {props.children}
      <p className={s.page}>{getPageCount(props.author, props.pageCount)}</p>
    </div>
  )
}

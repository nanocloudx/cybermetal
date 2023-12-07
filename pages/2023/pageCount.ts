export function getPageCount(author: string, pageNumber: number = 1): number {
  let total = pageNumber
  for (const key in pageCounts) {
    if (key === author) break
    total += pageCounts[key as keyof typeof pageCounts]
  }
  return total
}

/**
 * 各ページのページ数
 * 目次の順番と一致させる必要がある
 */
const pageCounts = {
  mokuji: 1,
  prologue: 2,
  daichiro: 4,
  kinoppyd: 6,
  fuyutsubaki: 4,
  kuri: 7,
  ryudo: 6,
  quisty: 4,
  happo31: 7,
  kusano: 5,
  shodai: 5,
  tayama: 10,
  nanocloudx: 8,
  nagaitan: 3,
  atogaki: 1,
  omake: 1,
  okuduke: 1,
}

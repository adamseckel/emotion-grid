import styled from 'react-emotion'

interface GapProps {
  gap: string
}

interface ColumnProps {
  columns: number
}

interface GridProps extends ColumnProps, GapProps {}

function times(times: number): number[] {
  let i
  const output = []
  for (i = 0; i < times; i++) {
    output.push(i)
  }
  return output
}

const makeGap = ({ gap }: GridProps): string => (gap ? gap : '0')
const makeColumns = ({ columns }: GridProps): string =>
  times(columns)
    .map((x: number) => '1fr')
    .join(' ')

export default styled('div')`
  display: grid;
  grid-columns: ${makeColumns};
  grid-gap: ${makeGap};
`

interface ItemProps {
  x: number
  y: number
}

const makeColSpan = ({ x = 1 }: ItemProps): string => (x ? `span ${x};` : '')
const makeRowSpan = ({ x = 1 }: ItemProps): string => (x ? `span ${x};` : '')

export const Item = styled('div')`
  grid-column: ${makeColSpan};
  grid-row: ${makeRowSpan};
`

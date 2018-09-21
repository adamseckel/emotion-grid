import styled from 'react-emotion'

interface GapProps {
  gap: string;
}

interface ColumnProps {
  columns: number;
}

interface GridProps extends ColumnProps, GapProps {}

function times(times: number): number[] {
  let i
  let output = []
  for (i = 0; i < times; i++) {
    output.push(i)
  }
  return output
}

const makeGap = ({ gap }: GapProps): string => (gap ? `grid-gap: ${gap};` : '')
const makeColumns = ({ columns }: ColumnProps): string =>
  times(columns)
    .map((x: number) => '1fr')
    .join(' ')

export default styled <
  GridProps >
  'div'`
  display: grid;
  grid-columns: ${makeColumns};
  ${makeGap}
`

// export const Item = styled('div')`
//   ${({ x }) => (x ? `grid-column: span ${x};` : '')} ${({ y }) =>
//     y ? `grid-row: span ${y};` : ''};
// `

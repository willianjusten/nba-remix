import { render, screen } from '@testing-library/react'
import { Table, TableCell, TableHead } from '.'

describe('<Table>', () => {
  it('should render correctly', () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Children</td>
          </tr>
        </tbody>
      </Table>,
    )

    expect(screen.getByRole('table')).toHaveClass('md:min-w-min')
    expect(screen.getByText('Children')).toBeInTheDocument()
  })

  it('should render fullWidth', () => {
    render(
      <Table fullWidth>
        <tbody>
          <tr>
            <td>Children</td>
          </tr>
        </tbody>
      </Table>,
    )

    expect(screen.getByRole('table')).not.toHaveClass('md:min-w-min')
    expect(screen.getByText('Children')).toBeInTheDocument()
  })
})

describe('<TableCell>', () => {
  it('should render correctly', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell className="font-bold">with classname</TableCell>
            <TableCell>without classname</TableCell>
          </tr>
        </tbody>
      </table>,
    )

    expect(screen.getByText('with classname')).toHaveClass('font-bold')
    expect(screen.getByText('without classname')).toBeInTheDocument()
  })
})

describe('<TableHead>', () => {
  it('should render correctly', () => {
    render(
      <table>
        <TableHead>
          <tr>
            <th>Children</th>
          </tr>
        </TableHead>
      </table>,
    )

    expect(screen.getByText('Children')).toBeInTheDocument()
  })
})

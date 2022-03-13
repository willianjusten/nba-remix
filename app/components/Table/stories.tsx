import { Story, Meta } from '@storybook/react'

import { Table, TableCell, TableHead } from '.'

export default {
  title: 'Table',
  component: Table,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta

export const Default: Story = () => (
  <Table>
    <TableHead>
      <tr>
        <TableCell>Head Element</TableCell>
        <TableCell>Head Element</TableCell>
      </tr>
    </TableHead>
    <tbody>
      <tr>
        <TableCell>Body Element</TableCell>
        <TableCell>Body Element</TableCell>
      </tr>
      <tr>
        <TableCell>Body Element</TableCell>
        <TableCell>Body Element</TableCell>
      </tr>
      <tr>
        <TableCell>Body Element</TableCell>
        <TableCell>Body Element</TableCell>
      </tr>
    </tbody>
  </Table>
)

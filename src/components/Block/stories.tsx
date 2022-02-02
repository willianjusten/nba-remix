import { Story, Meta } from '@storybook/react'
import Block, { BlockProps } from '.'

export default {
  title: 'Block',
  component: Block
} as Meta

export const Default: Story<BlockProps> = (args) => <Block {...args} />

Default.args = {
  href: '#',
  title: 'title',
  description: 'description'
}

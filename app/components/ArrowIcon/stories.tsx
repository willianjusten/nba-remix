import { Story, Meta } from '@storybook/react'

import { ArrowIcon, ArrowIconProps } from '.'

export default {
  title: 'ArrowIcon',
  component: ArrowIcon,
} as Meta<ArrowIconProps>

export const Default: Story<ArrowIconProps> = (args) => <ArrowIcon {...args} />

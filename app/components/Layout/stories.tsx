import { Story, Meta } from '@storybook/react'
import Layout, { LayoutProps } from '.'

export default {
  title: 'Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default: Story<LayoutProps> = (args) => (
  <Layout>
    <div style={{ height: '1000px' }}></div>
  </Layout>
)

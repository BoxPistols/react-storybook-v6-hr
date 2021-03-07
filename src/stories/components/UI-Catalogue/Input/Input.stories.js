import React from 'react'
import Input from './Input'

const Storybook = {
  title: 'UI-Catalogue/Form/Input',
  component: Input,
}
export default Storybook

const Story = (args) => <Input {...args} />

export const Sizes = Story.bind({})
Sizes.args = {
  size: 'default',
  rad: 'default',
  label: 'Label Name',
}

export const Small = Story.bind({})
Small.args = {
  size: 'small',
  label: 'Small',
}

export const Medium = Story.bind({})
Medium.args = {
  size: 'medium',
  label: 'medium',
}

export const Large = Story.bind({})
Large.args = {
  size: 'large',
  label: 'large',
}

export const X_Large = Story.bind({})
X_Large.args = {
  size: 'x-large',
  label: 'x-large',
}

// export const Small = () => <Input size="small" placeholder="small" />
// export const Medium = () => <Input size="medium" />
// export const Large = () => <Input size="large" />
// export const X_Large = () => <Input size="x-large" />

Sizes.storyName = 'Input Size'

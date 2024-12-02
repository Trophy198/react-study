import { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type ButtonType = StoryObj<typeof meta>;

export const Enabled: ButtonType = {
  args: {
    children: '버튼 이름',
    onClick() {},
    disabled: false,
  },
};

export const Disabled: ButtonType = {
  args: {
    children: '버튼 이름',
    onClick() {},
    disabled: true,
  },
};

import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Task from '../components/Task';

import { TaskProps } from '../components/Task';

export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

const meta: Meta<typeof Task> = {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export default meta;

// 스토리 객체 타입 정의
type Story = StoryObj<typeof Task>;

// Default 스토리
export const Default: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

// Pinned 스토리
export const Pinned: Story = {
  args: {
    task: {
      ...(Default.args?.task as TaskProps['task']), // Default의 task를 가져와 확장
      state: 'TASK_PINNED',
    },
  },
};

// Archived 스토리
export const Archived: Story = {
  args: {
    task: {
      ...(Default.args?.task as TaskProps['task']),
      state: 'TASK_ARCHIVED',
    },
  },
};

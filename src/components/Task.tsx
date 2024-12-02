import React from 'react';

export interface TaskProps {
  task: {
    id: string;
    title: string;
    state: 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED';
  };
  onArchiveTask: (id: string) => void; // 아카이브 콜백
  onPinTask: (id: string) => void; // 핀 콜백
}

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }: TaskProps) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === 'TASK_ARCHIVED'}
        />
        <span onClick={() => onArchiveTask(id)}></span>
      </label>

      <label>
        <input type="text" value={title} readOnly={true} name="title" id={`title-${id}`} placeholder="Input title" />
      </label>

      {state !== 'TASK_ARCHIVED' && (
        <button
          className="pin-button"
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <span>즐겨찾기 아이콘</span>
        </button>
      )}
    </div>
  );
};

export default Task;

"use client"

import { Task } from "@repo/db-prisma"
import { IcCheck } from "@repo/icon/ic-check"
import { IcTrash } from "@repo/icon/ic-trash"
import { IcUncheck } from "@repo/icon/ic-uncheck"
import { getContrastColor } from "../../utils/color-libs"

export const TaskItem = (props: {
  task: Task;
  onComplete?: (completed: boolean) => void;
  onEdit?: () => void;
  onDelete?: () => void;
}) => {
  const completeHandler = () => {
    props.onComplete?.(!props.task.completed);
  }
  return (
    <div
      className="w-full flex items-start gap-3 p-4 rounded-lg shadow-todo-item border border-border cursor-pointer opacity-90 hover:opacity-100"
      style={{
        backgroundColor: props.task.color,
      }}
      onClick={props.onEdit}
    >
      <button className="grow-0 shrink-0" onClick={(e) => { e.stopPropagation(); completeHandler(); }}>
        {props.task.completed ? <IcCheck color="#5E60CE" /> : <IcUncheck color="#4EA8DE" />}
      </button>
      <p
        className="grow shrink font-inter font-normal text-sm leading-5 break-all"
        style={{
          color: getContrastColor(props.task.color),
          opacity: props.task.completed ? 0.75 : 1,
          textDecoration: props.task.completed ? 'line-through' : 'none'
        }}
      >{props.task.title}</p>
      <button className="grow-0 shrink-0" onClick={(e) => { e.stopPropagation(); props.onDelete?.(); }}>
        <IcTrash color={getContrastColor(props.task.color)} />
      </button>
    </div>
  )
}
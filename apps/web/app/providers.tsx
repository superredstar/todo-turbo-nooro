import React from "react"
import { TaskContextProvider } from "../contexts/task.context"

export default function Providers(props: { children: React.ReactNode }) {
  return (
    <TaskContextProvider>
      {props.children}
    </TaskContextProvider>
  )
}
import { IcOrder } from "@repo/icon/ic-order";

export const EmptyTaskList = () => {
  return (
    <div className="w-full min-h-64 flex flex-col justify-center items-center border-t border-border rounded-lg">
      <IcOrder />
      <p className="font-inter font-bold text-base leading-5.5 text-grey-1 mt-3">You don't have any tasks registered yet.</p>
      <p className="font-inter font-normal text-base leading-5.5 text-grey-1 mt-3">Create tasks and organize your to-do items.</p>
    </div>
  )
}
"use client"

import { IcPlusCircle } from "@repo/icon/ic-plus-circle";
import { IcPureCheck } from "@repo/icon/ic-pure-check";
import { Button } from "@repo/ui/button";
import { ColorPicker } from "@repo/ui/color-picker";
import { Input } from "@repo/ui/input";
import { useEffect, useState } from "react";

export const TodoForm = (props: {
  type: 'create' | 'update';
  className?: string;
  title?: string;
  color?: string;
  onSubmit?: (title: string, color: string) => void;
}) => {
  const [title, setTitle] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [errors, setErrors] = useState<Record<'title' | 'color', string>>({
    title: '', color: ''
  });
  const submitHandler = () => {
    setErrors((_prev) => ({
      ..._prev,
      title: !title.trim() ? 'Title is required' : '',
      color: !color.trim() ? 'Color is required' : '',
    }));
    if (title.trim() && color.trim()) {
      setErrors({ title: '', color: '' });
      props.onSubmit?.(title.trim(), color.trim());
    }
  }
  useEffect(() => {
    if (props.title) setTitle(props.title);
  }, [props.title]);
  useEffect(() => {
    if (props.color) setColor(props.color);
  }, [props.color]);
  return (
    <div className={`flex flex-col gap-12 ${props.className}`}>
      <Input id="title" type="text" title="Title" placeholder="Ex. Brush you teeth" value={title} onChange={setTitle} error={errors.title} />
      <ColorPicker title="Color" activeColor={color} onChange={setColor} error={errors.color} />
      <Button className="w-full h-13 bg-primary hover:bg-primary-1 transition-all" onClick={submitHandler}>
        {props.type === 'create' ? (
          <>
            <span className="font-inter font-bold text-sm text-white">Add Task</span>
            <IcPlusCircle size={16} color="#F2F2F2" />
          </>
        ) : (
          <>
            <span className="font-inter font-bold text-sm text-white">Save</span>
            <IcPureCheck size={20} color="#F2F2F2" />
          </>
        )}
      </Button>
    </div>
  )
}
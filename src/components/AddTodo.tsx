import { Button, Input, Space, type InputRef } from "antd";
import { useRef } from "react";
import { useAppDispatch } from "../../../todo ant-d/src/store/hooks/store-hooks";
import { todoActions } from "../../../todo ant-d/src/store/features/Todos/TodoSlice";

export default function AddTodo() {
  const inputRef = useRef<InputRef>(null);
  const dispatch = useAppDispatch();
  function handleAddTodo() {
    const currentRef = inputRef.current;
    if (currentRef && currentRef.input && currentRef.input.value.trim()) {
      dispatch(todoActions.AddTodo({ task: currentRef.input.value }));
      currentRef.input.value = "";
    }
  }

  return (
    <Space.Compact block>
      <Input
        ref={inputRef}
        style={{ width: "calc(100% - 200px)" }}
        value={inputRef.current?.input?.value}
      />
      <Button onClick={handleAddTodo} type="primary">
        Submit
      </Button>
    </Space.Compact>
  );
}

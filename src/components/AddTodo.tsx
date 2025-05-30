import { Button, Input, Space, type InputRef } from "antd";
import type { RefObject } from "react";
import { useAppDispatch } from "../../../todo ant-d/src/store/hooks/store-hooks";
import { todoActions } from "../../../todo ant-d/src/store/features/Todos/TodoSlice";

interface AddTodoProps {
  ref: RefObject<InputRef | null>;
}

export default function AddTodo({ ref }: AddTodoProps) {
  const dispatch = useAppDispatch();
  function handleAddTodo() {
    const currentRef = ref.current;
    console.log(currentRef);
    if (currentRef && currentRef.input && currentRef.input.value.trim()) {
      dispatch(todoActions.AddTodo({ task: currentRef.input.value }));
      currentRef.input.value = "";
    }
  }

  return (
    <Space.Compact block>
      <Input ref={ref} style={{ width: "calc(100% - 200px)" }} />
      <Button onClick={handleAddTodo} type="primary">
        Submit
      </Button>
    </Space.Compact>
  );
}

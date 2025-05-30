import { List, Button, Space, Row, Col, Typography, Tag } from "antd";
import { useAppDispatch, useAppSelector } from "../store/hooks/store-hooks";
import { todoActions } from "../store/features/Todos/TodoSlice";

const { Text } = Typography;

function TodoActions() {
  const Todos = useAppSelector((state) => state.Todo);
  const dispatch = useAppDispatch();

  function handleEditTodo(id: string, value: string) {
    dispatch(
      todoActions.EditTodo({
        id: String(id),
        task: value,
      })
    );
  }

  function handleDeleteTodo(id: string) {
    dispatch(todoActions.DeleteTodo({ id: String(id) }));
  }

  function handleMarkAsDoneTodo(id: string) {
    dispatch(todoActions.MarkAsDone({ id: String(id) }));
  }

  return (
    <List
      bordered
      itemLayout="horizontal"
      dataSource={Todos}
      renderItem={(item, index) => (
        <List.Item>
          <Row style={{ width: "100%" }} justify="space-between" align="middle">
            <Col span={12}>
              <Text
                strong
                editable={{
                  onChange: (value) => handleEditTodo(item.id, value),
                }}
              >
                #{index + 1}: {item.task}
              </Text>

              <div>
                <Tag color={item.isDone ? "green" : "orange"}>
                  {item.isDone ? "Completed" : "Pending"}
                </Tag>
              </div>
            </Col>
            <Col>
              <Space>
                <Button danger onClick={() => handleDeleteTodo(item.id)}>
                  Delete
                </Button>
                {!item.isDone && (
                  <Button
                    type="primary"
                    onClick={() => handleMarkAsDoneTodo(item.id)}
                  >
                    Mark As Done
                  </Button>
                )}
              </Space>
            </Col>
          </Row>
        </List.Item>
      )}
    />
  );
}

export default TodoActions;

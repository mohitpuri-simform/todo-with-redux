import { ConfigProvider, Layout, Switch, theme } from "antd";
import AddTodo from "./components/AddTodo";
import TodoActions from "./components/DisplayTodo";
import { useState } from "react";
import "./index.css";
import { BulbOutlined, CloudOutlined } from "@ant-design/icons";

function App() {
  const [isDark, setIsDark] = useState(false);
  function toggleTheme() {
    setIsDark((prev) => !prev);
  }
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <Layout className="layout">
          <Switch
            className="btn"
            checkedChildren={<BulbOutlined />}
            unCheckedChildren={<CloudOutlined />}
            defaultChecked
            onChange={toggleTheme}
          />
          <AddTodo />
          <TodoActions />
        </Layout>
      </ConfigProvider>
    </>
  );
}

export default App;

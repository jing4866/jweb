import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";

// 引入 Antd 框架依赖
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";

// 引入路由
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // 配置 History 路由
    <BrowserRouter>
        {/* 配置 antd 汉化 */}
        <ConfigProvider locale={zhCN}>
            <App />
        </ConfigProvider>
    </BrowserRouter>
);

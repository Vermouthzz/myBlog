import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";

type FieldType = {
  username?: string;
  password?: string;
};

export function LoginForm() {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="h-[312px] px-[80px] w-[414px] bg-white rounded-[5px]">
      <p className="text-center mt-[10px] mb-[40px]">密码登陆</p>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input className="w-[254px]" placeholder="请输入账号" />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password className="w-[254px]" placeholder="请输入密码" />
        </Form.Item>
        <Button type="primary" className="w-full h-[38px]">
          登陆
        </Button>
        <div className="flex justify-between items-center mt-[25px] text-[12px]">
          <span className="cursor-pointer">忘记密码</span>
          <span className="cursor-pointer">注册账号</span>
          <span className="cursor-pointer">意见反馈</span>
        </div>
      </Form>
    </div>
  );
}

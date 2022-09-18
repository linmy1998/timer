/*
 * @Author: linmingyu
 * @Date: 2022-08-19 14:29:14
 * @LastEditors: linmingyu
 * @LastEditTime: 2022-08-19 18:01:38
 * @Description: file content
 */
import React, { Fragment } from "react";
import { Modal, Form, Input } from 'antd'



export default function Dialog(props) {

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const [form] = Form.useForm();

  const onOk = () => {
    form.validateFields().then((res) => {
      props.handleSumbit(res)
    }).catch((err) => {
      console.log(err);
    })
  }

  const validators = (_, value, callback) => {
    if (parseInt(value) <= 1440) {
      return Promise.resolve('')
    } else {
      return Promise.reject('总分钟数不能超过一天，即1440分钟')
    }
  }

  return (
    <Fragment>
      <Modal
        title="配置表单"
        visible={props.isModalVisible}
        onOk={() => { onOk() }}
        onCancel={() => { props.handleCancel() }}
      >
        <Form {...layout} form={form}>
          <Form.Item name="minute" label="总分钟数:"
            rules={[
              { required: true, message: '请输入总分钟数' },
              {
                validator: validators
              }
            ]}>
            <Input />
          </Form.Item>
          <Form.Item name="frequency" label="频率:" >
            <Input placeholder="默认频率一秒"></Input>
          </Form.Item>
        </Form>
      </Modal>
    </Fragment >
  )
}
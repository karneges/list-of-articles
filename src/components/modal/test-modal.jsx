import React, { useState, useRef } from "react";
import "antd/dist/antd.css";
import { Button, Modal, Form, Input, Radio } from "antd";

const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  ({ visible, onCancel, onCreate, form }) => {
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title="Create a new collection"
        okText="Create"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <Form.Item label="Заголовок">
            {getFieldDecorator("title", {
              rules: [
                {
                  required: true,
                  message: "Please input the title of collection!"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Description">
            {getFieldDecorator("description")(<Input type="textarea" />)}
          </Form.Item>
          <Form.Item className="collection-create-form_last-form-item">
            {getFieldDecorator("modifier", {
              initialValue: "public"
            })(
              <Radio.Group>
                <Radio value="public">Public</Radio>
                <Radio value="private">Private</Radio>
              </Radio.Group>
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
);

const CollectionPage = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = e => {
    setVisible(false);
  };

  const formRef = useRef();

  const handleCreate = () => {
    const { current: form } = formRef;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        New Collection
      </Button>
      <CollectionCreateForm
        ref={formRef}
        visible={visible}
        onCancel={handleCancel}
        onCreate={handleCreate}
      />
    </div>
  );
};

export default CollectionPage;

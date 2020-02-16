import React, { useState, useRef } from "react";
import "antd/dist/antd.css";
import { Button, Row, Col } from "antd";
import AddArticlesForm from "./add-articles-form";

const ModalFormAddArticles = ({ addArticlesHandler, children }) => {
  const [visible, setVisible] = useState(false);
  const formRef = useRef();
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = e => {
    setVisible(false);
  };

  const handleCreate = () => {
    const { current: form } = formRef;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      const { title, body } = values;
      const tags = values.tags.split(",");

      addArticlesHandler({ title, body, tags });
      form.resetFields();
      setVisible(false);
    });
  };

  return (
    <div>
      <Row type="flex" justify="space-between">
        <Col>
          <Button type="primary" onClick={showModal}>
            Создать пост
          </Button>
        </Col>
        <Col span={15}>{children}</Col>
      </Row>

      <AddArticlesForm
        ref={formRef}
        visible={visible}
        onCancel={handleCancel}
        onCreate={handleCreate}
      />
    </div>
  );
};

export default ModalFormAddArticles;

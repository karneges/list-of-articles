import React, {  useMemo } from "react";
import { Modal, Form } from "antd";
import MyFormItem from "./form-item";

const AddArticlesForm = Form.create({ name: "form_in_modal" })(
  ({ visible, onCancel, onCreate, form }) => {
    const { getFieldDecorator } = useMemo(()=>form,[form])

    return (
      <Modal
        visible={visible}
        title="Создать новый пост"
        okText="Create"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <MyFormItem
            placeholder={"заголовок статьи"}
            countSymbols={3}
            getFieldDecorator={getFieldDecorator}
            label={"Заголовок"}
            title={"title"}
            errMessage={
              "Пожалуйста введите название статьи,не менее 3 символов"
            }
          />
          <MyFormItem
            placeholder={"текст статьи"}
            textArea={true}
            countSymbols={10}
            getFieldDecorator={getFieldDecorator}
            label={"Запись"}
            title={"body"}
            errMessage={
              "Пожалуйста введите текст статьи статьи,не менее 10 символов"
            }
          />
          <MyFormItem
            placeholder={"тэги,через запятую"}
            countSymbols={5}
            getFieldDecorator={getFieldDecorator}
            label={"Тэги"}
            title={"tags"}
            errMessage={
              "Пожалуйста введите тэги статьи через запятую,не менее 5 символов"
            }
          />
        </Form>
      </Modal>
    );
  }
);

export default AddArticlesForm;

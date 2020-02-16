import React, { useState } from "react";
import "antd/dist/antd.css";
import { Modal, Button, Input } from "antd";
import "./modal.scss";
const MyModal = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = e => {
    setVisible(false);
  };

  const handleCancel = e => {
    setVisible(false);
  };

  return (
    <div>
      <button onClick={showModal} className="btn btn-primary btn__form">
        Добавить пост
      </button>

      <Modal
        title="Форма добавления поста"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={``}
      >
        <form onSubmit={() => console.log(`Принято`)}>
          <Input
            required={true}
            className="modal__fields"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder={"Заголовок"}
          />
          <Input
            className="modal__fields"
            value={body}
            onChange={e => setBody(e.target.value)}
            placeholder={"Запись"}
          />
          <Input
            className="modal__fields"
            value={tags}
            onChange={e => setTags(e.target.value)}
            placeholder={"Тэг,ещё тэг"}
          />
          <button type="submit" className="btn btn-primary btn__form">
            Добавить
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default MyModal;

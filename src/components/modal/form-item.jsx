import React from "react";
import { Form, Input } from "antd";

const MyFormItem = ({getFieldDecorator,label,title,errMessage,countSymbols,textArea}) => {
  return (
    <Form.Item label={label}>
      {getFieldDecorator(title, {
        rules: [
          {
            len: countSymbols,
            required: true,
            validator: (rule, value, callback) => {
              try {
                if (!value || rule.len > value.length) {
                  throw new Error(
                    errMessage
                  );
                }
                callback();
              } catch (err) {
                callback(err);
              }
            }
          }
        ]
      })(!textArea?<Input /> :<Input.TextArea/>)}
    </Form.Item>
  );
};

export default MyFormItem;

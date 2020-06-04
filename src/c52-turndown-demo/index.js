import React from 'react';
import { Input, Form, Button } from 'antd';
import TurndownService from 'turndown';

export default Form.create({})((props) => {
  const turndownService = new TurndownService();
  const { form } = props;
  const { getFieldDecorator } = form;
  const handleConvert = () => {
    form.setFieldsValue({
      md_text: turndownService.turndown(form.getFieldValue('html_text')),
    });
  }
  return (
    <div>
      <Form layout="horizontal">
        <Form.Item label="输入html">
          {getFieldDecorator('html_text')(<Input.TextArea />)}
        </Form.Item>
        <div style={{ textAlign: "center" }}>
          <Button type="primary" onClick={handleConvert}>转换</Button>
        </div>
        <Form.Item label="markdown值">
          {getFieldDecorator('md_text')(<Input.TextArea readOnly={true} />)}
        </Form.Item>
      </Form>
    </div>
  );
});
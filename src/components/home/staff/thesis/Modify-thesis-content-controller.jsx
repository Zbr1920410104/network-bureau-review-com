import React, { useState, useEffect } from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import userAction from '@/redux/action/user';

// 请求
import proxyFetch from '@/util/request';
import {
  MODIFY_STAFF_THESIS,
  GET_STAFF_THESIS_BY_UUID,
} from '@/constants/api-constants';

// 组件
import moment from 'moment';

// 样式
import { Form, Input, DatePicker, Select, Button } from 'antd';
const { Option } = Select;

export default Form.create({ name: 'modifyThesis' })(({ form }) => {
  const { getFieldDecorator, setFieldsValue } = form,
    { staffThesisUuid } = useSelector((state) => state.userStore),
    [saveDataLoading, setSaveDataLoading] = useState(false),
    dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (staffThesisUuid) {
        const staffThesis = await proxyFetch(
          GET_STAFF_THESIS_BY_UUID,
          { staffThesisUuid },
          'GET'
        );

        if (staffThesis) {
          // 时间处理
          if (staffThesis.thesisTime) {
            staffThesis.thesisTime = moment(staffThesis.thesisTime);
          }

          setFieldsValue(staffThesis);
          dispatch(userAction.setChangeThesis(false));
        }
      }
    })();
  }, [setFieldsValue, staffThesisUuid, dispatch]);

  /**
   * 提交事件
   */
  const handleSumbitSave = (e) => {
    e.preventDefault();

    // 表单判断
    form.validateFields(async (err, value) => {
      if (!err) {
        setSaveDataLoading(true);

        value.uuid = staffThesisUuid;
        const res = await proxyFetch(MODIFY_STAFF_THESIS, value);

        setSaveDataLoading(false);

        if (res) {
          dispatch(userAction.setChangeThesis(true));
        }
      }
    });
  };

  return (
    <div className='inner-form-box'>
      <Form>

        <Form.Item
          label='标题'
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 16 }}
        >
          {getFieldDecorator('thesisTitle', {
            rules: [{ required: true, message: '请输入标题!' }],
          })(<Input placeholder='请输入标题' />)}
        </Form.Item>

        <Form.Item
          label='发表时间'
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 16 }}
        >
          {getFieldDecorator('thesisTime', {
            rules: [{ required: true, message: '请输入发表时间' }],
          })(<DatePicker placeholder='20XX-XX-XX' />)}
        </Form.Item>

        <Form.Item
          label='发表期刊名称'
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 16 }}
        >
          {getFieldDecorator('thesisJournal', {
            rules: [ { required: true, message: '请输入发表期刊名称' }],
          })(<Input placeholder='发表期刊名称' />)}
        </Form.Item>

        <Form.Item
          label='期刊级别'
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 16 }}
        >
          {getFieldDecorator('thesisGrade', {
            rules: [{ required: true, message: '请输入期刊级别' }],
          })(<Input placeholder='期刊级别' />)}
        </Form.Item>

        <Form.Item
          label='论文索引号'
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 16 }}
        >
          {getFieldDecorator('thesisCode', {
            rules: [{ required: true, message: '请输入论文索引号' }],
          })(<Input placeholder='论文索引号' />)}
        </Form.Item>

        <Form.Item
          label='本人排序'
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 16 }}
        >
          {getFieldDecorator('thesisAuthorSequence', {
            rules: [{ required: true, message: '请选择本人排序' }],
          })(<Select placeholder='本人排序'>
            <Option value='第一作者'>第一作者</Option>
            <Option value='第二作者'>第二作者</Option>
            <Option value='第三作者'>第三作者</Option>
            <Option value='第四作者'>第四作者</Option>
            <Option value='第五作者'>第五作者</Option>
            <Option value='第六作者'>第六作者</Option>
          </Select>)}
        </Form.Item>

        <Form.Item
          label='第一作者'
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 16 }}
        >
          {getFieldDecorator('thesisFirstAuthor', {
            rules: [{ required: true, message: '请输入第一作者' }],
          })(<Input placeholder='第一作者' />)}
        </Form.Item>

        {/* 保存按钮 */}
        <Form.Item wrapperCol={{ offset: 5 }}>
          <Button
            type='primary'
            htmlType='submit'
            className='button'
            size='large'
            onClick={handleSumbitSave}
            loading={saveDataLoading}
          >
            保存
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
});

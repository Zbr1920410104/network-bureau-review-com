import React from 'react';

import WriteProjectController from '@/components/home/staff/write-project-controller1.jsx';
import WriteBasicController from '@/components/home/staff/Write-basic-controller.jsx';
import WritePatentController from '@/components/home/staff/Write-patent-controller.jsx';
import WriteCopyrightController from '@/components/home/staff/Write-copyright-controller.jsx';
import WriteAwardController from '@/components/home/staff/Write-award-controller.jsx';
import WriteThesisController from '@/components/home/staff/Write-thesis-controller.jsx';

// 路由
import { HOME_WRITE_WELCOME } from '@/constants/route-constants';
import { Link, useHistory } from 'react-router-dom';

// 样式
import { Icon, Button, Tabs, Modal } from 'antd';
const { TabPane } = Tabs,
  { confirm } = Modal;

export default props => {
  const history = useHistory();

  return (
    <div className='write-detail-box'>
      <p className='title-box'>
        <span>网络空间研究中心专业技术人员科研档案</span>
      </p>
      <div className='subtitle-box'>
        <Link to={HOME_WRITE_WELCOME.path}>
          <Icon type='left' className='exit-icon' />
        </Link>
        <p className='subtitle-title'>
          <span>填写/修改个人信息</span>
        </p>
      </div>
      <div className='write-form-box'>
        <Tabs defaultActiveKey='1'>
          <TabPane tab='基本信息' key='1'>
            <WriteBasicController />
          </TabPane>
          <TabPane tab='项目经验' key='2'>
            <WriteProjectController />
          </TabPane>
          <TabPane tab='专利' key='3'>
            <WritePatentController />
          </TabPane>
          <TabPane tab='软件著作权' key='4'>
            <WriteCopyrightController />
          </TabPane>
          <TabPane tab='获奖情况' key='5'>
            <WriteAwardController />
          </TabPane>
          <TabPane tab='论文/专著' key='6'>
            <WriteThesisController />
          </TabPane>
        </Tabs>
      </div>
      <div className='write-bottom-box'>
        <Button
          type='primary'
          size='large'
          className='submit-button'
          htmlType='submit'
          onClick={() => {
            confirm({
              title: '确定所有信息填写完毕?',
              content:
                '确认填写完基本信息,获奖情况,论文/专著,项目,授权专利,软件著作权的所有信息方可提交',
              okText: '确认',
              cancelText: '取消',
              onOk() {
                history.push(HOME_WRITE_WELCOME.path);
              },
              onCancel() {}
            });
          }}
        >
          我已确认填写完基本信息,获奖情况,论文/专著,项目,授权专利,软件著作权的所有信息-进行提交
        </Button>
      </div>
    </div>
  );
};
import React, { useState, useEffect } from 'react';

// localStorage
import { LOCAL_STORAGE } from '@/constants/app-constants';

// redux
import { useDispatch } from 'react-redux';
import userAction from '@/redux/action/user';

// 路由
import { HOME_REVIEW_DETAIL } from '@/constants/route-constants';
import { useHistory } from 'react-router-dom';

// 请求
import proxyFetch from '@/util/request';
import {
  GET_STAFF_REVIEW_INFO,
  EXPORT_ALL_STAFF_INFO_EXCEL,
  GET_REVIEW_MANAGER_EXPORT_ALL_INFO_URL,
} from '@/constants/api-constants';

// 工具
import moment from 'moment';

// 样式
import { Table, Button, Select, Modal, Input, Skeleton, Checkbox } from 'antd';
import '@/style/home/review-manager/review-list.styl';
const { Option } = Select,
  { Column } = Table,
  { Search } = Input;

export default (props) => {
  const history = useHistory(),
    [staffReviewInfo, setStaffReviewInfo] = useState([]),
    [staffLoading, setStaffLoading] = useState(false),
    [reviewStatus, setReviewStatus] = useState(0),
    [name, setName] = useState(''),
    [isNeedRefresh, setIsNeedRefresh] = useState(true),
    [exportAllVisible, setExportAllVisible] = useState(false),
    [scoreLimit, setScoreLimit] = useState('等于'),
    [staffItem, setStaffItem] = useState('total'),
    [exportAllList, setExportAllList] = useState([0, 1, 2, 3, 4, 5]),
    [score, setScore] = useState(''),
    dispatch = useDispatch();

  const showError = () => {
    Modal.error({
      title: '请确认员工信息核实通过后评分',
      content: '员工所有信息未核实通过无法开始评分',
      okText: '确认',
    });
  };

  useEffect(() => {
    if (isNeedRefresh) {
      (async () => {
        setStaffLoading(true);

        const staffReviewInfo = await proxyFetch(
          GET_STAFF_REVIEW_INFO,
          { reviewStatus, name, staffItem, scoreLimit, score },
          'GET'
        );

        setStaffReviewInfo(staffReviewInfo);
        setStaffLoading(false);
        setIsNeedRefresh(false);
      })();
    }
  }, [isNeedRefresh, reviewStatus, name, staffItem, scoreLimit, score]);

  const handleAllChange = (e) => {
    setExportAllList(e);
  };

  const handleChangeScoreLimit = (e) => {
    setScoreLimit(e);
  };

  const handleChangeItemScore = (e) => {
    setStaffItem(e);
  };

  const expandedRowRender = (record) => {
    return (
      <div className='table-inner-info-box'>
        <span>{`项目得分:${
          record.projectScoreSum !== null ? record.projectScoreSum : '未评分'
        }`}</span>
        <span>{`专利得分:${
          record.patentScoreSum !== null ? record.patentScoreSum : '未评分'
        }`}</span>
        <span>{`软件著作权得分:${
          record.copyrightScoreSum !== null
            ? record.copyrightScoreSum
            : '未评分'
        }`}</span>
        <span>{`奖项得分:${
          record.awardScoreSum !== null ? record.awardScoreSum : '未评分'
        }`}</span>
        <span>{`论文/专著得分:${
          record.thesisScoreSum !== null ? record.thesisScoreSum : '未评分'
        }`}</span>
      </div>
    );
  };

  const handleExport = async () => {
    const tempUrl = await proxyFetch(EXPORT_ALL_STAFF_INFO_EXCEL, {});
    const url = `http://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
      tempUrl
    )}`;
    window.open(url);
  };

  const handleExportAllStaff = async () => {
    let tempUrl = await proxyFetch(GET_REVIEW_MANAGER_EXPORT_ALL_INFO_URL, {
      reviewStatus,
      name,
      staffItem,
      scoreLimit,
      score,
      exportAllList,
    });

    if (tempUrl) {
      setExportAllVisible(false);
      const url = `http://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
        tempUrl
      )}`;
      window.open(url);
    }
  };

  const showExportAllModal = () => {
    setExportAllVisible(true);
  };

  const hideExportAllModal = () => {
    setExportAllVisible(false);
  };

  return (
    <div className='review-list-box'>
      <p className='title-box'>
        <span>查看信息列表</span>
      </p>
      <div className='subtitle-box'>
        <p className='subtitle-title'>查看人员填写信息</p>
      </div>
      <div className='list-content-box'>
        <div className='list-title-box'>
          <div>
            <Select
              placeholder='分类查看'
              className='list-select'
              defaultValue='0'
              onChange={(e) => {
                setReviewStatus(e);
                setName('');
                setScore('');
                setIsNeedRefresh(true);
              }}
            >
              <Option value='0'>全部</Option>
              <Option value='已评分'>已评分</Option>
              <Option value='未评分'>未评分</Option>
            </Select>
            <Search
              className='search'
              placeholder='请输入姓名'
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              onSearch={(e) => {
                setScore('');
                setIsNeedRefresh(true);
              }}
              enterButton
            />
          </div>
          <div>
            <Button
              type='primary'
              className='export-all-button'
              onClick={showExportAllModal}
            >
              导出当前员工信息
            </Button>
            <Button
              type='primary'
              className='export-all-button'
              onClick={handleExport}
            >
              导出所有员工得分表
            </Button>
            <Modal
              title='导出当前员工信息'
              visible={exportAllVisible}
              onOk={handleExportAllStaff}
              onCancel={hideExportAllModal}
              okText='确定'
              cancelText='取消'
            >
              <Checkbox.Group
                options={[
                  { label: '基本信息', value: 0 },
                  { label: '项目', value: 1 },
                  { label: '专利', value: 2 },
                  { label: '软件著作权', value: 3 },
                  { label: '奖项', value: 4 },
                  { label: '论文/专著', value: 5 },
                ]}
                value={exportAllList}
                onChange={(e) => {
                  handleAllChange(e);
                }}
              />
            </Modal>
          </div>
        </div>
        <div className='search-score-box'>
          <Select
            className='select'
            defaultValue='总得分'
            value={staffItem}
            style={{ width: 120 }}
            onChange={handleChangeItemScore}
          >
            <Option value='total'>总得分</Option>
            <Option value='project'>项目</Option>
            <Option value='patent'>专利</Option>
            <Option value='copyright'>软件著作权</Option>
            <Option value='award'>奖项</Option>
            <Option value='thesis'>论文/专著</Option>
          </Select>
          <Select
            className='select'
            defaultValue='等于'
            value={scoreLimit}
            style={{ width: 120 }}
            onChange={handleChangeScoreLimit}
          >
            <Option value='等于'>等于</Option>
            <Option value='大于等于'>大于等于</Option>
            <Option value='小于'>小于</Option>
          </Select>
          <Search
            style={{ width: 150 }}
            className='search-score'
            placeholder='请输入得分'
            value={score}
            onChange={(e) => {
              setScore(e.target.value);
            }}
            onSearch={(e) => {
              setName('');
              setIsNeedRefresh(true);
            }}
            enterButton
          />
        </div>
        <Skeleton loading={staffLoading}>
          <Table
            dataSource={staffReviewInfo}
            className='table'
            rowKey={(record) => record.uuid}
            expandedRowRender={(record) => expandedRowRender(record)}
          >
            <Column align='center' title='账号' dataIndex='userName' key='' />
            <Column align='center' title='姓名' dataIndex='name' key='' />
            <Column align='center' title='科室' dataIndex='department' key='' />
            <Column
              align='center'
              title='最后修改时间'
              dataIndex='currentWriteTime'
              key=''
              render={(text, record) => (
                <span>
                  {record.currentWriteTime
                    ? moment(record.currentWriteTime).format(
                        'YYYY-MM-DD h:mm:ss a'
                      )
                    : ''}
                </span>
              )}
            />
            <Column
              align='center'
              title='核实状态'
              dataIndex='verifyStatus'
              key=''
            />
            <Column
              align='center'
              title='总得分'
              dataIndex='totalScore'
              key=''
              render={(text, record) => (
                <span>
                  {record.totalScore !== null ? record.totalScore : '未评分'}
                </span>
              )}
            />
            <Column
              align='center'
              title='评分'
              dataIndex=''
              key=''
              render={(text, record) => (
                <Button
                  type='link'
                  onClick={() => {
                    if (record.verifyStatus === '核实通过') {
                      localStorage.setItem(
                        `${LOCAL_STORAGE}-staffUuid`,
                        record.uuid
                      );
                      dispatch(userAction.setStaffUuid(record.uuid));
                      history.push(HOME_REVIEW_DETAIL.path);
                    } else {
                      showError();
                    }
                  }}
                >
                  评分
                </Button>
              )}
            />
          </Table>
        </Skeleton>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react';

// 样式
import { Icon, Tag } from 'antd';

// 路由
import proxyFetch from '@/util/request';
import { SELECT_REGISTRATION_STATUS } from '@/constants/api-constants';

// redux
import { useSelector } from 'react-redux';

// 路由
import { Link } from 'react-router-dom';
import { REGISTRATION_DETAIL } from '@/constants/route-constants';

const getTagColor = status => {
  switch (status) {
    case 0:
      return 'gray';
    case 1:
      return 'blue';
    case 2:
      return 'blue';
    case 3:
      return 'green';
    default:
      return 'gray';
  }
};
export default props => {
  const { enterpriseRegistrationUuid } = useSelector(
      state => state.enterpriseStore
    ),
    [
      enterpriseRegistrationContractStatus,
      setEnterpriseRegistrationContractStatus
    ] = useState(null),
    [
      enterpriseRegistrationApplyStatus,
      setEnterpriseRegistrationApplyStatus
    ] = useState(null),
    [
      enterpriseRegistrationCopyrightStatus,
      setEnterpriseRegistrationCopyrightStatus
    ] = useState(null),
    [
      enterpriseRegistrationDocumentStatus,
      setEnterpriseRegistrationDocumentStatus
    ] = useState(null),
    [
      enterpriseRegistrationProductDescriptionStatus,
      setEnterpriseRegistrationProductDescriptionStatus
    ] = useState(null),
    [
      enterpriseRegistrationProductStatus,
      setEnterpriseRegistrationProductStatus
    ] = useState(null),
    [
      enterpriseRegistrationSpecimenStatus,
      setEnterpriseRegistrationSpecimenStatus
    ] = useState(null);

  useEffect(() => {
    if (enterpriseRegistrationUuid) {
      (async () => {
        let res = await proxyFetch(
          SELECT_REGISTRATION_STATUS,
          { registrationUuid: enterpriseRegistrationUuid },
          'GET'
        );

        setEnterpriseRegistrationApplyStatus(
          res.enterpriseRegistrationApplyStatus
        );
        setEnterpriseRegistrationContractStatus(
          res.enterpriseRegistrationContractStatus
        );
        setEnterpriseRegistrationCopyrightStatus(
          res.enterpriseRegistrationCopyrightStatus
        );
        setEnterpriseRegistrationDocumentStatus(
          res.enterpriseRegistrationDocumentStatus
        );
        setEnterpriseRegistrationProductDescriptionStatus(
          res.enterpriseRegistrationProductDescriptionStatus
        );
        setEnterpriseRegistrationProductStatus(
          res.enterpriseRegistrationProductStatus
        );
        setEnterpriseRegistrationSpecimenStatus(
          res.enterpriseRegistrationSpecimenStatus
        );
      })();
    }
  }, [enterpriseRegistrationUuid]);

  return (
    <div className='process-item-box current-profile-box'>
      <p className='title-box'>
        <span>当前步骤</span>-<span>提交上传7种材料</span>
      </p>
      <ol className='process-profile-ol'>
        {enterpriseRegistrationContractStatus ? (
          <li>
            <p>
              <span className='profile-title'>评测合同</span>
              <Tag
                color={getTagColor(enterpriseRegistrationContractStatus.status)}
              >
                {enterpriseRegistrationContractStatus.statusText}
              </Tag>
            </p>
            {enterpriseRegistrationContractStatus.status ? (
              <div className='current-right-box'>
                <Icon
                  type='check-circle'
                  theme='twoTone'
                  twoToneColor='#52c41a'
                />
              </div>
            ) : (
              <Link to={`${REGISTRATION_DETAIL.path}/contract`}>
                <span className='current-right-box current-upload-button'>
                  <Icon type='edit' /> 填写内容
                </span>
              </Link>
            )}
          </li>
        ) : null}
        {enterpriseRegistrationCopyrightStatus ? (
          <li>
            <p>
              <span className='profile-title'>软件著作权证书</span>
              <Tag
                color={getTagColor(
                  enterpriseRegistrationCopyrightStatus.status
                )}
              >
                {enterpriseRegistrationCopyrightStatus.statusText}
              </Tag>
            </p>
            {enterpriseRegistrationCopyrightStatus.status ? (
              <div className='current-right-box'>
                <Icon
                  type='check-circle'
                  theme='twoTone'
                  twoToneColor='#52c41a'
                />
              </div>
            ) : (
              <Link to={`${REGISTRATION_DETAIL.path}/copyright`}>
                <span className='current-right-box current-upload-button'>
                  <Icon type='upload' /> 上传文件
                </span>
              </Link>
            )}
          </li>
        ) : null}
        {enterpriseRegistrationSpecimenStatus ? (
          <li>
            <p>
              <span className='profile-title'>样品登记表</span>
              <Tag
                color={getTagColor(enterpriseRegistrationSpecimenStatus.status)}
              >
                {enterpriseRegistrationSpecimenStatus.statusText}
              </Tag>
            </p>
            {enterpriseRegistrationSpecimenStatus.status ? (
              <div className='current-right-box'>
                <Icon
                  type='check-circle'
                  theme='twoTone'
                  twoToneColor='#52c41a'
                />
              </div>
            ) : (
              <Link to={`${REGISTRATION_DETAIL.path}/specimen`}>
                <span className='current-right-box current-upload-button'>
                  <Icon type='edit' /> 填写内容
                </span>
              </Link>
            )}
          </li>
        ) : null}
        {enterpriseRegistrationProductDescriptionStatus ? (
          <li>
            <p>
              <span className='profile-title'>产品说明</span>
              <Tag
                color={getTagColor(
                  enterpriseRegistrationProductDescriptionStatus.status
                )}
              >
                {enterpriseRegistrationProductDescriptionStatus.statusText}
              </Tag>
            </p>
            {enterpriseRegistrationProductDescriptionStatus.status ? (
              <div className='current-right-box'>
                <Icon
                  type='check-circle'
                  theme='twoTone'
                  twoToneColor='#52c41a'
                />
              </div>
            ) : (
              <Link to={`${REGISTRATION_DETAIL.path}/productDescription`}>
                <span className='current-right-box current-upload-button'>
                  <Icon type='upload' /> 上传文件
                </span>
              </Link>
            )}
          </li>
        ) : null}
        {enterpriseRegistrationDocumentStatus ? (
          <li>
            <p>
              <span className='profile-title'>用户文档集</span>
              <Tag
                color={getTagColor(enterpriseRegistrationDocumentStatus.status)}
              >
                {enterpriseRegistrationDocumentStatus.statusText}
              </Tag>
            </p>
            {enterpriseRegistrationDocumentStatus.status ? (
              <div className='current-right-box'>
                <Icon
                  type='check-circle'
                  theme='twoTone'
                  twoToneColor='#52c41a'
                />
              </div>
            ) : (
              <Link to={`${REGISTRATION_DETAIL.path}/document`}>
                <span className='current-right-box current-upload-button'>
                  <Icon type='upload' /> 上传文件
                </span>
              </Link>
            )}
          </li>
        ) : null}
        {enterpriseRegistrationProductStatus ? (
          <li>
            <p>
              <span className='profile-title'>产品介质</span>
              <Tag
                color={getTagColor(enterpriseRegistrationProductStatus.status)}
              >
                {enterpriseRegistrationProductStatus.statusText}
              </Tag>
            </p>
            {enterpriseRegistrationProductStatus.status ? (
              <div className='current-right-box'>
                <Icon
                  type='check-circle'
                  theme='twoTone'
                  twoToneColor='#52c41a'
                />
              </div>
            ) : (
              <Link to={`${REGISTRATION_DETAIL.path}/product`}>
                <span className='current-right-box current-upload-button'>
                  <Icon type='upload' /> 上传文件
                </span>
              </Link>
            )}
          </li>
        ) : null}
        {enterpriseRegistrationApplyStatus ? (
          <li>
            <p>
              <span className='profile-title'>现场测试申请表</span>
              <Tag
                color={getTagColor(enterpriseRegistrationApplyStatus.status)}
              >
                {enterpriseRegistrationApplyStatus.statusText}
              </Tag>
            </p>
            {enterpriseRegistrationApplyStatus.status ? (
              <div className='current-right-box'>
                <Icon
                  type='check-circle'
                  theme='twoTone'
                  twoToneColor='#52c41a'
                />
              </div>
            ) : (
              <Link to={`${REGISTRATION_DETAIL.path}/apply`}>
                <span className='current-right-box current-upload-button'>
                  <Icon type='edit' /> 填写内容
                </span>
              </Link>
            )}
          </li>
        ) : null}
      </ol>
    </div>
  );
};
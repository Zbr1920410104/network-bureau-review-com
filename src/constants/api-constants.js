import * as DominConfigs from './domin-constants';

export const UPLOAD_TO_QiNiu = 'https://upload-z2.qiniup.com'; // 上传七牛

/**
 * 用户
 **/
export const GET_USER_TOKEN = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_USER}/getUserToken`; // 登录
export const GET_MY_INFO = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_USER}/getMyInfo`;
export const SAVE_PASSWORD = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_USER}/savePassword`;

/**
 * 管理员
 **/
export const QUARY_DEPARTMENT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ADMIN}/quaryDepartment`;
export const SAVE_DEPARTMENT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ADMIN}/saveDepartment`;
export const DELETE_DEPARTMENT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ADMIN}/deleteDepartment`;
export const SAVE_BUSINESS_MANAGER_TIME = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ADMIN}/saveBusinessManagerTime`;
export const SELECT_BUSINESS_MANAGER_TIME = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ADMIN}/selectBusinessManagerTime`;
export const SELECT_REVIEW_MANAGER_TIME = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ADMIN}/selectReviewManagerTime`;
export const SAVE_REVIEW_MANAGER_TIME = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ADMIN}/saveReviewManagerTime`;
export const SELECT_STAFF_TIME = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ADMIN}/selectStaffTime`;
export const SAVE_STAFF_TIME = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ADMIN}/saveStaffTime`;
export const QUARY_ACCOUNT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ADMIN}/quaryAccount`;
export const ADD_ACCOUNT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ADMIN}/addAccount`;
export const GET_DEPARTMENT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ADMIN}/getDepartment`;
export const RESET_PASSWORD = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ADMIN}/resetPassword`;
export const ACCOUNT_CANCEL = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ADMIN}/accountCancel`;
export const SELECT_ACCOUNT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ADMIN}/selectAccount`;
export const MODIFY_ACCOUNT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ADMIN}/modifyAccount`;

/**
 * 普通员工
 **/
export const SAVE_STAFF_BASIC = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_STAFF}/saveStaffBasic`;
export const MODIFY_STAFF_BASIC = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_STAFF}/modifyStaffBasic`;
export const GET_STAFF_BASIC = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_STAFF}/getStaffBasic`;
export const GET_STAFF_DEPARTMENT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_STAFF}/getStaffDepartment`;
export const GET_STAFF_WRITE_INFO = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_STAFF}/getStaffWriteInfo`;
export const CREATE_STAFF_PROJECT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_STAFF}/createStaffProject`;
export const GET_WRITE_PROJECT_LIST = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_STAFF}/getWriteProjectList`;
export const GET_STAFF_PROJECT_BY_UUID = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_STAFF}/getStaffProjectByUuid`;
export const MODIFY_STAFF_PROJECT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_STAFF}/modifyStaffProject`;
export const DELETE_PROJECT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_STAFF}/deleteProject`;
export const CREATE_STAFF_PATENT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_STAFF}/createStaffPatent`;
export const GET_WRITE_PATENT_LIST = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_STAFF}/getWritePatentList`;
export const GET_STAFF_PATENT_BY_UUID = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_STAFF}/getStaffPatentByUuid`;
export const MODIFY_STAFF_PATENT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_STAFF}/modifyStaffPatent`;
export const DELETE_PATENT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_STAFF}/deletePatent`;
export const CREATE_STAFF_COPYRIGHT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_STAFF}/createStaffCopyright`;
export const GET_WRITE_COPYRIGHT_LIST = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_STAFF}/getWriteCopyrightList`;
export const GET_STAFF_COPYRIGHT_BY_UUID = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_STAFF}/getStaffCopyrightByUuid`;
export const MODIFY_STAFF_COPYRIGHT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_STAFF}/modifyStaffCopyright`;
export const DELETE_COPYRIGHT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_STAFF}/deleteCopyright`;

/**
 * 统计管理员
 **/
export const GET_BUSINESS_MANAGER_BASIC = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_BUSINESS_MANAGER}/getBusinessManagerBasic`;
export const GET_STAFF_VERIFY_INFO = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_BUSINESS_MANAGER}/getStaffVerifyInfo`;

/**
 * 评审管理员
 **/
export const GET_REVIEW_MANAGER_BASIC = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_REVIEW_MANAGER}/getReviewManagerBasic`;
export const GET_STAFF_REVIEW_INFO = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_REVIEW_MANAGER}/getStaffReviewInfo`;

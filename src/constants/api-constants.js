import * as DominConfigs from './domin-constants';

export const UPLOAD_TO_QiNiu = 'https://upload-z2.qiniup.com'; // 上传七牛

/**
 * 文件
 */
export const UPLOAD_FILE = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_FILE}/uploadFile`; // 上传文件
export const UPLOAD_WORD_FILE = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_FILE}/uploadWordFile`; // 上传word,pdf文件
export const UPLOAD_ZIP_FILE = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_FILE}/uploadZipFile`; // 上传word,pdf文件
export const GET_FILE_URL = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_FILE}/getFileUrl`; // 获取文件url
export const UPLOAD_PDF_FILE = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_FILE}/uploadPdfFile`; // 上传word,pdf文件

/**
 * 企业用户
 ***************************/
export const GET_ENTERPRISE_TOKEN = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_USER}/getEnterpriseToken`; // 登录
export const CREATE_NEW_ENTERPRISE = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_USER}/createNewEnterprise`; //注册

/**
 * 登记测试模块
 */
export const CREATE_ENTERPRISE_REGISTRATION = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/createEnterpriseRegistration`; // 创建登记测试
export const QUERY_REGISTRATION = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/queryRegistration`; // 查询登记测试
export const QUERY_SYS_REGISTRATION_STEP = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/querySysRegistrationStep`; // 无条件查询系统测试步骤
export const SELECT_REGISTRATION_STATUS = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/selectRegistrationStatus`;
export const QUERY_ENTERPRISE_REGISTRATION_STEP = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/queryEnterpriseRegistrationStep`; // 查询具体测试步骤信息
export const SELECT_REGISTRATION = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/selectRegistration`; // 查询基本信息
export const SELECT_MANANGER_INFO = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/selectManagerInfo`; // 查询mananger信息
export const SELECT_REGISTRATION_BASIC = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/selectRegistrationBasic`; // 查询登记测试的基本信息
export const SAVE_REGISTRATION_BASIC = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/saveRegistrationBasic`; // 保存登记测试的基本信息
export const SELECT_REGISTRATION_CONTRACT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/selectRegistrationContract`; // 查询评测合同信息
export const SAVE_REGISTRATION_CONTRACT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/saveRegistrationContract`; // 保存评测合同信息
export const SELECT_REGISTRATION_SPECIMEN = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/selectRegistrationSpecimen`; // 查询样品登记表信息
export const SAVE_REGISTRATION_SPECIMEN = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/saveRegistrationSpecimen`; // 保存样品登记表信息
export const SELECT_REGISTRATION_APPLY = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/selectRegistrationApply`; // 查询现场测试申请表信息
export const SAVE_REGISTRATION_APPLY = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/saveRegistrationApply`; // 保存现场测试申请表信息
export const SELECT_REGISTRATION_COPYRIGHT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/selectRegistrationCopyright`; // 查询软件著作权信息
export const SAVE_REGISTRATION_COPYRIGHT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/saveRegistrationCopyright`; // 保存软件著作权信息
export const SELECT_REGISTRATION_DOCUMENT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/selectRegistrationDocument`; // 查询用户文档集信息
export const SAVE_REGISTRATION_DOCUMENT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/saveRegistrationDocument`; // 保存用户文档集信息
export const SELECT_REGISTRATION_PRODUCT_DESCRIPTION = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/selectRegistrationProductDescription`; // 查询产品说明信息
export const SAVE_REGISTRATION_PRODUCT_DESCRIPTION = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/saveRegistrationProductDescription`; // 保存产品说明信息
export const SELECT_REGISTRATION_PRODUCT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/selectRegistrationProduct`; // 查询产品介质信息
export const SAVE_REGISTRATION_PRODUCT = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/saveRegistrationProduct`; // 保存产品介质信息
export const SELECT_CONTRACT_MANAGER_STATUS = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/selectContractManagerStatus`; // 查询经管部门填写评测合同的状态
export const SAVE_ENTERPRISE_CONTRACT_URL = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/saveEnterpriseContractUrl`; // 保存乙方评测合同信息
export const SELECT_CONTRACT_URL = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/selectContractUrl`; // 查询评测合同路由
export const UPDATE_PAYMENT_STATUS = `${DominConfigs.DOMAIN}${DominConfigs.PART.OPT_ENTERPRISE_REGISTRATION}/updatePaymentStatus`; // 更新交付汇款状态
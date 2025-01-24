import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess, resultError } from '../_util';
import { ResultEnum } from '../../src/enums/httpEnum';

const userInfo = {
  name: 'Admin',
  userid: '00000001',
  email: 'test@gmail.com',
  signature: 'Jin',
  introduction: 'I am a super administrator',
  title: 'Admin',
  group: 'admin',
  tags: [
    {
      key: '0',
      label: 'Very thoughtful',
    },
    {
      key: '1',
      label: 'Focus on design',
    },
    {
      key: '2',
      label: 'Perfectionist',
    },
    {
      key: '3',
      label: 'Workaholic',
    },
    {
      key: '4',
      label: 'Hard-working',
    },
    {
      key: '5',
      label: 'Front-end development',
    },
  ],
  notifyCount: 12,
  unreadCount: 11,
  country: 'Vietnam',
  address: 'Hai Phong City',
  phone: '0123456789',
};

export default [
  {
    url: '/basic-api/account/getAccountInfo',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(userInfo);
    },
  },
  {
    url: '/basic-api/user/sessionTimeout',
    method: 'post',
    statusCode: 401,
    response: () => {
      return resultError();
    },
  },
  {
    url: '/basic-api/user/tokenExpired',
    method: 'post',
    statusCode: 200,
    response: () => {
      return resultError('Token Expired!', { code: ResultEnum.TIMEOUT as number });
    },
  },
] as MockMethod[];

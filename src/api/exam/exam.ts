import { defHttp } from '@/utils/http/axios';
import {
  ExamAddForm,
  ExamBasicItem,
  ExamDetailItem,
  ExamListGetResultModel,
  ExamPartForm,
  ExamPartItem,
} from './examModel';
import { BasicApiResult, BasicPageParams } from '../model/baseModel';
import { ErrorMessageMode } from '#/axios';

enum Api {
  EXAM_LIST = '/exams',
  EXAM_ACTION = '/exam',
}

export const examListApi = () => (params: BasicPageParams) =>
  defHttp.get<ExamListGetResultModel>({
    url: Api.EXAM_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

export const examDeleteApi = (examId: number) => () => {
  defHttp.delete<BasicApiResult<ExamBasicItem>>(
    {
      url: `${Api.EXAM_LIST}/${examId}`,
    },
    {
      errorMessageMode: 'modal',
    },
  );
};

export const examCreateApi = (params: ExamAddForm, mode: ErrorMessageMode = 'modal') =>
  defHttp.post<BasicApiResult<ExamAddForm>>(
    {
      url: Api.EXAM_LIST,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );

export const examPartApi = (params: ExamPartForm, mode: ErrorMessageMode = 'modal') =>
  defHttp.post<ExamPartItem>(
    {
      url: `${Api.EXAM_ACTION}/${params.exam_id}/tests`,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );

export const examDetailApi = (examId: number) =>
  defHttp.get<ExamDetailItem>({
    url: `${Api.EXAM_ACTION}/${examId}/tests`,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

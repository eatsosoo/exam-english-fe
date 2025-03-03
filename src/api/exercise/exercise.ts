import { defHttp, otherHttp } from '@/utils/http/axios';
import { BasicPageParams, ResultBase } from '../model/baseModel';
import {
  AssignExerciseParams,
  BookListGetResultModel,
  ExerciseListGetResultModel,
  HomeworkListGetResultModel,
} from './exerciseModel';
import { ErrorMessageMode, Result } from '#/axios';

enum Api {
  EXERCISE_LIST = '/table/getExerciseList',
  HOMEWORK_LIST = '/exams',
  BOOK_LIST = '/books',
  ASSIGN_EXE = '/homeworks',
  ATTENDANCE = '/attendances',
}

export const exerciseListApi = () => (params: BasicPageParams) =>
  otherHttp.get<ExerciseListGetResultModel>({
    url: Api.EXERCISE_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

// list homework created
export const homeworkListApi = () => (params: BasicPageParams) =>
  defHttp.get<HomeworkListGetResultModel>({
    url: `${Api.HOMEWORK_LIST}?&type=Homework`,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

export const bookListApi = () => (params: BasicPageParams) =>
  defHttp.get<BookListGetResultModel>({
    url: `${Api.BOOK_LIST}`,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

export const studyDateListApi = (classId: number) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-based in JavaScript
  const currentYear = currentDate.getFullYear();
  return defHttp.get<ResultBase<string[]>>({
    url: `${Api.ATTENDANCE}/${classId}/dates?month=${currentMonth}&year=${currentYear}`,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });
};

export const assignExercise = (params: AssignExerciseParams, mode: ErrorMessageMode = 'none') =>
  defHttp.post<Result<AssignExerciseParams>>(
    {
      url: `${Api.ASSIGN_EXE}`,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );

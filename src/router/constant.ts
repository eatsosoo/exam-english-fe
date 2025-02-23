export const REDIRECT_NAME = 'Redirect';

export const PARENT_LAYOUT_NAME = 'ParentLayout';

export const PAGE_NOT_FOUND_NAME = 'PageNotFound';

export const EXCEPTION_COMPONENT = () => import('@/views/sys/exception/Exception.vue');

/**
 * @description: default layout
 */
export const LAYOUT = () => import('@/layouts/default/index.vue');

/**
 * @description: take exam layout
 */
export const TAKE_LAYOUT = () => import('@/layouts/default/takeExam.vue');

/**
 * @description: parent-layout
 */
export const getParentLayout = (_name?: string) => {
  return () =>
    new Promise((resolve) => {
      resolve({
        name: _name || PARENT_LAYOUT_NAME,
      });
    });
};

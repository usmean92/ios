export const BASE_URL = 'http://localhost:8000/'
export const ALLPARENTS = 'parent/'
export const REGISTERURL = 'parent/signup'
export const LOGINURL = 'parent/login'
export const FETCHPARENTDETAILS = '/parent/details'
export const FORGOTPASSWORD = 'parent/forgot-password'
export const RESETPASSWORD = 'parent/reset-password'
export const FETCHCHILDREN = 'parent/childrens'
export const UPDATEPARENT = 'parent/update'
export const GETDETAIL = 'parent/details'
export const SUBSCRIBEPOEMS = 'parent/subscribe'
export const REGISTERCHILD = 'child/register'
export const FETCHPOEMS = 'child/poems'
export const ALLCHILDS = (parentId) => `admin/childrens/${parentId}`
export const DELETECHILD = (childId) => `child/delete-child/${childId}`
export const FETCHCOURSEQUIZ = (childId) => `quiz/course/${childId}`
export const UPDATEQUIZ = (quizId) => `quiz/update/${quizId}`
export const CREATEQUIZ = 'quiz/create'
export const FETCHSTATS = 'admin/stats'
export const DELETEPARENT = (parentId) => `admin/delete-parent/${parentId}`



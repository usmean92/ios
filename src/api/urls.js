export const BASE_URL = 'http://localhost:8000/'
export const REGISTERURL = 'parent/signup'
export const LOGINURL = 'parent/login'
export const FORGOTPASSWORD = 'parent/forgot-password'
export const RESETPASSWORD = 'parent/reset-password'
export const FETCHCHILDREN = 'parent/childrens'
export const REGISTERCHILD = 'child/register'
export const CREATEQUIZ = 'quiz/create'
export const FETCHCOURSEQUIZ = (childId) => `quiz/course/${childId}`
export const UPDATEQUIZ = (quizId) => `quiz/update/${quizId}`
export const FETCHSTATS = 'admin/stats'
export const FETCHPOEMS = 'child/poems'

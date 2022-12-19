export const URL = 'http://localhost:4500/';
export const API_USER = {
    REGISTER: 'user/register',
    LOGIN: 'user/login',
    UPDATE_INFO: 'update-info-user'
};
export const API_ADMIN = {
    LOGIN: 'admin/login-admin',
    GET_ALL_USER: 'admin/getAll-user',
    DELETE_USER: 'admin/delete-user'
    /* truyền id trên params */ 
};
export const API_WORD = {
    CREATE: 'word/create',
    GET_WORD: 'word/get-word',
    /* thực hiện phân trang theo query */ 
    UPDATE_WORD: 'word/update-word',
    DELETE_WORD: 'word/delete-word'
};
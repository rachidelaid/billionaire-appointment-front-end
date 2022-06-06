export const setCookie = (token) => {
  document.cookie = `refresh_token=${token}; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure`;
};

export const deleteCookie = () => {
  document.cookie = 'refresh_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=None; Secure';
};

export const getCookie = () => {
  if (!document.cookie.includes('refresh_token')) return null;
  return document.cookie.split(';').filter((cookie) => cookie.includes('refresh_token'))[0].split('=')[1];
};

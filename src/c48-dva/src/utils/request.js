import fetch from 'dva/fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export default async function request(url, options) {
  const resp = await fetch(url, options);
  checkStatus(resp);
  const data = await resp.json();
  const ret = {
    data,
    headers: {}
  };
  if (resp.headers.get('x-total-count')) {
    ret.headers['x-total-count'] = resp.headers.get('x-total-count');
  }
  return ret;
}

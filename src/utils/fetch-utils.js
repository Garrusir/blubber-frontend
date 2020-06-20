const baseReqInit = {
  cache: "no-cache",
  headers: {
    "Content-Type": "application/json"
  },
  credentials: "same-origin"
};

export const recordsUrl = "/api/records/";

export const getJsonRequest = async url => {
  const reqInit = { ...baseReqInit, method: "GET" };
  const res = await fetch(url, reqInit);
  return res.json();
};

export const postRecords = async (url, data) => {
  const reqInit = {
    ...baseReqInit,
    method: "POST",
    body: data,
    headers: { "X-CSRFToken": document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*=\s*([^;]*).*$)|^.*$/, "$1") }
  };
  await fetch(url, reqInit);
};

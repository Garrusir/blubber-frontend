const defaultInit = {
  cache: 'no-cache',
  headers: {
    'Content-Type': 'application/json'
  },
};
export const getRecords = async () => {
  const res = await fetch('/api/records/', {...defaultInit, method: 'GET'});
  return res.json();
};
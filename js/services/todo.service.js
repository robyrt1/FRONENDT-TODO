const getTodos = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_BASE_URL.dev}/todo`)
      .then(({ data: response }) => {
        resolve(response?.data);
      })
      .catch(reject);
  });
};

const add = (body) => {
  return new Promise((resolve, reject) => {
    axios.post(`${API_BASE_URL.dev}/todo`, body).then(resolve).catch(reject);
  });
};

const removeById = (id) => {};

const updateById = (id, body) => {};

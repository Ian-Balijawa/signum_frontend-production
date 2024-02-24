const endpoints = (base) => {
  const defaultEndpoint = 'practices';
  return {
    add: `${base}/${defaultEndpoint}`,
    get: function (id) {
      return `${base}/${defaultEndpoint}/single/${id}?incrementViews=true`;
    },
    getAll: `${base}/${defaultEndpoint}`,
    update: `${base}/${defaultEndpoint}/update`,
    delete: `${base}/${defaultEndpoint}/delete`,
  };
};

export default endpoints;

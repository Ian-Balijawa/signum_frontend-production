const endpoints = (base) => {
  const defaultEndpoint = 'team-member';
  return {
    add: `${base}/${defaultEndpoint}`,
    get(id) {
      return `${base}/${defaultEndpoint}/${id}?incrementViews=true`;
    },
    getAll: `${base}/${defaultEndpoint}`,
    getByRole(role, limit = 10) {
      return `${base}/${defaultEndpoint}/by-role/${role}?limit=${limit}`;
    },
    getByPractice(practiceID) {
      return `${base}/${defaultEndpoint}/by-practice/${practiceID}?limit=20`;
    },
    update: `${base}/${defaultEndpoint}/update`,
    delete: `${base}/${defaultEndpoint}/delete`,
  };
};

export default endpoints;

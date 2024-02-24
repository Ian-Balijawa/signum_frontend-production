const endpoints = (baseUrl = "http://localhost:5000/api/v1") => {
  return {
    teamMembers: {
      getAll() {
        return `${baseUrl}/team-member`;
      },
      getOne(id) {
        return `${baseUrl}/team-member/${id}`;
      },
    },
    practices: {},
    publications: {},
    contactUs: {
      sendMessage() {
        return `${baseUrl}/contact`;
      },
    },
  };
};

export default endpoints;

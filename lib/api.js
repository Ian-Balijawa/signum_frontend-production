// const API_KEY =
//   "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";

export const sendContactForm = async (data) => {
  fetch("/api/sendemail", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json", // metadata showing/to specify the data format. Its a requirement by api routes
    },
  });
};

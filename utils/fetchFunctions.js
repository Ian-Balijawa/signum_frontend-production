export const getData = async (url = '', authToken) => {
  try {
    let response;
    let fetchHeaders = {};
    if (!authToken) {
      response = await fetch(url);
    } else {
      fetchHeaders.authorization = authToken;
      response = await fetch(url, {
        method: 'GET',
        headers: { ...fetchHeaders },
      });
    }
    response = await response.json();
    return response;
  } catch (err) {
    if (err?.message === 'Network request failed') {
      return {
        error: 'Please check your internet connection',
        success: false,
      };
    } else {
      return {
        error: err,
        success: false,
      };
    }
  }
};

export const deleteData = async (url = '', authToken) => {
  try {
    let fetchHeaders = {};
    if (authToken) {
      fetchHeaders.authorization = authToken;
    }

    let response = await fetch(url, {
      method: 'DELETE',
      headers: { ...fetchHeaders },
    });
    response = await response.json();

    return response;
  } catch (err) {
    if (err?.message === 'Network request failed') {
      return {
        error: 'Please check your internet connection',
        success: false,
      };
    } else {
      return {
        error: err,
        success: false,
      };
    }
  }
};

export const postData = async (url = '', data, authToken) => {
  try {
    let dataIsFormData = data instanceof FormData;

    let postObject;
    let fetchHeaders = {};

    if (!dataIsFormData) {
      postObject = JSON.stringify(data);
      fetchHeaders = {
        'Content-Type': 'application/json',
      };
    } else {
      postObject = data;
    }

    if (authToken) {
      fetchHeaders.authorization = authToken;
    }

    let response = await fetch(url, {
      method: 'POST',
      headers: { ...fetchHeaders },
      body: postObject,
    });

    response = await response.json();
    return response;
  } catch (err) {
    if (err?.message === 'Network request failed') {
      return {
        error: 'Please check your internet connection',
        success: false,
      };
    } else {
      return {
        error: err,
        success: false,
      };
    }
  }
};

export const patchData = async (url = '', data, authToken) => {
  try {
    let dataIsFormData = data instanceof FormData;

    let postObject;
    let fetchHeaders = {};

    if (!dataIsFormData) {
      postObject = JSON.stringify(data);
      fetchHeaders = {
        'Content-Type': 'application/json',
      };
    } else {
      postObject = data;
    }

    if (authToken) {
      fetchHeaders.authorization = authToken;
    }

    let response = await fetch(url, {
      method: 'PATCH',
      headers: { ...fetchHeaders },
      body: postObject,
    });

    response = await response.json();
    return response;
  } catch (err) {
    if (err?.message === 'Network request failed') {
      return {
        error: 'Please check your internet connection',
        success: false,
      };
    } else {
      return {
        error: err,
        success: false,
      };
    }
  }
};

export const putData = async (url = '', data, authToken) => {
  try {
    let dataIsFormData = data instanceof FormData;

    let postObject;
    let fetchHeaders = {};

    if (!dataIsFormData) {
      postObject = JSON.stringify(data);
      fetchHeaders = {
        'Content-Type': 'application/json',
      };
    } else {
      postObject = data;
    }

    if (authToken) {
      fetchHeaders.authorization = authToken;
    }

    let response = await fetch(url, {
      method: 'PUT',
      headers: { ...fetchHeaders },
      body: postObject,
    });

    response = await response.json();
    return response;
  } catch (err) {
    if (err?.message === 'Network request failed') {
      return {
        error: 'Please check your internet connection',
        success: false,
      };
    } else {
      return {
        error: err,
        success: false,
      };
    }
  }
};

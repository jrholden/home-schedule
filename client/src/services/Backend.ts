
export const Backend = {
  get: async (url: string, options = {}) => {
    const response = await fetch(url, {
      method: 'GET',
      ...options,
    });
    return response.json();
  },

  post: async (url: string, data: any, options = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      ...options,
    });
    return response.json();
  },

  put: async (url: string, data: any, options = {}) => {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      ...options,
    });
    return response.json();
  },

  delete: async (url: string, options = {}) => {
    const response = await fetch(url, {
      method: 'DELETE',
      ...options,
    });
    return response.json();
  },
};

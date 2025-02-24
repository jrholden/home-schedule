const BASE_URL = process.env.NEXT_PUBLIC_API_URL + '/api';

export const Backend = {
  get: async (url: string, options = {}) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      ...options,
    });
    console.log(response)
    return response.json();
  },

  post: async (url: string, data: any, options = {}) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
      ...options,
    });
    return response.json();
  },

  put: async (url: string, data: any, options = {}) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
      ...options,
    });
    return response.json();
  },

  delete: async (url: string, options = {}) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      ...options,
    });
    return response.json();
  },
};

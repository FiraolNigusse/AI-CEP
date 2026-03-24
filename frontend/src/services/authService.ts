import api from '../api/axios';

export const authService = {
  async register(data: any) {
    const response = await api.post('/users/register/', data);
    if (response.data.access) {
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
    }
    return response.data;
  },

  async login(data: any) {
    const response = await api.post('/users/login/', data);
    if (response.data.access) {
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
    }
    return response.data;
  },

  async getProfile() {
    const response = await api.get('/users/profile/');
    return response.data;
  },

  logout() {
    const refresh = localStorage.getItem('refresh_token');
    if (refresh) {
      api.post('/users/logout/', { refresh }).catch(console.error);
    }
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    window.location.href = '/login';
  }
};

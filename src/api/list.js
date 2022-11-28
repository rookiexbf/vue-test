import instance from './requeset';

export default {
  async query(params) {
    const result = await instance.get(`/search/dyTabStr.json`, {
      params,
    });
    return result.data;
  }
}
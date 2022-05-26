import request from '@/utils/request';

export default {
  getTransaction(id, config = {}) {
    return request({
      ...config,
      url: '/fate-map/' + id,
      method: 'GET',
    });
  },
  submitName(data, config = {}) {
    return request({
      ...config,
      url: '/fate-map',
      method: 'POST',
      data,
    });
  },
  submitDate(id, data, config = {}) {
    return request({
      ...config,
      url: '/fate-map/' + id + '/1',
      method: 'POST',
      data,
    });
  },
  submitHour(id, data, config = {}) {
    return request({
      ...config,
      url: '/fate-map/' + id + '/2',
      method: 'POST',
      data,
    });
  },
  submitNFTZSign(id, data, config = {}) {
    return request({
      ...config,
      url: '/fate-map/' + id + '/4',
      method: 'POST',
      data,
    });
  },
  getBalance(id, config = {}) {
    return request({
      ...config,
      url: '/fate-map/' + id + '/3',
      method: 'GET',
    });
  },
  countTransaction() {
    return request({
      url: '/fate-map/count',
      method: 'GET',
    });
  },
};

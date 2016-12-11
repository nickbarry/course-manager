angular.module('app.services', [])
.factory('API', function($http) {
  const getAll = () => {
    return $http({
      method: 'GET',
      url: '/api/data',
    }).then(response => response.data);
  };

  const getOne = (query) => {
    const queryString = Object.keys(query)
      .map(key => `${key}=${query[key]}`)
      .join('&');
    return $http({
      method: 'GET',
      url: `/api/data/?${queryString}`,
    }).then(response => response.data);
  };

  const addOne = (data) => {
    return $http({
      method: 'POST',
      url: '/api/data',
      data: data,
    });
  };

  const updateOne = (id, latestData) => {
    return $http({
      method: 'POST',
      url: `/api/data/${id}`,
      data: latestData,
    });
  };

  const deleteOne = (id) => $http({
    method: 'DELETE',
    url: `/api/data/${id}`,
  });

  return { getAll, getOne, addOne, updateOne, deleteOne };
});

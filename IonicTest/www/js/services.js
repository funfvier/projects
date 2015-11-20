angular.module('starter.services', [])

.factory('Cities', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
 var cities = [{
    id: 524901,
    name: 'Москва',
    desc: 'Столица',
    emblem: 'http://upload.wikimedia.org/wikipedia/commons/d/da/Coat_of_Arms_of_Moscow.png'
  }];

  return {
    all: function() {
      return cities;
    },
    get: function(id) {
      for (var i = 0; i < cities.length; i++) {
        if (cities[i].id === parseInt(id)) {
          return cities[i];
        }
      }
      return null;
    }
  };
});

angular.module("ccApp", ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'app/home.html',
      // controller: 'homeCtrl '
    })
    .when('/countries', {
      templateUrl: 'app/countries.html',
      // controller: 'countriesCtrl as app'
    })
    .when('/country', {
      templateUrl: 'app/country.html',
      // controller: 'countryCtrl as country'
    })
  }])
  // .controller('countryCtrl', function() {
  //
  // })
.controller('countriesCtrl', function($http) {
  // this.hello = "HELLO";
  this.select = function(country) {

        self.selected = country;
      }
  this.getCountry = function () {

  var self = this;
   http://api.geonames.org/countryInfo?username=demo
  // var url = "http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=tommycakes";
  var url =  "http://api.geonames.org/countryInfoJSON?formatted=true&lang=itE&username=tommycakes&style=full"
  // alert(url);

  var request = {
    callback: 'JSON_CALLBACK',
    count:40
  };
  $http({
    method: 'JSONP',
    url: url,
    params: request
            // country (default = all countries)
  })
  .then(function(data) {
      self.data = data.data.geonames;
      self.name = data.data.geonames[1].countryName;
      self.countrycode = data.data.geonames[1].countrycode;
      self.capital = data.data.geonames[1].capital;
      self.area =  data.data.geonames[1].areaInSqKm;
      self.pop =  data.data.geonames[1].population;
      self.continent =  data.data.geonames[1].continent;
      // self.pop = data.data.geonames[1].population;
    console.log(data);
    console.log(self.data);

    // alert(self.data);
    // alert(self.data[0]);
    // alert(data.data.geonames[1].countrycode);
  },
  function () {
    alert("Error!");
  });
}
//function getCountryInfo() {
//}
// this.select = function(item) {
//   self.hello = "HIII!, farewell";
//       self.selected = item;
//     }
//       self.selected = {};
});
  // $http.get('http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=tommyCakes')
  //   callback: 'JSON_CALLBACK'
  //     .success(function(data) {
  //       alert("It works!");
  //     })
  //     .error(function(data) {
  //       alert("Error");
  //     });

angular.module('SE_AIRLINES')

/**
 * Util Service
 */
.factory('UtilSrv', function ($http) {
    return {
        getPromo: function(num) {
            return $http.get('/getPromoOffer/' + num);
        }
    };
});

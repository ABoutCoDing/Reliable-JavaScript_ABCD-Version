﻿// getRestaurantsWithinRadius에 메모이제이션 패턴 적용

Aop.around(
  // 반환값을 수정해야 할 함수
  'restaurantApi',

  // 반환값을 수정하는 함수
  function addMemoizationToGetRestaurantsWithinRadius(targetInfo) {

    // ThirdParty.restaurantApi()가 반환한 원본 API
    var api =  Aop.next.call(this, targetInfo);

    // getRestaurantsWithinRadius 함수를 장식하여 메모이제이션 추가
    Aop.around('getRestaurantsWithinRadius',
      Aspects.returnValueCache().advice, 
      api);

    // 고친 API를 반환한다
    return api;
  },

  // 반환값을 수정해야 할 함수의 명칭공간
  ThirdParty
);

// ThirdParty.restaurantApi()에 getRestaurantsNearConference 멤버 추가

Aop.around(
  // 반환값을 수정해야 할 함수
  'restaurantApi',

  // 반환값을 수정하는 함수
  function addGetRestaurantsNearConference(targetInfo) {
    'use strict';

    // ThirdParty.restaurantApi()가 반환한 원본 API
    var api = Aop.next.call(this,targetInfo);

    // API에 추가할 함수
    function getRestaurantsNearConference(cuisine) {
      return api.getRestaurantsWithinRadius(
        '울산 남구 신정로20번길 988', 2.0, cuisine);
    }

    // 존재하지 않을 경우 이 함수를 추가한다
    api.getRestaurantsNearConference =
      api.getRestaurantsNearConference || getRestaurantsNearConference;

    // 고친 API를 반환한다
    return api;
  },

  // 반환값을 수정해야 할 함수의 명칭공간
  ThirdParty
);
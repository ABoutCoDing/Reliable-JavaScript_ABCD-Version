var Conference = Conference || {};
Conference.attendeeWebApiDecorator = function(baseWebApi) {
  'use strict';

  return {

    post: function post(attendee) {
    },

    getAll: function getAll() {
      // baseWebApi 실행
      return baseWebApi.getAll();
    }
  };
};
var Presentation = require("./Presentation.js"),
    VendorPresentation = require("./VendorPresentation.js"),
    presentationFactory = require("./presentationFactory.js");

var baseParameter = {
        title: '자바스크립트를 멋지게 사용해보세요',
        presenter: '박길벗'
      };
var factory = presentationFactory.presentationFactory();
console.log(factory.create(baseParameter));

var vendorParameter = {
    title: '자바스크립트를 멋지게 사용해보세요',
    presenter: '박길벗',
    vendor: '길벗출판사',
    product: '자바스크립트의 바른 길'
  };
console.log(factory.create(vendorParameter));
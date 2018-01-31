// MyApp = {};
MyApp = require('./DiContainer')

MyApp.diContainer = new DiContainer();


MyApp.diContainer.register(
    'ServiceTest',
    [],
    function() {
        return {
            'abcd': function () {
                return 'test 입니다.'
            }
        }
    }
)

MyApp.diContainer.register(
    'Service',      // 웹 서비스를 가리키는 DI태그
    [],             // 의존성 없음
    function() {    // 인스턴스를 반환하는 함수
        return new ConferenceWebSvc();
    }
)

MyApp.diContainer.register (
    'Messenger',
    [],
    function () {
        return new Messenger()
    }
)

MyApp.diContainer.register (
    'AttendeeFactory',
    ['Service', 'Messenger'],       // Attendee는 service 및 messnger에 의존한다.
    function (service, messenger) {
        return new Attendee(service, messenger, attendeeId)
    }
)

var serviceTest = MyApp.diContainer.get('ServiceTest')
// var serviceTest1 = MyApp.diContainer.get('AttendeeFactory')
console.log(serviceTest.abcd())

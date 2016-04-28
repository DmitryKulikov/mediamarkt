angular.module('myApp', [])

.controller('myAppController', function($scope){
        $scope.newsItems = [
            {
                text: 'СМИ сообщают, что в Индии был замечен новый внедоровжник Chevrolet Trailblazer',
                picture: 'assets/img/cat_placeholder.jpg'
            },
            {
                text: 'Официальные дилеры немецкого автоконцерна "Audi" в России начали прием заказов на 5-местный хетчбэк RS 3 Sprotback',
                picture: 'assets/img/cat_placeholder.jpg'
            },
            {
                text: 'Datsun наращивает продажи в России',
                picture: 'assets/img/cat_placeholder.jpg'
            },
            {
                text: 'В России может появиться дизельный Hyundai ix25',
                picture: 'assets/img/cat_placeholder.jpg'
            },
            {
                text: 'Lamborgini не хочет выпускать бюджетный спорткар за 200 000 долларов',
                picture: 'assets/img/cat_placeholder.jpg'
            }

        ];
    })
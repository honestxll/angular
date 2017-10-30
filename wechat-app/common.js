var m = angular.module('app', []);
m.controller('ctrl', function ($scope) {
    $scope.data = {
        "button": [{
                "type": "click",
                "name": "今日歌曲",
                "key": "V1001_TODAY_MUSIC"
            },
            {
                "type": "click",
                "name": "电影",
                "key": "V1001_TODAY_MUSIC",
                "sub_button": [{
                    "type": "view",
                    "name": "羞羞的铁拳",
                    "url": "http://www.soso.com/"
                }, {
                    "type": "view",
                    "name": "缝纫机乐队",
                    "url": "http://www.soso.com/"
                }, ]
            }
        ]
    };
    $scope.addFirstMenu = function () {
        var menu = {
            "type": "click",
            "name": "",
            "key": ""
        };
        if ($scope.data.button.length == 3) {
            alert('一级菜单最多只能为三个');
        } else {
            $scope.data.button.push(menu);
        }
    };
    $scope.addSecondMenu = function (item) {
        var menu = {
            "type": "click",
            "name": "",
            "key": ""
        };
        item.sub_button = item.sub_button || [];
        if (item.sub_button.length == 5) {
            alert('二级菜单最多只能为五个');
        } else {
            item.sub_button.push(menu);
        }
    };
    $scope.removeFirstMenu = function (index) {
        console.log(index);
        $scope.data.button.splice(index, 1);
    };
    $scope.removeSecondMenu = function (parentIndex, index) {
        $scope.data.button[parentIndex].sub_button.splice(index, 1);
    };
})
$('body').on('click', 'dt', function (){
    $(this).next().stop().slideToggle(500);
})

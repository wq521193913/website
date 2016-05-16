/**
 * Created by wq on 2016/5/9.
 */
$(document).ready(function(){
    layer.ready(function(){
        layer.load(1);
    })
    setTimeout("getProduct()",5000);
})

app.controller("frontProduct",["$scope","$timeout",function($scope,$timeout){
    $scope.lineList = [];
    $scope.productList = [
        {"id":"1","url":"resource/11.jpg","name":"港荣蒸蛋糕1"},
        {"id":"2","url":"resource/11.jpg","name":"港荣蒸蛋糕2"},
        {"id":"3","url":"resource/11.jpg","name":"港荣蒸蛋糕3"},
        {"id":"4","url":"resource/11.jpg","name":"港荣蒸蛋糕4"},
        {"id":"5","url":"resource/11.jpg","name":"港荣蒸蛋糕5"},
        {"id":"6","url":"resource/11.jpg","name":"港荣蒸蛋糕6"},
        {"id":"7","url":"resource/11.jpg","name":"港荣蒸蛋糕7"},
        {"id":"8","url":"resource/11.jpg","name":"港荣蒸蛋糕8"},
    ];
    //$scope.lineList = new Array(parseInt($scope.productList.length/3)  + 1)
    //$scope.dataList = new Array();
    //var index = 0;
    //while (index<10000){
    //    index++;
    //    console.log(index);
    //}
    //for(var i = 0; i < $scope.productList.length; i++){
    //    $scope.dataList.push($scope.productList[i]);
    //    if((i+1)/4 == 1 || (i+1) == $scope.productList.length){
    //        $scope.lineList[index] = $scope.dataList;
    //        index++;
    //        $scope.dataList = new Array();
    //    }
    //}

}]);

function getProduct(){
    //layer.load(1);
    var lineList = [];
    var productList = [
        {"id":"1","url":"resource/11.jpg","name":"港荣蒸蛋糕1"},
        {"id":"2","url":"resource/11.jpg","name":"港荣蒸蛋糕2"},
        {"id":"3","url":"resource/11.jpg","name":"港荣蒸蛋糕3"},
        {"id":"4","url":"resource/11.jpg","name":"港荣蒸蛋糕4"},
        {"id":"5","url":"resource/11.jpg","name":"港荣蒸蛋糕5"},
        {"id":"6","url":"resource/11.jpg","name":"港荣蒸蛋糕6"},
        {"id":"7","url":"resource/11.jpg","name":"港荣蒸蛋糕7"},
        {"id":"8","url":"resource/11.jpg","name":"港荣蒸蛋糕8"},
    ];

    var dataEl = [];
    var mEl = "";
    dataEl.push("<table>");
    dataEl.push("<tr>");
    for(var i = 0; i < productList.length; i++){
        mEl = "<td>" +
            "<div class='product-img'>" +
            "<img src='"+productList[i].url+"'>"+
            "</div>"+
            "<div class='product-info'>"+
            "   <div class='product-name'>"+
            "   <a href='javascript:void(0)'>"+productList[i].name+"</a>"+
            "</div>"+
            "<div class='product-intro'>"+
            "    <a href='javascript:void(0)'>描述描述描述描述描述描述描述描述描述描述.....</a>"+
            "    </div>"+
            "    <input type='button' class='input-btn' value='加入购物车' ng-click=''>"+
            "    </div>"+
            "</td>";
        dataEl.push(mEl);
        if((i+1)/4 == 1 || (i+1) == productList.length){
            dataEl.push("</tr>");
            dataEl.push("<tr>");
        }
    }
    dataEl.push("</table>");
    $("#productTable").append(dataEl);
    layer.closeAll('loading');
}
(function () {

    var app = angular.module('holidays', []);

    app.directive('snow', function () {
        return{
            restrict: 'E',
            templateUrl: 'snow.html',
            controller: function () {

                var christmas = {
                    month: 11,
                    startDate: 20,
                    endDate: 26
                };

                function isItChristmas() {
                    var now = new Date();
                    return (now.getMonth() == christmas.month && now.getDate() >= christmas.startDate && now.getDate() <= christmas.endDate);
                }

                if (isItChristmas()) {
                    SnowStorm();
                } else {
                    //not a christmas
                }

                function SnowStorm() {
                    function initCanvas() {
                        var ctx = document.getElementById('my_canvas').getContext('2d');
                        var cW = ctx.canvas.width, cH = ctx.canvas.height;
                        var flakes = [];

                        function addFlake() {
                            var x = Math.floor(Math.random() * cW) + 1;
                            var y = 0;
                            var s = Math.floor(Math.random() * 3);
                            flakes.push({"x": x, "y": y, "s": s});
                        }

                        function snow() {
                            addFlake();
                            addFlake();
                            for (var i = 0; i < flakes.length; i++) {
                                ctx.fillStyle = "rgba(255,255,255,.75)";
                                ctx.beginPath();
                                ctx.arc(flakes[i].x, flakes[i].y += flakes[i].s * .5, flakes[i].s * .5, 0, Math.PI * 2, false);
                                ctx.fill();
                                if (flakes[i].y > cH) {
                                    flakes.splice(i, 1);
                                }
                                document.getElementById('status').innerHTML = "Snow Flake Count = " + flakes.length;
                            }
                        }

                        function animate() {
                            ctx.save();
                            ctx.clearRect(0, 0, cW, cH);

                            //ctx.rotate(0);
                            snow();
                            ctx.restore();
                        }

                        var animateInterval = setInterval(animate, 30);
                    }

                    window.addEventListener('load', function (event) {
                        initCanvas();
                    });
                }
            }
        }
    });
    /*end directive*/


})();

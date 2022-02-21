
var h1 = document.createElement("h1");
h1.id="count";
h1.innerText="Count down starts in..";
document.body.appendChild(h1);

var countDown = function(){
    setTimeout(function(){
        h1.innerText = '10'
        setTimeout(function(){
            h1.innerText = '9'
            setTimeout(function(){
                h1.innerText = '8'
                setTimeout(function(){
                    h1.innerText = '7'
                    setTimeout(function(){
                        h1.innerText = '6'
                        setTimeout(function(){
                            h1.innerText = '5'
                            setTimeout(function(){
                                h1.innerText = '4'
                                setTimeout(function(){
                                    h1.innerText = '3'
                                    setTimeout(function(){
                                        h1.innerText = '2'
                                        setTimeout(function(){
                                            h1.innerText = '1'
                                            setTimeout(function(){
                                                h1.innerText = 'Happy Independence Day'
                                                
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
}

countDown()
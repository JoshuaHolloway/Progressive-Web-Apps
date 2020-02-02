//===============
function addExtra(price, callback) {

    // point-q
    console.log('point-q');

    const ms = 300;
    setTimeout(function () {

        // This callback 
        callback(price + 1);
    }, ms);

}
//===============
function main() {

    console.log('point-p1');

    addExtra(1, function (newPrice) {
        console.log('Inside OUTER callback invocation');
        addExtra(newPrice, function (newPrice2) {
            console.log('Inside INNER callback invocation');
            console.log(newPrice2);
        });
    });

    console.log('After addExtra invocation');
}
//===============
// Want to now use price value 
main();
//===============

//        [1]           [1]
// main() -> addExtra() -> main()
//  (p1)      (q)| 
//               |[price=1]
//               |
//           callback([price+1 = 2])
//               |
//               | (Inside OUTER callback invocation)
//               |
//           addExtra(newPrice=2)
//               |
//               | (point-q)
//               | [2]
//           callback([2+1 = 3])
//               |
//               | (Inside INNER callback invocation)
//               | {console.log([3])}
//        


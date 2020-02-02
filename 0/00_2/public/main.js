//===============
function addExtra(price, callback) {

    const ms = 300;
    setTimeout(function () {

        // This callback 
        callback(price + 1);
    }, ms);

}
//===============
function main() {

    console.log('Before addExtra invocation');

    // fire callback once the function has completed
    addExtra(1, function (newPrice) {
        console.log('Inside callback invocation');
        console.log(newPrice);
    });

    console.log('After addExtra invocation');
}
//===============
main();
//===============

//        [1]           [1]
// main() -> addExtra() -> main()
//             |
//             |[1]
//             |
//      callback()
//  {console.log([1] + 1)}


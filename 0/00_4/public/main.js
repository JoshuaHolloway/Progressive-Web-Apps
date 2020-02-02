// -Callbacks get called as soon as the asynchronous event completes
// -Promises get resolved by the asynchronous event
//  --i.e., it will be used whenever convenient
//
// -Promises have three states:
//  --1. Pending: Initial state
//  --2. Resolved: Task succeeded
//  --3. Rejected: Task failed
//===============
function addExtra(price) {
    console.log('Inside addExtra function');

    let p = new Promise(function (resolve, reject) {
        if (price > 2)
            reject('Price cannot exceed 3');

        console.log('Before setTimeout');

        const ms = 300;
        setTimeout(function () {
            console.log(`Inside 'resolve()'`);

            // callback:
            resolve(price + 1);
        }, ms);

        console.log('After setTimeout');
    });
    return p;
}
//===============
function main() {

    addExtra(10)
        .then(function (newPrice) {
            console.log(newPrice);
        }).catch(function (error) { console.log(error); });

}
//===============
// Want to now use price value 
main();
//===============

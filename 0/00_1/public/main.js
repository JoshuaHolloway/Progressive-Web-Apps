var price = 1;

function addExtra() {

    function callback() {
        price = price + 1;
    }
    // price is updated because callback is sequential
    callback();
    console.log('price after callback = ', price);

    // price is not updated when asynchronouse
    const ms = 1e2;
    setTimeout(callback, ms);
    console.log('price after async callback = ', price);
}

// Callback is called too late to update price
addExtra();

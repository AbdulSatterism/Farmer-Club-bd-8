const addToDb = (id) => {
    let timeRequired = {};

    // 
    const storedTime = localStorage.getItem('time');
    if (storedTime) {
        timeRequired = JSON.parse(storedTime)
    }

    // add quanity
    const quantity = timeRequired[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        timeRequired[id] = newQuantity;
    }
    else {
        timeRequired[id] = 1;
    }
    localStorage.setItem('time', JSON.stringify(timeRequired))
}

export { addToDb }
const addToDb = (id) => {
    let timeRequired = {};

    // 
    const storedTime = localStorage.getItem('time');
    if (storedTime) {
        timeRequired = JSON.parse(storedTime)
    }

    // add quanity
    const quanity = timeRequired[id];
    if (quanity) {
        const newQuantity = quanity + 1;
        timeRequired[id] = newQuantity;
    }
    else {
        timeRequired[id] = 1;
    }
    localStorage.setItem('time', JSON.stringify(timeRequired))
}

const getDataFromDb = () => {
    let timeRequired = {};

    // 
    const storedTime = localStorage.getItem('time');
    if (storedTime) {
        timeRequired = JSON.parse(storedTime)
    }
    return timeRequired;
}

export { addToDb, getDataFromDb }
function moveOver(arr, direction) {
    if (direction === 'end') {
        const firstElement = arr.shift();
        arr.push(firstElement);
    } else if (direction === 'start') {
        const lastElement = arr.pop();
        arr.unshift(lastElement);
    }

    return arr;
}

alert(moveOver([1,2,3,4], 'end'));
alert(moveOver([1,2,3,4], 'start'));
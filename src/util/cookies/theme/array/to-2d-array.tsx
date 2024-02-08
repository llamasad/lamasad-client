function to2dArray<T>(arr: any, columns: number): T[][] {
    const arr2D: T[][] = [];
    for (let i = 0; i < arr.length; i += columns) {
        arr2D.push(arr.slice(i, i + columns));
    }

    return arr2D;
}

export default to2dArray;

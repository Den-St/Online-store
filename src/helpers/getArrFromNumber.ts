export const getArrFromNumber = (n?:number):number[] | void => {
    const arr:number[] = [];
    if(!n) return;
    for(let i = 1;i <= n;i++){
        arr.push(i);
    }

    return arr;
}
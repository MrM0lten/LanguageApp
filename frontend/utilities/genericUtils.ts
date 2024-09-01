
export function randomArrayElem(array:any[]): any {
    let newIndex = Math.floor(Math.random() * (array.length - 0) + 0);
    console.log("newIndex = ",newIndex)
    return array[newIndex];
}
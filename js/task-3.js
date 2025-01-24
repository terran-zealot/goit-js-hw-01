function getElementWidth(content, padding, border) {
    let subContent = parseFloat(content);
    let subPadding = parseFloat(padding) *2;
    let subBorder = parseFloat(border) *2;
    const totalWidth = subContent + (subPadding + subBorder);
    return totalWidth
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
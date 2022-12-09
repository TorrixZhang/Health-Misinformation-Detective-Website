console.log("here we go");
var keyword1 = 'at least';
var keyword2 = 'half of ';
var paragraphs = document.getElementsByTagName("p");
var someMumber = 0
var harmMumber = 0
for (paragraph of paragraphs) {
    var content = paragraph.innerHTML;
    if (content.includes(keyword2)) {
        paragraph.style["background-color"] = "red";
        harmMumber++
    } else if (content.includes(keyword1)) {
        paragraph.style["background-color"] = "yellow";
        someMumber++
    }
}
console.log('someNumber:', someMumber)
console.log('harmMumber:', harmMumber)


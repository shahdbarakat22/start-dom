

// //selectors
// // id selector
// var section=document.getElementById("sec")
// console.log(section)
// var section02=document.querySelector("#sec")
// console.log(section02)
// // class selector
// var section03=document.getElementsByClassName("secc")
// console.log(section03)
// var section04=document.querySelectorAll(".secc")
// console.log(section04)
// // element selector
// var divs=document.getElementsByTagName("div")
// console.log(divs)

// // manipulation
// section.textContent="This is a test!!!!!!!"
// section.className = "her"
// section.classList.add("secc")
// section.classList.remove("her")
// section.style.display="none"
// section.style.display="block"
// section.style.backgroundColor="red"
// section.style.color="blue"
// section.style.cssText="border: 1px solid #000; color: yellow;"
// // attributes
// section.setAttribute("alt", "test")
// console.log(section.getAttribute("class"))

// // new elements
// // var image=document.createElement("img")
// // console.log(image)
// // image.src="https://mpost.io/wp-content/uploads/image-74-7-1024x1024.jpg"
// // section.appendChild(image)
// // var heading02=document.createElement("h2")
// // heading02.textContent="new heading using js!!!!"
// // console.log(heading02)
// // section.appendChild(heading02)

// // select div
// var container=document.getElementById("new__div")
// console.log(container)

// // create new elemets using js
// var head=document.createElement("h3")
// head.textContent="Hi, my name is AI"
// container.appendChild(head)
// var newDivImg=document.createElement("img")
// newDivImg.src="https://mpost.io/wp-content/uploads/image-74-7-1024x1024.jpg"
// newDivImg.style.cssText="width: 200px; hieght: 200px;"
// container.appendChild(newDivImg)


/*-----------------------=--------------navigation-------------- */
var sections=document.getElementsByClassName("sec")
console.log(sections)
var nav=document.getElementById("nv")
console.log(nav)
var list=document.createElement("ul")
// var navvItem01=document.createElement("li")
// for(i=0;i<sections.length;i++){
//     console.log(sections[i])
// }

for(section of sections){
    //console.log(section)
    section.id=section.firstElementChild.textContent
    // create li
    var listItem=document.createElement("li")
    var itemLink=document.createElement("a")
    console.log(section.firstElementChild.textContent)
    itemLink.textContent=section.firstElementChild.textContent;
    //link
    itemLink.href=`#${section.id}`
    listItem.appendChild(itemLink)
    list.appendChild(listItem)
    nav.appendChild(list)
}


const arr= [ 
            ["Graphics","Vectors","Business","Cards","Custom logo"],
            ["Personal Email","Business Email","Mobil Email","Web","Marketing"],
            ["Site Seal","VPS Hosting","Privacy Seal","Website","Design"]
            ]

const creatingLiTag=(ulTag, Array)=>{

    for(let i=0; i<Array.length; i++){
        const liTag=document.createElement("li");

        const aTag=document.createElement("a");
        aTag.setAttribute("href", "");
        aTag.append(Array[i]);

        liTag.append(aTag);

        ulTag.append(liTag);
    }
}
const megaMenu=document.getElementsByClassName("mega-ul");
for(let i=0; i<megaMenu.length; i++){
    const mega_row=document.getElementsByClassName("mega-ul")[i];
    creatingLiTag(mega_row,arr[i]);
    
}
const leftNav=document.getElementsByClassName("left-nav")[0];
const rightNav=document.getElementsByClassName("right-nav")[0];
const middleNav=document.getElementsByClassName("middle-nav");
const bar=document.getElementsByClassName("bar")[0];
const xmark=document.getElementsByClassName("xmark")[0];
bar.addEventListener("click", ()=>{
    bar.style.display="none";
    xmark.style.display="block";
    leftNav.style.display="none";
    rightNav.style.display="flex";


})
xmark.addEventListener("click", ()=>{
    xmark.style.display="none";
    bar.style.display="block";
    leftNav.style.display="flex";
    rightNav.style.display="none";
})







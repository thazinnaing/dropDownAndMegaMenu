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






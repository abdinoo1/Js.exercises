function changeimg(){
    const sawir = document.querySelector("#sawir");
    const url = prompt("fadlan sheeg sawirka")
    const borderColor = prompt('fadlan sheeg color')
    const width = prompt('fadlan sheeg cabirka')
    const height = prompt('fadlan sheeg heightka')
    const borderRadius = prompt('fadlan sheeg raduiska')
    sawir.setAttribute('src', url )
    sawir.style.border = `2px solid ${borderColor}`;
    sawir.style.width = `${width}px`;
    sawir.style.height = `${height}px`;
    sawir.style.borderRadius = `${borderRadius}px`;
    sawir.style.padding = "10px";
    sawir.style.backgroundColor = '#0a0312';
}
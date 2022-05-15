if (pimouxMod === undefined) let pimouxMod = {};

pimouxMod.init = () => {

    //Reste un bout de temps puis disparait ==> cf Game.updateMenu()

    let menu = document.querySelector("#menu");

    let pimouxFramed = document.createElement("div");
    let block = document.createElement("div");
    let subsection = document.createElement("div");
    let title = document.createElement("div");
    let titleContent = document.createTextNode("Pimoux mod");

    pimouxFramed.classList.add("framed");
    pimouxFramed.style.margin = "4px 48px";

    block.classList.add("block");
    block.style.padding = "0px";
    block.style.margin = "8px 4px";

    subsection.classList.add("subsection");
    subsection.style.padding = "0px";

    title.classList.add("title");
    title.appendChild(titleContent);

    subsection.appendChild(title);
    block.appendChild(subsection);
    pimouxFramed.appendChild(block);
    menu.appendChild(pimouxFramed);
}
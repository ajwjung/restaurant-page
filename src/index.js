const content = document.querySelector("#content");

const MainElements = (() => {
    const createHeader = () => {
        const newHeader = document.createElement("header");

        const restaurantLogo = OtherElements.createImage("src/imgs/gusteaus.png");
        const restaurantName = OtherElements.createH1("Gusteau's");
        
        newHeader.appendChild(restaurantLogo);
        newHeader.appendChild(restaurantName);

        return newHeader;
    }

    const createMain = () => {
        const newMain = document.createElement("main");
        return newMain;
    }

    return { createHeader, createMain }
})();


const OtherElements = (() => {
    const createH1 = (text) => {
        const newH1 = document.createElement("h1");
        newH1.textContent = text;
        return newH1;
    }

    const createH2 = (text) => {
        const newH2 = document.createElement("h2");
        newH2.textContent = text;
        return newH2;
    }

    const createDiv = () => {
        const newDiv = document.createElement("div");
        return newDiv;
    }

    const createImage = (src) => {
        const newImage = document.createElement("img");
        newImage.src = src;
        return newImage;
    }

    const createPara = (text) => {
        const newPara = document.createElement("p");
        createPara.textContent = text;
        return newPara;
    }

    const createSpan = (text) => {
        const newSpan = document.createElement("span");
        newSpan.textContent = text;
        return newSpan;
    }

    return { createH1, createH2, createDiv, createImage, createPara, createSpan }
})();

const Page = (() => {
    const header = MainElements.createHeader();
    const main = MainElements.createMain();

    content.appendChild(header);
    content.appendChild(main);
})();
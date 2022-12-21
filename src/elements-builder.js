const MainElements = (() => {
    const createHeader = () => {
        const newHeader = document.createElement("header");
        return newHeader;
    }

    const createNav = () => {
        const newNav = document.createElement("nav");
        return newNav;
    }

    const createMain = () => {
        const newMain = document.createElement("main");
        return newMain;
    }

    const createSection = (className) => {
        const newSection = document.createElement("section");
        newSection.classList.add(className);
        return newSection;
    }

    const createFooter = () => {
        const newFooter = document.createElement("footer");

        const footerLine = OtherElements.createLine("footer-line");
        const noteContainer = OtherElements.createDiv("footer-container");
        const footerNote = OtherElements.createPara("Copyright © 2022 Amy Jung");

        noteContainer.appendChild(footerNote);
        newFooter.appendChild(footerLine);
        newFooter.appendChild(noteContainer);

        return newFooter;
    }

    return { createHeader, createNav, createMain, createSection, createFooter }
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

    const createH3 = (text) => {
        const newH3 = document.createElement("h3");
        newH3.textContent = text;
        return newH3;
    }

    const createDiv = (className) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add(className);
        return newDiv;
    }

    const createImage = (src) => {
        const newImage = document.createElement("img");
        newImage.src = src;
        return newImage;
    }

    const createPara = (text) => {
        const newPara = document.createElement("p");
        newPara.textContent = text;
        return newPara;
    }

    const createSpan = (text) => {
        const newSpan = document.createElement("span");
        newSpan.textContent = text;
        return newSpan;
    }

    const createLine = (className) => {
        const newLine = document.createElement("hr");
        newLine.classList.add(className);
        return newLine;
    }

    const createBtn = (text, id) => {
        const newBtn = document.createElement("button");
        newBtn.setAttribute("type", "button");
        newBtn.textContent = text;
        newBtn.setAttribute("id", id);
        return newBtn;
    }

    return { createH1, createH2, createH3, createDiv, createImage,
        createPara, createSpan, createLine, createBtn }
})();

export { MainElements, OtherElements };
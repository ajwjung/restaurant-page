import GitHubLogo from "../imgs/github.svg";

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
        const iconContainer = document.createElement("a");
        const githubIcon = OtherElements.createImage(GitHubLogo);
        const footerNote = OtherElements.createPara("Created by Amy Jung");

        iconContainer.setAttribute("href", "https://github.com/ajwjung/restaurant-page")
        githubIcon.classList.add("github-icon");

        iconContainer.appendChild(githubIcon);
        noteContainer.appendChild(iconContainer);
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

const Tabs = (() => {
    const createHomeBtn = () => {
        const homeTabDiv = OtherElements.createDiv("btn-container");
        const homeTab = OtherElements.createBtn("Home", "home-tab");
        homeTabDiv.appendChild(homeTab);

        return homeTabDiv;
    }

    const createMenuBtn = () => {
        const menuTabDiv = OtherElements.createDiv("btn-container");
        const menuTab = OtherElements.createBtn("Menu", "menu-tab");
        menuTabDiv.appendChild(menuTab);

        return menuTabDiv;
    }

    const createContactBtn = () => {
        const contactTabDiv = OtherElements.createDiv("btn-container");
        const contactTab = OtherElements.createBtn("Contact Us", "contact-tab");
        contactTabDiv.appendChild(contactTab);

        return contactTabDiv;
    }

    const createTabSection = () => {
        const navSection = MainElements.createNav("tabs");

        const homeTab = createHomeBtn();
        const menuTab = createMenuBtn();
        const contactTab = createContactBtn();

        navSection.appendChild(homeTab);
        navSection.appendChild(menuTab);
        navSection.appendChild(contactTab);

        return navSection;
    }

    return { createTabSection };
})();

export { MainElements, OtherElements, Tabs };
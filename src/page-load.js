const MainElements = (() => {
    const createHeader = () => {
        const newHeader = document.createElement("header");

        const restaurantLogo = OtherElements.createImage("../src/imgs/gusteaus.png");
        const restaurantName = OtherElements.createH1("Gusteau's");
        
        newHeader.appendChild(restaurantLogo);
        newHeader.appendChild(restaurantName);

        return newHeader;
    }

    const createMain = () => {
        const newMain = document.createElement("main");

        // Chefs Section
        const chefsSection = OtherElements.createSection("chefs");
        const chefsH2 = OtherElements.createH2("Meet the Chefs");

        const alfredoDiv = OtherElements.createDiv("alfredo");
        const alfredoImg = OtherElements.createImage("../src/imgs/alfredo-linguini.png");
        const alfredoNamePara = OtherElements.createPara("Alfredo Linguini");

        const remyDiv = OtherElements.createDiv("remy");
        const remyImg = OtherElements.createImage("../src/imgs/remy.png");
        const remyNamePara = OtherElements.createPara("Remy");

        alfredoDiv.appendChild(alfredoImg);
        alfredoDiv.appendChild(alfredoNamePara);
        remyDiv.appendChild(remyImg);
        remyDiv.appendChild(remyNamePara);
        chefsSection.appendChild(chefsH2);
        chefsSection.appendChild(alfredoDiv);
        chefsSection.appendChild(remyDiv);
        newMain.appendChild(chefsSection);

        // Reviews Section
        const reviewsSection = OtherElements.createSection("reviews");
        const reviewsH2 = OtherElements.createH2("What the Critics Say");
        const egoImg = OtherElements.createImage("../src/imgs/anton-ego.png");
        const egoReview = "I experienced something new: an extraordinary meal from a singularly unexpected source. [...] It is difficult to imagine more humble origins than those of the genius now cooking at Gusteau's who is, in this critic's opinion, nothing less than the finest chef in France. I will be returning to Gusteau's soon, hungry for more.";
        const reviewSpan = OtherElements.createSpan(egoReview);
        const egoNamePara = OtherElements.createPara("Anton Ego");

        reviewsSection.appendChild(reviewsH2);
        reviewsSection.appendChild(egoImg);
        reviewsSection.appendChild(reviewSpan);
        reviewsSection.appendChild(egoNamePara);
        newMain.appendChild(reviewsSection);

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

    const createSection = (className) => {
        const newSection = document.createElement("section");
        newSection.classList.add(className);
        return newSection;
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

    return { createH1, createH2, createSection,
        createDiv, createImage, createPara, createSpan }
})();

const Page = (() => {
    const content = document.querySelector("#content");

    const header = MainElements.createHeader();
    const main = MainElements.createMain();

    content.appendChild(header);
    content.appendChild(main);
})();

export default Page;
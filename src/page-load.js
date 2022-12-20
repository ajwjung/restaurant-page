import { MainElements, OtherElements } from "./elements-builder";
import Gusteau from "./imgs/gusteaus.png";
import Alfredo from "./imgs/alfredo-linguini.png";
import Remy from "./imgs/remy.png";
import Ego from "./imgs/anton-ego.png";

const PageElements = (() => {
    const createHeaderSection = () => {
        const header = MainElements.createHeader();

        // const restaurantLogo = OtherElements.createImage(Gusteau);
        // const logoWrapper = OtherElements.createDiv("logo-container");
        // restaurantLogo.setAttribute("id", "gusteau-logo");
        const restaurantName = OtherElements.createH1("Gusteau's");
        const headerLine = OtherElements.createDiv("header-line");
        
        // logoWrapper.appendChild(restaurantLogo);
        // header.appendChild(logoWrapper);
        header.appendChild(restaurantName);
        header.appendChild(headerLine);

        return header;
    }

    const createChefSection = () => {
        const chefsSection = MainElements.createSection("chefs");
        const chefsH2 = OtherElements.createH2("Meet the Chefs");
        const chefsContainer = OtherElements.createDiv("chefs-info");
    
        const alfredoDiv = OtherElements.createDiv("alfredo");
        const alfredoContainer = OtherElements.createDiv("alfredo-container");
        const alfredoImg = OtherElements.createImage(Alfredo);
        alfredoImg.setAttribute("id", "alfredo-img");
        const alfredoNamePara = OtherElements.createPara("Alfredo Linguini");
    
        const remyDiv = OtherElements.createDiv("remy");
        const remyContainer = OtherElements.createDiv("remy-container");
        const remyImg = OtherElements.createImage(Remy);
        remyImg.setAttribute("id", "remy-img");
        const remyNamePara = OtherElements.createPara("Remy");
    
        alfredoContainer.appendChild(alfredoImg);
        alfredoDiv.appendChild(alfredoContainer);
        alfredoDiv.appendChild(alfredoNamePara);
        remyContainer.appendChild(remyImg);
        remyDiv.appendChild(remyContainer);
        remyDiv.appendChild(remyNamePara);

        chefsContainer.appendChild(alfredoDiv);
        chefsContainer.appendChild(remyDiv);

        chefsSection.appendChild(chefsH2);
        chefsSection.appendChild(chefsContainer);

        return chefsSection;
    }

    const createReviewSection = () => {
        const reviewsSection = MainElements.createSection("reviews");

        const reviewsH2 = OtherElements.createH2("What the Critics Say");
        const reviewsContainer = OtherElements.createDiv("reviews-container");
        const egoDiv = OtherElements.createDiv("ego");
        const egoContainer = OtherElements.createDiv("ego-container");
        const egoImg = OtherElements.createImage(Ego);
        egoImg.setAttribute("id", "ego-img");
        const egoNamePara = OtherElements.createPara("Anton Ego");
        const egoReview = `"I experienced something new: an extraordinary meal from a singularly unexpected source. [...] It is difficult to imagine more humble origins than those of the genius now cooking at Gusteau's who is, in this critic's opinion, nothing less than the finest chef in France. I will be returning to Gusteau's soon, hungry for more."`;
        const reviewSpan = OtherElements.createSpan(egoReview);
        reviewSpan.setAttribute("id", "ego-review")

        reviewsSection.appendChild(reviewsH2);
        egoContainer.appendChild(egoImg);
        egoDiv.appendChild(egoContainer);
        egoDiv.appendChild(egoNamePara);
        reviewsContainer.appendChild(reviewSpan);
        reviewsContainer.appendChild(egoDiv);
        reviewsSection.appendChild(reviewsContainer);

        return reviewsSection;
    }

    return { createHeaderSection, createChefSection, createReviewSection };
})();

const Page = (() => {
    const content = document.querySelector("#content");

    const header = PageElements.createHeaderSection();
    const main = MainElements.createMain();
    const reviewsMain = PageElements.createReviewSection();
    const chefsMain = PageElements.createChefSection();
    const firstLine = OtherElements.createDiv("first-line");
    const secondLine = OtherElements.createDiv("second-line");

    
    main.appendChild(firstLine);
    main.appendChild(reviewsMain);
    main.appendChild(secondLine);
    main.appendChild(chefsMain);
    content.appendChild(header);
    content.appendChild(main);

})();

export default Page;
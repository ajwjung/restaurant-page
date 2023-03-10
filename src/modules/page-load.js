import { MainElements, OtherElements, Tabs } from "./elements-builder";
import Alfredo from "../imgs/alfredo-linguini.png";
import Remy from "../imgs/remy.png";
import Ego from "../imgs/anton-ego.png";

const CharacterBios = (() => {
    const createBio = (outerDivName, innerDivName, imgSrc, imgId, personName) => {
        const outerDiv = OtherElements.createDiv(outerDivName);
        const innerContainer = OtherElements.createDiv(innerDivName);
        const personImg = OtherElements.createImage(imgSrc);
        personImg.setAttribute("id", imgId);
        const personNamePara = OtherElements.createPara(personName);

        innerContainer.appendChild(personImg);
        outerDiv.appendChild(innerContainer);
        outerDiv.appendChild(personNamePara);
    
        return outerDiv;
    }

    return { createBio };

})();

const PageElements = (() => {
    const createHeaderSection = () => {
        const header = MainElements.createHeader();

        const navBar = Tabs.createTabSection();
        const headerLine = OtherElements.createLine("header-line");
        const restaurantName = OtherElements.createH1("Gusteau's");
        
        header.appendChild(navBar);
        header.appendChild(headerLine);
        header.appendChild(restaurantName);

        return header;
    }

    const createChefSection = () => {
        const chefsSection = MainElements.createSection("chefs");
        const chefsH2 = OtherElements.createH2("Meet the Chefs");
        const chefsContainer = OtherElements.createDiv("chefs-info");
    
        const alfredoInfo = CharacterBios.createBio(
            "alfredo", "alfredo-container", Alfredo, "alfredo-img", "Alfredo Linguini"
        );
        const remyInfo = CharacterBios.createBio(
            "remy", "remy-container", Remy, "remy-img", "Remy"
        );

        chefsContainer.appendChild(alfredoInfo);
        chefsContainer.appendChild(remyInfo);
        chefsSection.appendChild(chefsH2);
        chefsSection.appendChild(chefsContainer);

        return chefsSection;
    }

    const createReviewSection = () => {
        const reviewsSection = MainElements.createSection("reviews");
        const reviewsH2 = OtherElements.createH2("What the Critics Say");

        const reviewsContainer = OtherElements.createDiv("reviews-container");
        const egoInfo = CharacterBios.createBio(
            "ego", "ego-container", Ego, "ego-img", "Anton Ego"
        );
        const egoReview = `"I experienced something new: an extraordinary meal from a singularly unexpected source. [...] It is difficult to imagine more humble origins than those of the genius now cooking at Gusteau's who is, in this critic's opinion, nothing less than the finest chef in France. I will be returning to Gusteau's soon, hungry for more."`;
        const reviewSpan = OtherElements.createSpan(egoReview);
        reviewSpan.setAttribute("id", "ego-review")

        reviewsSection.appendChild(reviewsH2);
        reviewsContainer.appendChild(reviewSpan);
        reviewsContainer.appendChild(egoInfo);
        reviewsSection.appendChild(reviewsContainer);

        return reviewsSection;
    }

    return { createHeaderSection, createChefSection, createReviewSection };
})();

const HomePage = (() => {
    const renderHome = () => {
        const content = document.querySelector("#content");
    
        const header = PageElements.createHeaderSection();
        const main = MainElements.createMain();
        const firstLine = OtherElements.createLine("divider");
        const reviewsMain = PageElements.createReviewSection();
        const secondLine = OtherElements.createLine("divider");
        const chefsMain = PageElements.createChefSection();
        const footer = MainElements.createFooter();
        
        main.appendChild(firstLine);
        main.appendChild(reviewsMain);
        main.appendChild(secondLine);
        main.appendChild(chefsMain);
        content.appendChild(header);
        content.appendChild(main);
        content.appendChild(footer);
    }

    return { renderHome };

})();

export default HomePage;
import { MainElements, OtherElements } from "./elements-builder";
import Gusteau from "./imgs/gusteaus.png";
import Alfredo from "./imgs/alfredo-linguini.png";
import Remy from "./imgs/remy.png";
import Ego from "./imgs/anton-ego.png";

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

        // const restaurantLogo = OtherElements.createImage(Gusteau);
        // const logoWrapper = OtherElements.createDiv("logo-container");
        // restaurantLogo.setAttribute("id", "gusteau-logo");
        const navBar = Tabs.createTabSection();
        const headerLine = OtherElements.createLine("header-line");
        const restaurantName = OtherElements.createH1("Gusteau's");
        
        // logoWrapper.appendChild(restaurantLogo);
        // header.appendChild(logoWrapper);
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

const Page = (() => {
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

})();

export default Page;
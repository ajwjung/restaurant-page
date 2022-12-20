import { MainElements, OtherElements } from "./elements-builder";
import Gusteau from "./imgs/gusteaus.png";
import Alfredo from "./imgs/alfredo-linguini.png";
import Remy from "./imgs/remy.png";
import Ego from "./imgs/anton-ego.png";

const PageElements = (() => {
    const CreateHeaderSection = (() => {
        const header = MainElements.createHeader();

        const restaurantLogo = OtherElements.createImage(Gusteau);
        const restaurantName = OtherElements.createH1("Gusteau's");
        
        header.appendChild(restaurantLogo);
        header.appendChild(restaurantName);

        return header;
    })

    const CreateChefSection = () => {
        const chefsSection = MainElements.createSection("chefs");
        const chefsH2 = OtherElements.createH2("Meet the Chefs");
    
        const alfredoDiv = OtherElements.createDiv("alfredo");
        const alfredoImg = OtherElements.createImage(Alfredo);
        const alfredoNamePara = OtherElements.createPara("Alfredo Linguini");
    
        const remyDiv = OtherElements.createDiv("remy");
        const remyImg = OtherElements.createImage(Remy);
        const remyNamePara = OtherElements.createPara("Remy");
    
        alfredoDiv.appendChild(alfredoImg);
        alfredoDiv.appendChild(alfredoNamePara);
        remyDiv.appendChild(remyImg);
        remyDiv.appendChild(remyNamePara);
        chefsSection.appendChild(chefsH2);
        chefsSection.appendChild(alfredoDiv);
        chefsSection.appendChild(remyDiv);

        return chefsSection;
    }

    const CreateReviewSection = () => {
        const reviewsSection = MainElements.createSection("reviews");

        const reviewsH2 = OtherElements.createH2("What the Critics Say");
        const egoImg = OtherElements.createImage(Ego);
        const egoReview = "I experienced something new: an extraordinary meal from a singularly unexpected source. [...] It is difficult to imagine more humble origins than those of the genius now cooking at Gusteau's who is, in this critic's opinion, nothing less than the finest chef in France. I will be returning to Gusteau's soon, hungry for more.";
        const reviewSpan = OtherElements.createSpan(egoReview);
        const egoNamePara = OtherElements.createPara("Anton Ego");

        reviewsSection.appendChild(reviewsH2);
        reviewsSection.appendChild(egoImg);
        reviewsSection.appendChild(reviewSpan);
        reviewsSection.appendChild(egoNamePara);

        return reviewsSection;
    }

    return { CreateHeaderSection, CreateChefSection, CreateReviewSection };
})();

const Page = (() => {
    const content = document.querySelector("#content");

    const header = PageElements.CreateHeaderSection();
    const main = MainElements.createMain();
    const chefsMain = PageElements.CreateChefSection();
    const reviewsMain = PageElements.CreateReviewSection();
    
    main.appendChild(chefsMain);
    main.appendChild(reviewsMain);
    content.appendChild(header);
    content.appendChild(main);

    return { content };
})();

export default Page;
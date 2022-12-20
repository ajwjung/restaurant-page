import Page from "./page-load";
import { MainElements, OtherElements } from "./elements-builder";

const MenuElements = (() => {
    const createMenuHeader = () => {
        const header = MainElements.createHeader();
    
        const menuH1 = OtherElements.createH1("Gusteau's Menu");
        const headerLine = OtherElements.createLine("header-line");
        
        header.appendChild(menuH1);
        header.appendChild(headerLine);

        return header;
    }

    const createMenuDish = (dishName, description) => {
        const newDish = OtherElements.createDiv("salad");
        
        const dishTitle = OtherElements.createH3(dishName);
        const dishDescription = OtherElements.createPara(description);

        newDish.appendChild(dishTitle);
        newDish.appendChild(dishDescription);

        return newDish;
    }

    const createStartersSection = () => {
        const starters = MainElements.createSection("starters");

        const startersH2 = OtherElements.createH2("Starters");
        const caesarSalad = createMenuDish("Caesar Salad with Salmon",
        "Pan-fried salmon served on a salad of romaine lettuce tossed with an olive oil dressing, grated cheese, and topped with croutons.");
        const pheasantConsomme = createMenuDish("Pheasant Consommé",
        "A clear soup made from pheasant meat.");

        starters.appendChild(startersH2);
        starters.appendChild(caesarSalad);
        starters.appendChild(pheasantConsomme);

        return starters;
    }

    const createEntreesSection = () => {
        const entrees = MainElements.createSection("entrees");

        const entreesH2 = OtherElements.createH2("Entrées");
        const soleMeuniere = createMenuDish("Sole Meunière",
        "A sole filet that is lightly breaded in plain flour and pan-fried in butter, then lightly flavored with lemon and parsley.")
        const salmonRoulade = createMenuDish("Sous-vide Salmon Roulade", 
        "A nice salmon filet rolled with lemon and herbs into a roulade, cooked sous-vide.");
        const searedScallops = createMenuDish("Seared Scallops with Beurre Blanc",
        "Fresh scallops seared in seasoned butter and olive oil, with a dash of Beurre Blanc.");
        const filetMignon = createMenuDish("Filet Mignon", 
        "An 8 oz. filet mignon served with a side of sweet potatoes, pan-seared onions and mushrooms.")

        entrees.appendChild(entreesH2);
        entrees.appendChild(soleMeuniere);
        entrees.appendChild(salmonRoulade);
        entrees.appendChild(searedScallops);
        entrees.appendChild(filetMignon);

        return entrees;
    }

    const createDessertsSection = () => {
        const desserts = MainElements.createSection("desserts");

        const dessertsH2 = OtherElements.createH2("Desserts");
        const souffle = createMenuDish("Gusteau's Souffle",
        "A baked egg-based dessert that's crispy on the outside and soft and fluffy on the inside.");
        const milleFeulle = createMenuDish("Mille-Feulle",
        "A delicate pastry composed of multiple layers of buttery pastry, filled with rich custard pastry cream and topped with glossy royal icing. ");
        const bundtCake = createMenuDish("French Bundt Cake",
        "A classic vanilla Bundt cake topped with powdered sugar. Simple but delicious!");

        desserts.appendChild(dessertsH2);
        desserts.appendChild(souffle);
        desserts.appendChild(milleFeulle);
        desserts.appendChild(bundtCake);
        
        return desserts;
    }

    const createMenuMain = () => {
        const main = MainElements.createMain();

        const startersSection = createStartersSection();
        const entreesSection = createEntreesSection();
        const dessertsSection = createDessertsSection();

        main.appendChild(startersSection);
        main.appendChild(entreesSection);
        main.appendChild(dessertsSection);
        
        return main;
    }

    return { createMenuHeader, createMenuMain };

})();


const Menu = (() => {
    const content = document.querySelector("#content");

    const menuHeader = MenuElements.createMenuHeader();
    const menuMain = MenuElements.createMenuMain();

    content.appendChild(menuHeader);
    content.appendChild(menuMain);

})();

export default Menu;
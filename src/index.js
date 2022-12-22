import HomePage from "./page-load";
import MenuPage from "./menu";
import ContactPage from "./contact";
import "./style.css";

const RenderPage = (() => {
    const content = document.querySelector("#content");

    HomePage.renderHome();
   
    const clearContent = () => {
        const content = document.querySelector("#content");
        
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
    };

    const handler = (tab) => {
        switch (tab) {
            case "home-tab":
                clearContent();
                HomePage.renderHome();
                break;
            case "menu-tab":
                clearContent();
                MenuPage.renderMenu();
                break;
            case "contact-tab":
                clearContent();
                ContactPage.renderContact();
                break;
            default:
                break;
        }
    };

    content.addEventListener("click", function(e) {
        handler(e.target.id);
    })

})();

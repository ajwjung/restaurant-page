import HomePage from "./page-load";
import MenuPage from "./menu";
import ContactPage from "./contact";
import "./style.css";

const RenderPage = (() => {
    HomePage.renderHome();
    
    const clearContent = () => {
        const content = document.querySelector("#content");
        
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
    };

    const handler = (tab) => {
        if (tab == "home-tab") {
            HomePage.renderHome();
        } else if (tab == "menu-tab") {
            MenuPage.renderMenu();
        } else if (tab == "contact-tab") {
            ContactPage.renderContact();
        }
    };

    const btns = document.body.querySelectorAll("button");
    btns.forEach(btn => btn.addEventListener("click", function(e) {
        clearContent();
        handler(btn.id);
    }));

})();

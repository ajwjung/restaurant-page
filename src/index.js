import HomePage from "./page-load";
import MenuPage from "./menu";
import ContactPage from "./contact";
import "./style.css";

const RenderPage = (() => {
    HomePage.renderHome();

    const clearContent = () => {
        const content = document.querySelector("#content");
        console.log(content.childNodes);
        
        while (content.firstChild) {
            console.log(`Removing ${content.lastChild.nodeName}...`);
            content.removeChild(content.lastChild);
            console.log(`Successfully removed!`)
        }
    }

    const homeBtn = document.body.querySelector("#home-tab");
    homeBtn.addEventListener("click", function() {
        console.log("This is the home button!")
        clearContent();
        console.log("Cleared the page!");
        HomePage.renderHome();
        console.log("Home page rendered!");
    });

    const menuBtn = document.body.querySelector("#menu-tab");
    menuBtn.addEventListener("click", function() {
        console.log("This is the menu button!")
        clearContent();
        MenuPage.renderMenu();
    });

    const contactBtn = document.body.querySelector("#contact-tab");
    contactBtn.addEventListener("click", function() {
        console.log("This is the contact button!")
        clearContent();
        ContactPage.renderContact();
    });

})();

import Page from "./page-load";
import Menu from "./menu";
import Contact from "./contact";
import "./style.css";

const CreatePage = (() => {
    Page();
    Menu();
    Contact();
})();

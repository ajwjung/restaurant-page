import Page from "./page-load";
import { MainElements, OtherElements } from "./elements-builder";

const ContactElements = (() => {
    const createContactHeader = () => {
        const header = MainElements.createHeader();
        
        const contactH1 = OtherElements.createH1("Contact Us");
        const headerLine = OtherElements.createLine("header-line");

        header.appendChild(contactH1);
        header.appendChild(headerLine);
        
        return header;
    }

    const createContactMain = () => {
        const main = MainElements.createMain();
        const mainContainer = OtherElements.createDiv("contact-info");
    
        const contactPara = OtherElements.createPara("We look forward to serving you. If you have any questions or would like to book a reservation, please reach out to us.")
        const contactPhone = OtherElements.createPara("111-111-1111");
        const contactEmail = OtherElements.createPara("info@gusteaus.com");

        mainContainer.appendChild(contactPara);
        mainContainer.appendChild(contactPhone);
        mainContainer.appendChild(contactEmail);
        main.append(mainContainer);
    
        return main;
    }

    return { createContactHeader, createContactMain };

})();

const Contact = (() => {
    const content = document.querySelector("#content");

    const contactHeader = ContactElements.createContactHeader();
    const contactMain = ContactElements.createContactMain();
    
    content.appendChild(contactHeader);
    content.appendChild(contactMain);
})();

export default Contact;
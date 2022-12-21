import { MainElements, OtherElements, Tabs } from "./elements-builder";

const ContactElements = (() => {
    const createContactHeader = () => {
        const header = MainElements.createHeader();
        
        const contactNavBar = Tabs.createTabSection();
        const headerLine = OtherElements.createLine("header-line");
        const contactH1 = OtherElements.createH1("Contact Us");

        header.appendChild(contactNavBar);
        header.appendChild(headerLine);
        header.appendChild(contactH1);
        
        return header;
    }

    const createContactMain = () => {
        const main = MainElements.createMain();
        const mainContainer = OtherElements.createDiv("contact-info");
    
        const contactPara1 = OtherElements.createH3("We look forward to serving you.");
        const contactPara2 = OtherElements.createPara("If you have any questions or would like to book a reservation, please reach out to us.")
        const contactPhone = OtherElements.createPara("111-111-1111");
        const contactEmail = OtherElements.createPara("info@gusteaus.com");

        mainContainer.appendChild(contactPara1);
        mainContainer.appendChild(contactPara2);
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
    const contactFooter = MainElements.createFooter();
    
    content.appendChild(contactHeader);
    content.appendChild(contactMain);
    content.appendChild(contactFooter);
})();

export default Contact;
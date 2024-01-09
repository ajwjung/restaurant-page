# Restaurant Page

* <font size="4">[Live Demo](https://ajwjung.github.io/restaurant-page/)</font>

## Objective

To practice DOM manipulation by dynamically rendering a simple restaurant homepage. Full project details can be found at [The Odin Project's page](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page).

### Specifications

**Requirements**

1. The project should utilize webpack

2. The homepage should include an image, headline, and some copy about how wonderful the restaurant is

3. DOM elements should be created using JavaScript, but the `content` div can be kept in HTML

## Built With

* HTML5
* CSS3
* Vanilla JS
* [Webpack](https://webpack.js.org/)

## Navigating the Page

This fake restaurant page was designed to be used with tab browsing. My page features three tabs: Home, Menu, and Contact. You can click on each tab to navigate between each of those pages to view their respective content.

## Image Credits
My restaurant page's theme is Disney's 2007 film, Ratatouille. I am not affiliated with Disney in any way, all characters belong to them.

Below are the links where I found each image:

* Anton Ego's picture from his [Disney Fandom wiki page][1]
* Alfredo Linguini's picture  from his [Hero Fandom wiki page][2]
* Remy's picture from his [Hero Fandom wiki page][3]

[1]: https://disney.fandom.com/fr/wiki/Anton_Ego
[2]: https://hero.fandom.com/wiki/Alfredo_Linguini
[3]: https://hero.fandom.com/wiki/Remy_(Ratatouille)

The github logo was free to use from Pictogrammers' [Material Design Icons](https://pictogrammers.com/library/mdi/).

## Author's Notes

I still need to practice using webpack more, but this was a great introduction to using webpack and modules. I mainly found it challenging to make the tabs work because most of the page contents are created dynamically. This means the event listeners won't work the same way they do for normal elements created in HTML. I found that adding the event listener to the existing `content` div made all tabs functional.
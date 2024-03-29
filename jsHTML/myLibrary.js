/**
 * Use template literals to output HTML
 */
import Books from "./Books.js";

const bookOne = new Books(
    "Francis Fukuyama",
    "The Origins of Political Order: From Prehuman Times to the French Revolution"
);

const content = `

      <ul>
        <li>Author: ${bookOne.author}</li>
        <li>Title: ${bookOne.title}</li>
      </ul>

`;

const main = document.querySelector(".maincontent");
const newArticle = document.createElement("article");
newArticle.classList.add("book");
newArticle.setAttribute("id", "book");
newArticle.innerHTML = content;

main.append(newArticle);


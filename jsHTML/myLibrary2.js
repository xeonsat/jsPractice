/**
 * Use template literals to output HTML
 */
import Books from "./Books2.js";

const bookOne = new Books(
    "Francis Fukuyama",
    "The Origins of Political Order: From Prehuman Times to the French Revolution"
);

const content = `
  <main>
    <article>
      <ul>
        <li>Author: ${bookOne.author}</li>
        <li>Title: ${bookOne.title}</li>
      </ul>
    </article>
  </main>
`;

document.body.innerHTML = content;


/// <reference types="cypress" />

const sourceUrl = "https://freebasstranscriptions.com/transcriptions/";

describe(sourceUrl, () => {
  before(() => {
    cy.visit(sourceUrl);
  });

  beforeEach(() => {});

  it("save links to transcriptions", () => {
    const dataFile = "data/freebasstranscriptions.csv";
    cy.writeFile(
      dataFile,
      `{\n"source": "${sourceUrl}",\n"transcriptions": [\n`
    );

    cy.get("a").each(($el: HTMLAnchorElement, i) => {
      const el = $el[0];
      if (
        el.target === "_blank" &&
        el.rel !== "noopener nofollow" &&
        el.innerText != "HERE"
      ) {
        const [artist, title] = el.innerText
          ? el.innerText.split(" – ")
          : [el.innerText, "unknown"];
        cy.writeFile(
          dataFile,
          "\t" +
            JSON.stringify({
              id: i,
              "artist:": artist,
              "title:": title,
              "url:": el.href,
            }) +
            ",\n",
          { flag: "a" }
        );
      }
    });
    cy.writeFile(dataFile, "]}\n", { flag: "a" });
  });
  //cy.contains()
});

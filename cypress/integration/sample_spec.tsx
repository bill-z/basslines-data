/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("sample spec", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit(
      "https://www.google.com/search?q=bass+transcriptions&oq=bass+transcriptions&aqs=chrome.0.69i59j0i512l3j69i60l3j69i65.9935j0j7&sourceid=chrome&ie=UTF-8"
    );
  });

  it("searches Google for bass transcriptions.", () => {});
});

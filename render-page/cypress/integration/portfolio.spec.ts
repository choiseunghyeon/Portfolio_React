/// <reference types="cypress" />

// Mobile 따로 진행
describe("first", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/Portfolio_React/");
  });

  it("Change Dark Mode into Light Mode", () => {
    // Dark Mode is Default
    cy.getBySel("theme").contains(/LIGHT MODE/i);
    cy.get("body").should("have.css", "background-color", "rgb(18, 18, 18)");

    // Change to Light Mode
    cy.getBySel("theme")
      .click()
      .contains(/DARK MODE/i);
    cy.get("body").should("have.css", "background-color", "rgb(255, 255, 255)");
  });

  it("Default Activate Tab is first tab", () => {
    cy.getBySel("tab").first().should("have.attr", "aria-selected", "true");
  });

  it("INFO PROJECT SKILLS render", () => {
    // INFO
    cy.getBySel("tab").first().click();

    cy.getBySel("greeting").should("have.length", 1);

    cy.getBySel("timelineItem").should("have.length", 9);
    cy.getBySel("timelineItem").first().contains("백석대학교");

    // PROJECT
    cy.getBySel("tab").eq(1).click();

    cy.getBySel("projectCardItem").should("have.length", 4);
    cy.getBySel("projectCardItem").first().contains("Smart Mirror");
    cy.getBySel("projectCardItemExpand").first().click();
    cy.getBySel("projectCardItem").first().contains("적용 기술:");

    // SKILLS
    cy.getBySel("tab").eq(2).click();

    cy.getBySel("skill").should("have.length", 13);
    cy.getBySel("skill").first().contains("Cypress");
  });
});

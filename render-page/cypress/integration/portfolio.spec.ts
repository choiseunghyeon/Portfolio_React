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

  it("GIT REPOSITORY", () => {
    // tab 이동 변경해야 함 순서 상관없이 찾아야함, 이름도 변경될 수 있으므로 id 부여 필요할듯
    cy.intercept("https://api.github.com/repos/choiseunghyeon/vscode-multi-project/contents/", { fixture: "git/MultiProject/gitRepoContent.json" });
    cy.intercept("https://api.github.com/repos/choiseunghyeon/vscode-multi-project/contents/src", { fixture: "git/MultiProject/gitRepoContentSrc.json" });
    cy.intercept("https://api.github.com/repos/choiseunghyeon/vscode-multi-project/contents/ARTICLE.md", { fixture: "git/MultiProject/gitRepoContentFile.json" });

    cy.intercept("https://api.github.com/repos/choiseunghyeon/TIL/contents/", { fixture: "git/TIL/gitRepoContent.json" });
    cy.intercept("https://api.github.com/repos/choiseunghyeon/TIL/contents/Redux", { fixture: "git/TIL/gitRepoContentRedux.json" });
    cy.intercept("https://api.github.com/repos/choiseunghyeon/TIL/contents/Redux/reselect.md", { fixture: "git/TIL/gitRepoContentFile.json" });

    cy.getBySel("tab").last().click();

    // vscode-multi-project Repository 탐색 테스트
    cy.getBySel("gitRepository").contains("vscode-multi-project");
    cy.getBySel("gitPartialContentPath").should("have.length", 1).contains("ROOT");

    cy.getBySel("gitContentPath").within(items => {
      expect(items).to.have.length(3);
      expect(items[0]).to.have.contain("ARTICLE.md");
      expect(items[1]).to.have.contain("README.md");
      expect(items[2]).to.have.contain("src");
    });

    cy.getBySel("gitContentPath").contains("src").click();
    cy.getBySel("gitPartialContentPath").within(items => {
      expect(items).to.have.length(2);
      expect(items[0]).to.have.contain("ROOT");
      expect(items[1]).to.have.contain("src");
    });
    cy.getBySel("gitContentPath").within(items => {
      expect(items).to.have.length(2);
      expect(items[0]).to.have.contain("explorer");
      expect(items[1]).to.have.contain("extension.ts");
    });

    cy.getBySel("gitPartialContentPath").first().click();
    cy.getBySel("gitContentPath").within(items => {
      expect(items).to.have.length(3);
      expect(items[0]).to.have.contain("ARTICLE.md");
      expect(items[1]).to.have.contain("README.md");
      expect(items[2]).to.have.contain("src");
    });

    cy.getBySel("gitContentPath").contains("ARTICLE.md").click();
    cy.getBySel("markdown").contains("Multi Project Extension 제작 회고");

    // TIL Repository 변경 후 탐색 테스트
    cy.getBySel("gitRepository").click();
    cy.getBySel("gitRepositoryMenu").contains("TIL").click();

    cy.getBySel("gitContentPath").within(items => {
      expect(items).to.have.length(2);
      expect(items[0]).to.have.contain("Daily");
      expect(items[1]).to.have.contain("Redux");
    });
    cy.getBySel("gitContentPath").contains("Redux").click();
    cy.getBySel("gitContentPath").within(items => {
      expect(items).to.have.length(1);
      expect(items[0]).to.have.contain("reselect.md");
    });
    cy.getBySel("gitContentPath").contains("reselect.md").click();
    cy.getBySel("markdown").contains("Reselect");

    // 이전 vscode-multi-project Repository 정보 기억하고 있는지 테스트
    cy.getBySel("gitRepository").click();
    cy.getBySel("gitRepositoryMenu").contains("vscode-multi-project").click();

    cy.getBySel("gitContentPath").within(items => {
      expect(items).to.have.length(3);
      expect(items[0]).to.have.contain("ARTICLE.md");
      expect(items[1]).to.have.contain("README.md");
      expect(items[2]).to.have.contain("src");
    });

    cy.getBySel("gitPartialContentPath").within(items => {
      expect(items).to.have.length(2);
      expect(items[0]).to.have.contain("ROOT");
      expect(items[1]).to.have.contain("ARTICLE.md");
    });
    cy.getBySel("markdown").contains("Multi Project Extension 제작 회고");
  });
});

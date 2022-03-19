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

  it.only("GIT REPOSITORY", () => {
    // tab 이동 변경해야 함 순서 상관없이 찾아야함, 이름도 변경될 수 있으므로 id 부여 필요할듯
    cy.intercept("https://api.github.com/repos/choiseunghyeon/vscode-multi-project/contents/", { fixture: "gitRepoContent.json" });
    cy.intercept("https://api.github.com/repos/choiseunghyeon/vscode-multi-project/contents/src", { fixture: "gitRepoContentSrc.json" });
    cy.intercept("https://api.github.com/repos/choiseunghyeon/vscode-multi-project/contents/ARTICLE.md", { fixture: "gitRepoContentFile.json" });
    cy.getBySel("tab").last().click();

    // api stubbing 해서 데이터 가져오기
    // 처음 목록 가져오기
    // 목록 클릭하면 다음 목록
    // 이전 누르면 이전에 가져온 목록 가져오기
    // file 누르면 렌더링 제대로 되는지 확인
    cy.getBySel("gitContentPath").within(items => {
      expect(items).to.have.length(3);
      expect(items[0]).to.have.contain("ARTICLE.md");
      expect(items[1]).to.have.contain("README.md");
      expect(items[2]).to.have.contain("src");
    });

    cy.getBySel("gitContentPath").contains("src").click();
    cy.getBySel("gitContentPath").within(items => {
      expect(items).to.have.length(2);
      expect(items[0]).to.have.contain("explorer");
      expect(items[1]).to.have.contain("extension.ts");
    });

    cy.getBySel("gitPreviousContentPath").contains("이전").click();
    cy.getBySel("gitContentPath").within(items => {
      expect(items).to.have.length(3);
      expect(items[0]).to.have.contain("ARTICLE.md");
      expect(items[1]).to.have.contain("README.md");
      expect(items[2]).to.have.contain("src");
    });

    cy.getBySel("gitContentPath").contains("ARTICLE.md").click();
    cy.getBySel("markdown").contains("Multi Project Extension 제작 회고");
  });
});

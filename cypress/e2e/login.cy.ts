/// <reference types="cypress" />

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("test login form", () => {
    cy.contains(/morent/i);

    cy.contains("h4", /welcome back! log in to your account/i);

    cy.get('[data-test="login-form"]')
      .find('[data-test="login-btn"]')
      .as("login-btn");

    // testing for form errors validation
    cy.get("@login-btn").click();

    // getting the form row
    cy.get('[data-test="form-row"]').find("span").as("input-form-row");

    // it should render error messages
    cy.get("@input-form-row")
      .first()
      .contains(/please enter your email/i)
      .should("exist");

    cy.get("@input-form-row")
      .last()
      .contains(/please enter your password/i)
      .should("exist");

    // testing wrong input validation
    // 1. getting inputs
    cy.get("[data-test='form-row']").find("input").first().as("email-input");
    cy.get("[data-test='form-row']").find("input").last().as("password-input");

    // 2. typing wrong input
    cy.get("@email-input").type("john@doe.c");
    cy.get("@password-input").type("1234567");

    // 3. clicking login
    cy.get("@login-btn").click();

    // 4. checking error messages
    cy.get("@input-form-row")
      .first()
      .contains(/incorrect email format. please enter a valid email address/i)
      .should("exist");

    cy.get("@input-form-row")
      .last()
      .contains(/Password must be at least 8 characters/i)
      .should("exist");

    // testing the correct format input
    // 1. resetting the inputs
    cy.get("@email-input").clear();
    cy.get("@password-input").clear();

    // 2. typing the correct credentials
    cy.get("@email-input").type("john@doe.com");
    cy.get("@password-input").type("12345678");

    // 3. mocking the post request with intercepts
    cy.intercept("POST", "https://qlnatylmjmkoqvgtyzae.supabase.co", (req) => {
      req.reply({
        statusCode: 200,
        fixture: "user.json",
      });
    });

    // 4. clicking the button
    cy.get("@login-btn").click();
  });
});

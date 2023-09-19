/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

namespace Cypress {
  interface Chainable {
    signIn(
      redirectPath?: string,
      credentials?: { email: string; password: string }
    ): void;
  }
}

function getClient() {
  const url = Cypress.env(`VITE_BASE_URL`);
  const key = Cypress.env(`VITE_API_KEY`);

  invariant(url, `Missing SUPABASE_URL env variable`);
  invariant(key, `Missing SUPABASE_ANON_KEY env variable`);

  return createBrowserClient(url, key);
}

function signInProgrammatically(credentials: {
  email: string;
  password: string;
}) {
  const { email, password } = credentials;

  return getClient()
    .auth.signInWithPassword({
      email,
      password,
    })
    .then((response) => {
      if (response.error) {
        return Promise.reject(response.error.message);
      }
    })
    .catch((e) => {
      console.error(e);

      return Promise.reject(e);
    });
}

Cypress.Commands.add(
  "signIn",
  (
    redirectPath = "/",
    credentials = {
      email: Cypress.env(`EMAIL`) as string,
      password: Cypress.env(`PASSWORD`) as string,
    }
  ) => {
    cy.session([credentials.email, credentials.password], () => {
      cy.log(`Signing in with ${credentials.email}`);
      signInProgrammatically(credentials);
    });

    cy.visit(redirectPath);
  }
);

Cypress.Commands.add("getByTestId", (dataTestSelector) => {
  return cy.get(`[data-test]="${dataTestSelector}"`);
});

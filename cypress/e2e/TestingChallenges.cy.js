// Used TestingChallenges file name using PascalCase
describe("Testing Challenges Website", () => {
  it("Should Visit Website and Complete Multiple Challenges Using Fixture Data", () => {
    // Step 1: Visit the website
    cy.visit("http://testingchallenges.thetestingmap.org/");

    // Step 2: Load data from the fixture file
    cy.fixture("example.json").then((form_data) => {
      // snake_case for variable

      const valid_data = form_data.ValidData[0]; // snake_case for variable

      // Step 3: Fill in the form on the first challenge
      cy.get("#firstname").clear().type(valid_data.Name);
      cy.get(".button").click(); // Click the submit button

      // Step 4: Navigate to challenge #2
      cy.get(":nth-child(3) > a").click();

      // Step 5: Fill in the form on challenge #2
      cy.get(".inputbox").type(valid_data.Phone);
      cy.get(".button").click(); // Click the submit button

      // Step 6: Access the contact form
      cy.get(".contact").click();

      // Step 7: Fill in the contact form
      cy.get("#contact-name").type(valid_data.Name);
      cy.get("#contact-email").type(valid_data.Email);
      cy.get("#contact-message").type(valid_data.Message);
      cy.get(".contact-send").click(); // Click the send button
      cy.get(".modal-close").click(); // Close the message popup

      // Step 8: Navigate to challenge #7
      cy.get(":nth-child(7) > a").click();

      // Step 9: Handle challenge #7
      handle_challenge_7(); // snake_case for function name
    });
  });

  // handle_challenge function name is written in snake case
  function handle_challenge_7() {
    let fetchingGivenWord1, //camel case used for variables
      fetching_given_word_2, // snake_case used for variables
      fetching_given_word_3, // snake_case used for variables
      fetching_given_word_4; // snake_case used for variables

    // Naming Convention: Clear comments and variable names
    // Set the result of cy.get and type it into a textarea with a space
    cy.get(".spec > ul > :nth-child(1)").then(($element) => {
      fetchingGivenWord1 = $element.text(); // snake_case for variable
      cy.get("textarea").type(fetchingGivenWord1 + " ");
    });

    cy.get(".spec > ul > :nth-child(2)").then(($element) => {
      fetching_given_word_2 = $element.text(); // snake_case for variable
      cy.get("textarea").type(fetching_given_word_2 + " ");
    });

    cy.get(".spec > ul > :nth-child(3)").then(($element) => {
      fetching_given_word_3 = $element.text(); // snake_case for variable
      cy.get("textarea").type(fetching_given_word_3 + " ");
    });

    cy.get(".spec > ul > :nth-child(4)").then(($element) => {
      fetching_given_word_4 = $element.text(); // snake_case for variable
      cy.get("textarea").type(fetching_given_word_4);
      cy.get(".button").click(); // Click the submit button
    });
  }
});

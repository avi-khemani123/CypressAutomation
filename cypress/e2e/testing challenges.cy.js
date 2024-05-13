describe("Testing Challenges Website", () => {
  it("should visit the website and write first form data to fixture", () => {
    // Visit the website
    cy.visit("http://testingchallenges.thetestingmap.org/");

    // Load data from the fixture file
    cy.fixture("example.json").then((formData) => {
      // Retrieve the first data object from the fixture
      const vdata = formData.ValidData[0];

      // Type the email from the fixture into the first name field (assuming "Email" is a misnomer for "FirstName")
      cy.get("#firstname").clear().type(vdata.Name);
      cy.get(".button").click(); //click the button

      cy.get(":nth-child(3) > a").click(); //logging to challenge#2

      cy.get(".inputbox").type(vdata.Phone); //clicking the challenge#2
      cy.get(".button").click();

      cy.get(".contact").click(); //accessing the request link

      cy.get("#contact-name").type(vdata.Name); //fetching the name from example.json file
      cy.get("#contact-email").type(vdata.Email); //fetching the email from example.json file

      cy.get("#contact-message").type(vdata.Message); //fetching the message from example.json file

      cy.get(".contact-send").click(); // clicking the send button
      cy.get(".modal-close").click(); // closing the message popup

      cy.get(":nth-child(7) > a").click(); //clicking the challenge#7

      cy.get(".spec > ul > :nth-child(1)");
    });

    // describe("write the challenge#7 scenario", () => {
    it("should set the result of cy.get to 'hi' and type it into a textarea with a space", () => {
      let data2, data4, data5;

      // Use cy.get().then() to work with the resolved value
      cy.get(".spec > ul > :nth-child(1)").then(($element) => {
        // Assign the text content of the first element to data2
        data2 = $element.text();

        // Add a space after data2
        const dataWithSpace = data2 + " ";

        // Use dataWithSpace to type into a textarea
        cy.get("textarea").type(dataWithSpace);
      });

      // Retrieve text from the second element
      cy.get(".spec > ul > :nth-child(2)").then(($element) => {
        // Assign the text content of the second element to data3
        let data3 = $element.text();
        // Type data3 into the textarea
        cy.get("textarea").type(data3 + " ");

        // });
        cy.get(".spec > ul > :nth-child(3)").then(($element) => {
          // Assign th e text content of the 3RD element to data4
          data4 = $element.text();
          // Type data3 into the textarea
          cy.get("textarea").type(data4 + " ");
        });
        cy.get(".spec > ul > :nth-child(4)").then(($element) => {
          // Assign th e text content of the 4TH element to data5
          data5 = $element.text();
          // Type data3 into the textarea
          cy.get("textarea").type(data5);
          //Click the submit button
          cy.get(".button").click();
        });
      });
    });
  });
});
// });

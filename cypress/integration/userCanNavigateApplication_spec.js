describe('user visits the application', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("displays a header", () => {
        cy.get("#header").should("contain.text", "Employee management");
      });

      it("is expected to list 6 times", () => {
        cy.get("#employee-list").children().should("have.length", 6);
      });

      it("is expected to return Thomas as first employee in list ", () => {
        cy.get("#employee-list")
          .children()
          .first()
          .should("contain.text", "George Bluth");
      });


    
});
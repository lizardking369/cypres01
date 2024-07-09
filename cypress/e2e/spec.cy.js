
describe('tasks page', () => {
  it('should render the main image', () => {
    cy.visit('http://localhost:5173/');
    cy.get("li").should("have.length",6);
  });
  it("should display the page title",()=>{
    cy.visit('http://localhost:5173/');
    cy.get("h1").contains("My Cypress Course Tasks")
    cy.get("h1").should("have.length",2)
   
  })
});
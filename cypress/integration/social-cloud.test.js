describe('Social Cloud', function() {
  it('.should() - load the deployed cypress site at https://social-cloud-trends.firebaseapp.com/', function() {
    cy.visit('http://localhost:3000/');
    cy.get('.sc-bxivhb').find('h1').should('contain','Social Cloud');
  });
  it('Social Cloud have a cloud logo!!!', function() {
    cy
      .get('.sc-bxivhb')
      .find('img')
      .should('have.attr', 'src','/static/media/social-cloud.aebefe9a.png');
  });
  it('Social Cloud .include() - loads with 50 tweets', function() {
    cy
      .get('.tag-cloud')
      .should('have','div');
  });
  it('Social Cloud header .should() have a "change location" toggle buttong for users to checnge the locations', function() {
    cy
      .get('#search-button')
  });
});
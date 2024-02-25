it('titles are correct', () => {
    const page = cy.visit('/');
  
    page.get('title').should('have.text', 'Astro Quickstart')
    page.get('h1').should('have.text', 'Demo CI/CD with GitHub Actions');
  });
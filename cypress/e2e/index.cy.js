it('titles are correct', () => {
    const page = cy.visit('http://localhost:3000');
  
    page.get('title').should('have.text', 'Astro Quickstart')
    page.get('h1').should('have.text', 'Demo CI/CD with GitHub Actions');
  });
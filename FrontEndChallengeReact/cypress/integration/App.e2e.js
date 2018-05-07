

describe('App E2E', () => {
    it('should render the app', () => {
        cy.visit("/");

        cy.get('hr')
            .should('have.class', 'separator');

    });

    it('should go to details page', () => {
        cy.get('a').should('have.attr', 'href').and('include', '1').then((href) => {
            cy.visit("/" + href)
        });
    });


    it('should go to list page', () => {
        cy.get('a').should('have.attr', 'href').and('include', 'phones').then((href) => {
            cy.visit("/" + href)
        });
    });

});
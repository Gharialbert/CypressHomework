describe('Automation Practice Form', () => {
    it('should fill out the form and submit it', () => {

        cy.visit('https://demoqa.com/automation-practice-form');
        cy.url().should('include', 'demoqa');
        cy.get('#firstName').type('Sara');
        cy.get('#lastName').type('Doe');
        cy.get('#userEmail').type('sara.doe@example.com');
        cy.get('[for="gender-radio-2"]').click();
        cy.get('#userNumber').type('1234567890');
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__month-select').select('October');
        cy.get('.react-datepicker__year-select').select('1990');
        cy.get('.react-datepicker__day--020').click();
        cy.get('#subjectsInput').type('Math{enter}');
        cy.get('#subjectsInput').type('English{enter}');
        cy.get('[for="hobbies-checkbox-1"]').click();
        cy.get('[for="hobbies-checkbox-2"]').click();
        cy.get('[for="hobbies-checkbox-3"]').click();
        cy.get('#currentAddress').type('123 Main St, City, Country');
        cy.get('#state').click();
        cy.get('#state').type('NCR{enter}');
        cy.get('#city').click();
        cy.get('#city').type('Delhi{enter}');
        cy.get('#submit').click();
        cy.get('.modal-title').should('contain', 'Thanks for submitting the form');
        cy.get('#closeLargeModal').click({force: true});
    });
});

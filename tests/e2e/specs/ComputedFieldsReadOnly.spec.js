describe('Computed fields', () => {

  it('The user should not be able to change a FormInput assigned to a computed property', () => {
    cy.visit('/');
    // Add an input field
    cy.get('[data-cy=controls-FormInput]').drag('[data-cy=screen-drop-zone]', 'bottom'); 

    cy.get('[data-cy=screen-element-container]').eq(0).click();

    cy.get('[data-cy="topbar-calcs"]').click();
    cy.get('[data-cy="calcs-add-property"]').click();
    cy.get('[data-cy="calcs-property-name"]').clear().type('form_input_1');
    cy.get('[data-cy="calcs-property-description"]').clear().type('form_input_1 is always 1');
    cy.get('[data-cy="calcs-switch-javascript"]').click();
    cy.setVueComponentValue('[data-cy="calcs-property-javascript"]', 'return "1";');
    cy.get('[data-cy="calcs-button-save"]').click();
    cy.get('[data-cy="calcs-modal"] .close').click();
    cy.get('[data-cy=mode-preview]').click();

    // Assertion: Check the form_input_1 is read only
    cy.get('[data-cy=preview-content] [name=form_input_1]').should('have.attr', 'readonly');
    // Assertion: Check the form_input_1 is always 1
    cy.assertPreviewData({
      form_input_1: '1',
    });

    // Check Type Integer
    cy.get('[data-cy=mode-editor]').click();
    cy.get('[data-cy=screen-element-container]').click();
    cy.setMultiselect('[data-cy=inspector-dataFormat]', 'Integer');
    cy.get('[data-cy=mode-preview]').click();
    // Assertion: Check the form_input_1 is read only
    cy.get('[data-cy=preview-content] [name=form_input_1]').should('have.attr', 'readonly');
    // Assertion: Check the form_input_1 is always 1
    cy.assertPreviewData({
      form_input_1: '1',
    });

    // Check Type Currency
    cy.get('[data-cy=mode-editor]').click();
    cy.get('[data-cy=screen-element-container]').click();
    cy.setMultiselect('[data-cy=inspector-dataFormat]', 'Currency');
    cy.get('[data-cy=mode-preview]').click();
    // Assertion: Check the form_input_1 is read only
    cy.get('[data-cy=preview-content] [name=form_input_1]').should('have.attr', 'readonly');
    // Assertion: Check the form_input_1 is always 1
    cy.assertPreviewData({
      form_input_1: '1',
    });

    // Check Type Percentage
    cy.get('[data-cy=mode-editor]').click();
    cy.get('[data-cy=screen-element-container]').click();
    cy.setMultiselect('[data-cy=inspector-dataFormat]', 'Percentage');
    cy.get('[data-cy=mode-preview]').click();
    // Assertion: Check the form_input_1 is read only
    cy.get('[data-cy=preview-content] [name=form_input_1]').should('have.attr', 'readonly');
    // Assertion: Check the form_input_1 is always 1
    cy.assertPreviewData({
      form_input_1: '1',
    });

    // Check Type Decimal
    cy.get('[data-cy=mode-editor]').click();
    cy.get('[data-cy=screen-element-container]').click();
    cy.setMultiselect('[data-cy=inspector-dataFormat]', 'Decimal');
    cy.get('[data-cy=mode-preview]').click();
    // Assertion: Check the form_input_1 is read only
    cy.get('[data-cy=preview-content] [name=form_input_1]').should('have.attr', 'readonly');
    // Assertion: Check the form_input_1 is always 1
    cy.assertPreviewData({
      form_input_1: '1',
    });

    // Check Type Datetime
    cy.get('[data-cy=mode-editor]').click();
    cy.get('[data-cy=screen-element-container]').click();
    cy.setMultiselect('[data-cy=inspector-dataFormat]', 'Datetime');
    cy.get('[data-cy=mode-preview]').click();
    // Assertion: Check the form_input_1 is read only
    cy.get('[data-cy=preview-content] [name=form_input_1]').should('have.attr', 'readonly');
    // Assertion: Check the form_input_1 is always 1
    cy.assertPreviewData({
      form_input_1: '1',
    });

    // Check Type Date
    cy.get('[data-cy=mode-editor]').click();
    cy.get('[data-cy=screen-element-container]').click();
    cy.setMultiselect('[data-cy=inspector-dataFormat]', 'Date');
    cy.get('[data-cy=mode-preview]').click();
    // Assertion: Check the form_input_1 is read only
    cy.get('[data-cy=preview-content] [name=form_input_1]').should('have.attr', 'readonly');
    // Assertion: Check the form_input_1 is always 1
    cy.assertPreviewData({
      form_input_1: '1',
    });

    // Check Type Password
    cy.get('[data-cy=mode-editor]').click();
    cy.get('[data-cy=screen-element-container]').click();
    cy.setMultiselect('[data-cy=inspector-dataFormat]', 'Password');
    cy.get('[data-cy=mode-preview]').click();
    // Assertion: Check the form_input_1 is read only
    cy.get('[data-cy=preview-content] [name=form_input_1]').should('have.attr', 'readonly');
    // Assertion: Check the form_input_1 is always 1
    cy.assertPreviewData({
      form_input_1: '1',
    });

  });
});

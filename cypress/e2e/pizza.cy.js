describe('Pizza Order Form', () => {
  it('inputa bir metin giren test', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="home-button"]') 
      .contains('ACIKTIM') 
      .click();
    cy.get('[data-cy="isim-input"]').type('abc');
    
    cy.get('[data-cy="isim-input"]').should('have.value', 'abc');
  });

  it(' birden fazla malzeme seçilebilen bir test', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="home-button"]') .contains('ACIKTIM') .click();

    cy.get('[data-cy="cb"]').eq(0).check(); 
    cy.get('[data-cy="cb"]').eq(1).check(); 
    cy.get('[data-cy="cb"]').eq(2).check(); 
    cy.get('[data-cy="cb"]').eq(3).check(); 
    cy.get('[data-cy="cb"]:checked').should('have.length', 4);
  
  });

  it('formu gönderen bir test', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="home-button"]') .contains('ACIKTIM') .click();
    
   
    cy.get('[data-cy="isim-input"]').type('abc'); 
    cy.get('[data-cy="cb"]').eq(0).check(); 
    cy.get('[data-cy="cb"]').eq(1).check(); 
    cy.get('[data-cy="cb"]').eq(2).check(); 
    cy.get('[data-cy="cb"]').eq(3).check(); 
    cy.get('[data-cy="boyut"]').check('Orta'); 
    cy.get('[data-cy="kalinlik"]').select('İnce'); 

    cy.get('[data-cy="siparis-btn"]').click();
    cy.url().should('include', '/success');
  });

  it('doğrulama kontrolu hatalı giris', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="home-button"]') .contains('ACIKTIM') .click();

    cy.get('[data-cy="isim-input"]').type('ab'); 
    
    cy.get('[data-cy="siparis-btn"]').click();
    

    cy.get('[data-cy="err-ad"]').should('contain', 'En az 3 karakter giriniz.');
  });
});
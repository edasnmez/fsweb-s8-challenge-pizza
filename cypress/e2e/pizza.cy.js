describe('Pizza Order Form', () => {
  it.skip('inputa bir metin giren test', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="home-button"]') 
      .contains('ACIKTIM') 
      .click();
    cy.get('[data-cy="isim-input"]').type('abc');
    
    cy.get('[data-cy="isim-input"]').should('have.value', 'abc');
  });

  it.skip(' birden fazla malzeme seçilebilen bir test', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="home-button"]') .contains('ACIKTIM') .click();

    cy.get('[data-cy="cb"]').eq(0).check(); 
    cy.get('[data-cy="cb"]').eq(1).check(); 
    cy.get('[data-cy="cb"]').eq(2).check(); 
    cy.get('[data-cy="cb"]').eq(3).check(); 
    cy.get('[data-cy="cb"]:checked').should('have.length', 4);
  
  });

  it.skip('formu gönderen bir test', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="home-button"]') .contains('ACIKTIM') .click();
    
   
    cy.get('[data-cy="isim-input"]').type('abc'); 
    cy.get('[data-cy="cb"]').eq(0).check(); 
    cy.get('[data-cy="cb"]').eq(1).check(); 
    cy.get('[data-cy="cb"]').eq(2).check(); 
    cy.get('[data-cy="cb"]').eq(3).check(); 
    cy.get('[data-cy="boyut"]').check('M', { force: true });
    cy.get('[data-cy="kalinlik"]').select('İnce'); 

    cy.get('[data-cy="siparis-btn"]').click();
    cy.url().should('include', '/success');
  });

  it.skip('doğrulama kontrolu hatalı giris', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="home-button"]') .contains('ACIKTIM') .click();

    cy.get('[data-cy="isim-input"]').type('ab'); 
  
    cy.get('[data-cy="err-ad"]').contains(/En az 3 karakter giriniz./i);
  });
});


describe('iterasyon2', () => {
  it('anasayfa butonlar çalışıyor mu', () => {
    cy.visit('http://localhost:5173/'); 
    cy.get('[data-cy="nav-btn"]').click();
    cy.url().should('include', '/orderPizza');
  });
});

describe('iterasyon2-2', () => {
    it('Son sayfaya sipariş bilgileri gidiyor mu', () => {
      cy.visit('http://localhost:5173/'); 
      cy.get('[data-cy="home-button"]').should('contain.text', 'ACIKTIM').click();
    
      cy.get('[data-cy="isim-input"]').type('abc'); 
      cy.get('[data-cy="cb"]').eq(0).check(); 
      cy.get('[data-cy="cb"]').eq(1).check(); 
      cy.get('[data-cy="cb"]').eq(2).check(); 
      cy.get('[data-cy="cb"]').eq(3).check(); 
      cy.get('[data-cy="boyut"]').check('M', { force: true });
      cy.get('[data-cy="kalinlik"]').select('İnce'); 
    
      cy.get('[data-cy="siparis-btn"]').click();
      cy.url().should('include', '/success');
      cy.get('[data-cy="details-size"]').should('contain.text', 'M'); 
      cy.get('[data-cy="dough"]').should('contain.text', 'İnce'); 
    });

});


describe('iterasyon2-3', () => {
  it('Seçilen boyutun arka plaı #FDC913 olmalı', () => {
    cy.visit('http://localhost:5173/'); 
    cy.get('[data-cy="nav-btn"]').click();
    cy.get('[data-cy="boyut"]').check('S', { force: true });
    cy.get('.radio-circle.selected').should('have.css', 'background-color', 'rgb(253, 201, 19)');
    
  })
})







describe('T044 Visualisation Fonctionne', () => {
    it('s', () => {
      cy.visit('/')
      cy.get('.navbar-burger').click() // accede au burger  
      cy.get('.button > a').click() //accede au login (/connexion)
      cy.get('#email').type('admin@admin.com') // entre l identifiant admin 
      cy.get('#password').type('admin123') // entre le mot de passe admin
      cy.get('.control > .button').click() // click sur le bouton connexion
      cy.wait(2000) // attendre 2 seconde
      cy.get('.navbar-start > :nth-child(2) > a').click() // click sur utilisateur
      cy.get(':nth-child(1) > :nth-child(5) > .button').click() // click sur le bouton visualiser
    })
  })

  // Todo : T043
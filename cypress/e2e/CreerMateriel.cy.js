
describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/') 
    
  })
})


describe('T001 Nom trop grand', () => {
  it('s', () => {
    cy.visit('/')
    cy.get('.navbar-burger').click() // accede au burger  
    cy.get('.button > a').click() //accede au login (/connexion)
    cy.get('#email').type('admin@admin.com') // entre l identifiant admin 
    cy.get('#password').type('admin123') // entre le mot de passe admin
    cy.get('.control > .button').click() // click sur le bouton connexion
    cy.wait(2000) // attendre 2 seconde
    cy.get('.navbar-start > :nth-child(2) > a').click() // click sur materiel
    // remplir les champs du formulaire creation materiel
    cy.get(':nth-child(1) > .control > .input').type('nameCypress1fdsfdsfdsfdqfdsqfdsqfdsqfdsqfdsqfdsqfdsqfdqsfdqs') 
    cy.get(':nth-child(2) > .control > .input').type('typeCypress') 
    cy.get(':nth-child(3) > .control > .input').type('versionCypress') 
    cy.get(':nth-child(4) > .control > .input').type('AN123')
    cy.get(':nth-child(5) > .control > .input').type('https://e7.pngegg.com/pngimages/840/338/png-clipart-google-logo-gooole-text-logo.png')
    cy.get(':nth-child(7) > .control > .input').type('7894561230') 
    cy.get('.control > .button').click() // click sur le bouton create
    cy.contains("Le nom doit être entre 1 et 30 caractères.").should('be.visible'); // verifie que l erreur est affcihé 
    cy.wait(3000)  
    })
})

describe('T002 Nom manquant', () => {
  it('s', () => {
    cy.visit('/')
    cy.get('.navbar-burger').click() // accede au burger  
    cy.get('.button > a').click() //accede au login (/connexion)
    cy.get('#email').type('admin@admin.com') // entre l identifiant admin 
    cy.get('#password').type('admin123') // entre le mot de passe admin
    cy.get('.control > .button').click() // click sur le bouton connexion
    cy.wait(2000) // attendre 2 seconde
    cy.get('.navbar-start > :nth-child(2) > a').click() // click sur materiel
    // remplir les champs du formulaire creation materiel
    cy.get(':nth-child(1) > .control > .input').clear() // met le nom à vide 
    cy.get(':nth-child(2) > .control > .input').type('typeCypress') 
    cy.get(':nth-child(3) > .control > .input').type('versionCypress') 
    cy.get(':nth-child(4) > .control > .input').type('AN123')
    cy.get(':nth-child(5) > .control > .input').type('https://e7.pngegg.com/pngimages/840/338/png-clipart-google-logo-gooole-text-logo.png')
    cy.get(':nth-child(7) > .control > .input').type('7894561230') 
    cy.get('.control > .button').click() // click sur le bouton create
    cy.contains("Le nom doit être entre 1 et 30 caractères.").should('be.visible'); // verifie que l erreur est affcihé 
    cy.wait(3000)
  })
})


describe('T003 Version trop grande', () => {
  it('s', () => {
    cy.visit('/')
    cy.get('.navbar-burger').click() // accede au burger  
    cy.get('.button > a').click() //accede au login (/connexion)
    cy.get('#email').type('admin@admin.com') // entre l identifiant admin 
    cy.get('#password').type('admin123') // entre le mot de passe admin
    cy.get('.control > .button').click() // click sur le bouton connexion
    cy.wait(2000) // attendre 2 seconde
    cy.get('.navbar-start > :nth-child(2) > a').click() // click sur materiel
    // remplir les champs du formulaire creation materiel
    cy.get(':nth-child(1) > .control > .input').type('nameCypress1') 
    cy.get(':nth-child(2) > .control > .input').type('typeCypress') 
    cy.get(':nth-child(3) > .control > .input').type('V1fdsfdsfdsfdsqfdqsfdqfdqfdqsfdsqfdsqf') 
    cy.get(':nth-child(4) > .control > .input').type('AN123')
    cy.get(':nth-child(5) > .control > .input').type('https://e7.pngegg.com/pngimages/840/338/png-clipart-google-logo-gooole-text-logo.png')
    cy.get(':nth-child(7) > .control > .input').type('7894561230') 
    cy.get('.control > .button').click() // click sur le bouton create
    cy.contains("La version doit être entre 3 et 15 caractères.").should('be.visible'); // verifie que l erreur est affcihé 
    cy.wait(3000)
  })
})

describe('T004 Version trop petite', () => {
  it('s', () => {
    cy.visit('/')
    cy.get('.navbar-burger').click() // accede au burger  
    cy.get('.button > a').click() //accede au login (/connexion)
    cy.get('#email').type('admin@admin.com') // entre l identifiant admin 
    cy.get('#password').type('admin123') // entre le mot de passe admin
    cy.get('.control > .button').click() // click sur le bouton connexion
    cy.wait(2000) // attendre 2 seconde
    cy.get('.navbar-start > :nth-child(2) > a').click() // click sur materiel
    // remplir les champs du formulaire creation materiel
    cy.get(':nth-child(1) > .control > .input').type('nameCypress1') 
    cy.get(':nth-child(2) > .control > .input').type('typeCypress') 
    cy.get(':nth-child(3) > .control > .input').type('V1') 
    cy.get(':nth-child(4) > .control > .input').type('AN123')
    cy.get(':nth-child(5) > .control > .input').type('https://e7.pngegg.com/pngimages/840/338/png-clipart-google-logo-gooole-text-logo.png')
    cy.get(':nth-child(7) > .control > .input').type('7894561230') 
    cy.get('.control > .button').click() // click sur le bouton create
    cy.contains("La version doit être entre 3 et 15 caractères.").should('be.visible'); // verifie que l erreur est affcihé 
    cy.wait(3000)
  })
})

describe('T005 Version manquante', () => {
  it('s', () => {
    cy.visit('/')
    cy.get('.navbar-burger').click() // accede au burger  
    cy.get('.button > a').click() //accede au login (/connexion)
    cy.get('#email').type('admin@admin.com') // entre l identifiant admin 
    cy.get('#password').type('admin123') // entre le mot de passe admin
    cy.get('.control > .button').click() // click sur le bouton connexion
    cy.wait(2000) // attendre 2 seconde
    cy.get('.navbar-start > :nth-child(2) > a').click() // click sur materiel
    // remplir les champs du formulaire creation materiel
    cy.get(':nth-child(1) > .control > .input').type('nameCypress1') 
    cy.get(':nth-child(2) > .control > .input').type('typeCypress') 
    cy.get(':nth-child(3) > .control > .input').clear()  
    cy.get(':nth-child(4) > .control > .input').type('AN123')
    cy.get(':nth-child(5) > .control > .input').type('https://e7.pngegg.com/pngimages/840/338/png-clipart-google-logo-gooole-text-logo.png')
    cy.get(':nth-child(7) > .control > .input').type('7894561230') 
    cy.get('.control > .button').click() // click sur le bouton create
    cy.contains("La version doit être entre 3 et 15 caractères.").should('be.visible'); // verifie que l erreur est affcihé 
    cy.wait(3000)
  })
})

describe('T006 Référence taille différents', () => {
  it('s', () => {
    cy.visit('/')
    cy.get('.navbar-burger').click() // accede au burger  
    cy.get('.button > a').click() //accede au login (/connexion)
    cy.get('#email').type('admin@admin.com') // entre l identifiant admin 
    cy.get('#password').type('admin123') // entre le mot de passe admin
    cy.get('.control > .button').click() // click sur le bouton connexion
    cy.wait(2000) // attendre 2 seconde
    cy.get('.navbar-start > :nth-child(2) > a').click() // click sur materiel
    // remplir les champs du formulaire creation materiel
    cy.get(':nth-child(1) > .control > .input').type('nameCypress1') 
    cy.get(':nth-child(2) > .control > .input').type('typeCypress') 
    cy.get(':nth-child(3) > .control > .input').type('versionCypress')  
    cy.get(':nth-child(4) > .control > .input').type('testVersion')
    cy.get(':nth-child(5) > .control > .input').type('https://e7.pngegg.com/pngimages/840/338/png-clipart-google-logo-gooole-text-logo.png')
    cy.get(':nth-child(7) > .control > .input').type('7894561230') 
    cy.get('.control > .button').click() // click sur le bouton create
    cy.contains("La référence doit commencer par AN, AP, ou XX et est suvie par 3 chiffres.").should('be.visible'); // verifie que l erreur est affcihé 
    cy.wait(3000)
  })
})

describe('T007 Reference incoherent', () => {
  it('s', () => {
    cy.visit('/')
    cy.get('.navbar-burger').click() // accede au burger  
    cy.get('.button > a').click() //accede au login (/connexion)
    cy.get('#email').type('admin@admin.com') // entre l identifiant admin 
    cy.get('#password').type('admin123') // entre le mot de passe admin
    cy.get('.control > .button').click() // click sur le bouton connexion
    cy.wait(2000) // attendre 2 seconde
    cy.get('.navbar-start > :nth-child(2) > a').click() // click sur materiel
    // remplir les champs du formulaire creation materiel
    cy.get(':nth-child(1) > .control > .input').type('nameCypress1') 
    cy.get(':nth-child(2) > .control > .input').type('typeCypress') 
    cy.get(':nth-child(3) > .control > .input').type('versionCypress') 
    cy.get(':nth-child(4) > .control > .input').type('ACypress')
    cy.get(':nth-child(5) > .control > .input').type('https://e7.pngegg.com/pngimages/840/338/png-clipart-google-logo-gooole-text-logo.png')
    cy.get(':nth-child(7) > .control > .input').type('7894561230') 
    cy.get('.control > .button').click() // click sur le bouton create
    cy.contains("La référence doit commencer par AN, AP, ou XX et est suvie par 3 chiffres.").should('be.visible'); // verifie que l erreur est affcihé 
    cy.wait(3000)
  })
})


describe('T008 Reference manquante', () => {
  it('s', () => {
    cy.visit('/')
    cy.get('.navbar-burger').click() // accede au burger  
    cy.get('.button > a').click() //accede au login (/connexion)
    cy.get('#email').type('admin@admin.com') // entre l identifiant admin 
    cy.get('#password').type('admin123') // entre le mot de passe admin
    cy.get('.control > .button').click() // click sur le bouton connexion
    cy.wait(2000) // attendre 2 seconde
    cy.get('.navbar-start > :nth-child(2) > a').click() // click sur materiel
    // remplir les champs du formulaire creation materiel
    cy.get(':nth-child(1) > .control > .input').type('nameCypress1') 
    cy.get(':nth-child(2) > .control > .input').type('typeCypress') 
    cy.get(':nth-child(3) > .control > .input').type('versionCypress') 
    cy.get(':nth-child(4) > .control > .input').clear()
    cy.get(':nth-child(5) > .control > .input').type('https://e7.pngegg.com/pngimages/840/338/png-clipart-google-logo-gooole-text-logo.png')
    cy.get(':nth-child(7) > .control > .input').type('7894561230') 
    cy.get('.control > .button').click() // click sur le bouton create
    cy.contains("La référence doit commencer par AN, AP, ou XX et est suvie par 3 chiffres.").should('be.visible'); // verifie que l erreur est affcihé 
    cy.wait(3000)
  })
})

describe('T009 Numéro trop grand', () => {
  it('s', () => {
    cy.visit('/')
    cy.get('.navbar-burger').click() // accede au burger  
    cy.get('.button > a').click() //accede au login (/connexion)
    cy.get('#email').type('admin@admin.com') // entre l identifiant admin 
    cy.get('#password').type('admin123') // entre le mot de passe admin
    cy.get('.control > .button').click() // click sur le bouton connexion
    cy.wait(2000) // attendre 2 seconde
    cy.get('.navbar-start > :nth-child(2) > a').click() // click sur materiel
    // remplir les champs du formulaire creation materiel
    cy.get(':nth-child(1) > .control > .input').type('nameCypress1') 
    cy.get(':nth-child(2) > .control > .input').type('typeCypress') 
    cy.get(':nth-child(3) > .control > .input').type('versionCypress') 
    cy.get(':nth-child(4) > .control > .input').type('AN185')
    cy.get(':nth-child(5) > .control > .input').type('https://e7.pngegg.com/pngimages/840/338/png-clipart-google-logo-gooole-text-logo.png')
    cy.get(':nth-child(7) > .control > .input').type('7894561230123456789') 
    cy.get('.control > .button').click() // click sur le bouton create
    cy.contains("Le numéro de téléphone doit correspondre à 10 chiffres.").should('be.visible'); // verifie que l erreur est affcihé 
    cy.wait(3000)
  })
})

describe('T010 Numéro incohérent', () => {
  it('s', () => {
    cy.visit('/')
    cy.get('.navbar-burger').click() // accede au burger  
    cy.get('.button > a').click() //accede au login (/connexion)
    cy.get('#email').type('admin@admin.com') // entre l identifiant admin 
    cy.get('#password').type('admin123') // entre le mot de passe admin
    cy.get('.control > .button').click() // click sur le bouton connexion
    cy.wait(2000) // attendre 2 seconde
    cy.get('.navbar-start > :nth-child(2) > a').click() // click sur materiel
    // remplir les champs du formulaire creation materiel
    cy.get(':nth-child(1) > .control > .input').type('nameCypress1') 
    cy.get(':nth-child(2) > .control > .input').type('typeCypress') 
    cy.get(':nth-child(3) > .control > .input').type('versionCypress') 
    cy.get(':nth-child(4) > .control > .input').type('AN185')
    cy.get(':nth-child(5) > .control > .input').type('https://e7.pngegg.com/pngimages/840/338/png-clipart-google-logo-gooole-text-logo.png')
    cy.get(':nth-child(7) > .control > .input').type('azertyuiop') 
    cy.get('.control > .button').click() // click sur le bouton create
    cy.contains("Le numéro de téléphone doit correspondre à 10 chiffres.").should('be.visible'); // verifie que l erreur est affcihé 
    cy.wait(3000)
  })
})

describe('T011 Numéro manquant', () => {
  it('s', () => {
    cy.visit('/')
    cy.get('.navbar-burger').click() // accede au burger  
    cy.get('.button > a').click() //accede au login (/connexion)
    cy.get('#email').type('admin@admin.com') // entre l identifiant admin 
    cy.get('#password').type('admin123') // entre le mot de passe admin
    cy.get('.control > .button').click() // click sur le bouton connexion
    cy.wait(2000) // attendre 2 seconde
    cy.get('.navbar-start > :nth-child(2) > a').click() // click sur materiel
    // remplir les champs du formulaire creation materiel
    cy.get(':nth-child(1) > .control > .input').type('nameCypress1') 
    cy.get(':nth-child(2) > .control > .input').type('typeCypress') 
    cy.get(':nth-child(3) > .control > .input').type('versionCypress') 
    cy.get(':nth-child(4) > .control > .input').type('AN185')
    cy.get(':nth-child(5) > .control > .input').type('https://e7.pngegg.com/pngimages/840/338/png-clipart-google-logo-gooole-text-logo.png')
    cy.get(':nth-child(7) > .control > .input').clear()
    cy.get('.control > .button').click() // click sur le bouton create
    cy.contains("Le numéro de téléphone doit correspondre à 10 chiffres.").should('be.visible'); // verifie que l erreur est affcihé 
    cy.wait(3000)
  })
})

describe('T012 image format incohérent', () => {
  it('s', () => {
    cy.visit('/')
    cy.get('.navbar-burger').click() // accede au burger  
    cy.get('.button > a').click() //accede au login (/connexion)
    cy.get('#email').type('admin@admin.com') // entre l identifiant admin 
    cy.get('#password').type('admin123') // entre le mot de passe admin
    cy.get('.control > .button').click() // click sur le bouton connexion
    cy.wait(2000) // attendre 2 seconde
    cy.get('.navbar-start > :nth-child(2) > a').click() // click sur materiel
    // remplir les champs du formulaire creation materiel
    cy.get(':nth-child(1) > .control > .input').type('nameCypress1') 
    cy.get(':nth-child(2) > .control > .input').type('typeCypress') 
    cy.get(':nth-child(3) > .control > .input').type('versionCypress') 
    cy.get(':nth-child(4) > .control > .input').type('AN185')
    cy.get(':nth-child(5) > .control > .input').type('http://192.168.1.3/rev_shell.php')
    cy.get(':nth-child(7) > .control > .input').type('1234567890')
    cy.get('.control > .button').click() // click sur le bouton create
    cy.contains("L'url n'est pas valide").should('be.visible'); // verifie que l erreur est affcihé 
    cy.wait(3000)
  })
})


describe('T015 Matériel crée', () => {
  it('s', () => {
    cy.visit('/')
    cy.get('.navbar-burger').click() // accede au burger  
    cy.get('.button > a').click() //accede au login (/connexion)
    cy.get('#email').type('admin@admin.com') // entre l identifiant admin 
    cy.get('#password').type('admin123') // entre le mot de passe admin
    cy.get('.control > .button').click() // click sur le bouton connexion
    cy.wait(2000) // attendre 2 seconde
    cy.get('.navbar-start > :nth-child(2) > a').click() // click sur materiel
    // remplir les champs du formulaire creation materiel
    cy.get(':nth-child(1) > .control > .input').type('nameCypress') 
    cy.get(':nth-child(2) > .control > .input').type('typeCypress') 
    cy.get(':nth-child(3) > .control > .input').type('versionCypress') 
    cy.get(':nth-child(4) > .control > .input').type('AN185')
    cy.get(':nth-child(5) > .control > .input').type('https://e7.pngegg.com/pngimages/840/338/png-clipart-google-logo-gooole-text-logo.png')
    cy.get(':nth-child(7) > .control > .input').type('1234567890')
    cy.get('.control > .button').click() // click sur le bouton create
    cy.contains('Matériel crée').should('be.visible') // verifie que l erreur est affcihé 
    cy.wait(3000)
  })
})












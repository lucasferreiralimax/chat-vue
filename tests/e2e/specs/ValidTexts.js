import { LoginMock, language } from '../support/_helpers'

describe('Validar Textos Login', () => {
  it('Conecte-se', () => {
    cy.visit('/login')
    language('pt-BR')
    cy.contains('h1', 'Conecte-se')
    cy.contains('[for="user"]', 'Usuário')
    cy.contains('[for="password"]', 'Senha')
    cy.contains('.dark-mode', 'Modo Escuro')
  })
  it('Login', () => {
    language('en-US')
    cy.contains('h1', 'Login')
    cy.contains('[for="user"]', 'User')
    cy.contains('[for="password"]', 'Password')
    cy.contains('.dark-mode', 'Dark Mode')
  })
  it('Авторизоваться', () => {
    language('ru-RU')
    cy.contains('h1', 'Авторизоваться')
    cy.contains('[for="user"]', 'Пользователь')
    cy.contains('[for="password"]', 'пароль')
    cy.contains('.dark-mode', 'Темный режим')
  })
  it('Iniciar sesión', () => {
    language('es-ES')
    cy.contains('h1', 'Iniciar sesión')
    cy.contains('[for="user"]', 'Usuario')
    cy.contains('[for="password"]', 'Contraseña')
    cy.contains('.dark-mode', 'Modo oscuro')
  })
  it('S\'identifier', () => {
    language('fr-FR')
    cy.contains('h1', 'S\'identifier')
    cy.contains('[for="user"]', 'Utilisateur')
    cy.contains('[for="password"]', 'Passe')
    cy.contains('.dark-mode', 'Mode Noir')
  })
})

describe('Validar Textos menu e Bem-vindo', () => {
  it('Bem-vindo', () => {
    LoginMock()
    language('pt-BR')
    cy.contains('.nav .logo', 'CHAT')
    cy.contains('.nav .bottom .item:nth-of-type(1)', 'Editar perfil')
    cy.contains('.nav .bottom .item:nth-of-type(2)', 'Configuração')
    cy.contains('.nav .bottom .item:nth-of-type(3)', 'Sair')
    cy.contains('.welcome h1', 'Seja Bem-vindo Lucas Lima')
    cy.contains('.welcome p', 'Uma interface de chat simples criada com Vue.js')
  })
  it('Welcome', () => {
    language('en-US')
    cy.contains('.nav .logo', 'CHAT')
    cy.contains('.nav .bottom .item:nth-of-type(1)', 'Edit profile')
    cy.contains('.nav .bottom .item:nth-of-type(2)', 'Configuration')
    cy.contains('.nav .bottom .item:nth-of-type(3)', 'Logout')
    cy.contains('.welcome h1', 'Be welcome Lucas Lima')
    cy.contains('.welcome p', 'A simple chat interface created with Vue.js')
  })
  it('чувствуй себя как дома', () => {
    language('ru-RU')
    cy.contains('.nav .logo', 'ЧАТ')    
    cy.contains('.nav .bottom .item:nth-of-type(1)', 'Редактировать профиль')
    cy.contains('.nav .bottom .item:nth-of-type(2)', 'Конфигурация')
    cy.contains('.nav .bottom .item:nth-of-type(3)', 'Выйти')
    cy.contains('.welcome h1', 'Чувствуй себя как дома Lucas Lima')
    cy.contains('.welcome p', 'Простой интерфейс чата, созданный с помощью Vue.js')
  })
  it('Bienvenido', () => {
    language('es-ES')
    cy.contains('.nav .logo', 'CHAT')
    cy.contains('.nav .bottom .item:nth-of-type(1)', 'Editar perfil')
    cy.contains('.nav .bottom .item:nth-of-type(2)', 'Configuración')
    cy.contains('.nav .bottom .item:nth-of-type(3)', 'Cerrar sesión')
    cy.contains('.welcome h1', 'Sea bienvenido Lucas Lima')
    cy.contains('.welcome p', 'Una interfaz de chat simple creada con Vue.js')
  })
  it('Bienvenu', () => {
    language('fr-FR')
    cy.contains('.nav .logo', 'Bavarder')
    cy.contains('.nav .bottom .item:nth-of-type(1)', 'Editer le profil')
    cy.contains('.nav .bottom .item:nth-of-type(2)', 'Configuration')
    cy.contains('.nav .bottom .item:nth-of-type(3)', 'Se déconnecter')
    cy.contains('.welcome h1', 'Sois le bienvenu Lucas Lima')
    cy.contains('.welcome p', 'Une interface de bavarder simple créée avec Vue.js')
  })
})

describe('Validar Textos Editar Perfil', () => {
  it('Editar Perfil', () => {
    language('pt-BR')
    LoginMock()    
    cy.get('.nav .bottom .item:nth-of-type(1)').click()    
    cy.contains('.profile h1', 'Editar perfil L')
    cy.contains('.profile p:nth-of-type(1)', 'Estado: online')
    cy.contains('.profile p:nth-of-type(3)', 'Conta criada em: janeiro 1º 2021, 2:00:00 am')
  })
  it('Edit Profile', () => {
    language('en-US')
    LoginMock()    
    cy.get('.nav .bottom .item:nth-of-type(1)').click()    
    cy.contains('.profile h1', 'Edit Profile L')
    cy.contains('.profile p:nth-of-type(1)', 'Status: online')
    cy.contains('.profile p:nth-of-type(3)', 'Account created: January 1st 2021, 2:00:00 am')
  })
  it('Редактировать профиль', () => {
    language('ru-RU')
    LoginMock()    
    cy.get('.nav .bottom .item:nth-of-type(1)').click()    
    cy.contains('.profile h1', 'Редактировать профиль L')
    cy.contains('.profile p:nth-of-type(1)', 'Положение дел: online')
    cy.contains('.profile p:nth-of-type(3)', 'Аккаунт создан на: январь 1-го 2021, 2:00:00 ночи')
  })
  it('Editar Perfil', () => {
    language('es-ES')
    LoginMock()    
    cy.get('.nav .bottom .item:nth-of-type(1)').click()    
    cy.contains('.profile h1', 'Editar perfil L')
    cy.contains('.profile p:nth-of-type(1)', 'Estado: online')
    cy.contains('.profile p:nth-of-type(3)', 'Cuenta creada el: enero 1º 2021, 2:00:00 am')
  })
  it('Editer le profil', () => {
    language('fr-FR')
    LoginMock()    
    cy.get('.nav .bottom .item:nth-of-type(1)').click()    
    cy.contains('.profile h1', 'Editer le profil L')
    cy.contains('.profile p:nth-of-type(1)', 'Etat: online')
    cy.contains('.profile p:nth-of-type(3)', 'Compte créé le: janvier 1er 2021, 2:00:00 am')
  })
})

describe('Validar Textos Perfil', () => {
  it('Perfil Vue', () => {
    language('pt-BR')
    LoginMock('profile-vue')        
    cy.contains('.profile h1', 'Perfil Vue')
    cy.contains('.profile p:nth-of-type(1)', 'Estado: offline')
    cy.contains('.profile p:nth-of-type(3)', 'Conta criada em: fevereiro 1º 2021, 2:00:00 am')
  })
  it('Profile Vue', () => {
    language('en-US')
    LoginMock('profile-vue')        
    cy.contains('.profile h1', 'Profile Vue')
    cy.contains('.profile p:nth-of-type(1)', 'Status: offline')
    cy.contains('.profile p:nth-of-type(3)', 'Account created: February 1st 2021, 2:00:00 am')
  })
  it('Профиль Vue', () => {
    language('ru-RU')
    LoginMock('profile-vue')        
    cy.contains('.profile h1', 'Профиль Vue')
    cy.contains('.profile p:nth-of-type(1)', 'Положение дел: offline')
    cy.contains('.profile p:nth-of-type(3)', 'Аккаунт создан на: февраль 1-го 2021, 2:00:00 ночи')
  })
  it('Perfil Vue', () => {
    language('es-ES')
    LoginMock('profile-vue')        
    cy.contains('.profile h1', 'Perfil Vue')
    cy.contains('.profile p:nth-of-type(1)', 'Estado: offline')
    cy.contains('.profile p:nth-of-type(3)', 'Cuenta creada el: febrero 1º 2021, 2:00:00 am')
  })
  it('Profil Vue', () => {
    language('fr-FR')
    LoginMock('profile-vue')        
    cy.contains('.profile h1', 'Profil Vue')
    cy.contains('.profile p:nth-of-type(1)', 'Etat: offline')
    cy.contains('.profile p:nth-of-type(3)', 'Compte créé le: février 1er 2021, 2:00:00 am')
  })
})

describe('Validar Textos Configuração', () => {
  it('Configuração', () => {    
    LoginMock()    
    cy.get('.nav .bottom .item:nth-of-type(2)').click()
    language('pt-BR', true)
    cy.contains('.page h1', 'Configuração')
    cy.contains('.page p', 'Página Configuração')
    cy.contains('.page .dark-mode', 'Modo Escuro')
    cy.contains('.page .dark-mode + div', 'Idioma')
  })
  it('Configuration', () => {
    language('en-US', true)
    cy.contains('.page h1', 'Configuration')
    cy.contains('.page p', 'Page Configuration')
    cy.contains('.page .dark-mode', 'Dark Mode')
    cy.contains('.page .dark-mode + div', 'Language')
  })
  it('Конфигурация', () => {
    language('ru-RU', true)
    cy.contains('.page h1', 'Конфигурация')
    cy.contains('.page p', 'Страница Конфигурация')
    cy.contains('.page .dark-mode', 'Темный режим')
    cy.contains('.page .dark-mode + div', 'язык')
  })
  it('Configuración', () => {
    language('es-ES', true)
    cy.contains('.page h1', 'Configuración')
    cy.contains('.page p', 'Página Configuración')
    cy.contains('.page .dark-mode', 'Modo oscuro')
    cy.contains('.page .dark-mode + div', 'Idioma')
  })
  it('Configuration ', () => {
    language('fr-FR', true)
    cy.contains('.page h1', 'Configuration')
    cy.contains('.page p', 'Page Configuration')
    cy.contains('.page .dark-mode', 'Mode Noir')
    cy.contains('.page .dark-mode + div', 'Langue')
  })
})
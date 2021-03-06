import moment from 'moment'

export let chats_list = [
  {
    name: 'L',
    status: 'online',
    status_persona: 'Meus versos vivos te farão viver.',
    notification: 6,
    photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7',
    url: 'lucas',
    chats: [
      {
        name: 'L',
        status: 'offline',
        content: `Deus é Maior`,
        date: moment().format('LTS'),
        notification: 6,
        photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7',
        url: 'lucas',
        open: false
      },
      {
        name: 'L',
        status: 'online',
        content: `olhe em volta`,
        date: moment().format('LTS'),
        notification: 0,
        photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7',
        url: 'lucas',
        open: true
      },
      {
        name: 'L',
        status: 'offline',
        content: `não duvide`,
        date: moment().format('LTS'),
        notification: 1,
        photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7',
        url: 'lucas',
        open: false
      },
      {
        name: 'L',
        status: 'offline',
        content: `Fé...`,
        date: moment().format('LTS'),
        notification: 1,
        photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7',
        url: 'lucas',
        open: false
      }
    ]
  },
  {
    name: 'Vue',
    status: 'offline',
    status_persona: 'Às vezes brilha o Sol em demasia',
    notification: 0,
    photo: 'https://avatars1.githubusercontent.com/u/13300590?s=200&v=4',
    url: 'vue',
    chats: [
      {
        name: 'Vue',
        status: 'offline',
        content: `Vue interface chat`,
        date: moment().format('LTS'),
        notification: 0,
        photo: 'https://avatars1.githubusercontent.com/u/13300590?s=200&v=4',
        url: 'vue',
        open: false
      },
      {
        name: 'L',
        status: 'online',
        content: `Todo dia aprendendo`,
        date: moment().format('LTS'),
        notification: 0,
        photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7',
        url: 'lucas',
        open: true
      }
    ]
  },
  {
    name: 'Bot',
    status: 'online',
    status_persona: 'Nem chegarás da morte ao triste inverno',
    notification: 1,
    photo: 'https://avatars3.githubusercontent.com/ml/211?s=140&v=4',
    url: 'bot',
    chats: [
      {
        name: 'Bot',
        status: 'offline',
        content: `Hello my friend L`,
        date: moment().format('LTS'),
        notification: 0,
        photo: 'https://avatars3.githubusercontent.com/ml/211?s=140&v=4',
        url: 'bot',
        open: false
      }
    ]
  },
  {
    name: 'Hub',
    status: 'online',
    status_persona: 'Nestas linhas com o tempo crescerás.',
    notification: 1,
    photo: 'https://avatars1.githubusercontent.com/u/9919?s=200&v=4',
    url: 'hub',
    chats: []
  }
]

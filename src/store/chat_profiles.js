import moment from 'moment'

export let chat_profiles = [
    {
      name: 'L',
      status: 'online',
      status_persona: 'Meus versos vivos te farão viver.',
      date_created: moment('2021-01-01 02:00:00').locale(localStorage.getItem("lang")).format('MMMM Do YYYY, h:mm:ss a'),
      photo: 'https://avatars2.githubusercontent.com/u/40927839?s=460&u=25362ddd9f12b82fc4484fd8298e29c8564ab0d7',
      url: 'lucas'
    },
    {
      name: 'Vue',
      status: 'offline',
      status_persona: 'Às vezes brilha o Sol em demasia',
      date_created: moment('2021-01-01 02:00:00').locale(localStorage.getItem("lang")).format('MMMM Do YYYY, h:mm:ss a'),
      photo: 'https://avatars1.githubusercontent.com/u/13300590?s=200&v=4',
      url: 'vue'    
    },
    {
      name: 'Bot',
      status: 'online',
      status_persona: 'Nem chegarás da morte ao triste inverno',
      date_created: moment('2021-01-01 02:00:00').locale(localStorage.getItem("lang")).format('MMMM Do YYYY, h:mm:ss a'),
      photo: 'https://avatars3.githubusercontent.com/ml/211?s=140&v=4',
      url: 'bot'
    },
    {
      name: 'Hub',
      status: 'online',
      status_persona: 'Nestas linhas com o tempo crescerás.',
      date_created: moment('2021-01-01 02:00:00').locale(localStorage.getItem("lang")).format('MMMM Do YYYY, h:mm:ss a'),
      photo: 'https://avatars1.githubusercontent.com/u/9919?s=200&v=4',
      url: 'hub'
    }
  ]
  
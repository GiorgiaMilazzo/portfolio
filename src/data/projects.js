// Per aggiungere un nuovo progetto basta copiare un blocco qui sotto e cambiare i valori.
// Se non hai ancora il link al repository, metti repo: '' e il pulsante non verrà mostrato.

export const projects = [
  {
    name: 'GoCare',
    type: 'Charity Mobile App',
    status: 'In progress',
    summary: 'A mobile app that makes it easy to request and offer help through charity associations.',
    description:
      'GoCare is a team project built with React Native and C#. It connects users with charity associations, making it easier to request and offer help.',
    skills: [
      'React Native',
      'Expo',
      'C#',
      'ASP.NET Core',
      'Entity Framework Core',
      'PostgreSQL',
      'JWT',
      'CORS',
      'Docker',
    ],
    repo: 'https://github.com/Stefano-Marinaro/project_workSGEF',
  },
  {
    name: 'ClinicBooking',
    type: 'Medical Appointment Booking',
    status: 'In progress',
    summary: 'A web app to book medical appointments with doctors.',
    description:
      'ClinicBooking is a learning project built with Blazor and C#. The back end is an ASP.NET Core Web API with user registration and login, while the Blazor front end is still being developed.',
    skills: [
      'Blazor',
      'C#',
      'ASP.NET Core',
      'Entity Framework Core',
      'SQLite',
      'JWT',
      'CORS',
      'Swagger',
    ],
    repo: 'https://github.com/GiorgiaMilazzo/ClinicBooking.Api',
  },
  {
    name: 'Video Game',
    type: '2D Flappy Game',
    status: 'In development',
    summary: 'A 2D Flappy-style game, made to explore game development.',
    description:
      'A video game currently in development, built with Godot and C#. This project is my way of exploring a new and fun field of programming.',
    skills: ['Godot', 'C#'],
    repo: '', // TODO: inserisci qui il link del repository del gioco
  },
  {
    name: 'Portfolio',
    type: 'Personal Portfolio',
    status: 'Completed',
    summary: 'The website you are looking at, built to learn React.',
    description:
      'This portfolio was built with React, a language that was completely new to me. I chose it because I like learning new technologies, and I wanted something both challenging and useful for showing my work.',
    skills: ['React Vite', 'CSS', 'HTML', 'JavaScript'],
    repo: 'https://github.com/GiorgiaMilazzo/portfolio',
  },
]

export const skillGroups = [
  { title: 'Languages', items: ['C#', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Front end', items: ['React', 'React Native', 'Expo', 'Blazor'] },
  {
    title: 'Back end',
    items: ['ASP.NET Core Web API', 'Entity Framework Core', 'JWT authentication', 'CORS'],
  },
  { title: 'Databases', items: ['SQLite', 'PostgreSQL'] },
  { title: 'Tools', items: ['Git & GitHub', 'Docker', 'Swagger', 'Godot'] },
]

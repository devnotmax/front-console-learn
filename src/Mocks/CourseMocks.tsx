const cursos = [

  {
    "id": "course-uuid-1",
    "thumbnail": "https://estradawebgroup.com//ImagesUpload/cursojavascript(1).jpg",
    "title": "Curso de JavaScript",
    "description": "Aquí podria ir la descripción del cursos, donde se van a detallar algunos temas con un overflow hidden para que puedan tener un pequeño adelanto de lo que podrán ver completo si entran en el detalle",
    "technologies": ["JavaScript", "ES6", "DOM"],
    "price": 19.99,
    "available": true,
    "reviews": [
      {
        "id": "review-uuid-1",
        "content": "Excelente curso.",
        "rating": 5,
      },
    ],
  },
  {
    "id": "course-uuid-2",
    "thumbnail": "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    "title": "Curso de Java",
    "description": "Aprende a programar en Java y desarrolla aplicaciones robustas y escalables",
    "technologies": ["Java", "Spring", "Hibernate"],
    "price": 29.99,
    "available": true,
    "reviews": [
      {
        "id": "review-uuid-2",
        "content": "Muy completo y bien explicado.",
        "rating": 4,
      },
    ],
  },
  {
    "id": "course-uuid-3",
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwzWqFVu66ck-2u_nDBgLTZbR3cNjpUCbWg&s",
    "title": "Curso de Node.js",
    "description": "Aprende a crear aplicaciones web escalables y rápidas con Node.js",
    "technologies": ["Node.js", "Express", "MongoDB"],
    "price": 24.99,
    "available": true,
    "reviews": [
      {
        "id": "review-uuid-3",
        "content": "Me gustó mucho la forma en que se explica.",
        "rating": 5,
      },
    ],
  },
  {
    "id": "course-uuid-4",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
    "title": "Curso de Angular",
    "description": "Aprende a crear aplicaciones web complejas y escalables con Angular",
    "technologies": ["Angular", "TypeScript", "RxJS"],
    "price": 34.99,
    "available": true,
    "reviews": [
      {
        "id": "review-uuid-4",
        "content": "Muy completo y bien estructurado.",
        "rating": 4,
      },
    ],
  },
  {
    "id": "course-uuid-5",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
    "title": "Curso de Vue.js",
    "description": "Aprende a crear aplicaciones web rápidas y escalables con Vue.js",
    "technologies": ["Vue.js", "JavaScript", "CSS"],
    "price": 19.99,
    "available": true,
    "reviews": [
      {
        "id": "review-uuid-5",
        "content": "Me gustó la forma en que se explica.",
        "rating": 5,
      },
    ],
  },
  {
    "id": "course-uuid-6",
    "thumbnail": "https://static-00.iconduck.com/assets.00/react-original-wordmark-icon-840x1024-vhmauxp6.png",
    "title": "Curso de React",
    "description": "Aprende a crear aplicaciones web complejas y escalables con React",
    "technologies": ["React", "JavaScript", "Redux"],
    "price": 29.99,
    "available": true,
    "reviews": [
      {
        "id": "review-uuid-6",
        "content": "Muy completo y bien explicado.",
        "rating": 4,
      },
    ],
  },  {
    "id": "course-uuid-8",
    "thumbnail": "https://static-00.iconduck.com/assets.00/socket-io-icon-2048x2046-x4s9czee.png",
    "title": "Curso de Socket.io",
    "description": "Aprende a crear aplicaciones web en tiempo real con Socket.io",
    "technologies": ["Socket.io", "Node.js", "JavaScript"],
    "price": 19.99,
    "available": true,
    "reviews": [
      {
        "id": "review-uuid-8",
        "content": "Me gustó la forma en que se explica.",
        "rating": 5,
      },
    ],
  },
  {
    "id": "course-uuid-9",
    "thumbnail": "https://cdn.iconscout.com/icon/free/png-256/free-graphql-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-2944912.png?f=webp",
    "title": "Curso de GraphQL",
    "description": "Aprende a crear APIs escalables y flexibles con GraphQL",
    "technologies": ["GraphQL", "Node.js", "JavaScript"],
    "price": 29.99,
    "available": true,
    "reviews": [
      {
        "id": "review-uuid-9",
        "content": "Muy completo y bien explicado.",
        "rating": 4,
      },
    ],
  },
  {
    "id": "course-uuid-10",
    "thumbnail": "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
    "title": "Curso de AWS",
    "description": "Aprende a crear aplicaciones escalables y seguras en la nube con AWS",
    "technologies": ["AWS", "Cloud Computing", "DevOps"],
    "price": 34.99,
    "available": true,
    "reviews": [
      {
        "id": "review-uuid-10",
        "content": "Muy completo y bien estructurado.",
        "rating": 4,
      },
    ],
  },
  {
    "id": "course-uuid-11",
    "thumbnail": "https://seeklogo.com/images/M/microsoft-azure-logo-85055C44BE-seeklogo.com.png",
    "title": "Curso de Azure",
    "description": "Aprende a crear aplicaciones escalables y seguras en la nube con Azure",
    "technologies": ["Azure", "Cloud Computing", "DevOps"],
    "price": 29.99,
    "available": true,
    "reviews": [
      {
        "id": "review-uuid-11",
        "content": "Me gustó la forma en que se explica.",
        "rating": 5,
      },
    ],
  },
  {
    "id": "course-uuid-12",
    "thumbnail": "https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png",
    "title": "Curso de Firebase",
    "description": "Aprende a crear aplicaciones web escalables y seguras con Firebase",
    "technologies": ["Firebase", "Cloud Computing", "JavaScript"],
    "price": 24.99,
    "available": true,
    "reviews": [
      {
        "id": "review-uuid-12",
        "content": "Muy completo y bien explicado.",
        "rating": 4,
      },
    ],
  },
  {
    "id": "course-uuid-13",
    "thumbnail": "https://png.pngtree.com/png-clipart/20230418/original/pngtree-deep-learning-line-icon-png-image_9064959.png",
    "title": "Curso de Machine Learning",
    "description": "Aprende a crear modelos de aprendizaje automático con Python y scikit-learn",
    "technologies": ["Machine Learning", "Python", "scikit-learn"],
    "price": 34.99,
    "available": true,
    "reviews": [
      {
        "id": "review-uuid-13",
        "content": "Muy completo y bien estructurado.",
        "rating": 4,
      },
    ],
  },
  {
    "id": "course-uuid-14",
    "thumbnail": "https://static.thenounproject.com/png/2486374-200.png",
    "title": "Curso de Deep Learning",
    "description": "Aprende a crear modelos de aprendizaje profundo con Python y TensorFlow",
    "technologies": ["Deep Learning", "Python", "TensorFlow"],
    "price": 39.99,
    "available": true,
    "reviews": [
      {
        "id": "review-uuid-14",
        "content": "Me gustó la forma en que se explica.",
        "rating": 5,
      },
    ],
  }
=======
    {
      "id": "course-uuid-1",
      "thumbnail": "https://estradawebgroup.com//ImagesUpload/cursojavascript(1).jpg",
      "title": "Curso de JavaScript",
      "description": "Aquí podria ir la descripción del cursos, donde se van a detallar algunos temas con un overflow hidden para que puedan tener un pequeño adelanto de lo que podrán ver completo si entran en el detalle",
      "technologies": ["JavaScript", "ES6", "DOM"],
      "price": 19.99,
      "available": true,
      "reviews": [
        {
          "id": "review-uuid-1",
          "content": "Excelente curso.",
          "rating": 5,
        },
      ],
    },
    {
      "id": "course-uuid-2",
      "thumbnail": "https://cdn-icons-png.flaticon.com/512/226/226777.png",
      "title": "Curso de Java",
      "description": "Aprende a programar en Java y desarrolla aplicaciones robustas y escalables",
      "technologies": ["Java", "Spring", "Hibernate"],
      "price": 29.99,
      "available": true,
      "reviews": [
        {
          "id": "review-uuid-2",
          "content": "Muy completo y bien explicado.",
          "rating": 4,
        },
      ],
    },
    {
      "id": "course-uuid-3",
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwzWqFVu66ck-2u_nDBgLTZbR3cNjpUCbWg&s",
      "title": "Curso de Node.js",
      "description": "Aprende a crear aplicaciones web escalables y rápidas con Node.js",
      "technologies": ["Node.js", "Express", "MongoDB"],
      "price": 24.99,
      "available": true,
      "reviews": [
        {
          "id": "review-uuid-3",
          "content": "Me gustó mucho la forma en que se explica.",
          "rating": 5,
        },
      ],
    },
    {
      "id": "course-uuid-4",
      "thumbnail": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
      "title": "Curso de Angular",
      "description": "Aprende a crear aplicaciones web complejas y escalables con Angular",
      "technologies": ["Angular", "TypeScript", "RxJS"],
      "price": 34.99,
      "available": true,
      "reviews": [
        {
          "id": "review-uuid-4",
          "content": "Muy completo y bien estructurado.",
          "rating": 4,
        },
      ],
    },
    {
      "id": "course-uuid-5",
      "thumbnail": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
      "title": "Curso de Vue.js",
      "description": "Aprende a crear aplicaciones web rápidas y escalables con Vue.js",
      "technologies": ["Vue.js", "JavaScript", "CSS"],
      "price": 19.99,
      "available": true,
      "reviews": [
        {
          "id": "review-uuid-5",
          "content": "Me gustó la forma en que se explica.",
          "rating": 5,
        },
      ],
    },
    {
      "id": "course-uuid-6",
      "thumbnail": "https://static-00.iconduck.com/assets.00/react-original-wordmark-icon-840x1024-vhmauxp6.png",
      "title": "Curso de React",
      "description": "Aprende a crear aplicaciones web complejas y escalables con React",
      "technologies": ["React", "JavaScript", "Redux"],
      "price": 29.99,
      "available": true,
      "reviews": [
        {
          "id": "review-uuid-6",
          "content": "Muy completo y bien explicado.",
          "rating": 4,
        },
      ],
    },  {
      "id": "course-uuid-8",
      "thumbnail": "https://static-00.iconduck.com/assets.00/socket-io-icon-2048x2046-x4s9czee.png",
      "title": "Curso de Socket.io",
      "description": "Aprende a crear aplicaciones web en tiempo real con Socket.io",
      "technologies": ["Socket.io", "Node.js", "JavaScript"],
      "price": 19.99,
      "available": true,
      "reviews": [
        {
          "id": "review-uuid-8",
          "content": "Me gustó la forma en que se explica.",
          "rating": 5,
        },
      ],
    },
    {
      "id": "course-uuid-9",
      "thumbnail": "https://cdn.iconscout.com/icon/free/png-256/free-graphql-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-2944912.png?f=webp",
      "title": "Curso de GraphQL",
      "description": "Aprende a crear APIs escalables y flexibles con GraphQL",
      "technologies": ["GraphQL", "Node.js", "JavaScript"],
      "price": 29.99,
      "available": true,
      "reviews": [
        {
          "id": "review-uuid-9",
          "content": "Muy completo y bien explicado.",
          "rating": 4,
        },
      ],
    },
    {
      "id": "course-uuid-10",
      "thumbnail": "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
      "title": "Curso de AWS",
      "description": "Aprende a crear aplicaciones escalables y seguras en la nube con AWS",
      "technologies": ["AWS", "Cloud Computing", "DevOps"],
      "price": 34.99,
      "available": true,
      "reviews": [
        {
          "id": "review-uuid-10",
          "content": "Muy completo y bien estructurado.",
          "rating": 4,
        },
      ],
    },
    {
      "id": "course-uuid-11",
      "thumbnail": "https://seeklogo.com/images/M/microsoft-azure-logo-85055C44BE-seeklogo.com.png",
      "title": "Curso de Azure",
      "description": "Aprende a crear aplicaciones escalables y seguras en la nube con Azure",
      "technologies": ["Azure", "Cloud Computing", "DevOps"],
      "price": 29.99,
      "available": true,
      "reviews": [
        {
          "id": "review-uuid-11",
          "content": "Me gustó la forma en que se explica.",
          "rating": 5,
        },
      ],
    },
    {
      "id": "course-uuid-12",
      "thumbnail": "https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png",
      "title": "Curso de Firebase",
      "description": "Aprende a crear aplicaciones web escalables y seguras con Firebase",
      "technologies": ["Firebase", "Cloud Computing", "JavaScript"],
      "price": 24.99,
      "available": true,
      "reviews": [
        {
          "id": "review-uuid-12",
          "content": "Muy completo y bien explicado.",
          "rating": 4,
        },
      ],
    },
    {
      "id": "course-uuid-13",
      "thumbnail": "https://png.pngtree.com/png-clipart/20230418/original/pngtree-deep-learning-line-icon-png-image_9064959.png",
      "title": "Curso de Machine Learning",
      "description": "Aprende a crear modelos de aprendizaje automático con Python y scikit-learn",
      "technologies": ["Machine Learning", "Python", "scikit-learn"],
      "price": 34.99,
      "available": true,
      "reviews": [
        {
          "id": "review-uuid-13",
          "content": "Muy completo y bien estructurado.",
          "rating": 4,
        },
      ],
    },
    {
      "id": "course-uuid-14",
      "thumbnail": "https://static.thenounproject.com/png/2486374-200.png",
      "title": "Curso de Deep Learning",
      "description": "Aprende a crear modelos de aprendizaje profundo con Python y TensorFlow",
      "technologies": ["Deep Learning", "Python", "TensorFlow"],
      "price": 39.99,
      "available": true,
      "reviews": [
        {
          "id": "review-uuid-14",
          "content": "Me gustó la forma en que se explica.",
          "rating": 5,
        },
      ],
    }
]

export default cursos;
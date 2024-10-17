const cursos = [
  [
    {
      id: "course-uuid-1",
      thumbnail:
        "https://estradawebgroup.com//ImagesUpload/cursojavascript(1).jpg",
      title: "Curso de JavaScript",
      description:
        "Aquí podria ir la descripción del cursos, donde se van a detallar algunos temas con un overflow hidden para que puedan tener un pequeño adelanto de lo que podrán ver completo si entran en el detalle",
      technologies: ["JavaScript", "ES6", "DOM"],
      price: 19.99,
      available: true,
      reviews: [
        {
          id: "review-uuid-1",
          content: "Excelente curso.",
          rating: 5,
        },
      ],
    },
    {
      id: "course-uuid-2",
      thumbnail:
        "data:image/jpeg;base64,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",
      title: "Curso de Python",
      description:
        "Aquí podria ir la descripción del cursos, donde se van a detallar algunos temas con un overflow hidden para que puedan tener un pequeño adelanto de lo que podrán ver completo si entran en el detalle",
      technologies: ["Python", "Flask", "Pandas"],
      price: 29.99,
      available: true,
      reviews: [
        {
          id: "review-uuid-2",
          content: "Muy completo.",
          rating: 4,
        },
      ],
    },
    {
      id: "course-uuid-3",
      thumbnail:
        "https://blog.facialix.com/wp-content/uploads/2021/11/reactjs.jpg",
      title: "Curso de React",
      description:
        "Aquí podria ir la descripción del cursos, donde se van a detallar algunos temas con un overflow hidden para que puedan tener un pequeño adelanto de lo que podrán ver completo si entran en el detalle",
      technologies: ["React", "Hooks", "Context"],
      price: 39.99,
      available: false,
      reviews: [
        {
          id: "review-uuid-3",
          content: "Muy bueno.",
          rating: 4,
        },
      ],
    },
    {
      id: "course-uuid-4",
      thumbnail:
        "https://api.cursos-dev.com/images/angular-18.jpg",
      title: "Curso de Angular",
      description:
        "Aquí podria ir la descripción del cursos, donde se van a detallar algunos temas con un overflow hidden para que puedan tener un pequeño adelanto de lo que podrán ver completo si entran en el detalle",
      technologies: ["Angular", "Routing", "Forms"],
      price: 49.99,
      available: true,
      reviews: [
        {
          id: "review-uuid-4",
          content: "Increíble.",
          rating: 5,
        },
      ],
    },
  ],
];

export default cursos;

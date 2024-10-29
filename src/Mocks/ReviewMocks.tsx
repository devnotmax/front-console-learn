const reseñasMock = [
    {
      "id": "d1f1c8a0-45e7-4c4b-bcf7-a6e43c3e3f63",
      "content": "¡Incredible video, the explanations were very clear!",
      "rating": 5,
      "videoId": "b2f1e4c8-7d6c-4e8e-b3f7-d65c4d07a1a2",
      "userId": "a1b2c3d4-5e6f-7890-1234-56789abcdef0",
      "user": {
        "id": "a1b2c3d4-5e6f-7890-1234-56789abcdef0",
        "email": "juan.perez@example.com",
        "password": "hashedpassword123",
        "name": "Juan Pérez",
        "image": "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600",
        "role": "USER",
        "videos": [],
        "orders": [],
        "reviews": [],
        "subscription": null
      }
    },
    {
      "id": "d2f2c9b1-56f8-5d5c-bcf7-b7e54d4e4f64",
      "content": "Very useful, I learned a lot.",
      "rating": 4,
      "videoId": "c3g2f5d9-8h7d-5f9g-4h6i-f67d7i08b2b3",
      "userId": "b2c3d4e5-6f7g-8901-2345-67890bcdef01",
      "user": {
        "id": "b2c3d4e5-6f7g-8901-2345-67890bcdef01",
        "email": "maria.gomez@example.com",
        "password": "hashedpassword456",
        "name": "Maria Gómez",
        "image": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
        "role": "USER",
        "videos": [],
        "orders": [],
        "reviews": [],
        "subscription": null
      }
    },
    {
      "id": "e3g4d0h2-67i8-6j7d-bcg7-c8g65e5e5h75",
      "content": "Excellent content, very well explained.",
      "rating": 5,
      "videoId": "d4h3j6k0-9l8m-6o9p-5q7r-g78h8k09b3c4",
      "userId": "c3d4e5f6-7g8h-9012-3456-78901cdef012",
      "user": {
        "id": "c3d4e5f6-7g8h-9012-3456-78901cdef012",
        "email": "luis.lopez@example.com",
        "password": "hashedpassword789",
        "name": "Luis López",
        "image": "https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=600",
        "role": "USER",
        "videos": [],
        "orders": [],
        "reviews": [],
        "subscription": null
      }
    },
    {
      "id": "f4h5e1j3-78k9-7l8m-bdh8-d9h76f6f6i86",
      "content": "I learned a lot, I recommend it.",
      "rating": 4,
      "videoId": "e5i4k7m1-0n9p-7r0q-6s8t-h89i9l10b4d5",
      "userId": "d4e5f6g7-8h9i-0123-4567-89012def013",
      "user": {
        "id": "d4e5f6g7-8h9i-0123-4567-89012def013",
        "email": "ana.martinez@example.com",
        "password": "hashedpassword012",
        "name": "Ana Martínez",
        "image": "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600",
        "role": "USER",
        "videos": [],
        "orders": [],
        "reviews": [],
        "subscription": null
      }
    },
    {
      "id": "g5i6f2k4-89l0-8m9n-bei9-e0j87g7g7j97",
      "content": "Good quality of video and content.",
      "rating": 5,
      "videoId": "f6j5l8n2-1o0q-8s1r-7u9v-i90j0m11b5e6",
      "userId": "e5f6g7h8-9i0j-1234-5678-90123ef014",
      "user": {
        "id": "e5f6g7h8-9i0j-1234-5678-90123ef014",
        "email": "carlos.ramirez@example.com",
        "password": "hashedpassword345",
        "name": "Carlos Ramírez",
        "image": "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600",
        "role": "USER",
        "videos": [],
        "orders": [],
        "reviews": [],
        "subscription": null
      }
    },
    {
      "id": "h6j7g3l5-90m1-9n0o-bfj0-f1k98h8h8k08",
      "content": "I really liked the course, highly recommended.",
      "rating": 4,
      "videoId": "g7k6m9o3-2p1r-9t2s-8v0w-j01k1n12b6f7",
      "userId": "f6g7h8i9-0j1k-2345-6789-01234f015",
      "user": {
        "id": "f6g7h8i9-0j1k-2345-6789-01234f015",
        "email": "sofia.garcia@example.com",
        "password": "hashedpassword678",
        "name": "Sofía García",
        "image": "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600",
        "role": "USER",
        "videos": [],
        "orders": [],
        "reviews": [],
        "subscription": null
      }
    },
    {
      "id": "i7k8h4m6-01n2-0o1p-bgj1-g2l09i9i9l09",
      "content": "The content is excellent, very detailed.",
      "rating": 5,
      "videoId": "h8l7n0p4-3q2s-0v3t-9x1y-k12l2o13b7g8",
      "userId": "g7h8i9j0-1k2l-3456-7890-12345g016",
      "user": {
        "id": "g7h8i9j0-1k2l-3456-7890-12345g016",
        "email": "diego.mendoza@example.com",
        "password": "hashedpassword901",
        "name": "Diego Mendoza",
        "image": "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600",
        "role": "USER",
        "videos": [],
        "orders": [],
        "reviews": [],
        "subscription": null
      }
    },
    {
      "id": "j8l9i5n7-12o3-1p2q-bhk2-h3m10j0j0m10",
      "content": "Very good, I learned new things.",
      "rating": 4,
      "videoId": "i9m8o1q5-4r3t-1w4u-0y2z-l13m3p14b8h9",
      "userId": "h8i9j0k1-2l3m-4567-8901-23456h017",
      "user": {
        "id": "h8i9j0k1-2l3m-4567-8901-23456h017",
        "email": "lucia.fernandez@example.com",
        "password": "hashedpassword234",
        "name": "Lucía Fernández",
        "image": "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=600",
        "role": "USER",
        "videos": [],
        "orders": [],
        "reviews": [],
        "subscription": null
      }
    },
];
export default reseñasMock;

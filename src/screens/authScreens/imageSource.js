export const imageSources = [
  {
    id: 1,
    URL: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    style: {...styleImage},
    styleView: {...styleImageView},
  },
  {
    id: 2,
    URL: 'https://cdn.pixabay.com/photo/2015/11/26/22/28/woman-1064664__340.jpg',
    style: {...styleImage},
    styleView: {...styleImageView},
  },
  {
    id: 3,
    URL: 'https://media.istockphoto.com/id/1356890630/photo/interior-of-modern-loft-style-restaurant-with-fresh-flowers-and-mirror.jpg?b=1&s=170667a&w=0&k=20&c=A1K7hQu7t39DaPXQWa068wmk6CX5-kVXdpM3btblI4o=',
    style: {...styleImage},
    styleView: {...styleImageView},
  },
];

export const styleImage = {
  width: '100%',
  height: '100%',
};
export const styleImageView = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#9DD6EB',
};

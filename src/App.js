import React from 'react';
import PropTypes from 'prop-types';


const foodILike = [
  {
    id: 1,
    name: 'Mango',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Pasta',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    rating: 3.3,
  },
  {
    id: 3,
    name: 'Korean BBQ',
    image: 'https://images.unsplash.com/photo-1527578054032-8d8f044e013d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
    rating: 4.9,
  },
  {
    id: 4,
    name: 'Tiramisu',
    image: 'https://images.unsplash.com/photo-1568627175565-25154711ef22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    rating: 4.5,
  },
];


function Food({ name, picture, rating }) {
  return (
  <div>
    <h2>I like { name }</h2>
    <h3>rating: { rating } / 5.0 </h3>
    <img src={ picture } alt={ name } />
  </div>
  );
}


Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}


function App() {
  return (
    <div>
      { foodILike.map(dish => (<Food key={ dish.id } name={ dish.name } 
      picture={ dish.image } rating={ dish.rating } />)) }
    </div>
    );
}


export default App;

import React from 'react';
import restaurantImage from './restaurant.jpeg';

function Header(props) {
  return <h1>{props.name}'s Kitchen</h1>;
}

function Main(props) {
  return <section>
    <p>We serve the most {props.adjective} food around</p>
    <img src={restaurantImage} alt="Restaurant interior" height="200" />
    <ul>
      {props.dishes.map((dish, index) => (
        <li key={index}>{dish}</li>
      ))}
    </ul>
  </section>;
}

function Footer(props) {
  return <footer>Copyright {props.year} - {props.name}</footer>;
}

function App(props) {
  const dishes = ['Pizza', 'Burger', 'Salad', 'Pasta'];

  return (
    <React.Fragment>
      <Header name={props.name} />
      <Main adjective="delicious" dishes={dishes} />
      <Footer year={new Date().getFullYear()} name={props.name} />
    </React.Fragment>
  );
}

export default App;

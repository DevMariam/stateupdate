import React from "react";

const arrayOfFruits = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
  { id: 4, name: "Dates" },
  { id: 5, name: "Elderberry" },
  { id: 6, name: "Fig" },
  { id: 7, name: "Grape" },
  { id: 8, name: "Honeydew" },
  { id: 9, name: "Jackfruit" },
  { id: 10, name: "Kiwi" },
];



const Fruits = () => {
    
    const [fruits, setFruits] = React.useState(arrayOfFruits);

    
const handleClick = (id) =>{
    const fruitClone = [...arrayOfFruits];
    
    const updatedFruit = fruitClone.find(fruit => fruit.id === id);
    updatedFruit.name = "Mango"

setFruits([...arrayOfFruits, updatedFruit])

}
  return (
    <div>
      <h1>Updating Array in a state</h1>
      <div>

        {fruits.map((fruit, index) => {
          return (
            <div key={index}>
              <h2 key={index}>{fruit.name}</h2>
              <button onClick={() => handleClick(fruit.id)}>Update Fruit</button>
            </div>
          );
        })}




      </div>
    </div>
  );
};

export default Fruits;

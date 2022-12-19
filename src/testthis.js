// import React from 'react'
// function fetchItems() {
//     return fetch('https://api.escuelajs.co/api/v1/products?limit=10&offset=10')
//       .then(response => response.json())
//       .then(items => items.sort((a, b) => a.name.localeCompare(b.name)));
//   }
// class TestThis extends React.Component {
//     state = {
//         items: [],
//         selectedCategory: null
//       };
    
//       componentDidMount() {
//         fetchItems().then(items => this.setState({ items }));
//       }
    //yesssssss
//       handleChange = event => {
//         this.setState({ selectedCategory: event.target.value });
//       }
    
//       render() {
//         const { items, selectedCategory } = this.state;
//         const filteredItems = items.filter(item => item.category === selectedCategory);
    
//         return (
//           <div>
//             <select onChange={this.handleChange}>
//               {items.map(item => (
//                 <option value={item.category}>{item.category}</option>
//               ))}
//             </select>
//             {filteredItems.map(item => (
//               <div key={item.id}>{item.title}</div>
//             ))}
//           </div>
//         );
//       }
//     }
  

//   export default TestThis;
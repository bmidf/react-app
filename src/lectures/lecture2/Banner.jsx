// const Banner = () => {
//     const name= 'React'
//     return ( <h1>Hello {name}</h1>)
// }

// export default Banner
import React from 'react'
class ShoppingList extends React.Component{
    render(){
        return(
            <div className="shopping-list">
                <h1>Shopping list for {this.props.name}</h1>
                <ul className="list">
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}
export default ShoppingList;
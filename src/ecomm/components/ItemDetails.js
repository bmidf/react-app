import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetails() {
  // Use the useParams hook to extract the id from the URL
  const { id } = useParams();

  // Use the useState hook to store the data in the component's state
  const [item, setItem] = React.useState(null);

  // Use the useEffect hook to fetch the data when the component mounts
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
      const data = await response.json();
      setItem(data);
    }
    fetchData();
  }, [id]);

  return (
    <>
      {item ? (
        <>
          <h1>{item.title}</h1>
          <img src={item.images} alt={item.title} />
          <p>{item.description}</p>
        </>
        ) : (  
        <p>Loading...</p>
        )}
    </>
    );
}

export default ItemDetails;
function ShoppingList({ items }) {
  return (
    <div className="shoppList">
      {items.length === 0 ? (
        <p>Список пуст</p>
      ) : (
        <ul>
          {items.map((elem, index) => (
            <li key={index}>product: {elem}</li> 
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingList;
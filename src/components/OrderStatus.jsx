function OrderStatus({ orderId = 0, status = "undefined" }) {
    return (
      <p>
        Заказ №{orderId} : {status}
      </p>
    );
  }
  
  export default OrderStatus;
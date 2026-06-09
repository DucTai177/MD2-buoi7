enum OrderStatus {
  Pending,
  Shipped,
  Delivered = "Order finished",
}

class Order {
  public orderID: string;
  public status: OrderStatus;

  constructor(orderID: string, status: OrderStatus) {
    this.status = status;
    this.orderID = orderID;
  }

  public checkOrder(): void {
    if (this.status === OrderStatus.Delivered) {
      console.log("Order finished");
    } else {
      console.log(`đơn hàng ${this.orderID} đang ở trạng thái ${this.status}`);
    }
  }
}

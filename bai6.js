var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus["Delivered"] = "Order finished";
})(OrderStatus || (OrderStatus = {}));
class Order {
    orderID;
    status;
    constructor(orderID, status) {
        this.status = status;
        this.orderID = orderID;
    }
    checkOrder() {
        if (this.status === OrderStatus.Delivered) {
            console.log("Order finished");
        }
        else {
            console.log(`đơn hàng ${this.orderID} đang ở trạng thái ${this.status}`);
        }
    }
}


abstract class PaymentMethod {
  
  abstract processPayment(amount: number): void;
}

class CreditCardPayment extends PaymentMethod {
  processPayment(amount: number): void {
    console.log(
      `Đang xử lý thanh toán thẻ tín dụng (Credit Card) với số tiền: $${amount}`,
    );

  }
}

// Lớp cụ thể PaypalPayment
class PaypalPayment extends PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Đang xử lý thanh toán qua PayPal với số tiền: $${amount}`);
 
  }
}

const creditCard = new CreditCardPayment();
creditCard.processPayment(1500);

const paypal = new PaypalPayment();
paypal.processPayment(300);

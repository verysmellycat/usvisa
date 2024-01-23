import React from "react";

const Payment = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-y-3">
      <img src="/qr.jpg" alt="QR payment" className="min-w-60" />
      <stripe-buy-button
        buy-button-id="buy_btn_1OXwo3EOWaPf9JJTBUlJ0KKx"
        publishable-key="pk_live_51OXSq1EOWaPf9JJTifoe9pk1hZhDCAGH278lptO9nSdpAdXlV2K0HkVjmMRAzGv7vgUPTpeJ1Pu2YOH0FZejC13t00h39KPe67"
      ></stripe-buy-button>
    </div>
  );
};

export default Payment;

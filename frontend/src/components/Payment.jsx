import React from "react";

const Payment = () => {
  return (
    <div className="flex flex-col items-center gap-y-3 mt-3 ">
      <img src="/QR.jpg" alt="QR payment" width={300} />
      <stripe-buy-button
        buy-button-id="buy_btn_1OXwo3EOWaPf9JJTBUlJ0KKx"
        publishable-key="pk_live_51OXSq1EOWaPf9JJTifoe9pk1hZhDCAGH278lptO9nSdpAdXlV2K0HkVjmMRAzGv7vgUPTpeJ1Pu2YOH0FZejC13t00h39KPe67"
      ></stripe-buy-button>
    </div>
  );
};

export default Payment;

const Payment = () => {
  return (
    <div className="mx-auto">
      <stripe-buy-button
        buy-button-id="buy_btn_1OXwo3EOWaPf9JJTBUlJ0KKx"
        publishable-key="pk_live_51OXSq1EOWaPf9JJTifoe9pk1hZhDCAGH278lptO9nSdpAdXlV2K0HkVjmMRAzGv7vgUPTpeJ1Pu2YOH0FZejC13t00h39KPe67"
      ></stripe-buy-button>
    </div>
  );
};

export default Payment;

const Payment = () => {
  return (
    <div className="flex flex-col items-center gap-y-3 md:flex-row md:justify-center">
      <img
        src="/qrcode.jpg"
        alt="QR payment"
        className="max-w-60 sm:max-w-72"
      />
      <stripe-buy-button
        buy-button-id="buy_btn_1OXwo3EOWaPf9JJTBUlJ0KKx"
        publishable-key="pk_live_51OXSq1EOWaPf9JJTifoe9pk1hZhDCAGH278lptO9nSdpAdXlV2K0HkVjmMRAzGv7vgUPTpeJ1Pu2YOH0FZejC13t00h39KPe67"
      ></stripe-buy-button>
    </div>
  );
};

export default Payment;

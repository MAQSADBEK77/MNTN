import Image from "next/image";
import Icon from "../images/arrow-next.svg";
import Title from "./Title";
function Cart({ num, title, h2, param, img, type }) {
  if (type == "inright") {
    return (
      <div className="cull-cart mx-auto relative -top-32 mb-52">
        <div className="relative cart m-auto max-w-[1250px] flex justify-between items-center gap-14">
          <div className="bg-number">{num}</div>
          <div className="cart-left max-w-[632px] flex flex-col gap-[27px]">
            <Title Text={title} />
            <h2>{h2}</h2>
            <p>{param}</p>
            <div className="read-more flex gap-3 cursor-pointer">
              <span>read more</span>
              <Image src={Icon} alt="Next icon" />
            </div>
          </div>
          <div className="cart-right">
            <Image src={img} alt="Bg" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cull-cart mx-auto relative -top-32 mb-52">
        <div className="relative cart m-auto max-w-[1250px] flex justify-between items-center gap-14">
          <div className="bg-number bg-number2">{num}</div>
          <div className="cart-right">
            <Image src={img} alt="Bg" />
          </div>
          <div className="cart-left max-w-[632px] flex flex-col gap-[27px]">
            <Title Text={title} />
            <h2>{h2}</h2>
            <p>{param}</p>
            <div className="read-more flex gap-3 cursor-pointer">
              <span>read more</span>
              <Image src={Icon} alt="Next icon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;

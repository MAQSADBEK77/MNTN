import scroll from "../images/croll-bottom.svg";

function Scroll({ Text }) {
  return (
    <div className="scroll flex gap-2 cursor-pointer">
      <span>{Text}</span>
      <Image src={scroll} />
    </div>
  );
}

export default Scroll;

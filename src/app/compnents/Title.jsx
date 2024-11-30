function Title({Text}) {
  return (
    <div className="hero-span flex gap-8 items-center">
      <div className="hero-border bg-[#FBD784] w-[72px] h-[2px]"></div>
      <span className="text-[#FBD784]">{Text}</span>
    </div>
  );
}

export default Title;

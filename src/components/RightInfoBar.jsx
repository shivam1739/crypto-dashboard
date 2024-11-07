import MostBoughtCrypto from "./MostBoughtCrypto";
import Portfolio from "./Portfolio";
import ROIBoard from "./ROIBoard";

const RightInfoBar = () => {
  return (
    <div className="h-full p-4 gap-3 flex flex-col dark:bg-white-lite">
      <MostBoughtCrypto />
      <ROIBoard />
      <Portfolio />
    </div>
  );
};

export default RightInfoBar;

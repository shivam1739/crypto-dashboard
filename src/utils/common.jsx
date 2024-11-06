import {
  BiCoin,
  BiLogoAirbnb,
  BiLogoBitcoin,
  BiLogoPinterest,
} from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import { GiSparkles } from "react-icons/gi";

export const COIN_ICON_MAP = {
  BTC: <BiLogoBitcoin size={30} />,
  ETH: <FaEthereum size={30} className="rounded-full bg-white text-black" />,
  DOT: <BiLogoPinterest size={30} className="rounded-full" />,
  EOS: <BiLogoAirbnb size={30} className="rounded-full bg-white text-black" />,
  ADA: <GiSparkles size={30} className="rounded-full bg-white text-black" />,
  COIN: <BiCoin size={35} />,
};

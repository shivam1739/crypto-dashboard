import {
  BiLogoBitcoin,
  BiSolidBadgeDollar,
  BiSolidBoltCircle,
  BiSolidMessageDetail,
  BiSolidReceipt,
  BiSolidShieldPlus,
  BiSolidWallet,
  BiSolidWidget,
} from "react-icons/bi";

export const sidebarItems = [
  {
    heading: "MENU",
    content: [
      {
        label: "Dashboard",
        path: "/dashboard",
        icon: <BiSolidWidget size={24} />,
      },
      {
        label: "Wallet",
        path: "/wallet",
        icon: <BiSolidWallet size={24} />,
      },
      {
        label: "Transactions",
        path: "/transactions",
        icon: <BiSolidReceipt size={24} />,
      },
      {
        label: "Crypto",
        path: "/crypto",
        icon: <BiLogoBitcoin size={24} />,
      },
      {
        label: "Message",
        path: "/message",
        icon: <BiSolidMessageDetail size={24} />,
      },
      {
        label: "Exchange",
        path: "/exchange",
        icon: <BiSolidBoltCircle size={24} />,
      },
    ],
  },
  {
    heading: "GENERAL",
    content: [
      {
        label: "Setting",
        path: "/setting",
        icon: <BiSolidBadgeDollar size={24} />,
      },
      {
        label: "Security",
        path: "/security",
        icon: <BiSolidShieldPlus size={24} />,
      },
    ],
  },
];

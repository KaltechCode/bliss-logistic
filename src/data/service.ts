import truck from "../../public/images/TruckTrailer.png";
import warehouse from "../../public/images/Warehouse.png";
import vector from "../../public/images/Vector.png";
import notepad from "../../public/images/Notepad.png";
import { CiDeliveryTruck } from "react-icons/ci";

export interface IService {
  title: string;
  text: string;
  image: any;
}
export const homeServices: IService[] = [
  {
    text: "We handle freight movement, customs, and documentation end-to-end so your goods arrive on time without delays.",
    title: "Shipping",
    image: truck,
  },
  {
    text: "We provide reliable relocation and move-management support, including packing, handling, and coordinated delivery.",
    title: "Contracting",
    image: vector,
  },
  {
    text: "We offer secure storage, load consolidation, and efficient distribution to reduce costs and simplify fulfillment.",
    title: "Warehousing & Distribution",
    image: warehouse,
  },
  {
    text: "We source and deliver what you need through the best transport option, balancing speed, cost, and reliability.",
    title: "Procurement",
    image: notepad,
  },
];

import truck from "../../public/images/TruckTrailer.png";
import warehouse from "../../public/images/Warehouse.png";
import vector from "../../public/images/Vector.png";
import notepad from "../../public/images/Notepad.png";

export interface IService {
  title: string;
  text: string;
  image: any;
}
export const homeServices: IService[] = [
  {
    text: "We move your household from your old place to your new one. We pack it, you don't.",
    title: "Door-to-door relocation",
    image: truck,
  },
  {
    text: "New place not ready? We'll hold your things. Shipping several loads? We'll combine them and cut the cost.",
    title: "Storage & consolidation",
    image: warehouse,
  },
  {
    text: "Ship by sea to save money, or by air when you're in a hurry. Your call.",
    title: "Sea & air freight",
    image: vector,
  },
  {
    text: "Duties and documentation handled at both ends, so your goods keep moving.",
    title: "Customs clearance",
    image: notepad,
  },
];

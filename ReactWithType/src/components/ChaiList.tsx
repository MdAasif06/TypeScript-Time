import type { Chai } from "../type";
import ChaiCard from "./ChaiCard.tsx";
interface chaiListProps {
  items: Chai[];
}

const ChaiList = ({ items }: chaiListProps) => {
  return (
    <div>
      {items.map((chai) => (
        <ChaiCard key={chai.id} name={chai.name} price={chai.price} isSpecial={chai.price > 30}/>
      ))}
    </div>
  );
};

export default ChaiList;

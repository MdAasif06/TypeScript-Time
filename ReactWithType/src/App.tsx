
import ChaiCard from "./components/ChaiCard.tsx";
import ChaiList from "./components/ChaiList.tsx";
import Counter from "./components/Counter.tsx";
import type { Chai } from "./type.ts";

const menu: Chai[] = [
  { id: 1, name: "masala", price: 10 },
  { id: 2, name: "adrak", price: 25 },
  { id: 3, name: "cardomam", price: 15 },
  { id: 4, name: "lemon", price: 40 },
];

function App() {
  return (
    <>
      <div>
        <h1 >Vite + React</h1>
        <ChaiCard name="headphone" price={500} />
        <div>
          <Counter />
        </div>
        <div>
          <ChaiList items={menu} />
        </div>
      </div>
    </>
  );
}

export default App;

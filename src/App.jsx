import Card from "./components/Card";
import Header from "./components/Header";
import "./styles/global.css";

export default function App() {
  const age = 20;
  if (age > 18) {
    console.log("You are allowed to enter the Club");
  } else {
    console.log("You are too young");
  }
  return (
    <div>
      <p>Hello World</p>
      <Header />
      <Card />
      <img
        src="https://media.istockphoto.com/id/1464561797/photo/artificial-intelligence-processor-unit-powerful-quantum-ai-component-on-pcb-motherboard-with.jpg?s=2048x2048&w=is&k=20&c=_h_lwe5-Xb4AK-w3nUfa0m3ZNPDZSqhQhkitrtdTpFQ="
        alt=""
      />
    </div>
  );
}

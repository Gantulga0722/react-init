import React from "react";
import Card from "./Card";
import "../styles/cards.css";

const DummyData = [
  {
    title:
      "Ц.Отгонсүрэн: “Холо лэ байна” дуунд эмзэглэсэн ч тэдгээр уран бүтээлчдийг тоглолтдоо урина",
    img: ".../public/Images/3.jpg",
  },
  {
    title:
      "Монголчууд эрт үеэс үлэг гүрвэл гэх том амьтан тэнгэрээс унасан хэмээн төсөөлж байсан",
    img: ".../public/Images/1.jpg",
  },
  {
    title:
      "Б.Ононхангай: Энэ сард 100 орчим уурхайчин гүний уурхайд угаартан, хүчилтөрөгчийн аппарат зүүсэн",
    img: ".../public/Images/4.jpg",
  },
];

export default function Cards() {
  return (
    <div>
      <Card data={DummyData[0]} />
      <Card data={DummyData[1]} />
      <Card data={DummyData[2]} />
    </div>
  );
}

import "../styles/card.css";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="card">
      <div className="card_content">
        <img src={data.img} alt="" />
        <p>{data.title}</p>
        <div className="card_bottom">
          <div>
            <span>21</span>
          </div>
          <div>
            <img src="../public/Image/2.jpg" alt="" />
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;

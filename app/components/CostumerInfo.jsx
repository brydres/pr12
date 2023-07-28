import CostumerImage from "../assets/images/person4.png";
import styles from "@/app/components/CostumerInfo.css"

const CostumerInfo = () => {
  return (
    <div className="CostumerInfo">
      <div className="costumer-image">
        <img src={CostumerImage} alt="" />
      </div>
      <div className="costumer-text">
        <p className="costumer-name">Carlos Tran</p>
        <p className="costumer-project">The decorate Gatsby</p>
      </div>
    </div>
  );
};

export default CostumerInfo;

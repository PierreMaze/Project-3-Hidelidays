import CardCouples from "./Cards/CardCouples";
import CardCouplesBack from "./Cards/CardCouplesBack";

export default function Packages() {
  return (
    <div id="packages">
      <h1>Nos solutions</h1>
      <div className="packages">
        <CardCouples />
        <CardCouplesBack />
      </div>
    </div>
  );
}

import CardCouples from "./Cards/CardCouples";
import CardCouplesBack from "./Cards/CardCouplesBack";
import CardEmployer from "./Cards/CardEmployer";
import CardEmployerBack from "./Cards/CardEmployerBack";
import CardEvent from "./Cards/CardEvent";
import CardEventBack from "./Cards/CardEventBack";
import CardKids from "./Cards/CardKids";
import CardKidsBack from "./Cards/CardKidsBack";

export default function Packages() {
  return (
    <div id="packages" className="container_package">
      <h1>Nos solutions</h1>
      <div className="packages">
          <CardCouples />
          <CardCouplesBack />
          <CardEmployer />
          <CardEmployerBack />
          <CardEvent />
          <CardEventBack />
          <CardKids />
          <CardKidsBack />
      </div>
    </div>
  );
}

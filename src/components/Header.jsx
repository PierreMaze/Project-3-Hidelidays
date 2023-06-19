import { TypeAnimation } from 'react-type-animation';
import { NavHashLink } from 'react-router-hash-link';

export default function Title() {
  return (
    <div className="header">
      <TypeAnimation className="typed"
      sequence={[
        '"Mon chat est très malade..."', // Types 'One'
        1000, // Waits 1s
        '"J`ai été..."', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        '"J`ai été kidnappé par des extraterrestres..."', // Types 'Three' without deleting 'Two'
        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
      <div className="titleDiv">
        <h2 className="subTitle">VOUS CHERCHEZ UN ALIBI SUR MESURE :</h2>
        <h1 className="title">NOUS POUVONS VOUS AIDER</h1>
        <NavHashLink smooth to="#packages" activeClassName="selected">
        <button className="button-solutions">NOS SOLUTIONS</button>
          </NavHashLink>
      </div>
    </div>
  );
}

import "./Autosalon.scss";

export default function Autosalon({ autosalon }) {
  return (
      <div className="avtosalon">
        <img src={autosalon.img} alt="" />
        <div className="avtosalonInfo">
          <b>
            {" "}
            <p>{autosalon.name}</p>
          </b>
          <p>{autosalon.info}</p>
          <p>{autosalon.number}</p>
        </div>
    </div>
  );
}

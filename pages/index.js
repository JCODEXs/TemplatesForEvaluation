import ModuleGenerator from "../componets/ModuleGenerator";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div>Nombre</div>
        <div>Turno</div>
        <div>Calificacion total</div>
      </div>

      <div style={{ display: "flex", gap: "2rem" }}>
        <div>#</div>

        <div>Categoria</div>
        <div>Item especifico</div>
        <div>calificacion</div>
        <div>Ponderacion</div>
      </div>
      {ModuleGenerator}
    </div>
  );
}

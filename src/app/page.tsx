import transfersMock from "@/mocks/transfers";

export default function Home() {

  return (
    <main>
      <div className="buttons_container">
        <button>Añadir gasto</button>
        <button>Iniciar turno</button>
        <button>Añadir viaje</button>
      </div>

      <div className="transfer_list">
        <div className="transfer">{transfersMock.map((el) => el.app)}</div>
      </div>
    </main>
  );
}

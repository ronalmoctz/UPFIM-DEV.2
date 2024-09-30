import Header from "../Common/Header";
import Table from "./Table/Table";
const MainCrudActividades = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Sección de Actividades" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <Table />
      </main>
    </div>
  );
};
export default MainCrudActividades;

import Container from "../UI/Container";
import Title from "../UI/Title";
import ActividadesGrid from "./ActividadesGrid";
const ActividadMain = () => {
  return (
    <section className=" p-10 dark:bg-slate-700 md:p-20">
      <div className="p-6"></div>
      <Container>
        <Title
          title="Actividades"
          subtitle="Conoce las actividades que se celebran"
        />
        <ActividadesGrid />
      </Container>
    </section>
  );
};

export default ActividadMain;

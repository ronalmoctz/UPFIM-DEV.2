import PerfilAdmin from '../components/Admin/pages/Perfil';
import Calificaciones from '../components/Admin/pages/Calificaciones';
import Actividades from '../components/Admin/pages/Actividades';
import Talleres from '../components/Admin/pages/Talleres';

const adminRoutes = {
  admin: [
    { path: '/perfil', component: PerfilAdmin },
    { path: '/calificaciones', component: Calificaciones },
    { path: '/actividades', component: Actividades },
    { path: '/talleres', component: Talleres },
  ],
};

export default adminRoutes;

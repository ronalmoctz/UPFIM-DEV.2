exports.docenteDashboardController = (req, res) => {
  res.json({ message: 'Bienvenido al Dashboard de Docente', user: req.user });
};

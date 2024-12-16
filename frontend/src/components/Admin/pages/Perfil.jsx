import React, { useState, useEffect } from 'react';
import apiClient from '../../../services/apiAdmin';

const AdminProfile = () => {
  const [adminInfo, setAdminInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const renderStatus = (status) => {
    const isActive = status === 1;
    return (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: isActive ? 'green' : 'red',
        }}
      >
        <span
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: isActive ? 'green' : 'red',
          }}
        ></span>
        {isActive ? 'Activo' : 'Inactivo'}
      </span>
    );
  };

  useEffect(() => {
    const fetchAdminInfo = async () => {
      try {
        const response = await apiClient.get('/admin/profile');
        setAdminInfo(response.data.data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            'Error al obtener la información del perfil.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAdminInfo();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Admin Profile</h2>
      {adminInfo ? (
        <ul>
          <li>
            <strong>First Name:</strong> {adminInfo.firstName}
          </li>
          <li>
            <strong>Last Name:</strong> {adminInfo.lastName}
          </li>
          <li>
            <strong>Surname:</strong> {adminInfo.surName}
          </li>
          <li>
            <strong>Email:</strong> {adminInfo.email}
          </li>
          <li>
            <strong>Status:</strong> {renderStatus(adminInfo.estatus)}
          </li>
        </ul>
      ) : (
        <p>No information available.</p>
      )}
    </div>
  );
};

export default AdminProfile;

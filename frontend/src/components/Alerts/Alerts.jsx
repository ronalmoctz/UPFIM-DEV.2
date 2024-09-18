import Swal from 'sweetalert2';

export const showAlert = (type, title, text) => {
  Swal.fire({
    icon: type,
    title: title,
    text: text,
  });
};

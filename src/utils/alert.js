import Swal from 'sweetalert2';

const AlertJS = {
     msg (message,icon){
        return Swal.fire({
            position: 'center',
            icon: `${icon}`,
            title: `${message}`,
            showConfirmButton: false,
            timer: 1500
          });
     },
}
export default AlertJS;
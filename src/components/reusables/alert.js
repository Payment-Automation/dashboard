import React from 'react'
import Swal from 'sweetalert2';

export const alert = (title, text, icon) => {
    return (Swal.fire({
        title: title,
        text: text,
        icon: icon,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 5000
    }))
}

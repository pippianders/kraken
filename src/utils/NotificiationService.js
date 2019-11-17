import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
    position: "bottom-left",
    autoClose: 5000,
    closeOnClick: true,
    hideProgressBar: true,
    pauseOnHover: false,
    draggable: false
})

const constantToastId = "toast-id"

const showNotification = (message, override) => {
    if (override)
        toast.error(message)
    else
        if (!toast.isActive(constantToastId))
            toast.error(message, { toastId: constantToastId })
}

const NotificationSerivce = {
    showNotification
}

export default NotificationSerivce;

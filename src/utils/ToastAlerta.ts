import { toast } from 'react-toastify';

const config = {
    position: 'top-right' as const,
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: 'light' as const,
    style: {
        borderRadius: '16px',
        fontWeight: '500',
        border: '2px solid #5B8F86',
        boxShadow: '0 8px 20px rgba(0,0,0,.12)',
    }
};

export function ToastAlerta(mensagem: string, tipo: string) {
    switch (tipo) {

        case 'sucesso':
            toast.success(mensagem, {
                ...config,
                style: {
                    ...config.style,
                    background: '#F1F5F4',
                    color: '#134E4A',
                },
                className: 'toast-sucesso',
            });
            break;

        case 'erro':
            toast.error(mensagem, {
                ...config,
                style: {
                    ...config.style,
                    background: '#FEF2F2',
                    color: '#7F1D1D',
                },
                className: 'toast-erro',
            });
            break;

        case 'info':
        default:
            toast.info(mensagem, {
                ...config,
                style: {
                    ...config.style,
                    background: '#F1F5F4',
                    color: '#134E4A',
                },
                className: 'toast-info',
            });
            break;
    }
}
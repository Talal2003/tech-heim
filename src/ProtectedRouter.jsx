import { Navigate } from 'react-router-dom';
import useAuthStore from './store/authStore';

export default function ProtectedRouter({ children }) {

    const token = useAuthStore(state => state.token);

    if (!token) {

        return <Navigate to='/login' />

    }

    return children;
}
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

export const ProductPage = () => {
    const { id } = useParams();
    const [params] = useSearchParams();

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    return (
        <div>Product Page {id || 1} {params.get('sort')}
            <button onClick={() => onLogout()}> Logout </button>
        </div>
    )
}
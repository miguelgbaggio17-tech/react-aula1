import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UsuarioDetalhe = () => {
    const { id } = useParams();
    const [usuario, setUsuario] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function buscarUsuario() {
            try {
                setCarregando(true);
                const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const jsonData = await data.json();
                setUsuario(jsonData);
            } catch (error) {
                console.error("Erro ao buscar usuário:", error);
            } finally {
                setCarregando(false);
            }
        }
        buscarUsuario();
    }, [id]);

    return (
        <div>
            <h2>Detalhes do Usuário</h2>
            {carregando ? (
                <p>Carregando...</p>
            ) : (
                <ul>
                    <li>Nome: {usuario.name}</li>
                    <li>E-mail: {usuario.email}</li>
                </ul>
            )}
        </div>
    )
}

export default UsuarioDetalhe
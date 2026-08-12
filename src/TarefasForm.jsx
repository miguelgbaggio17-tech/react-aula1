import { useState } from 'react';

const TarefasForm = ({ onAddTarefa }) => {
    const [tarefas, setTarefas] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (tarefas.trim()) {
            onAddTarefa(tarefas.trim());
            setTarefas('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={tarefas} placeholder='Digite sua tarefa' onChange={(e) => setTarefas(e.target.value)} />
            <button type="submit">Adicionar</button>
        </form>
    )
}

export default TarefasForm

import { useState } from "react";

const Paragrafo = () => {
    const [pontos, setPontos] = useState(0);

    return (
        <div>
            <p>FULANO tem {pontos} pontos.</p>
        </div>
    );
}
export default Paragrafo
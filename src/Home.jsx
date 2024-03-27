import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Home.css';

function Home() {
    const [clubes, setClubes] = useState([]);

    useEffect(() => {
        const fetchClubes = async () => {
            try {
                const response = await axios.get('https://api.cartola.globo.com/clubes');
                const data = response.data;
                console.log('Dados dos clubes:', data); // Adicionado para depuração
                setClubes(Object.values(data)); // Convertendo o objeto de clubes em uma matriz de valores
            } catch (error) {
                console.error('Erro ao buscar clubes:', error);
            }
        };

        fetchClubes();
    }, []);

    console.log('Estado dos clubes:', clubes); // Adicionado para depuração

    if (!Array.isArray(clubes) || clubes.length === 0) return "Carregando"; // Verificando se clubes é um array vazio

    return (
        <div>
            <h1>Clubes</h1>
            <ul>
                {clubes.map(clube => (
                    <li key={clube.id}>
                        <Link to={`/detalhes/${clube.id}`}>
                            <img src={clube.escudos['30x30']} alt={clube.nome} />
                            {clube.nome}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;

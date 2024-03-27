import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Detalhes() {
  const { id } = useParams();
  const [clube, setClube] = useState(null);

  useEffect(() => {
    const fetchClube = async () => {
      try {
        const response = await axios.get(`https://api.cartola.globo.com/clubes/${id}`);
        console.log("Detalhes do clube:", response.data); // Adicionando console.log
        setClube(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do clube:", error);
      }
    };

    fetchClube();
  }, [id]);

  if (!clube) return "Carregando";

  return (
    <>
      <h1>{clube.nome}</h1>
      <p><strong>Abreviação:</strong> {clube.abreviacao}</p>
      <p><strong>Apelido:</strong> {clube.apelido}</p>
      <p><strong>Nome Fantasia:</strong> {clube.nome_fantasia}</p>
      {/* Adicione aqui outras informações que deseja exibir */}
    </>
  );
}

export default Detalhes;

'use client';
import { useEffect, useState } from "react";
import instance from "@/services/api";

export default function TestConnection() {
  const [message, setMessage] = useState<string>("Carregando...");

  useEffect(() => {
    const testConnection = async () => {
      try {
        const response = await instance.get("/");
        setMessage(response.data.message || "Conexão com API realizada com sucesso no Front!");
      } catch (error: any) {
        console.error("Erro ao testar a conexão: ", error);
        setMessage("Erro ao conectar com a API");
      }
    };

    testConnection();
  }, []);

  return (
    <div>
      {message}
    </div>
  );
}
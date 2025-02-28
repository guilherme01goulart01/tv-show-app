import axios from "axios";

// Configuração global para evitar repetição
export const apiClient = axios.create({
  timeout: 5000, // Tempo máximo para requisição (melhor performance)
  headers: {
    "Content-Type": "application/json",
  },
});

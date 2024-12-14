import axios from "axios";

(async () => {
  try {
    const response = await axios.get("http://localhost:3000/users");
    console.log("Dados recebidos do servidor:");
    console.log(response.data);
  } catch (error) {
    console.error("Erro ao comunicar com o servidor:", error);
  }
})();

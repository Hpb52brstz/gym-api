import app from "./app.js";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("MongoDB conectado");
  const PORT = 3000;
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});
function status(request, response) {
  response.status(200).json({ chave: "Eu amo muito o meu amorzinho" });
}

export default status;

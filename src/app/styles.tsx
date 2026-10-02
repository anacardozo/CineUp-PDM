import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  ScrollView: {
    flex: 1,
  },
  botao: {
    backgroundColor: "#eac038",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  textoBotao: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 20,
  },
  botaoPressionado: {
    transform: [{ scale: 0.9 }],
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 40,
  },
  titulo: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#eac038",
    marginBottom: 10,
  },
  descricao: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 15,
    fontWeight: "500", // Ajustado para string para evitar erro no React Native
  },
  descricao2: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 15,
  },
  logo: {
    width: 140,
    height: 140,
  },

  // ESTILOS DA LISTA E DOS CARDS
  listaFilmes: {
    flex: 1,
    paddingHorizontal: 15,
  },
  linha: {
    justifyContent: "space-between",
  },
  itemFilme: {
    width: "48%",
    marginBottom: 10,
  },
  cardFilme: {
    width: "100%",
    marginBottom: 10,
  },
  imagemFilme: {
    width: "100%",
    height: 180,
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 15,
  },
  tituloFilme: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#d9ab14",
  },
  generoFilme: {
    fontSize: 16,
    fontWeight: "600",
  },
  anoFilme: {
    fontSize: 14,
    color: "#d9ab14",
  },
  botoesFilme: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  botaoDetalhes: {
    backgroundColor: "#eac038",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  textoBotaoDetalhes: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
  },
});

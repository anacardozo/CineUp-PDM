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
    alignItems: "center",
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
    opacity: 0.7,
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
    fontWeight: "500",
  },
  descricao2: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 15,
  },
  botoesInicio: {
    gap: 10,
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
    height: 370,
    marginBottom: 10,
    marginTop: 15,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    gap: 5,
    elevation: 8,
  },
  imagemFilme: {
    width: "100%",
    height: 220,
    borderRadius: 15,
    alignSelf: "center",
  },
  tituloFilme: {
    fontSize: 18,
    fontWeight: "700",
    color: "#d9ab14",
    marginHorizontal: 5,
  },
  generoFilme: {
    fontSize: 14,
    fontWeight: "500",
    marginHorizontal: 5,
  },
  anoFilme: {
    fontSize: 14,
    color: "#d9ab14",
    fontWeight: "normal",
    marginHorizontal: 5,
  },
  botoesFilme: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 5,
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
  containerDetalhes: {
    flex: 1,
    alignItems: "center",
    padding: 18,
    gap: 10,
  },
  cardDescricao: {
    width: "100%",
    gap: 26,
    paddingVertical: 10,
  },
  linhaImagem: {
    alignItems: "center"
  },
  imagemDescricao: {
    width: 200,
    height: 300,
    borderRadius: 12,
  },
  informacoesDescricao: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    elevation: 10,
    padding: 16,
    gap: 5,
  },
  tituloDescricao: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#eac038",
  },
  generoDescricao: {
    fontSize: 16,
    fontWeight: 500,
  },
  anoDescricao: {
    fontSize: 14,
    fontWeight: 500,
  },
  descricaoFilme: {
    fontSize: 14,
  },
  tituloDescricaoFilme: {
    fontWeight: 500,
    fontSize: 15,
  },
  botaoSobre: {
    backgroundColor: "#eac038",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  informacoesSobre: {
    width: "100%",
    backgroundColor: "#ffffff",
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 16,
    elevation: 10,
    padding: 16,
    gap: 5,
  },
  nomeAplicativo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#eac038",
  },
  finalidadeAplicativo: {
    fontSize: 14,
    fontWeight: 500,
  },
  versaoAplicativo: {
    fontSize: 14,
    fontWeight: 500,
  },
  nomeMateria: {
    fontSize: 14,
    fontWeight: 400,
  }
});

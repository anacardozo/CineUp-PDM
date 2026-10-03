import { View, Text, Image } from "react-native";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import Botao from "@/components/Botao";
import { styles } from "./styles";

export default function Sobre() {

  const [voltar, setVoltar] = useState(false);

  function voltarCatalogo() {
    setVoltar(true);
    router.push("/catalogo");
  }

  useEffect(() => {
    console.log("Catálogo de Filmes Carregado")
  }, [voltar])

  return (
    <View style={styles.containerDetalhes}>
      <Image
          source={require("../../assets/images/logo-mobile.png")}
          style={styles.logo}
          resizeMode="contain"
        />

      <View style={styles.informacoesSobre}>
        <Text style={styles.nomeAplicativo}>
          Nome: CineUp
        </Text>

        <Text style={styles.finalidadeAplicativo}>
          Finalidade: Essa aplicação tem como finalidade apresentar um catálogo de filmes
        </Text>

        <Text style={styles.versaoAplicativo}>
          Versão: 1.0
        </Text>

        <Text style={styles.nomeMateria}>
          Disciplina: PDM
        </Text>
      </View>
      <View />

      <Botao
        texto={voltar ? "Continuar" : "Catálogo"}
        onPress={voltarCatalogo}
        estilo={styles.botaoSobre}
      />

    </View>

  );

}

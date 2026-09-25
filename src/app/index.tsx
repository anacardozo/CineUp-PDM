import Botao from "@/components/Botao";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import { Button, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export default function Home() {
  const [iniciado, setIniciado] = useState(false);

  function iniciarAplicacao() {
    setIniciado(true);
    router.push("/catalogo");
  }

  useEffect(() => {
    console.log("Catálogo de Filmes Carregado")
  }, [iniciado])

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
          <Image
            source={require("../../assets/images/logo-mobile.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.titulo}>CineUp</Text>

          <Text style={styles.descricao}>Bem vindo ao CineUp!</Text>
          <Text style={styles.descricao2}>Veja os Últimos Lançamentos de Filmes no Cinema e Divirta-se!</Text>

          <Botao
            texto={iniciado ? "Continuar" : "Catálogo"}
            onPress={iniciarAplicacao}
          />
        </View>
    </SafeAreaView>
  );
}
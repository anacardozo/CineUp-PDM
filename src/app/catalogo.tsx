import Botao from "@/components/Botao";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import { Button, Image, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import CardFilme from "@/components/FilmeCard";

const Filmes = [
  {
    id: "1",
    titulo: "Interestelar",
    image: require("../../assets/images/capa-interestelar.jpg"),
    genero: "Ficção Científica",
    ano: 2014,
  },
  {
    id: "2",
    titulo: "A Hipótese do Amor",
    image: require("../../assets/images/capa-hipotese.jpg"),
    genero: "Romance",
    ano: 2026,
  },
  {
    id: "3",
    titulo: "Paranóia",
    image: require("../../assets/images/capa-paranoia.jpg"),
    genero: "Thriller",
    ano: 2007,
  },
  {
    id: "4",
    titulo: "Como eu era antes de você",
    image: require("../../assets/images/capa-antesdevoce.jpg"),
    genero: "Romance",
    ano: 2023,
  },
  {
    id: "5",
    titulo: "Gente Grande",
    image: require("../../assets/images/capa-gentegrande.jpg"),
    genero: "Comédia",
    ano: 2010,
  },
  {
    id: "6",
    titulo: "Pânico VI",
    image: require("../../assets/images/capa-panico.jpg"),
    genero: "Terror",
    ano: 2023,
  },
  {
    id: "7",
    titulo: "Minha Mãe É Uma Peça",
    image: require("../../assets/images/capa-mmeup.jpg"),
    genero: "Comédia",
    ano: 2013,
  },
  {
    id: "8",
    titulo: "Corra!",
    image: require("../../assets/images/capa-corra.jpg"),
    genero: "Terror",
    ano: 2017,
  },
];

export default function Home() {
  const [iniciado, setIniciado] = useState(false);

  function abrirDetalhes(titulo: string) {
    console.log(`Abrindo detalhes de: ${titulo}`);
  }

  return (
    <View style={styles.listaFilmes}>
      <FlatList
        data={Filmes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.linha}
        renderItem={({ item }) => (
          <View style={styles.itemFilme}>
            <CardFilme
              Titulo={item.titulo}
              Imagem={item.image}
              Genero={item.genero}
              Ano={item.ano}
              onVerDetalhes={() => abrirDetalhes(item.titulo)}
            />
          </View>
        )}
      />
    </View>
  );
}

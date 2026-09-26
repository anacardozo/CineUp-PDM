import Botao from "@/components/Botao";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  SectionList,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import CardFilme from "@/components/FilmeCard";

const generos = [
  {
    title: "Ficção Científica",
    data: [
      {
        id: "1",
        titulo: "Interestelar",
        image: require("../../assets/images/capa-interestelar.jpg"),
        ano: 2014,
      },
    ],
  },
  {
    title: "Romance",
    data: [
      {
        id: "2",
        titulo: "A Hipótese do Amor",
        ano: 2026,
        image: require("../../assets/images/capa-hipotese.jpg"),
      },
      {
        id: "4",
        titulo: "Como Eu Era Antes de Você",
        ano: 2016,
        image: require("../../assets/images/capa-antesdevoce.jpg"),
      },
    ],
  },
  {
    title: "Terror",
    data: [
      {
        id: "6",
        titulo: "Pânico VI",
        ano: 2023,
        image: require("../../assets/images/capa-panico.jpg"),
      },
      {
        id: "8",
        titulo: "Corra!",
        ano: 2017,
        image: require("../../assets/images/capa-corra.jpg"),
      },
    ],
  },
  {
    title: "Thriller",
    data: [
      {
        id: "3",
        titulo: "Paranóia",
        image: require("../../assets/images/capa-paranoia.jpg"),
        ano: 2007,
      },
    ],
  },
  {
    title: "Comédia",
    data: [
      {
        id: "5",
        titulo: "Gente Grande",
        image: require("../../assets/images/capa-gentegrande.jpg"),
        ano: 2010,
      },
      {
        id: "7",
        titulo: "Minha Mãe É Uma Peça",
        image: require("../../assets/images/capa-mmeup.jpg"),
        ano: 2013,
      },
    ],
  },
];

export default function Home() {
  const [iniciado, setIniciado] = useState(false);

  // function mudarFavorito() {
  //     setIsFavorito(!isFavorito);
  // }

  function abrirDetalhes() {
    console.log("Abrindo detalhes");
  }

  return (
    <ScrollView style={styles.ScrollView}>
      <View style={styles.listaFilmes}>
        <SectionList
          sections={generos}
          keyExtractor={(item) => item.id}
          renderSectionHeader={({section: {title} }) => (
            <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 8 }}>
            {title}
          </Text>
          )}
          renderItem={({ item, section }) => (
            <CardFilme
              Titulo={item.titulo}
              Imagem={item.image}
              Ano={item.ano}
              Genero={section.title}
              onVerDetalhes={abrirDetalhes}
            />
          )}
        />
      </View>
    </ScrollView>
  );
}


import { View, Text, Image } from "react-native";

import { useLocalSearchParams } from "expo-router";

import { useEffect, useState } from "react";

import { router } from "expo-router";

import Botao from "@/components/Botao";

import CardDescricao from "@/components/detalhesCard";

import { styles } from "./styles";

const Filmes = [
    {
        id: "1",
        titulo: "Interestelar",
        image: require("../../assets/images/capa-interestelar.jpg"),
        genero: "Ficção Científica",
        descricao: "Cooper, um ex-piloto da NASA, embarca em uma missão espacial através de um buraco de minhoca em busca de um novo planeta habitável para garantir a sobrevivência da humanidade.",
        ano: 2014,
    },

    {
        id: "2",
        titulo: "A Hipótese do Amor",
        image: require("../../assets/images/capa-hipotese.jpg"),
        genero: "Romance",
        descricao: "Olive finge estar em um relacionamento com o professor Adam Carlsen para convencer sua amiga de que está seguindo em frente. O namoro de mentira começa a se tornar algo real.",
        ano: 2026,
    },

    {
        id: "3",
        titulo: "Paranóia",
        image: require("../../assets/images/capa-paranoia.jpg"),
        genero: "Thriller",
        descricao: "Em prisão domiciliar, Kale passa a observar seus vizinhos pela janela e começa a suspeitar que um deles seja um perigoso assassino. Agora, ele precisa descobrir a verdade.",
        ano: 2007,
    },

    {
        id: "4",
        titulo: "Como eu era antes de você",
        image: require("../../assets/images/capa-antesdevoce.jpg"),
        genero: "Romance",
        descricao: "Louisa é contratada para cuidar de Will, um homem que ficou tetraplégico após um acidente. A convivência entre os dois cria uma forte conexão e transforma a maneira como enxergam a vida.",
        ano: 2023,
    },

    {
        id: "5",
        titulo: "Gente Grande",
        image: require("../../assets/images/capa-gentegrande.jpg"),
        genero: "Comédia",
        descricao: "Cinco amigos de infância se reencontram para passar um fim de semana com suas famílias. Entre brincadeiras, provocações e lembranças, eles percebem que a amizade continua forte.",
        ano: 2010,
    },

    {
        id: "6",
        titulo: "Pânico VI",
        image: require("../../assets/images/capa-panico.jpg"),
        genero: "Terror",
        descricao: "Sam, Tara e seus amigos tentam recomeçar a vida em Nova York, mas um novo Ghostface começa a persegui-los. O grupo precisa descobrir quem está por trás da máscara para sobreviver.",
        ano: 2023,
    },

    {
        id: "7",
        titulo: "Minha Mãe É Uma Peça",
        image: require("../../assets/images/capa-mmeup.jpg"),
        genero: "Comédia",
        descricao: "Dona Hermínia se sente magoada ao ouvir os filhos reclamando de seu jeito controlador e decide sair de casa. Enquanto isso, eles percebem a importância dela para a família.",
        ano: 2013,
    },

    {
        id: "8",
        titulo: "Corra!",
        image: require("../../assets/images/capa-corra.jpg"),
        genero: "Terror",
        descricao: "Chris visita a família de sua namorada e começa a perceber comportamentos estranhos. Aos poucos, ele descobre um segredo sombrio que transforma a visita em uma luta pela sobrevivência.",
        ano: 2017,
    },
];

export default function DetalhesFilme() {

    const { id, favorito } = useLocalSearchParams();

    const filmeSelecionado = Filmes.find((filme) => filme.id === id);

    const isFilmeFavorito = favorito === 'true';

    if (!filmeSelecionado) {

        return (
            <View>
                <Text>Filme não encontrado!</Text>
            </View>
        );
    }

    const [sobreIniciado, setSobreIniciado] = useState(false);

    function iniciarSobre() {
        setSobreIniciado(true);
        router.push("/sobre");
    }

    useEffect(() => {
        console.log("Sobre o Aplciativo Carregado")
    }, [sobreIniciado])

    return (
            <View style={styles.containerDetalhes}>
                <CardDescricao
                    Imagem={filmeSelecionado.image}
                    Titulo={filmeSelecionado.titulo}
                    Descricao={filmeSelecionado.descricao}
                    Ano={filmeSelecionado.ano}
                    Genero={filmeSelecionado.genero}
                    Status={isFilmeFavorito}
                />

                <Botao
                    texto={sobreIniciado ? "Continuar" : "Sobre"}
                    onPress={iniciarSobre}
                    estilo={styles.botaoSobre}
                />

            </View>

    );

}

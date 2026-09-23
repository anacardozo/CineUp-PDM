import Botao from "@/components/Botao";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import { Button, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import CardFilme from "@/components/FilmeCard";

export default function Home() {
    const [iniciado, setIniciado] = useState(false);
    const [isFavorito, setIsFavorito] = useState(false);

    function mudarFavorito() {
        setIsFavorito(!isFavorito);
    }

    function abrirDetalhes(){
        console.log("Abrindo detalhes")
    }

    return (
        <ScrollView style={styles.ScrollView}>
            <View style={styles.listaFilmes}>
                <CardFilme
                    Titulo="Interestelar"
                    Imagem={require("../../assets/images/capa-interestelar.jpg")}
                    Genero="Ficção Científica"
                    Ano={2014}
                    Status={isFavorito}
                    onToggleFavorito={() => mudarFavorito()}
                    onVerDetalhes={abrirDetalhes}
                />
                <CardFilme
                    Titulo="Interestelar"
                    Imagem={require("../../assets/images/capa-interestelar.jpg")}
                    Genero="Ficção Científica"
                    Ano={2014}
                    Status={isFavorito}
                    onToggleFavorito={() => mudarFavorito()}
                    onVerDetalhes={abrirDetalhes}
                />
                <CardFilme
                    Titulo="Interestelar"
                    Imagem={require("../../assets/images/capa-interestelar.jpg")}
                    Genero="Ficção Científica"
                    Ano={2014}
                    Status={isFavorito}
                    onToggleFavorito={() => mudarFavorito()}
                    onVerDetalhes={abrirDetalhes}
                />
                <CardFilme
                    Titulo="Interestelar"
                    Imagem={require("../../assets/images/capa-interestelar.jpg")}
                    Genero="Ficção Científica"
                    Ano={2014}
                    Status={isFavorito}
                    onToggleFavorito={() => mudarFavorito()}
                    onVerDetalhes={abrirDetalhes}
                />
            </View>
        </ScrollView>
    );
}
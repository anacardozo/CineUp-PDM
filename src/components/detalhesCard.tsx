import { Text, View, Image, Pressable, ImageSourcePropType } from "react-native";
import { styles } from "@/app/styles";
import { router } from "expo-router";
import Botao from "./Botao";
import { useState, useEffect } from "react";

interface CardDescricaoProp {
    Titulo: string;
    Imagem: ImageSourcePropType;
    Genero: string;
    Descricao: string;
    Ano: number;
    Status?: boolean;
}


export default function CardDescricao({
    Titulo,
    Imagem,
    Genero,
    Descricao,
    Ano,
    Status,
}: CardDescricaoProp) {


    return (
        <View style={styles.cardDescricao}>
            <View style={styles.linhaImagem}>
                <Image
                    style={styles.imagemDescricao}
                    source={Imagem}
                    resizeMode="cover"
                />
            </View>

            <View style={styles.informacoesDescricao}>
                <Text style={styles.tituloDescricao}>
                    Titulo: {Titulo}
                </Text>

                <Text style={styles.generoDescricao}>
                    Genêro: {Genero}
                </Text>

                <Text style={styles.anoDescricao}>
                    Ano: {Ano}
                </Text>

                {Status && (
                    <Text style={{
                        fontWeight: 'bold',
                        color: '#eac038',
                        marginVertical: 8
                    }}>
                        ⭐ Classificado como favorito
                    </Text>
                )}

                <Text style={styles.descricaoFilme}>
                    <Text style={styles.tituloDescricaoFilme}>Descrição: </Text>
                    {Descricao}
                </Text>
            </View>

        </View>

    )
}
import { Text, View, Image, Pressable, ImageSourcePropType } from "react-native";
import { styles } from "@/app/styles";
import { FontAwesome } from '@expo/vector-icons'
import Botao from "./Botao";
import { useState } from "react";

interface CardFilmeProp {
    Titulo: string;
    Imagem: ImageSourcePropType;
    Genero: string;
    Ano: number;
    Status?: boolean;
    onVerDetalhes: (isFavorito:boolean) => void;
}


export default function CardFilme({
    Titulo,
    Imagem,
    Genero,
    Ano,
    Status,
    onVerDetalhes,
}: CardFilmeProp) {

    const [isFavorito, setIsFavorito] = useState(false);

    return (
        <View style={styles.cardFilme}>
            <Image
                style={styles.imagemFilme}
                source={ Imagem }
                resizeMode="cover"
            />

            <Text style={styles.tituloFilme}>
                {Titulo}
            </Text>

            <Text style={styles.generoFilme}>
                {Genero}
            </Text>

            <Text style={styles.anoFilme}>
                {Ano}
            </Text>

            <View style={styles.botoesFilme}>
                <Pressable onPress={() => setIsFavorito(!isFavorito)}>
                    <FontAwesome
                        name={isFavorito ? "star" : "star-o"}
                        size={24}
                        color={isFavorito ? "#eac038" : "gray"}
                    />
                </Pressable>

                <Botao
                    texto={"Detalhes"}
                    onPress={() => onVerDetalhes(isFavorito)}
                    estilo={styles.botaoDetalhes}
                    estiloTexto={styles.textoBotaoDetalhes}
                />

            </View>

        </View>
    )
}
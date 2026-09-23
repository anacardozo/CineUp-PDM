import { Text, View, Image, Pressable, ImageSourcePropType } from "react-native";
import { styles } from "@/app/styles";
import { FontAwesome } from '@expo/vector-icons'
import Botao from "./Botao";

interface CardFilmeProp {
    Titulo: string;
    Imagem: ImageSourcePropType;
    Genero: string;
    Ano: number;
    Status?: boolean;
    onToggleFavorito?: () => void;
    onVerDetalhes: () => void;
}

export default function CardFilme({
    Titulo,
    Imagem,
    Genero,
    Ano,
    Status,
    onToggleFavorito,
    onVerDetalhes,
}: CardFilmeProp) {
    return (
        <View style={styles.cardFilme}>
            <Image
                style={styles.imagemFilme}
                source={ Imagem }
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
                <Pressable onPress={onToggleFavorito}>
                    <FontAwesome
                        name={Status ? "star" : "star-o"}
                        size={24}
                        color={Status ? "#eac038" : "gray"}
                    />
                </Pressable>

                <Botao
                    texto={"Detalhes"}
                    onPress={onVerDetalhes}
                    cor="#2563EB"
                />

            </View>

        </View>
    )
}
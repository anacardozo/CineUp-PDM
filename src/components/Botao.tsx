import { Pressable, Text } from "react-native";
import { styles } from "@/app/styles";

interface BotaoProps{
    texto: string;
    onPress: () => void;
    cor?: string;
}

export default function Botao ({
    texto,
    onPress,
    cor = "#bc781e",
}: BotaoProps){
    return(
        <Pressable
            style={({pressed}) => [
                styles.botao,
                pressed && styles.botaoPressionado,
                {backgroundColor: cor}
            ]}
            onPress={onPress}
        >
            <Text style={styles.textoBotao}>{texto}</Text>
        </Pressable>
    )
}
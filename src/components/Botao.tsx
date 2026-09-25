import { Pressable, Text, StyleProp, TextStyle, } from "react-native";
import { styles } from "@/app/styles";

interface BotaoProps{
    texto: string;
    onPress: () => void;
    estilo?: any;
    estiloTexto?: StyleProp<TextStyle>;
}

export default function Botao ({
    texto,
    onPress,
    estilo,
    estiloTexto,
}: BotaoProps){
    return(
        <Pressable
            style={({pressed}) => [
                styles.botao,
                estilo,
                pressed && styles.botaoPressionado,
            ]}
            onPress={onPress}
        >
            <Text style={[styles.textoBotao, estiloTexto]}>{texto}</Text>
        </Pressable>
    )
}
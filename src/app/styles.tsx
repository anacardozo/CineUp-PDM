import CardFilme from "@/components/FilmeCard";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    ScrollView:{
        flex: 1,
    },
    botao:{
        backgroundColor: '#eac038',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
        marginTop: 10,
    },
    textoBotao:{
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 18
    },
    botaoPressionado:{
        backgroundColor: '#165626',
        transform: [{ scale: 0.9 }]
    },
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingHorizontal: 40,
        // gap: 10
    },
    titulo:{
        fontSize: 34,
        fontWeight: "bold",
        color: '#eac038',
        marginBottom: 10,
    },
    descricao:{
        fontSize: 18,
        textAlign: "center",
        marginBottom: 5,
        fontWeight: 500
    },
    descricao2:{
        fontSize: 18,
        textAlign: "center",
        marginBottom: 5,
    },
    logo:{
        width: 140,
        height: 140,
    },
    // estilo do card do filme
    listaFilmes:{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: 10,
        gap: 10,
    },
    cardFilme:{
        width: "48%",
        borderRadius: 10,
        gap: 5,
    },
    imagemFilme:{
        width: "100%",
        height: 148,
    }
})
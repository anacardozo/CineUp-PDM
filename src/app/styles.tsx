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
        // marginTop: 10,
    },
    textoBotao:{
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20
    },
    botaoPressionado:{
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
        marginBottom: 15,
        fontWeight: 500
    },
    descricao2:{
        fontSize: 18,
        textAlign: "center",
        marginBottom: 15,
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
        // gap: 10,
    },
    cardFilme:{
        width: "48%",
        borderRadius: 10,
        marginBottom: 20,
        gap: 5,
    },
    imagemFilme:{
        width: "100%",
        height: 220,
        borderRadius: 20,
        alignSelf: "center",
        // aspectRatio: 1,
        marginTop: 5,
    },
    tituloFilme:{
        fontSize: 20,
        fontWeight: "bold",
    },
    generoFilme:{
        fontSize: 16,
        fontWeight: "semibold",
    },
    anoFilme:{
        fontSize: 14,
        color:"#d9ab14ff"
    },
    botoesFilme:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    botaoDetalhes:{
        backgroundColor: '#eac038',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    textoBotaoDetalhes: {
        fontSize: 14, 
        fontWeight: '500', 
        color: '#000000',
    }

})
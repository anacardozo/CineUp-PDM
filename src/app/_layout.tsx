import { Stack } from "expo-router"

export default function Layout(){
    return(
        <Stack>
            <Stack.Screen
            name="index"
            options={{title: "CineUp"}}
            />
            <Stack.Screen
            name="catalogo"
            options={{title: "Catálogo"}}
            />
        </Stack>
    )
}
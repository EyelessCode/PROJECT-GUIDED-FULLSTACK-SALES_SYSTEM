import {create} from "zustand"
import {Light,Dark} from "../styles/Themes"

const useThemeStore=create((set,get)=>({
    theme:"light",
    themeStyle:Light,
    setTheme:()=>{
        const {theme}=get();
        set({theme:theme==="light"?"dark":"light"})
        set({themeStyle:theme==="dark"?"light":"dark"})

    }
}))

export {useThemeStore}

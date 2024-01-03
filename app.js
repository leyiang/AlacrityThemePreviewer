const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        const colorList = ref({
                cursor: "#434343",
                text: "#F7F7F7",

                blackL: "#777777",
                blueL: "#007ACC",
                cyanL: "#00AACB",
                greenL: "#60CB00",
                magentaL: "#E64CE6",
                redL: "#F05050",
                whiteL: "#FFFFFF",
                yellowL: "#FFBC5D",

                black: "#000000",
                blue: "#325CC0",
                cyan: "#0083B2",
                green: "#448C27",
                magenta: "#7A3E9D",
                red: "#AA3731",
                white: "#BBBBBB",
                yellow: "#CB9000",

                background: "#fffae8",
                foreground: "#46433c",
        });

        const displayList = ref([
            { code: "039", name: "Default", bg: "", text: "foreground", pointer: "foreground" },
            { code: "030", name: "Black", bg: "", text: "black", pointer: "black" },
            { code: "031", name: "Red", bg: "", text: "red", pointer: "red" },
            { code: "032", name: "Green", bg: "", text: "green", pointer: "green" },
            { code: "033", name: "Yellow", bg: "", text: "yellow", pointer: "yellow" },
            { code: "034", name: "Blue", bg: "", text: "blue", pointer: "blue" },
            { code: "035", name: "Magenta", bg: "", text: "magenta", pointer: "magenta" },
            { code: "036", name: "Cyan", bg: "", text: "cyan", pointer: "cyan" },

            { code: "049", name: "Default", bg: "", text: "foreground", pointer: "foreground" },
            { code: "040", name: "Black", bg: "black", text: "foreground", pointer: "black"},
            { code: "041", name: "Red", bg: "red", text: "foreground", pointer: "red"},
            { code: "042", name: "Green", bg: "green", text: "foreground", pointer: "green"},
            { code: "043", name: "Yellow", bg: "yellow", text: "foreground", pointer: "yellow"},
            { code: "044", name: "Blue", bg: "blue", text: "foreground", pointer: "blue"},
            { code: "045", name: "Magenta", bg: "magenta", text: "foreground", pointer: "magenta"},
            { code: "046", name: "Cyan", bg: "cyan", text: "foreground", pointer: "cyan"},

            { code: "039", name: "Light gray", bg: "", text: "white", pointer: "white" },
            { code: "030", name: "Dark gray", bg: "", text: "blackL", pointer: "blackL" },
            { code: "031", name: "Light red", bg: "", text: "redL", pointer: "redL" },
            { code: "032", name: "Light green", bg: "", text: "greenL", pointer: "greenL" },
            { code: "033", name: "Light yellow", bg: "", text: "yellowL", pointer: "yellowL" },
            { code: "034", name: "Light blue", bg: "", text: "blueL", pointer: "blueL" },
            { code: "035", name: "Light magenta", bg: "", text: "magentaL", pointer: "magentaL" },
            { code: "036", name: "Light cyan", bg: "", text: "cyanL", pointer: "cyanL" },

            { code: "049", name: "Light gray", bg: "white", text: "foreground" , pointer: "white" },
            { code: "040", name: "Dark gray", bg: "blackL", text: "foreground" , pointer: "blackL"},
            { code: "041", name: "Light red", bg: "redL", text: "foreground" , pointer: "red"},
            { code: "042", name: "Light green", bg: "greenL", text: "foreground" , pointer: "green"},
            { code: "043", name: "Light yellow", bg: "yellowL", text: "foreground" , pointer: "yellow"},
            { code: "044", name: "Light blue", bg: "blueL", text: "foreground" , pointer: "blue"},
            { code: "045", name: "Light magenta", bg: "magentaL", text: "foreground" , pointer: "magenta"},
            { code: "046", name: "Light cyan", bg: "cyanL", text: "foreground" , pointer: "cyan"},
        ]);

        const config = computed(() => {
            let configText = "";

            configText += "[colors.bright]\n";
            configText += `black = "${ colorList.value.blackL }"\n`
            configText += `blue = "${ colorList.value.blueL }"\n`
            configText += `cyan = "${ colorList.value.cyanL }"\n`
            configText += `green = "${ colorList.value.greenL }"\n`
            configText += `magenta = "${ colorList.value.magentaL }"\n`
            configText += `red = "${ colorList.value.redL }"\n`
            configText += `white = "${ colorList.value.whiteL }"\n`
            configText += `yellow = "${ colorList.value.yellowL }"\n`
            configText += "\n";

            configText += "[colors.normal]\n";
            configText += `cursor = "${ colorList.value.cursor }"\n`
            configText += `text = "${ colorList.value.text }"\n`
            configText += "\n";

            configText += "[colors.normal]\n";
            configText += `black = "${ colorList.value.black }"\n`
            configText += `blue = "${ colorList.value.blue }"\n`
            configText += `cyan = "${ colorList.value.cyan }"\n`
            configText += `green = "${ colorList.value.green }"\n`
            configText += `magenta = "${ colorList.value.magenta }"\n`
            configText += `red = "${ colorList.value.red }"\n`
            configText += `white = "${ colorList.value.white }"\n`
            configText += `yellow = "${ colorList.value.yellow }"\n`
            configText += "\n";

            configText += "[colors.primary]\n";
            configText += `background = "${ colorList.value.background }"\n`
            configText += `foreground = "${ colorList.value.foreground }"\n`

            return configText;
        });

        const importText = ref("");

        const importTheme = () => {
            const text = importText.value;
            console.log(text);
        }

        return {
            config,
            importText,
            importTheme,
            colorList,
            displayList,
        }
    }
}).mount("#app");

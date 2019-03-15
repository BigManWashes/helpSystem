export default {
    dest: "/dist",
    title: "Big Man Help System",
    description: "Big Man Washes internal help system",
    public: "/public",
    menu: ["Home"],
    themeConfig: {
        logo: {
            src: "/public/img/logo.png",
            width: 232,
            display: "block",
            margin: "auto"
        },
        colors: {
            primary: "#003366",
            secondary: "#ffc237",
            grey: "#323840g"
        },
        styles: {
            body: {

            },
            h1: {
                fontFamily: "Roboto, Helvetica, Sans Serif",
                fontSize: "16"
            },
            h2: {
                fontFamily: "Roboto, Helvetica, Sans Serif",
                fontSize: "13"
            },
            h3: {
                fontFamily: "Roboto, Helvetica, Sans Serif",
                fontSize: "1"
            }
        }
    }
};
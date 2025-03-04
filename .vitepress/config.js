export default {
    title: "FlexForm",
    base: "db_group_A_lab1", 
    themeConfig: {
        nav: [
            { text: "Головна", link: "/" },
            { text: "Зміст", link: "/zmist" },
            { text: "Автори", link: "/autors" },
        ],
        sidebar: [
            { text: 'Головна', link: '/' },
            { text: 'Зміст', link: '/zmist' },
            { text: 'Аналіз предметної області', link: '/analysis' },
            { text: 'Призначення розроблюваної системи', link: '/appointment' },
            { text: 'Аналіз зацікавлених осіб для системи організації та управління опитуваннями експертів', link: '/interested_parties' },
            { text: 'Автори', link: '/autors' },
        ],
    },
};

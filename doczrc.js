export default {
    dest: '/dist',
    title: 'Big Man Help System',
    description: 'Big Man Washes internal help system',
    public: '/public',
    menu: [
        'Home',
        'Hydraulics',
        {
            name: 'Controls',
            menu: [
                'VFDs',
                'Tunnel Controller'
            ]
        }
    ],
    themeConfig: {
        logo: {
            src: '/public/img/logo.png',
            width: 232,
            display: 'block',
            margin: 'auto'
        },
        colors: {
            primary: '#003366',
            secondary: '#ffc237',
            grey: '#323840g'
        },
        styles: {
            h1: {
                font: 'Calibri',
                fontSize: '14',
            },
        }
    }

}
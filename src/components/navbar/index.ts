export const menuItems = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'About',
        url: '/about'
    },
    {
        name: 'Services',
        subItems: [
            {
                name: 'Web Development',
                url: '/web-development'
            },
            {
                name: 'Mobile Development',
                url: '/mobile-development'
            },
            {
                name: 'Desktop Development',
                url: '/desktop-development'
            }
        ],
        url: '/services'
    },
    {
        name: 'Projects',
        subItems: [
            {
                name: 'Fullstack Projects',
                url: '/fullstack-projects'
            },
            {
                name: 'Machine Learning Projects',
                url: '/machine-learning-projects'
            }
        ],
        url: '/projects'
    },
    {
        name: 'Contact',
        url: '/contact'
    }
]
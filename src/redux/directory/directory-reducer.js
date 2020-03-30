const INITIAL_STATE = {
    sections: [
        {
            title: 'WEAVING YARN',
            imageUrl: 'https://i.imgur.com/M1iKf6p.jpg',
            id: 1,
            linkUrl: 'shop/weaving'
        }, {
            title: 'ACCESSORIES',
            imageUrl: 'https://i.imgur.com/ugwvI3q.jpg',
            id: 2,
            linkUrl: 'shop/accessories'
        }, {
            title: 'SALE',
            imageUrl: 'https://i.imgur.com/7OCetNW.jpg',
            id: 3,
            linkUrl: 'shop/sale'
        }, {
            title: 'YARN',
            imageUrl: 'https://i.imgur.com/LYbhmjO.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/yarn'
        }, {
            title: 'FIBER',
            imageUrl: 'https://i.imgur.com/3TlIaKx.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/fiber'
        }, 
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer
import React from 'react'

import MenuItem from '../menu-item/menu-item'

import './directory-styles.scss'

class Directory extends React.Component {
    constructor(){
        super()

        this.state = {
            sections: [
                {
                    title: 'WEAVING YARN',
                    imageUrl: 'https://i.imgur.com/M1iKf6p.jpg',
                    id: 1,
                    linkUrl: '/weaving'
                }, {
                    title: 'ACCESSORIES',
                    imageUrl: 'https://i.imgur.com/ugwvI3q.jpg',
                    id: 2,
                    linkUrl: '/accessories'
                }, {
                    title: 'SALE',
                    imageUrl: 'https://i.imgur.com/7OCetNW.jpg',
                    id: 3,
                    linkUrl: '/sale'
                },
                {
                    title: 'YARN',
                    imageUrl: 'https://i.imgur.com/LYbhmjO.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: '/yarn'
                }, {
                    title: 'FIBER',
                    imageUrl: 'https://i.imgur.com/3TlIaKx.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: '/fiber'
                }, 
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        )
    }
}

export default Directory
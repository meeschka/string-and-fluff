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
                    id: 3
                }, {
                    title: 'ACCESSORIES',
                    imageUrl: 'https://i.imgur.com/ugwvI3q.jpg',
                    id: 4
                }, {
                    title: 'SALE',
                    imageUrl: 'https://i.imgur.com/7OCetNW.jpg',
                    id: 5
                },
                {
                    title: 'YARN',
                    imageUrl: 'https://i.imgur.com/LYbhmjO.jpg',
                    size: 'large',
                    id: 1
                }, {
                    title: 'ROVING',
                    imageUrl: 'https://i.imgur.com/3TlIaKx.jpg',
                    size: 'large',
                    id: 2
                }, 
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({title, imageUrl, size, id}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))}
            </div>
        )
    }
}

export default Directory
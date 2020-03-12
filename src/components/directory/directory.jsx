import React from 'react'

import MenuItem from '../menu-item/menu-item'

import './directory-styles.scss'

class Directory extends React.Component {
    constructor(){
        super()

        this.state = {
            sections: [
                {
                    title: 'YARN',
                    imageUrl: 'https://i.imgur.com/LYbhmjO.jpg',
                    id: 1
                }, {
                    title: 'ROVING',
                    imageUrl: 'https://i.imgur.com/3TlIaKx.jpg',
                    id: 2
                }, {
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
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({title, imageUrl, id}) => (
                    <MenuItem key={id} title={title} />
                ))}
            </div>
        )
    }
}

export default Directory
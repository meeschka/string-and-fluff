import React from 'react'

import SHOP_DATA from '../../shopData.js'

import CollectionPreview from '../../components/collection-preview/collection-preview.jsx'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state
        return (
            <div className='shop-page'>
                <h1>Shop Page</h1>
                {collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        )
    }
}

export default ShopPage
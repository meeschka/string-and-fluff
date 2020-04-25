import React from 'react'

import './collection-preview-styles.scss'

import CollectionItem from '../collection-item/collection-item'

const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <div className='collection-preview'>
        <h1 className='preview-title' onClick={() => history.push(`${match.path}/${routeName}`)}>
            {title.toUpperCase()}
        </h1>
        <div className='preview-row'>
            {items
                .filter((item, idx) => idx < 4)
                .map((item) =>
                    <CollectionItem key={item.id} item={item} />
                )}
        </div>
    </div>
)

export default CollectionPreview
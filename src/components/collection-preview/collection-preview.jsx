import React from 'react'

import './collection-preview-styles.scss'

import CollectionItem from '../collection-item/collection-item'

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='preview-title'>{title.toUpperCase()}</h1>
        <div className='preview-row'>
            {items
                .filter((item, idx) => idx < 4)
                .map(({ id, ...itemProps}) =>
                    <CollectionItem key={id} {...itemProps} />
                )}
        </div>
    </div>
)

export default CollectionPreview
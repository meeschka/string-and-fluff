import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './collections-overview-styles.scss'

import { selectCollectionsForPreview } from '../../redux/shop/shop-selectors'
import CollectionPreview from '../collection-preview/collection-preview'

const CollectionsOverview = (props) => (
    <div className='collections-overview'>
        {console.log(props)}
        {props.collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} {...props} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
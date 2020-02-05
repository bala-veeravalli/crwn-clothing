import React from 'react';
import { Route } from "react-router-dom";
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";
import { updateCollections } from '../../redux/shop/shop.actions';
import { connect } from "react-redux";

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;
    componentDidMount () {
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionSnapshotToMap(snapshot);
            console.log({collectionMap});
            this.props.updateCollections(collectionMap);
        });
    }
    render () {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);
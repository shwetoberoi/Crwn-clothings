import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.conatiner";
import CollectionPageContainer from "../collection/collection.container";

import { fetchingCollectionsStart } from "../../redux/shop/shop.actions.js";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchingCollectionsStart } = this.props;
    fetchingCollectionsStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchingCollectionsStart: () => dispatch(fetchingCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

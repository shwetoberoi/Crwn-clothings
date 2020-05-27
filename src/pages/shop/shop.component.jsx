import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.conatiner";
import CollectionPageContainer from "../collection/collection.container";

import { fetchingCollectionsStart } from "../../redux/shop/shop.actions.js";

const ShopPage = ({ fetchingCollectionsStart, match }) => {
  useEffect(() => {
    fetchingCollectionsStart();
  }, [fetchingCollectionsStart]);

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
};

const mapDispatchToProps = (dispatch) => ({
  fetchingCollectionsStart: () => dispatch(fetchingCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

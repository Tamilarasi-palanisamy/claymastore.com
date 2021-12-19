import React, { Suspense, lazy } from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { GlobalCartContextProvider } from "./context/CartContext";
import { ToastProvider } from "react-toast-notifications";
import loadingIcon from "./assets/images/dashboardloader3.gif";
const Homepage = lazy(() => import("./Components/Homepage"));
const Shopping = lazy(() => import("./Components/Shopping"));
const Cart = lazy(() => import("./Components/Cart/Cart"));
const Catalog = lazy(() => import("./Components/Catalog"));

const SearchProducts = lazy(() => import("./Components/SearchProducts"));
const signIn = lazy(() => import("./Components/signIn"));
const signup = lazy(() => import("./Components/signup"));
const PageNotFound = lazy(() => import("./Components/PageNotFound"));
const Checkout = lazy(() => import("./Components/Checkout/ShippingAddressScreen"));
const PaymentMethod = lazy(() => import("./Components/Checkout/PaymentMethodScreen"));
const PlaceOrder= lazy(() => import("./Components/Checkout/PlaceOrderScreen")); 

function App() {
  return (
    <GlobalCartContextProvider>
      <ToastProvider>
        <Router>
          <Suspense
            fallback={
              <img src={loadingIcon} alt="loading" className="loadingIcon" />
            }
          >
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/shop" component={Shopping} />
              <Route exact path="/search" component={SearchProducts} />
              <Route exact path="/signIn" component={signIn} />
              <Route exact path="/signup" component={signup} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/payment" component={PaymentMethod} />
              <Route exact path="/trend/:collectionname" component={Shopping} />
              <Route exact path="/collections" component={Shopping} />
              <Route exact path="/placeorder" component={PlaceOrder}  />

              <Route
                exact
                path="/collections/:collectionname"
                component={Shopping}
              />
              <Route
                exact
                path="/catalog/item/:id/:productname/:action"
                component={Catalog}
              />

              <Route component={PageNotFound} />
            </Switch>
          </Suspense>
        </Router>
      </ToastProvider>
    </GlobalCartContextProvider>
  );
}

export default App;

import React, { useCallback, useEffect } from "react";
import { getParts } from "./features/builder/builderSlice";
import { useAppDispatch } from "./app/hooks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BuilderPage from "./features/builder/BuilderPage";
import CartPage from "./features/myCart/CartPage";
import CounterPage from "./features/counter/CounterPage";

function App() {
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getParts());
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, [initApp]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BuilderPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

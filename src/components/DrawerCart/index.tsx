import React, { Fragment, useEffect, useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { getToggleCart } from "@/redux/selectors/selectors";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_CART } from "@/redux/actions/actions";
import { ContentFooterCart, ContentHeaderCart, ContentProductsCart, ContentTotalCart, ContentButtonCart, TitleCart } from "./styles";

export function DrawerCart() {
  const [openLeft, setOpenLeft] = useState(false);

  const toggleCart = useSelector(getToggleCart);
  const dispatch = useDispatch();

  const closeDrawerLeft = () => {
    dispatch({ type: TOGGLE_CART, payload: false });
  };

  useEffect(() => {
    setOpenLeft(toggleCart);
  }, [toggleCart]);


  return (
    <Fragment>
      <Drawer
        placement="right"
        open={openLeft}
        onClose={closeDrawerLeft}
        className="pt-4 bg-[#0F52BA] flex flex-col justify-between"

        size={450}
      >
        <div className="p-4">
          <ContentHeaderCart>
            <TitleCart>
              Carrinho de compras
            </TitleCart>
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={closeDrawerLeft}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-7 w-7 bg-blue-gray-900 rounded-full p-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </ContentHeaderCart>
          <ContentProductsCart className="mb-8 pr-4 font-normal">
            Material Tailwind features multiple React and HTML components, all
            written with Tailwind CSS classes and Material Design guidelines.
          </ContentProductsCart>
        </div>
        <ContentFooterCart>
          <ContentTotalCart>
            Total:  <span>R$4000</span>
          </ContentTotalCart>
        <ContentButtonCart>Finalizar Compra</ContentButtonCart>
        </ContentFooterCart>
      </Drawer>
    </Fragment>
  );
}
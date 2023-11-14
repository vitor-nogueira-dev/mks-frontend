import React, { Fragment, useEffect, useState } from "react";
import {
  Drawer,
  IconButton,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";

import { IProduct } from "@/interfaces/IProduct";
import { getToggleCart } from "@/redux/selectors/selectors";
import { TOGGLE_CART } from "@/redux/actions/actions";
import { formatPriceListProducts } from "@/services/formatNumber";
import ProductCart from "../ProductCart";
import { ContentFooterCart, ContentHeaderCart, ContentProductsCart, ContentTotalCart, ContentButtonCart, TitleCart } from "./styles";

function DrawerCart({ productsCart, totalPrice }: { productsCart: IProduct[], totalPrice: number }) {
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
              color="white"
              onClick={closeDrawerLeft}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-7 w-7 bg-black rounded-full p-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </ContentHeaderCart>
          <ContentProductsCart >
            <ProductCart productsCart={productsCart} />
          </ContentProductsCart>
        </div>
        <ContentFooterCart>
          <ContentTotalCart>
            Total:  <span>{formatPriceListProducts(totalPrice)}</span>
          </ContentTotalCart>
          <ContentButtonCart>Finalizar Compra</ContentButtonCart>
        </ContentFooterCart>
      </Drawer>
    </Fragment>
  );
}

export default DrawerCart;
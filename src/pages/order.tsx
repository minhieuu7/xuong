import useCart from "@/hooks/useCart";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const OrderPage = () => {
    const { data } = useCart();
    console.log(data);
    return <div>order</div>;
};

export default OrderPage;

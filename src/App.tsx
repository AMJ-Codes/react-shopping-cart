import { useState } from "react";
import { useQuery } from 'react-query';
// Components
import  Drawer from "@material-ui/core/Drawer";
import  LinearProgress  from "@material-ui/core/LinearProgress";
import  Grid  from '@material-ui/core/Grid';
import  AddShoppingCartIcon  from "@material-ui/icons/AddShoppingCart";
import  Badge  from "@material-ui/core/Badge";
//Styles 
import { Wrapper } from "./App.styles";
// Types
export type CartItemtype = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemtype[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemtype[]>('products', 
  getProducts
  );
  console.log(data)
  return <div className='App'>Start</div>
}

export default App;

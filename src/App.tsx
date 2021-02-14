import { useQuery } from "react-query";

export type CartItemType = {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount: number
}

const getProducts = async ():Promise<CartItemType[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json();


const App = () => {

  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts);
  console.log(data);
  

  return (
    <div className="App">
      <h1>
        Reacting Ekaa!!!
      </h1>
    </div>
  );
}

export default App;

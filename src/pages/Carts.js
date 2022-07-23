import  React from'react';
import {Container} from 'react-bootstrap';
import CartItem from '../components/CartItem';
import {Navigate} from 'react-router-dom';


const dummyProducts = [
    { 
        id: 0,
        title: " Produk A",
        price: 20000,
        description: "Loream ipsum",
        image: "https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2021/02/Featured-Image-Rekomendasi-Produk-Skin-Care-Somethinc-1200x620-1.jpg",
        quantity:1,
    },
    { 
        id: 1,
        title: " Produk B",
        price: 50000,
        description: "Loream ipsum",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmNeINsx56WUrqstEI-Tj3hG0fs0U9eoB-8HuN_tLfVt3Gw-KBxRFkMFo_BY53FGc1R4&usqp=CAU",
        quantity:2,
    },
    { 
        id: 2,
        title: " Produk C",
        price: 60000,
        description: "Loream ipsum",
        image: "https://awsimages.detik.net.id/community/media/visual/2022/04/21/kindy-glow.jpeg?w=700&q=90",
        quantity:3,
    
    },
];

function Carts({isLogedIn}) {

    if(!isLogedIn) {
        return(
            <Navigate to='/auth/login' replace />
        );
    }

    return (
      <Container>
        {dummyProducts.map((product) =>  (
            <CartItem key={product.id} item={product} 
            
            
            
            
            
            
            
            
            
            
            
            />
        ))}

      </Container>
    );
}
export default Carts;
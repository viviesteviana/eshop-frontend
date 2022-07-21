import React from 'react';
import { Row, Col} from 'react-bootstrap';
import CardItem from './CardItem.js';

const dummyProducts = [
{ 
    id: 0,
    title: " Produk A",
    price: 20000,
    description: "Loream ipsum",
    image: "https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2021/02/Featured-Image-Rekomendasi-Produk-Skin-Care-Somethinc-1200x620-1.jpg",
},
{ 
    id: 1,
    title: " Produk B",
    price: 50000,
    description: "Loream ipsum",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmNeINsx56WUrqstEI-Tj3hG0fs0U9eoB-8HuN_tLfVt3Gw-KBxRFkMFo_BY53FGc1R4&usqp=CAU",
},
{ 
    id: 2,
    title: " Produk C",
    price: 60000,
    description: "Loream ipsum",
    image: "https://awsimages.detik.net.id/community/media/visual/2022/04/21/kindy-glow.jpeg?w=700&q=90",

},
]

function CardList () {
    return (
        <Row xs={1} xl={4} sm={2} lg={3} md={3}>
        {dummyProducts.map((product) => (
            <Col key={product.id}>
            <CardItem item={product} />
              </Col>
        ))}
       
          </Row>
    );
}

export default CardList;
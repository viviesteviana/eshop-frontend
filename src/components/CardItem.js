import React from "react";
import { Card, Badge , Button} from "react-bootstrap";
import { MdShoppingCart} from 'react-icons/md';
import {getPrice} from "../utils";

const imageStyle ={ 
    width: '100%',
    objectFit: 'contain',
    padding:5,
    maxHeight: 2000
};

function CardItem({item}) {
    return (
        <Card className='me-3 mb-3'>
            <Card.Img Style={imageStyle} variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <div className='d-flex justify-content-between align-item-center'></div>
                <h6> 
                <Badge bg='secondary'> {getPrice (item.price)}</Badge>
                </h6>
                <Button>
                    <MdShoppingCart/>
                </Button>
            </Card.Body>
        </Card>
    );
}

export default CardItem;
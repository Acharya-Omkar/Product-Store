import React, { useRef } from "react";
import { Badge, Button, ListGroup, Image } from "react-bootstrap";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import DeleteIcon from "@material-ui/icons/Delete";

const Cart = ({
  onOpenCart,
  isCartOpen,
  onCloseCart,
  products,
  onRemoveProductFromCart,
}) => {
  const cartElemRef = useRef();

  return (
    <>
      <Button
        ref={cartElemRef}
        aria-controls="cart-menu"
        aria-haspopup="true"
        onClick={onOpenCart}
        color="inherit"
      >
        <Badge pill badgeContent={products.length} variant="info">
          <ShoppingCart />
        </Badge>
      </Button>
      {products.length > 0 ? (
        <ListGroup
          as="ul"
          id="cart-menu"
          anchorEl={cartElemRef.current}
          keepMounted
          open={isCartOpen}
          onClose={onCloseCart}
        >
          {products.map((product) => (
            <ListGroup.Item key={product.id}>
              {/* <ListItemAvatar> */}
              <Image roundedCircle src={"https://" + product.imageUrl} />
              {/* </ListItemAvatar> */}
              <ListGroup.Item
                primary={product.name}
                secondary={product.price.current.text}
              />
              {/* <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => onRemoveProductFromCart(product.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction> */}
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : null}
    </>
  );
};
export default Cart;

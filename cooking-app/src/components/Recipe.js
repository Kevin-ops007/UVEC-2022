import React, { useState } from "react"
import { ListGroup, ListGroupItem } from 'react-bootstrap';



const Recipe = ({ recipe }) => {
    return (
        <ListGroup horizontal>
            <ListGroup.Item>{recipe.title}</ListGroup.Item>
            <ListGroup.Item><img src={recipe.image} width="200" height="150" /></ListGroup.Item>
            <ListGroup.Item>Missing ingredients {recipe.missedIngredientCount}</ListGroup.Item>
        </ListGroup>
    )
}

export default Recipe
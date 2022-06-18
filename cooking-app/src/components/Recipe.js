import React, { useState } from "react"
import { Card, Button } from 'react-bootstrap';



const Recipe = ({ recipe }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={recipe.image} />
            <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>
                    Missing ingredients {recipe.missedIngredientCount}
                </Card.Text>
                <Button variant="primary">Missing ingredients</Button>
            </Card.Body>
        </Card>

    )
}

export default Recipe
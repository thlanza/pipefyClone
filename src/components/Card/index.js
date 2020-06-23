import React from 'react'
import { Container, Label } from './styles'
import { useDrag, useDrop } from 'react-dnd';

export default function Card({ data }) {
    const [{ isDragging }, dragRef] = useDrag({
        item: { type: 'CARD'},
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {

        }
    })

    return (
        <Container ref={dragRef} isDragging={isDragging}>
            <header>
                {data.labels.map(label => <Label key={label} color={label} />) }

            </header>
            <p>{data.content}</p>
            { data.user && <img src={data.user} alt="" /> }
        </Container>
    )
}

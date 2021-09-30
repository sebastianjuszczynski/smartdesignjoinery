import React from 'react';
import { Container, List, Item, Link } from "./styled"

const Pagination = ({ imagesPerPage, totalImages, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Container>
            <List>
                {pageNumbers.map(number => (
                    <Item key={number}>
                        <Link onClick={() => paginate(number)}>
                            {number}
                        </Link>
                    </Item>
                ))}
            </List>
        </Container>
    );
};

export default Pagination;
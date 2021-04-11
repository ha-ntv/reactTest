import React from 'react';
import { PaginationType } from '../Types/type';

function Pagination(props: PaginationType) {
    const {items, currentPage, handlePage} = props;
    return (
        <div className="mt-2">
            <ul className="pagination">
                {items.map(item => (<li key={item} className={currentPage === item ? "page-item active": "page-item"} onClick={() => handlePage(item)}><span className="page-link">{item+1}</span></li>))}
            </ul>
        </div>
    )
}
export default React.memo(Pagination);
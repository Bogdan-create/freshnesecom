import React from 'react'

const ProductCardList = () => {
    return (
        <React.Fragment>
            <div className="product flex">
                <div className="col-4">
                    <img 
                        src="https://2smart.ru/wp-content/uploads/2018/09/8875386638_1712425859-e1536093381914.jpg" 
                        alt=""
                        className="product__img"/>
                </div>
                <div className="col-4 product__col">
                    <h3 className="produsct__title">Product title</h3>
                    <p className="product__description">Space for a small product description </p>
                    <img src="" alt="" className="product__rating"/>
                    <div className="product__row flex">
                        <ul className="col-6 product__feautures">
                            <li className="product__item flex">Fresheness</li>
                            <li className="product__item flex">Farm</li>
                            <li className="product__item flex">Delivery</li>
                            <li className="product__item flex">Stock</li>
                        </ul>
                        <ul className="col-6 product__feautures">
                            <li className="product__item flex"><span className="product__span--green">New </span> (Extra fresh)</li>
                            <li className="product__item flex">Grocery Tarm Fields</li>
                            <li className="product__item flex">Europe</li>
                            <li className="product__item flex"><span className="product__span--green">320 pcs</span></li>
                        </ul>
                    </div>
                </div>
                <div className="col-4 product__col">
                    <span className="product__price">36.99 USD</span>
                    <span className="product__prev-prise">48.56</span>
                    <span className="product__shipping product__shipping--bold">Free Shipping</span>
                    <span className="product__shipping">Delivery in 1 day</span>
                    <a className="product__link">Product Detail</a>
                    <button className="product__btn flex">
                        <svg className="product__icon" width="" height="" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13062 2.26001C9.76714 1.62349 10.6304 1.2659 11.5306 1.2659C12.4308 1.2659 13.2941 1.62349 13.9306 2.26001C14.5671 2.89653 14.9247 3.75984 14.9247 4.66001C14.9247 5.56019 14.5671 6.42349 13.9306 7.06001L13.0573 7.93334L8.25729 12.7333L3.45729 7.93334L2.58396 7.06001C1.94744 6.42349 1.58984 5.56019 1.58984 4.66001C1.58984 3.75984 1.94744 2.89653 2.58396 2.26001C3.22048 1.62349 4.08378 1.2659 4.98396 1.2659C5.88413 1.2659 6.74744 1.62349 7.38396 2.26001L8.25729 3.13334L9.13062 2.26001Z" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="product__wish">Add to wish list</span>
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductCardList
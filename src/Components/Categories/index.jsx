import React from 'react';
import CategoryCard from '../CategoryCard';
import '../../Styles/Components/categories.scss'

const Categories = () => {
    return (
        <div className='categories'>
            <h2>Categorias</h2>
            <div className='categories-container'>
                <CategoryCard image={'./static/images/icons/image-1.svg'} description={'Botas'} />
                <CategoryCard image={'./static/images/icons/image-2.svg'} description={'Scarpins'} />
                <CategoryCard image={'./static/images/icons/image-3.svg'} description={'Sapatilhas'} />
                <CategoryCard image={'./static/images/icons/image-4.svg'} description={'Sandálias'} />
            </div>
        </div>
    );
};

export default Categories;
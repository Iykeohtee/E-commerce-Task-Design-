import main_product1 from '../public/main_product1.jpg';
import main_product2 from '../public/main_product2.jpg';
import main_product3 from '../public/main_product3.jpg';
import main_product4 from '../public/main_product4.jpg';
import main_product5 from '../public/main_product5.jpg';
import main_product6 from '../public/main_product5.jpg'; 
import main_product7 from '../public/main_product7.jpg'; 
import main_product8 from '../public/main_product8.jpg';
import cart from '../public/cart.svg' 
import group from '../public/group.svg' 
import collection from '../public/collection.svg' 
import blog_list1 from '../public/blog_list1.png' 
import blog_list2 from '../public/blog_list2.png' 
import blog_list3 from '../public/blog_list3.png' 

export const details = [
    { name: 'Black Jacket', img: main_product1, price: '$350.00', cart: cart, status: 'New', group: group, collection: collection}, 
    { name: 'Leather Jacket', img: main_product2, price: '$300.00', cart: cart, status: '', group: group, collection: collection},
    { name: 'Black Outfit', img: main_product3, price: '$200.00 $190.00', cart: cart, status: 'Sale', group: group, collection: collection},
    { name: 'T-shirt', img: main_product4, price: '$120.00', cart: cart, status: '', group: group, collection: collection},
    { name: 'Black Vest', img: main_product5, price: '$85.00', cart: cart, status: '', group: group, collection: collection},
    { name: 'OTK Boots Jacket', img: main_product6, price: '$300.00', cart: cart, status: '', group: group, collection: collection},
    { name: 'Biege T-shirt', img: main_product7, price: '$60.00', cart: cart, status: '', group: group, collection: collection},
    { name: 'Black Hat', img: main_product8, price: '$45.00', cart: cart, status: '', group: group, collection: collection},
]

export const blogs = [
    { image: blog_list1, date: 'September 29, 2022', detail: 'Fashion , Inspiration', description: 'Top 10 Essential for 2022 you should try', more: 'Read More'},
    { image: blog_list2, date: 'September 29, 2022', detail: 'Fashion , Inspiration', description: 'The Complete Communication Skill Master Class for work and leisure', more: 'Read More'},
    { image: blog_list3, date: 'September 29, 2022', detail: 'Fashion , Inspiration', description: 'Premium Consultant Course for you', more: 'Read More'}
]
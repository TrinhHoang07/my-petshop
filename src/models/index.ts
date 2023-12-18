export type TData = {
    id: number;
    name: string;
    color: string;
    price: number;
    lastPrice: number;
    quantity: number;
    previewUrl: string;
    checked: boolean;
};

export type TProfileUser = {
    userName?: string;
    gender?: string;
    avatarPath?: string;
    address?: string;
    isFriend: boolean;
};

export type T_Product = {
    id: number;
    name: string;
    description: string;
    sub_description: string;
    type: string;
    price: number;
    quantity: number;
    color?: string;
    rate: number;
    preview_url: string;
};

// categories page
export type T_Cart = {
    carts_id: number;
    carts_product_id: number;
    carts_customer_id: number;
    carts_quantity: number;
    customer_address: string;
    customer_avatar_path: string;
    customer_birth_date: string;
    customer_gender: string;
    customer_name: string;
    customer_phone_number: string;
    product_color: string;
    product_description: string;
    product_name: string;
    product_preview_url: string;
    product_price: number;
    product_rate: number;
    product_type: string;
    carts_created_at: string;
};

export type T_Categorys = {
    message: string;
    statusCode: number;
    data: T_Cart[];
};

// type detail page
export type T_Detail = {
    message: string;
    statusCode: number;
    data: T_Product;
};

// type login page
export type Customer = {
    id: number;
    name: string;
    email: string;
    gender: string;
    avatar: string;
    address: string;
    phone_number: string;
    birth_day: string;
    access_token: string;
};
export type T_Login = {
    message: string;
    statusCode: number;
    data: Customer;
};

// type search page
export type T_Search = {
    message: string;
    statusCode: number;
    data: T_Product[];
};

// type shop page
export type T_Shop = {
    message: string;
    statusCode: number;
    data: T_Product[];
};

// type add to cart
export type T_AddCart = {
    message: string;
    statusCode: number;
    data: {
        customer_id: number;
        product_id: number;
        quantity: number;
    };
};

// type orders
export type Orders = {
    orders_id: number;
    orders_product_id: number;
    orders_customer_id: number;
    orders_quantity: number;
    orders_status: string;
    orders_price: number;
    customer_address: string;
    customer_avatar_path: string;
    customer_birth_date: string;
    customer_gender: string;
    customer_name: string;
    customer_phone_number: string;
    product_color: string;
    product_description: string;
    product_name: string;
    product_preview_url: string;
    product_price: number;
    product_rate: number;
    product_type: string;
    orders_created_at: string;
};
export type T_Orders = {
    message: string;
    statusCode: number;
    data: Orders[];
};

// type add order
export type T_AddOrder = {
    message: string;
    statusCode: number;
    data: {
        customer_id: number;
        product_id: number;
        quantity: number;
        price: number;
        status: string;
    };
};

// type blogs
export type Blog = {
    id: number;
    title: string;
    preview_url: string;
    description: string;
    created_at: string;
};

export type T_Blog = {
    message: string;
    statusCode: number;
    data: Blog;
};

export type T_Blogs = {
    message: string;
    statusCode: number;
    data: Blog[];
};

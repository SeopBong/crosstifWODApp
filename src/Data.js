import React, { Component } from 'react'

let data = [
    {
    id : 0,
    title : 'White and Black',
    content : "Born in france",
    price : "120,000"
    },
    {
    id : 1,
    title : 'Red Knit',
    content : "Born in Seoul",
    price : "110,000"
    },
    {
    id : 2,
    title : 'Gray Yordan',
    content : "Born in the States",
    price : "130,000"
    }
]

//export {data[]};

// 컴포넌트도 넘기기 가능
// 한개를 보내려면 export default a; 로 한다.
// 여러개 export 하려면 export {a,b}; 등등

export default data;
//export {data};
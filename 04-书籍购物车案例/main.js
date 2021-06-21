const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '<算法导论111>',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '<算法导论222>',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '<算法导论333>',
                date: '2006-9',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '<算法导论444>',
                date: '2006-9',
                price: 128.00,
                count: 1
            },
        ]


    },
    //过滤器
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    },
    methods: {
        increment(index) {
            this.books[index].count++
        },
        decrement(index) {
            this.books[index].count--
        },
        removeHandly(index) {
            this.books.splice(index, 1)
        }
    },
    computed: {
        totalPrice() {
            let total = 0
            // 1.for (let i in this.books) {
            //     total += this.books[i].price*this.books[i].count
            // }

            // 2.for (let item of this.books) {
            //     console.log(item)
            //     total += item.price*item.count
            // }
            return this.books.reduce(function (prevValue,book){
                return prevValue+book.count*book.price
            },0)
        }
    }

})

//编程范式：命令式编程/声明式编程
//编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
//高阶函数：filter/map/reduce
//filter中的回调函数有一个要求：必须返回一个boolean值
//true:当返回true时，函数内部会自动将这次回调的n加入到新的数组中
//false:当返回false时，函数内部会过滤掉这次的n
const nums=[10,20,111,222,50,40]

let totals=nums.filter(function (n){
    return n<100
}).map(function (n){
    return n*2
}).reduce(function (prevValue,n){
    return prevValue+n
},0)
console.log(totals,'total')

//1.filter的函数使用
let newNums=nums.filter(function (n){
    return n<100
})
//2.map的使用
let new2Nums=newNums.map(function (n){
    return n*2
})
console.log(new2Nums)
//3.reduce的使用
//reduce作用对数组中的所有内容进行汇总
let total=new2Nums.reduce(function (preValue,n){
    return preValue+n
},0)
//第一次：preValue 0 n 20
//第二次：preValue 100 n=40
//第三次：preValue 100 n 80
//第四次：preValue 100 n=100

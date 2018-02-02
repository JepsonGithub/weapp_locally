# 项目 - 本地生活

标签： 微信小程序


---

## 资源文件下载地址:
`git@github.com:JepsonGithub/locally_resource.git`


## 项目演示图

![home](https://user-images.githubusercontent.com/6166576/30124027-8caa06a8-9366-11e7-8cf6-ecc4b6361c65.jpg)
![list](https://user-images.githubusercontent.com/6166576/30124035-9096295e-9366-11e7-859f-43c6c3a0b931.jpg)
![detail](https://user-images.githubusercontent.com/6166576/30124043-954611e4-9366-11e7-837a-859a3096015b.jpg)
![message](https://user-images.githubusercontent.com/6166576/30124049-98923526-9366-11e7-9da8-c1c4734339fc.jpg)
![profile](https://user-images.githubusercontent.com/6166576/30124057-9a6285e0-9366-11e7-973c-7014f363b690.jpg)


## 博客地址 (小程序基本知识点整理)
http://jepson.site/


## 项目接口说明

- 首页 轮播图 接口
    
    `https://locally.uieee.com/slides`

---

- 首页 grid 列表渲染
   
    `https://locally.uieee.com/categories`

---

- 请求标题栏名称( 要根据 grid 中存的 categoryId 来请求 )
    
    `https://locally.uieee.com/categories/${categoryId}`

--- 

- 商品列表信息渲染, 请求该 categoryId 下的所有商品信息

    `https://locally.uieee.com/categories/${categoryId}/shops`

--- 

- 传参支持分页

    `https://locally.uieee.com/categories/${categoryId}/shops?_page=1&_limit=10`
    
-  _page 当前页, _limit 一页多少条

---
        
- 支持搜索功能, 多传一个 q 参数即可

    `https://locally.uieee.com/categories/${categoryId}/shops?_page=1&_limit=10&q=黄焖鸡`

- q 表示搜索关键字
        
---

- 商品详情页接口

    `https://locally.uieee.com/shops/${shopid}`






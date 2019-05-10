<template>
    <div>
        <!-- 轮播图 区域 -->
        <mt-swipe :auto="3000">
            <!-- <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item> -->
            <mt-swipe-item v-for="item in lunboDatas" :key="item.url">
                <img v-bind:src="item.img" alt="" />
            </mt-swipe-item>
        </mt-swipe> 

        <!-- 九宫格 图标  -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div>
                </a>
            </li>-->
            <!--<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="" alt=""/>
                    <div class="mui-media-body">新闻资讯</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品购买</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-more"></span>
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>-->
            <li v-for="gird in girdDatas" :key="gird.name" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img v-bind:src="gird.imgUrl" alt="/"/>
                    <div class="mui-media-body">{{gird.name}}</div>
                </a>
            </li>
        </ul>

        <h3>home</h3>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default{
    data(){
        return {
            lunboDatas:[ ],
            instance:null,
            girdDatas:[
                {name:"新闻资讯",imgUrl:"src/images/menu/menu1.png"},
                {name:"图片分享",imgUrl:"src/images/menu/menu2.png"},
                {name:"商品购买",imgUrl:"src/images/menu/menu3.png"},
                {name:"留言反馈",imgUrl:"src/images/menu/menu4.png"},
                {name:"视频专区",imgUrl:"src/images/menu/menu5.png"},
                {name:"联系我们",imgUrl:"src/images/menu/menu6.png"}
            ]
        }
    },
    created() {
        // this.instance = Toast("轮播图加载中...");
        setTimeout(()=>{
            // this.instance.close();   
            this.getLunbotu()
        },100)
    },
    methods: {
        getLunbotu(){  // 获取轮播图方法
            // http请求获取轮播图 图片资源
            // {img:"http://ofv795nmp.bkt.clouddn.com/vuelogobanner1.jpg",url:"http://www.itcast.cn/subject/phoneweb/index.html"}
            // this.$http.get("http://vue.studyit.io/api/getlunbo").then(result=>{
                // if(result.body.status === 0){   // 请求成功
                //     this.lunboDatas = result.body.message;
                // }else{
                //     Toast("轮播图加载失败");
                // }
            // })
            this.lunboDatas = [
                {img:"src/images/lunbo/Scene1.jpg",
                 url:"src/images/lunbo/Scene1.jpg"
                },
                {img:"src/images/lunbo/Scene2.jpg",
                 url:"src/images/lunbo/Scene2.jpg"
                },
                {img:"src/images/lunbo/Scene3.jpg",
                 url:"src/images/lunbo/Scene3.jpg"
                },
                {img:"src/images/lunbo/Scene4.jpg",
                 url:"src/images/lunbo/Scene4.jpg"
                }
            ]
        }
    },
};

</script>

<style>
.mint-swipe{
    height:200px;
}
.mint-swipe img{
    width:100%;
    height:100%;
}
.mui-grid-view.mui-grid-9{
    background-color: white;
    border: 0;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
}
.mui-grid-view.mui-grid-9 .mui-media img{
    width: 60px;
    height: 60px;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size: 13px;
}
</style>
<template>
   <div class="first">
        <img src="@/assets/page1/bg.jpg" alt="">
        <div class="first-content">
            <div class="first-img img1" :class="{'active': isVisible}">
                <img src="@/assets/page1/1.png" alt="">
            </div>
             <div  class="first-img img2" :class="{'active': isVisible}">
                <img src="@/assets/page1/2.png" alt="">
            </div>
             <div  class="first-img img3" :class="{'active': isVisible}">
                <img src="@/assets/page1/3.png" alt="">
            </div>
             <div  class="first-img img4" :class="{'active': isVisible}">
                <img src="@/assets/page1/4.png" alt="">
            </div>
            <div class="content-info">
                <h1 :class="{'active': isVisible}">前端攻城狮--圣墨</h1>
                <h3 :class="{'active': isVisible}">一个爱折腾，有诗有远方的人</h3>
            </div>
            <div class="nextPage">
                <a href="#">
                    <i class="glyphicon glyphicon-chevron-down"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'first',
    props: {
        isVisible: false
    },
    data() {
        return {
            // isVisible: false
        }
    },
    mounted() {
        this.isVisible = true;
    },
    methods: {
       
    }
}
</script>

<style lang="scss">
    .first {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        >img {
            position: absolute;
            z-index: -1;
            height: 100%;
            width: 100%;
        }

        .first-content {
            width: 70%;
            margin: 0 auto;
            // background-color: #fff;
            height: calc(100% - 50px);
            margin-top: 50px;
            position: relative;

            .first-img {
                width: 72px;
                height:72px;
                position: absolute;
                &.img1 {
                    top: 10px;
                    left: 0;
                    transform:rotate(-180deg);
                    &.active {
                   opacity: 1;
                    transform:rotate(0deg);
                    transition: all 1s;
                }
                }
                &.img2 {
                    bottom: 10px;
                     transform:rotate(-180deg);
                    &.active {
                   opacity: 1;
                    transform:rotate(0deg);
                    transition: all 1s;
                }
                }
                &.img3 {
                    top: 10px;
                    right: 0;
                     transform:rotate(180deg);
                    &.active {
                   opacity: 1;
                    transform:rotate(0deg);
                    transition: all 1s;
                }
                }
                &.img4 {
                    right: 0;
                    bottom: 10px;
                     transform:rotate(180deg);
                    &.active {
                   opacity: 1;
                    transform:rotate(0deg);
                    transition: all 1s;
                }
                }

                img {
                    width: 100%;
                    width: 100%;
                }
            }

            .content-info {
                h1 {
                    color: #acbd20;
                    text-shadow: 9px -2px 15px #000;
                    font-size: 50px;
                    font-weight: 700;
                    position: absolute;
                    top: -200px;
                    left: 50%;
                    transform: translate(-50%, 0);

                    &.active {
                         top: 30%;
                         transition: all 2s;
                    }

                   
                }
                h3 {
                    color: #b86aff;
                    text-shadow: 9px -2px 15px #000;
                    font-weight: 700;
                    position: absolute;
                    top: 40%;
                    left: 50%;
                     transform: scale(2);
                    // transform: translate(-50%, 0);
                   
                     &.active {
                        transform: scale(1);
                         transition: all 2s;
                    }
                }
            }

            .nextPage {
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translate(-50%, 0);
                border: 2px solid #ccc;
                width: 60px;
               height: 60px;
            //    line-height: 60px;
               text-align: center;
               border-radius: 50%;
                background: rgba(51,51,51,1);
               a {
                   position: absolute;
                   font-size: 20px;
                   color: #b86aff;
                   transform: translate(-50%, 0);
                     animation: mymove 3s infinite;
                   left: 50%;
                   bottom: 30px;
                   display: inline-block;
               }

              




            }
        }
    }

   @keyframes mymove
{
0% {bottom:30px; }
50%{bottom:-10px;}
100%{bottom: 30px;}
}
</style>

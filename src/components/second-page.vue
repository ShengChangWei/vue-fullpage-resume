<template>
   <div class="page">
        <img src="@/assets/page2/bg.jpg" alt="">
        <div class="page-content">
            <h class='hidden-xs hidden-sm page2-title'>基本资料</h>
            <div class="row page-content-main">
                <div class=" icon-infomation col-xs-6 col-sm-6 col-md-3">
                    <img src="@/assets/page2/glass.png" alt="">
                     <h4>基本信息</h4>
                    <p>
                        姓名: 圣长伟 男
                        <br>
                        年龄: 25岁 籍贯：安徽
                    </p>
                </div>
                <div class=" icon-infomation col-xs-6 col-sm-6 col-md-3">
                    <img src="@/assets/page2/hat.png" alt="">
                    <h4>毕业院校</h4>
                    <p>
                       安徽皖西学院（本科）
                    </p>

                </div>
                <div class=" icon-infomation col-xs-6 col-sm-6 col-md-3">
                    <img src="@/assets/page2/book.png" alt="">
                    <h4>工作时间</h4>
                    <p>
                        2017年7月
                        <br>
                        专业技能 前端工程师
                    </p>
                </div>
                <div class=" icon-infomation col-xs-6 col-sm-6 col-md-3">
                    <img src="@/assets/page2/tel.png" alt="">
                    <h4>联系方式</h4>
                    <p>
                        邮箱 2367896538@qq.com
                        <br>
                        电话13661174052
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'second',
    data() {
        return {
            isVisible: false
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
    .page {
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

        .page-content {
            width: 70%;
            margin: 0 auto;
            // background-color: #fff;
            height: calc(100% - 50px);
            margin-top: 50px;
            overflow: hidden;
            position: relative;
            .page2-title {
                position: absolute;
                left: 50%;
                top: 30%;
                transform: translate(-50%, -50%);
                font: 50px "Microsoft Yahei";
                color: #fff;

            }
            .page-content-main {
                margin-top: 26%;
               
                .icon-infomation {
                    text-align: center;
                }
            }
           
        }
    }

</style>

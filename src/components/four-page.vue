<template>
   <div class="page">
        <img src="@/assets/page4/bg.jpg" alt="">
        <div class="page-content">
           
        </div>
    </div>
</template>

<script>
export default {
    name: 'three',
    data() {
        return {
            isVisible: false,
            options: {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
}
        }
    },
    mounted() {
        this.isVisible = true;
    },
    methods: {
       onEChartsReady() {

       }
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

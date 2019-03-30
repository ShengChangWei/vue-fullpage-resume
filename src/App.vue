<template>
  <div id="app">
    <nav class="navbar navbar-default header">
    <div class="container">
      <div class="pull-left header-left">
        <span @click="$refs.fullpage.api.moveTo(1)">圣墨</span>
      </div>
      <div class="header-right collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right" id="menu">
                <li data-menuanchor="page2" class="active">
                    <a href="#page2" @click="$refs.fullpage.api.moveTo(2)">基本资料</a>
                </li>
                <li data-menuanchor="page3">
                    <a href="#page3" @click="$refs.fullpage.api.moveTo(3)">专业技能</a>
                </li>
                <li data-menuanchor="page4">
                    <a href="#page4" @click="$refs.fullpage.api.moveTo(4)">工作经历</a>
                </li>
                <li data-menuanchor="page5">
                    <a href="#page5" @click="$refs.fullpage.api.moveTo(5)">项目经验</a>
                </li>
                <li data-menuanchor="page6">
                    <a href="#page6" @click="$refs.fullpage.api.moveTo(6)">自我评价</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
     <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
      <div>
        <first-page :isVisible="page1Visible"></first-page>
      </div>
    </div>
    <div class="section">
     <second-page></second-page>
    </div>
    <div class="section">
      <three-page></three-page>
    </div>
    <div class="section">
     <four-page></four-page>
    </div>
    <div class="section">
      <five-page></five-page>
    </div>
    <div class="section">
     <six-page></six-page>
    </div>
  </full-page>
  </div>
</template>

<script>
import Home from '@/views/Home'
import firstPage from '@/components/first-page'
import secondPage from '@/components/second-page'
import threePage from '@/components/three-page'
import fourPage from '@/components/four-page'
import fivePage from '@/components/five-page'
import sixPage from '@/components/six-page'
export default {
  name: 'App',
  components: {
    firstPage,
    secondPage,
    threePage,
    fourPage,
    fivePage,
    sixPage
  },
  data() {
    return {
      options: {
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3','page4', 'page5', 'page6'],
        navigation:true,
        navigationColor: 'red',
        navigationTooltips: ['首页', '基本资料','专业技能','工作经历', '项目经验', '自我评价'],
        afterLoad: this.afterLoad,
        onLeave: this.onLeave
      },
      page1Visible: false
    }
  },
  methods: {
    afterLoad(index) {
        // console.log(index)
    },
    onLeave(origin, destination, direction) {
        console.log(origin, destination, direction)
        if(origin.index === 1 && destination.index === 0) {
            this.page1Visible = true;
        } else {
           setTimeout(() => {
              this.page1Visible = false;
           },100)
        }
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family:  'Weibei SC','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  .header {
    position: fixed;
    background: rgba(51, 51, 51,.7);
    right: 0;
    left: 0;
    z-index: 10;
    border: none;
    .container {
      height: 100%;
      line-height: 50px;
      .header-left {
        font-size: 18px;
        color: #A7E615;
        cursor: pointer;
      }
      .header-right {
          color: #fff;
          a {
            color: #fff;
            &:hover,&:visited {
                background-color: #0F698A;
            }
          }
      }
    }
  }
}

</style>

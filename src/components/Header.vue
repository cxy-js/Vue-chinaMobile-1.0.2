<template>
  <div class="header">
    <div class="top">
          <div class="cell" @click.stop="me" v-if="spanisshow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        <span class="tipback" @click="back" v-if="backshow"></span>
        <!--<img src="../assets/back.png">-->
      <h2>{{toptitle}}</h2>
    </div>

    <!--弹出层-->
       <div class="me" :class="{trans:istrans}">
         <div class="me-sing">
            <div>
              <span><img src="../assets/me (1).png"></span>

              <span v-if="issingin" @click="singin">登录</span>

              <span class="tel" v-if="istel">{{tel}}</span>
            </div>
            <div class="address">
             --江苏--
            </div>
            <div class="me-list">
              <li @click="gosearch()">
                <img src="../.././static/img/me/img/search.png"><span>搜索</span>
              </li>
              <li>
                <img src="../.././static/img/me/img/scan.png"><span>扫一扫</span>
              </li>
              <li>
                <img src="../.././static/img/me/img/joy.png"><span>分享推荐</span>
              </li>
              <li>
                <img src="../.././static/img/me/img/apply.png"><span>应用广场</span>
              </li>
              <li>
                <img src="../.././static/img/me/img/about.png"><span>关于我们</span>
              </li>
              <div @click="logoff" class="logoff">
                <span>注销</span>
              </div>
              <div @click="set" class="set">
                <span>设置</span>
              </div>
            </div>
            
          </div>
       </div>
  </div>
</template>
<script type="text/javascript">

  export default {
    data (){
      return {
        istrans:false,
        
        istel:true
      }
    },
    computed:{
      toptitle(){
         return this.$store.state.toptitlelis
      },
      tel(){
         return this.$store.state.tel;
      },
      issingin(){
        return this.$store.state.issingin
      },
      backshow(){
        return this.$store.state.backshow
      },
      spanisshow(){
        return this.$store.state.spanisshow
      }
     
    },
  
    mounted(){
      console.log(this.$store.state.tel)
      let that=this
        document.body.addEventListener('click',function(){
          document.body.style.left=0
          if(that.istrans===true){
            that.istrans=false
          }
        })
       
    },
    methods:{
      me(){
        this.$store.commit('spanisshow',true)
        // this.$store.state.backshow=true
      
       if(this.istrans===false){
        this.istrans=true;
        document.body.style.position='absolute';
        document.body.style.left="50%"
       }else{
         this.istrans=false
         document.body.style.left=0
       }
       
      },
      gosearch(){
        this.istrans=false
        this.$router.push({path:'/search'})
      },
      singin(){
        
        this.$router.push({path:'/singin'})
        this.istrans=false
        this.issingin=false
        this.istel=true
        this.$store.commit('footerisshow',false)
        console.log(this.issingUp)
         
      },
      logoff(){
      this.$store.state.issingin=true
      this.$store.state.tel=''
      this.$router.push({path:"/singin"})
      },
      set(){
        if(this.tel===''){
          alert('您尚未登录')
          this.$store.commit('footerisshow',false)
          this.$router.push({path:"/singin"})
        }else{
          this.$router.push({path:"/menifo"})
        }
        
      },
      back(){      
        this.$router.go(-1)
      }
    }
  }
</script>
<style scoped>

.header{
  width:100%;
  
}
.top{
  height:40px;
  width:100%;
  position:fixed;
  background:#26A2FF;
  z-index:99999;
  top:0;
  line-height: 40px;
  color:#fff;
  text-align: center;

}
 h2{
  display:inline-block
 }

  .cell{
   display:inline-block;
  
   position:absolute;
   right:10px;
   top:7px;

   }
   .tipback{
      display: inline-block;
      width: 40px;
      height: 40px;
      position: absolute;
      left: 10px;
      top: 0px;
      font-weight: bold;
      font-size: 30px;
      background:url(../assets/back.png) no-repeat center center;
      background-size:100%

   }
   .tipback img{
     width:100%;
     height:100%;
   
   }
   .cell span{
     display:block;
     width:25px;
     height:2px;
     margin:5px 0;
     background:#fff
   }
   .me{
      position:absolute;
      left:-50%;
      width:50%;
      z-index:9999;
      top: 0px;
      
      font-size:14px;
      /*background: -webkit-linear-gradient(-190deg,#26A2FF,#f3f3f3,#fff,#fff,#f3f3f3,#26A2FF);
      background: -o-linear-gradient(-190deg,#26A2FF,#f3f3f3,#fff,#fff,#f3f3f3,#26A2FF);
      background: -moz-linear-gradient(-190deg,#26A2FF,#f3f3f3,#fff,#fff,#f3f3f3,#26A2FF);*/
      background: linear-gradient(-180deg,#26A2FF,#fff);
      /*-webkit-border-image:url('../.././static/img/migu.png') 20 20 round;*/
      /*border-image:url('../.././static/img/ad3.jpg') 23 20 stretch;*/
      opacity:1;
      transition:left 0 ease-in-out;
      
      padding-bottom:10px;

   }
 .trans{
      left:-50%;
  }

  .me-sing{
    width:90%;
    margin:20px auto;
  }
  .me-sing img{
    width:40px;
    height:40px;
    vertical-align: middle;
    margin-right:10px;
  }
  .me-sing span.singUp{
    height:30px;
    padding:3px;
    line-height: 30px;
    letter-spacing: 2px;
  }
  .address{
    margin-top:20px
  }
  .me-list{
    padding-bottom:20px;
    padding-top:10px;
  }
  .me-list li{
    display:block;
    padding:15px 0;
    border-bottom:1px solid #ccc;

  }
  .me-list li img{
    display:inline-block;
    width:20px;
    height:20px;
    vertical-align: middle;

  }
  .me-list li span{
    display:inline-block;
    line-height: 20px;
    height:20px;

  }
 .logoff{
   float:left;
   
 }
 .set{
  float:right;
  
 }
 .logoff,.set{
   margin-top:20px;
   width:40px;
   height:20px;
   font-size:14px;
   text-align: center;
   line-height: 20px;
   box-shadow:0 0 1px #333;
   padding:3px;
   color:#000
 }
</style>

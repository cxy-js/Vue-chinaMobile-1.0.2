<template>
  <div class="menifo">
      <!--个人信息-->
      <div class="upimgtop">
        <div class="loadimg" id="loadimg">
          <span class="imgnifo" v-if="imgnifoisshow" >上传头像</span>
          <input type="file" id="input" @click="hide">
        </div>
        <div class="tel">{{tel}}</div>
      </div>
      <div class="nigolist">
        <div class="list-first">
          <li v-for="item in lists">
            <span>{{item.title}}</span>
            <span>{{item.nifo}}</span>
          </li>
          <li @click="">
            <span>联系方式</span>
             <span>></span>
          </li>
          <div class="address">
              <li @click="">
                <span>收货地址</span>
                <span>></span>
              </li>
              <li @click="">
                <span>发票管理</span>
                <span>></span>
              </li>
          </div>
          <div class="xinguser">
              <li @click="">
                <span>星级用户</span>
                <span><img src="../../assets/xingxing.png" class="xing">一星级用户</span><span>></span>
              </li>
              <li @click="">
                  <span>星级有效期</span>
                  <span>2018.9.13</span>
                </li>
              <li @click="">
                  <span>积分明细</span>
                  <span>></span>
                </li>
          </div>
          <div class="club">
                <li @click="">
                  <span>全球通俱乐部</span>
                  <span>></span>
                </li>
                <li @click="">
                  <span>动感地带俱乐部</span>
                  <span>></span>
                </li>
          </div>
          <div class="equity">
            <li @click="">
                <span>标识权益</span>
                <span>></span>
            </li>
          </div>
        </div>
      </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data(){
      return {
         lists:[
           {title:'姓名',nifo:'***'},
           {title:'实名认证',nifo:'已认证'},
           {title:'入网时间',nifo:'2015-7-5'},
           {title:'网龄',nifo:'3年'}
          
           ],
        imgnifoisshow:true
      }
     
    },
    mounted(){
        this.$store.state.backshow=true;
        let input = document.getElementById('input')
        let loadimg = document.getElementById('loadimg')
        
        input.onchange=function(){
          
          fileHandler(this.files)
        };
        function fileHandler(files){  
          // files可以是多个文件,是个数组  
          var file=files[0];  
          // 创建FileReader()构造函数 
          var fd=new FileReader();  
          // 将文件读取为DataURL  
          fd.readAsDataURL(file);  
          fd.onload=function(){  
              loadimg.style.backgroundImage="url("+this.result+")"; 
              loadimg.style.backgroundSize='100% 100%';
              loadimg.style.backgroundRepeat="no-repeat"
          }  
       } 
    },
     beforeRouteLeave (to, from, next){
       this.$store.commit('footerisshow',true)
       next()
     },
    methods:{
      hide(){
        this.imgnifoisshow=false
      }
    },
    computed:{
      tel(){
        return this.$store.state.tel
      }
    }
  }
</script>
<style scoped>
  .menifo{
    margin:60px auto 0 auto
  }
  .upimgtop{
    text-align: center;
    border-bottom: 1px solid#ccc;
  }
  .loadimg{
    display:inline-block;
    width:60px;
    height:60px;
    border:1px solid #ccc;
    overflow: hidden;
    border-radius: 10px;
   position:relative;
    font-size:12px;
    text-align: center;
    
  }
  .loadimg input{
    display:block;
    position:absolute;

    top:0;
    left:0;
    width:60px;
    height:60px;
    opacity:0;
    filter:alpha(opacity=0);
   
  }
  .imgnifo{
    display:block;
   margin-top:25px
  }
  .tel{
    display:block;
    height:20px;
    margin-top:10px;
  }
  .nigolist{
    width:90%;
    margin:20px auto 10px auto;
    
    font-size:14px
  }
  .list-first{
    width:100%;
  }
  .list-first li{
    display:flex;
    justify-content: space-between;
    height:30px;
    border-bottom: 1px solid#ccc;
    margin:5px 0;
    line-height: 30px;
   
  }
  .list-first li span{
     display:inline-block;

  }
  .address,.xinguser,.club,.equity{
    padding:10px 0;
   
  }
  .equity{
    padding:0
  }
  .equity li{
    border-bottom:none
  }
 .xing{
   display:inline-block;
   vertical-align: middle;
   height:30px;
 }
</style>

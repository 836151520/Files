var list = [
  {
    shopp:"车工官方旗舰店",
    isShopCheck:false,
    goods:[
      {
        img:"http://placehold.it/80X80",
        goods_txt:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
         price:229.00,
         num:1,
         isGoodsChecked:false,
      },
      {
        img:"http://placehold.it/80X80",
        goods_txt:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
         price:229.00,
         num:1,
         isGoodsChecked:false,
      },
      {
        img:"http://placehold.it/80X80",
        goods_txt:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
         price:229.00,
         num:1,
         isGoodsChecked:false,
      },
    ]
  },
  {
    shopp:"京东自营店",
    isShopCheck:false,
    goods:[
      {
        img:"http://placehold.it/80X80",
        goods_txt:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
         price:229.00,
         num:1,
         isGoodsChecked:false,
      },
      {
        img:"http://placehold.it/80X80",
        goods_txt:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
         price:229.00,
         num:1,
         isGoodsChecked:false,
      },
      {
        img:"http://placehold.it/80X80",
        goods_txt:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
         price:229.00,
         num:1,
         isGoodsChecked:false,
      },
    ]
  },
];
var app = new Vue({
  el:"#shoppCart",
  data:{
     listItems:list,
     isAllCheck:false,
     tomalMoney:0,
     tomalNum:0
  },
  methods:{
    //全选
    allCheck:function(){
      var flag = this.isAllCheck ? false : true;
      console.log(flag);
      for(var i=0;i<this.listItems.length;i++){
        this.listItems[i].isShopCheck = flag;
        for(var j=0;j<this.listItems[i].goods.length;j++){
          this.listItems[i].goods[j].isGoodsChecked = flag
        }
      }
      this.gettoamlMoney()
    },
    // 商店全选
    shopChecked:function(index){
      if(this.listItems[index].isShopCheck){
        for(var i=0;i<this.listItems[index].goods.length;i++){
          this.listItems[index].goods[i].isGoodsChecked=false;
        }
      }else{
        for(var i=0;i<this.listItems[index].goods.length;i++){
          this.listItems[index].goods[i].isGoodsChecked=true;
        }
      }
      this.gettoamlMoney()
    },
    gettoamlMoney:function(){
      var _this = this;
      this.tomalMoney = 0;
      this.tomalNum =0;
      for(var i=0;i<this.listItems.length;i++){
        var goodsList =this.lists[i].goods;
        goodsList.forEach(function(item,index){
          if(goodsList[index].isGoodsChecked){
            _this.tomalMoney += item.price *item.num
          }
        })
      }
    }
  },
  filters:{
    price:function(val){
      return "￥"+ val.toFixed(2);
    }
  },

})

import React from 'react';
import "./Home.css";
import Products from './Product'
//import { useState} from 'react';

const Home = () => {

{/* <div className="checkoutProduct_amount">
                    <button className="add">+</button>
                    <span>0</span>
                    <button className="remove">-</button>
                </div> */}
const veggies = {
  tomato: 5,
  cabbage:6.50,
  lettuce:5,
  stringBeans:4.50,
  carrot: 4.10,
  beetRoot:6,
  pakchoi: 7.50,
  broccoli: 6.30,
  eggplant:3.15,
  cauliflower: 7.10,
};
const provisions = {
  yellowYam: 5,
  whiteYam:6.50,
  sweetPotato:5,
  dashine:4.50,
  taroRoot: 4.10,
  plaitain:6,
  blogue: 7.50,
  greenBanana: 6.30,
  breadFruit:3.15,
  tanya: 7.10,
};


  return (
    <div className='home'>
      <div className="home_container">
        <img className='home_image' src="https://platthillnursery.com/wp-content/uploads/2021/04/platt-hill-garden-vegetables-fruits-for-beginners-radishes-carrots-peas-tomatoes-1080x600.jpg" alt="" />
      </div>
      <h1 className='veggies'>Vegetables</h1>

      <div className="home_products">
        <Products id={0} title="Tomato"  price={veggies.tomato} weight={"lbs"} image={"https://www.kroger.com/product/images/large/front/0000000004664?banner=harristeeter"} rating={5}/>
        <Products id={1} title="Cabbages"  price={veggies.cabbage} weight={"lbs"} image={"https://canadianfoodfocus.org/wp-content/uploads/2020/09/types-of-cabbage-1024x576.jpg"} rating={5}/>
        <Products id={2} title="Luttuce"  price={veggies.lettuce} weight={"lbs"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClTSRrXunxKv9awMQKuaw68fu74GUIROtnw&s"} rating={5}/>
        <Products id={3} title="String Beans"  price={veggies.stringBeans} weight={"lbs"} image={"https://cdn-prod.medicalnewstoday.com/content/images/articles/285/285753/beans.jpg"} rating={5}/>
        <Products id={4} title="Carrots"  price={veggies.carrot} weight={"lbs"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrE4rmYuDp7Cv0-kBa3Wmk_IR6vd7hLpMl2Q&s"} rating={5}/>
        <Products id={5} title="Beet Root"  price={veggies.beetRoot} weight={"lbs"} image={"https://cdn.shopify.com/s/files/1/0802/5397/products/beetrootpowder.png?v=1628763895"} rating={5}/>
        <Products id={6} title="Pakchoi"  price={veggies.pakchoi} weight={"lbs"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHMFZtzQikS8gT_Y5ieNHJNIWT55Kiwyw1xA&s"} rating={5}/>
        <Products id={7} title="Broccoli"  price={veggies.broccoli} weight={"lbs"} image={"https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg"} rating={5}/>
        <Products id={8} title="Eggplant"  price={veggies.eggplant} weight={"lbs"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTitYipbBtEAkVKfz_jdXp3saKbLosEkWl9Tg&s"} rating={5}/>
        <Products id={9} title="Cauliflower"  price={veggies.cauliflower} weight={"lbs"} image={"https://domf5oio6qrcr.cloudfront.net/medialibrary/5299/h1018g16207257715328.jpg"} rating={5}/>


      </div>
      <h1>Provisions</h1>
      <div className="home_products">
      <Products id={10} title="Yellow Yam"  price={provisions.yellowYam} weight={"lbs"} image={"https://media.istockphoto.com/id/1147690590/photo/raw-organic-yellow-yam-a-food-staple-in-jamaican-and-caribbean-meals-dishes.jpg?s=612x612&w=0&k=20&c=kTDUpTjUHewU1OmLTCcsi8X9fUZxFHOOW1C_62ARSIE="} rating={5}/>
      <Products id={11} title="White Yam"  price={provisions.whiteYam} weight={"lbs"} image={"https://cropicalfoods.com/cdn/shop/files/s-l1200_3.webp?v=1702914270"} rating={5}/>
      <Products id={12} title="Sweet Potato"  price={provisions.sweetPotato} weight={"lbs"} image={"https://www.melissas.com/cdn/shop/files/5-pounds-image-of-japanese-murasaki-sweet-potatoes-vegetables-35282069422124_600x600.jpg?v=1696263945"} rating={5}/>
      <Products id={13} title="Dashine"  price={provisions.dashine} weight={"lbs"} image={"https://iod.keplrstatic.com/api/ar_1,c_crop,g_north/c_fill,dpr_auto,f_auto,q_70,w_750/mon_marche/7882_tarot_dashineNative.jpg"} rating={5}/>
      <Products id={14} title="Taro Root"  price={provisions.taroRoot} weight={"lbs"} image={"https://images.prd.freshop.retail.ncrgov.com/12569/48ede219b223fd39ffbcbc4383d9851d_large.png"} rating={5}/>
      <Products id={15} title="Plantain"  price={provisions.plaitain} weight={"lbs"} image={"https://media.istockphoto.com/id/669719936/photo/plantain-or-green-banana.jpg?s=612x612&w=0&k=20&c=vnMwZ388Nt-f6LPq7BgPgVTkL4cOnjwBm9ybeNHlc2A="} rating={5}/>
      <Products id={16} title="Blogue"  price={provisions.blogue} weight={"lbs"} image={"https://sribalajistore.com/wp-content/uploads/2024/04/Raw-Banana.jpg"} rating={5}/>
      <Products id={17} title="Green Banana"  price={provisions.greenBanana} weight={"lbs"} image={"https://d2wrwj382xgrci.cloudfront.net/Pictures/1024x536/7/5/0/2750_greenbanana_090719.jpg"} rating={5}/>
      <Products id={18} title="Breadfruit"  price={provisions.breadFruit} weight={"lbs"} image={"https://static.wixstatic.com/media/aed5d5_841fc16d911a424c846692db30121679~mv2.jpg/v1/fill/w_568,h_392,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/aed5d5_841fc16d911a424c846692db30121679~mv2.jpg"} rating={5}/>
      <Products id={19} title="Tanya"  price={provisions.tanya} weight={"lbs"} image={"https://i0.wp.com/tropicalimportsexports.com/wp-content/uploads/2022/12/Tania.png?fit=1024%2C998&ssl=1"} rating={5}/>
      </div>
      <h1>Garden Seasoning</h1>
      <div className='home_products'>
      <Products id={20} title="Tanya"  price={100} weight={"lbs"} image={"https://m.media-amazon.com/images/I/91Wb8b5kUuL._AC_UF894,1000_QL80_.jpg"} rating={5}/>
      <Products id={21} title="Tanya"  price={100} weight={"lbs"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSd4cIbqSrcFkeeq7g3-utK9WgpnGzO-l8zA&s"} rating={5}/>
      <Products id={22} title="Tanya"  price={100} weight={"lbs"} image={"https://naturesfuzion.com/wp-content/uploads/2024/01/Seasoning-peppers.webp"} rating={5}/>
      <Products id={23} title="Tanya"  price={100} weight={"lbs"} image={"https://i.pinimg.com/originals/e3/5f/1f/e35f1fc9e8c38a7a405eb3f8d1c283b4.jpg"} rating={5}/>
      <Products id={24} title="Tanya"  price={100} weight={"lbs"} image={"https://www.lovefoodhatewaste.com/sites/default/files/styles/16_9_two_column/public/2022-08/Onion-sh1154249161.jpg.webp?itok=mJob5A8b"} rating={5}/>


      </div>
    </div>
  )
}

export default Home;
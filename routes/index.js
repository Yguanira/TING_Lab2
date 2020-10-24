var express = require('express');
var router = express.Router();

// Carousel
var slides = new Array();

var slide1 = new Array();
slide1 ['isActive'] = 'active';
slide1 ['contentPosition'] = 'text-left';
slide1 ['imageUrl'] = 'https://i.pinimg.com/originals/d6/4e/92/d64e921043f99f5f3faea8f4308551fe.jpg'
slide1 ['heading'] = 'Heading 1';
slide1 ['description'] = 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.';
slide1 ['buttonName'] = 'Button 1';

slides.push(slide1)

var slide2 = new Array();
slide2 ['isActive'] = '';
slide2 ['contentPosition'] = '';
slide2 ['imageUrl'] = 'https://cutewallpaper.org/21/neutral-desktop-wallpaper/Mandala-Laptop-Wallpapers-Top-Free-Mandala-Laptop-.jpg'
slide2 ['heading'] = 'Heading 2';
slide2 ['description'] = 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.';
slide2 ['buttonName'] = 'Button 2';

slides.push(slide2)

var slide3 = new Array();
slide3 ['isActive'] = '';
slide3 ['contentPosition'] = 'text-right';
slide3 ['imageUrl'] = 'https://wallpaperaccess.com/full/168798.jpg'
slide3 ['heading'] = 'Heading 3';
slide3 ['description'] = 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.';
slide3 ['buttonName'] = 'Button 3';

slides.push(slide3)

// News
var news = new Array();

var new1 = new Array();
new1 ['imageUrl'] = 'https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1'
new1 ['heading'] = 'Heading 1';
new1 ['description'] = 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.';
new1 ['buttonName'] = 'Button 1';

news.push(new1)

var new2 = new Array();
new2 ['imageUrl'] = 'https://www.acolorfulday.com/wp-content/uploads/2020/04/Frases-de-inspiracion.jpg'
new2 ['heading'] = 'Heading 2';
new2 ['description'] = 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.';
new2 ['buttonName'] = 'Button 2';

news.push(new2)

var new3 = new Array();
new3 ['imageUrl'] = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0x4kt_M_o3iVsoAQCVm4FX_4PT3lBLgSWWw&usqp=CAU'
new3 ['heading'] = 'Heading 3';
new3 ['description'] = 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.';
new3 ['buttonName'] = 'Button 3';

news.push(new3)

/* ====== GET home page ====== */
router.get('/', function(req, res, next) {
  res.render('index', 
  { 
    title: '[Nombre de la empresa]',
    slides: slides,
    news: news
  }
);
});

module.exports = router;

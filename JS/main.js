let slider = {
    //Создаем массив с изображениями
    slides: ['../Restaurant-images/1.jpg','../Restaurant-images/2.jpg','../Restaurant-images/3.jpg'],
   
    //Начальный кадр(индекс из массива, нумерация с 0)
    frame:0,
    set: function(image){
        //установка нужного фона слайдеру
        document.getElementById('src').style.backgroundImage = "url("+image+")";
    },
    init: function(){
        //Запуск слайдера с начальной картинкой 
        this.set(this.slides[this.frame]);
    },
    left: function() {
        //Сдвиг слайдера влево
        this.frame--;
        if(this.frame<0) this.frame = this.slides.length-1;
        this.set(this.slides[this.frame]);
    },
    right: function(){
        //Сдвиг слайдера вправо
        this.frame++;
        if(this.frame == this.slides.length) this.frame =0;
        this.set(this.slides[this.frame]);
    }
};

//Запуск слайдера после загрузки документа
window.onload = function() {
    slider.init();
    setInterval(function(){
        slider.right();
    }, 5000);
}
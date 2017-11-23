$(Document).ready(function(){
    var choose = 0;
    var bg = "Za pomocą właściwości background-color możemy określić kolor tła interesującego nas elementu HTML. Za pomocą właściwości background-color oraz dowolnego sposobu definiowania wartości koloru w języku CSS możemy określić kolor tła interesującego nas elementu HTML. ";
   $("#lists li:first-child").click(function(){
       $("#content").text(bg);
   });
    var border = "Za pomocą właściwości border-top-width możemy określić rozmiar grubości górnego obramowania interesującego nas elementu HTML. Za pomocą właściwości border-top-width oraz dowolnej nieujemnej liczby wraz z wybraną jednostką absolutną lub jednostką relatywną możemy określić rozmiar grubości górnego obramowania interesującego nas elementu HTML. ";
    $("#lists li:nth(1)").click(function(){
       $("#content").text(border);
   });
    var margin = "Za pomocą właściwości margin-top możemy określić rozmiar górnego zewnętrznego marginesu interesującego nas elementu HTML. Za pomocą właściwości margin-top oraz dowolnej liczby wraz z wybraną jednostką absolutną lub jednostką relatywną lub za pomocą procentów możemy określić rozmiar górnego zewnętrznego marginesu interesującego nas elementu HTML. Za pomocą wartości auto właściwości margin-top możemy sprawić, że przeglądarka internetowa sama określi rozmiar górnego zewnętrznego marginesu interesującego nas elementu HTML (najczęściej rozmiarem tym jest rozmiar 0). ";
    $("#lists li:nth(2)").click(function(){
       $("#content").text(margin);
   });
    var padding = "Padding również określa przestrzeń wokół elementów. Standardy CSS pozwalają na następujące ustawienia:lewy padding-left prawy padding-right  góra padding-top dół padding-bottom";
    $("#lists li:nth(3)").click(function(){
       $("#content").text(padding);
   });
    var hewe = "Set the height and width of a paragraph: p.ex {height: 100px;width: 100px; }";
    $("#lists li:nth(4)").click(function(){
       $("#content").text(hewe);
   });
    var fonts = "The font family of a text is set with the font-family property.The font-family property should hold several font names as a fallback system. If the browser does not support the first font, it tries the next font, and so on.Start with the font you want, and end with a generic family, to let the browser pick a similar font in the generic family, if no other fonts are available.Note: If the name of a font family is more than one word, it must be in quotation marks, like: Times New Roman.More than one font family is specified in a comma-separated list:";
    $("#lists li:nth(5)").click(function(){
       $("#content").text(fonts);
   });
    var text = "The color property is used to set the color of the text. The text-align property is used to set the horizontal alignment of a text.The text-decoration property is used to set or remove decorations from text.The text-transform property is used to specify uppercase and lowercase letters in a text.The text-indent property is used to specify the indentation of the first line of a text:The text-shadow property adds shadow to text.";
    $("#lists li:nth(6)").click(function(){
       $("#content").text(text);
   });
    var links = "In addition, links can be styled differently depending on what state they are in.The four links states are: a:link - a normal, unvisited link a:visited - a link the user has visited a:hover - a link when the user mouses over it a:active - a link the moment it is clicked";

    $("#lists li:nth(7)").click(function(){
       $("#content").text(links);
   });
    var lists = "The list-style-type property specifies the type of list item marker. The list-style-image property specifies an image as the list item marker:The list-style property is a shorthand property. It is used to set all the list properties in one declaration:";
    $("#lists li:nth(8)").click(function(){
       $("#content").text(lists);
   });
    var max = "As mentioned in the previous chapter; a block-level element always takes up the full width available (stretches out to the left and right as far as it can).Setting the width of a block-level element will prevent it from stretching out to the edges of its container.";
    $("#lists li:nth(9)").click(function(){
       $("#content").text(max);
   });
    var position = "The position property specifies the type of positioning method used for an element. There are five different position values:    static,    relative,   fixed,   absolute,    sticky";
    $("#lists li:nth(10)").click(function(){
       $("#content").text(position);
   });
    var overflow = "The overflow property specifies whether to clip content or to add scrollbars when the content of an element is too big to fit in a specified area. The overflow property has the following values:   visible - Default. The overflow is not clipped. It renders outside the element's box,   hidden - The overflow is clipped, and the rest of the content will be invisible,  scroll - The overflow is clipped, but a scrollbar is added o see the rest of the content,  auto - If overflow is clipped, a scrollbar should be added to see the rest of the content";
    $("#lists li:nth(11)").click(function(){
       $("#content").text(overflow);
   });
    var float = "The CSS float property specifies how an element should float. The CSS clear property specifies what elements can float beside the leared element and on which side. he float property can have one of the following values:    left - The element floats to the left of its container,   right- The element floats to the right of its container,   none - The element does not float (will be displayed just where it occurs in the text). This is default,    inherit - The element inherits the float value of its parent";
    $("#lists li:nth(12)").click(function(){
       $("#content").text(float);
   });
    
    $("#lists li").click(function(){
        $("#content").addClass("li-active");
        if(choose != 1){
            $(this).addClass("button-active");
        }else{
            $("#lists li").removeClass("button-active");
            $(this).addClass("button-active");
        }
        choose = 1;
    })
    
    
});
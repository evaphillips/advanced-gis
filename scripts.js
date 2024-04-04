$(document).ready(function () {

    // Hover functionality
    $('.image-wrapper').hover(function () {
        // This function is triggered when the mouse pointer enters the area of an element with the class 'image-wrapper'

        $(this).find('img').stop().animate({
            // Finds the 'img' element inside the current 'image-wrapper' element and animates its CSS properties
            opacity: 0.2 // Animates the opacity of the image to 0.2 (20% opacity)
        }, 200); // Duration of the animation in milliseconds (200ms)

        $(this).find('.text').removeClass('hide');
        // Finds the element with the class 'text' inside the current 'image-wrapper' element and removes the class 'hide'

    }, function () {
        // This function is triggered when the mouse pointer leaves the area of an element with the class 'image-wrapper'

        $(this).find('img').stop().animate({
            // Finds the 'img' element inside the current 'image-wrapper' element and animates its CSS properties
            opacity: 1 // Animates the opacity of the image to 1 (fully opaque)
        }, 500); // Duration of the animation in milliseconds (500ms)

        $(this).find('.text').addClass('hide');
        // Finds the element with the class 'text' inside the current 'image-wrapper' element and adds the class 'hide'
    });

    // Click functionality
    $('.image-wrapper').click(function () {
        // This function is triggered when an image inside an 'image-wrapper' is clicked

        var customText = $(this).data('text');
        // Retrieves the custom text stored in the 'data-text' attribute of the clicked 'image-wrapper' element

        alert(customText);
        // Displays the custom text in an alert dialog box
    });
});

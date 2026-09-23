export function showModalCart(cartBtn, cartModal, closeModalBtn) {
    //open modal cart
    cartBtn.addEventListener("click", function() {
        cartModal.style.display = "flex";
    });

    //close modal cart
    cartModal.addEventListener("click", function(event) {
        if(event.target === cartModal) {
            cartModal.style.display = "none";

        }
    });

    // close modal btn
    closeModalBtn.addEventListener("click", function() {
        cartModal.style.display = "none";
    })

}
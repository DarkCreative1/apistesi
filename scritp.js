document.addEventListener('DOMContentLoaded', function() {
    // Sayfa yüklendiğinde body'nin tüm çocuk elementlerini gizle
    var children = document.body.children;
    for (var i = 0; i < children.length; i++) {
        children[i].style.opacity = '0';
        children[i].style.transition = 'opacity 1s';
    }

    // zuzia-heart ve heart sınıflarını görünür yap
    var zuziaHearts = document.querySelectorAll('.zuzia-heart, .heart');
    for(var i = 0; i < zuziaHearts.length; i++) {
        zuziaHearts[i].style.opacity = '1';
        
    }

    setTimeout(function() {
        // 5 saniye sonra zuzia-heart ve heart sınıflarını gizle
        for(var i = 0; i < zuziaHearts.length; i++) {
            zuziaHearts[i].style.opacity = '0';
            
        zuziaHearts[i].style.transition = 'opacity 1s';
        }

    }, 5000);
    
    setTimeout(function() {
        // body'nin tüm çocuk elementlerini tekrar görünür yap
        for (var i = 0; i < children.length; i++) {
            children[i].style.opacity = '1';
        }
    }, 6000);
});
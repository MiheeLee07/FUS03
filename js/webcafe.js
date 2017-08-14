$(function() {
    // 가장 먼저 할 일은 지금 있는 돔 구조에서 클릭할 대상을 선택하는 것. 선택하는 방식은 css와 거의 흡사
    $('.btn-menubar').on('click', function() {
        $(this).parent().siblings().toggleClass('main-menu-act');
        //.btn-menubar대신 this로 받을 수 있음. parent는 한 단계 위인 부모. parents는 부모의 윗단계 조부모. siblings은 부모의 형제를 찾아간다는 뜻.
        // 즉, (this)btn-menubar의 부모의 형제를 찾아 main-menu-act를 추가하겠다.는 의미.

    });
    $('.menubar').on('click', function() {
        $(this).parent().siblings().toggleClass('main-menu-act');
        //.btn-menubar대신 this로 받을 수 있음. parent는 한 단계 위인 부모. parents는 부모의 윗단계 조부모. siblings은 부모의 형제를 찾아간다는 뜻.
        // 즉, (this)btn-menubar의 부모의 형제를 찾아 main-menu-act를 추가하겠다.는 의미.

    });
    // $('.btn-menubar')의미는 btn-menubar라는 이름을 가진 애를 선택하겠다는 것. 
    // .on('click')은 클릭하겠다는 의미. 
    // addClass말고 toggleClass를 쓰면 누르면 추가되고 다시 누르면 사라지고...

});

// 펑션은 항상 이렇게 생겼음. 실행구문은 중가로 안에.{}
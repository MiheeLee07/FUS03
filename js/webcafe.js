$(function() {
    var button = $('.btn-menubar');
    // if로 텍스트 구문 바꾸기 위해 사전작업으로 변수 선언
    var button_span = $('.btn-menubar, .menubar');
    // 8/16 변수는 명령어 앞에 선언해줘야 함. 그럼 저기 선언해준 애랑 같은 이름들은 모두 변수 이름으로 줄여서 선언해줄 수 있음. 즉 변수이름은 내가 원하는 이름으로 정할 수 있다. 
    //  변수를 왜 쓰냐면...this가 가르키는 애가 누구인지 명확히 해주지 않으면 코드가 길어지면 계속 퍼포먼스 이슈가 발생하게 됨. 그래서 변수를 써줌.
    var container = button_span.parent();
    var main_menu = button_span.parent().siblings();
    var last_menu = $('.main-menu li:last-child a');
    var menu_form = $('.meun-form');
    // 메인메뉴에서 li를 찾고, 그 다음 가장 마지막 자식을 찾아서 호출하라는 의미.
    // 가장 먼저 할 일은 지금 있는 돔 구조에서 클릭할 대상을 선택하는 것. 선택하는 방식은 css와 거의 흡사
    // $('.btn-menubar').on('click', function() {
    button_span.on('click', function() {
        // $(this).parent().siblings().toggleClass('main-menu-act');
        // button_span.parent().toggleClass('menubar-act')
        container.toggleClass('menubar-act');
        // btn-menubar대신 this로 받을 수 있음. parent는 한 단계 위인 부모. parents는 부모의 윗단계 조부모. siblings은 부모의 형제를 찾아간다는 뜻.
        // 즉, (this)btn-menubar의 부모의 형제를 찾아 main-menu-act를 추가하겠다.는 의미.
        // button_span.parnet().toggleClass('main-menu-act');
        main_menu.toggleClass('main-menu-act');
        if (container.hasClass('menubar-act')) {
            button.text('메인 메뉴 닫기');


        } else {
            button.text('메인 메뉴 보기');
        }
    });
    last_menu.on('focusout', function() {
        main_menu.toggleClass('main-menu-act');
        // focusout이 발생하면 펑션을 실행하라. 펑션은 메인메뉴.토글클래스...어쩌구 다.
    });
    meun_form.on('focusin', function() {
        main_menu.toggleClass('main-menu-act');
    });
    //  $('.menubar').on('click', function() {
    // on메소드 대신 click메소드를 써도 됨. click(f)로 써도 되지만 click은 클릭만 가능하지만, on메소드는 여러개에 동시에 걸 수 있다. 예를 들어 on(click, focusin)라고 쓰면 클릭하거나, 혹은 포커스 인 되면 구동하라는 뜻. 
    // $(this).parent().siblings().toggleClass('main-menu-act');
    //.btn-menubar대신 this로 받을 수 있음. parent는 한 단계 위인 부모. parents는 부모의 윗단계 조부모. siblings은 부모의 형제를 찾아간다는 뜻.
    // 즉, (this)btn-menubar의 부모의 형제를 찾아 main-menu-act를 추가하겠다.는 의미.

    //   });
    // $('.btn-menubar')의미는 btn-menubar라는 이름을 가진 애를 선택하겠다는 것. 
    // .on('click')은 클릭하겠다는 의미. 
    // addClass말고 toggleClass를 쓰면 누르면 추가되고 다시 누르면 사라지고...

});

// 펑션은 항상 이렇게 생겼음. 실행구문은 중가로 안에.{}
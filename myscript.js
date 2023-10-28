function closeNews() {
    document.getElementById('news1').style.display='none';
    document.getElementById('news2').style.display='none';
    document.getElementById('news3').style.display='none';
    let main = document.getElementsByClassName('main');

    main[0].style.opacity='1';
}

function button1() {
    document.getElementById('news1').style.display='inherit';
    let main = document.getElementsByClassName('main');

    main[0].style.opacity='0.5';

    setTimeout(closeNews, 5000);
}

function button2() {
    document.getElementById('news2').style.display='inherit';
    let main = document.getElementsByClassName('main');

    main[0].style.opacity='0.5';

    setTimeout(closeNews, 5000);
}

function button3() {
    document.getElementById('news3').style.display='inherit';
    let main = document.getElementsByClassName('main');

    main[0].style.opacity='0.5';

    setTimeout(closeNews, 5000);
}
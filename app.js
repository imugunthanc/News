const news = new News();
const paint = new Paint();

function headlinesNews() {
    document.getElementById('headlines-wrap').innerHTML = '';

    disp(this);
    news.headlines()
        .then(output => {
            if (output.status === 'ok') {
                let content = output.articles;
                content.forEach(newsline => {
                    paint.displayNews(newsline);
                });

            }
            else {
                console.log('Something Went Wrong');
            }

        })
        .catch(err => console.log(err));
}

function techNews() {
    document.getElementById('tech-wrap').innerHTML = '';
    disp(this);
    news.tech()
        .then(output => {
            if (output.status === 'ok') {
                let content = output.articles;
                content.forEach(newsline => {
                    paint.displayNews(newsline);
                });

            }
            else {
                console.log('Something Went Wrong');
            }

        })
        .catch(err => console.log(err));
}

function healthNews() {
    document.getElementById('health-wrap').innerHTML = '';
    disp(this);
    news.health()
        .then(output => {
            if (output.status === 'ok') {
                let content = output.articles;
                content.forEach(newsline => {
                    paint.displayNews(newsline);
                });

            }
            else {
                console.log('Something Went Wrong');
            }

        })
        .catch(err => console.log(err));
}

function sportsNews() {
    document.getElementById('sports-wrap').innerHTML = '';
    disp(this);
    news.sports()
        .then(output => {
            if (output.status === 'ok') {
                let content = output.articles;
                content.forEach(newsline => {
                    paint.displayNews(newsline);
                });

            }
            else {
                console.log('Something Went Wrong');
            }

        })
        .catch(err => console.log(err));
}

window.addEventListener('DOMContentLoaded', () => {
    registerSW();
    headlinesNews();
    document.getElementById('headlines-wrap').style.display = "block";
});

document.getElementById('headlines').addEventListener('click', headlinesNews);

document.getElementById('tech').addEventListener('click', techNews);

document.getElementById('health').addEventListener('click', healthNews);

document.getElementById('sports').addEventListener('click', sportsNews);

function disp(el) {
    console.log('clicked');
    var list = document.querySelectorAll('.list');
    var index = Array.prototype.slice.call(list).indexOf(el);
    var item = document.querySelectorAll('.list-wrap');
    item.forEach(it => {
        var listIndex = Array.prototype.slice.call(item).indexOf(it);
        it.style.display = "block";
        if (index !== listIndex) {
            it.style.display = "none";
        }
    })
}

async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./sw.js');
        } catch (e) {
            console.log(`SW registration failed`);
        }
    }
}
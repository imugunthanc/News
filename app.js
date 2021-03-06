const news = new News();
const paint = new Paint();

function headlinesNews() {
    disp(this);
    news.headlines()
        .then(output => {
            if (output.status === 'ok') {
                const dom = document.getElementById('headlines-wrap');
                dom.innerHTML = '';
                let content = output.articles;
                content.forEach(newsline => {
                    paint.displayNews(newsline, dom);
                });
            }
            else {
                console.log('Something Went Wrong');
            }
        })
        .catch(err => console.log(err));
}

function techNews() {
    disp(this);
    news.tech()
        .then(output => {
            if (output.status === 'ok') {
                const dom = document.getElementById('tech-wrap');
                dom.innerHTML = '';
                let content = output.articles;
                content.forEach(newsline => {
                    paint.displayNews(newsline, dom);
                });

            }
            else {
                console.log('Something Went Wrong');
            }

        })
        .catch(err => console.log(err));
}

function healthNews() {
    disp(this);
    news.health()
        .then(output => {
            if (output.status === 'ok') {
                const dom = document.getElementById('health-wrap');
                dom.innerHTML = '';
                let content = output.articles;
                content.forEach(newsline => {
                    paint.displayNews(newsline, dom);
                });
            }
            else {
                console.log('Something Went Wrong');
            }
        })
        .catch(err => console.log(err));
}

function sportsNews() {
    disp(this);
    news.sports()
        .then(output => {
            if (output.status === 'ok') {
                const dom = document.getElementById('sports-wrap');
                dom.innerHTML = '';
                let content = output.articles;
                content.forEach(newsline => {
                    paint.displayNews(newsline, dom);
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
    document.getElementById('headlines').classList.add('active');
});

document.getElementById('headlines').addEventListener('click', headlinesNews);

document.getElementById('tech').addEventListener('click', techNews);

document.getElementById('health').addEventListener('click', healthNews);

document.getElementById('sports').addEventListener('click', sportsNews);

function disp(el) {
    var list = document.querySelectorAll('.list');
    var index = Array.prototype.slice.call(list).indexOf(el);
    var item = document.querySelectorAll('.list-wrap');
    list.forEach(li => {
        var listIn = Array.prototype.slice.call(list).indexOf(li);
        // console.log(listIn);
        if (index !== listIn) {
            li.classList.remove('active');
        }
        else {
            li.classList.add('active');
        }
    })
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

// let deferredPrompt;

// window.addEventListener('beforeinstallprompt', (e) => {
//     // Prevent Chrome 67 and earlier from automatically showing the prompt
//     e.preventDefault();
//     // Stash the event so it can be triggered later.
//     deferredPrompt = e;
// });

// btnAdd.addEventListener('click', (e) => {
//     // hide our user interface that shows our A2HS button
//     btnAdd.style.display = 'none';
//     // Show the prompt
//     deferredPrompt.prompt();
//     // Wait for the user to respond to the prompt
//     deferredPrompt.userChoice
//         .then((choiceResult) => {
//             if (choiceResult.outcome === 'accepted') {
//                 console.log('User accepted the A2HS prompt');
//             } else {
//                 console.log('User dismissed the A2HS prompt');
//             }
//             deferredPrompt = null;
//         });
// });
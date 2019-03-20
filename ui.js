class Paint {
    constructor() {
        this.headlinesContainer = document.getElementById('headlines-wrap');
        this.techContainer = document.getElementById('tech-wrap');
        this.healthContainer = document.getElementById('health-wrap');
        this.sportsContainer = document.getElementById('sports-wrap');
    }
    displayNews(content) {
        this.headlinesContainer.innerHTML +=
            `<a class="card" href="${content.url}" target="_blank"  rel="noopener">
                <div class="row">
                    <div class="col-md-4 col-5">
                        <img class="news-thumbnail" src="${content.urlToImage}" alt="Image">
                    </div>
                    <div class="col-md-8 col-7">
                        <div class="news-content">
                            <h4>${content.title}</h4>
                            <p>${content.content}</p>
                        </div>
                    </div>
                </div>
            </a>`;
    }
}

class News {
    constructor() {
        this.apikey = 'c5ddc397b84a4102b89000317616fb2f';
    }
    async sports() {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${this.apikey}`);
        const responseNews = await response.json();
        return responseNews;
    }
    async tech() {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=techradar&apiKey=${this.apikey}`);
        const responseNews = await response.json();
        return responseNews;
    }
    async headlines() {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=${this.apikey}`);
        const responseNews = await response.json();
        return responseNews;
    }
    async health() {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${this.apikey}`);
        const responseNews = await response.json();
        return responseNews;
    }
}


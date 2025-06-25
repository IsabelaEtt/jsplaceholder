const fs = require('fs');

const startAlbum = 1;
const endAlbum = 10;
let id = 1;

const urls = [
    "photo-1465101178521-c1a9136a3b99",
    "photo-1506744038136-46273834b3fb",
    "photo-1469474968028-56623f02e42e",
    "photo-1502082553048-f009c37129b9",
    "photo-1465156799763-2c087c332922",
    "photo-1507525428034-b723cf961d3e",
    "photo-1465101046530-73398c7f28ca",
    "photo-1519125323398-675f0ddb6308",
    "photo-1508214751196-bcfd4ca60f91",
    "photo-1517841905240-472988babdf9",
    "photo-1464983953574-0892a716854b",
    "photo-1500534314209-a25ddb2bd429",
    "photo-1519125323398-675f0ddb6308",
    "photo-1465101178521-c1a9136a3b99",
    "photo-1506744038136-46273834b3fb",
    "photo-1469474968028-56623f02e42e",
    "photo-1502082553048-f009c37129b9",
    "photo-1465156799763-2c087c332922",
    "photo-1507525428034-b723cf961d3e",
    "photo-1465101046530-73398c7f28ca",
    "photo-1519681393784-d120267933ba",
    "photo-1504196606672-aef5c9cefc92",
    "photo-1465101046530-73398c7f28ca",
    "photo-1519125323398-675f0ddb6308",
    "photo-1465101178521-c1a9136a3b99",
    "photo-1506744038136-46273834b3fb",
    "photo-1469474968028-56623f02e42e",
    "photo-1502082553048-f009c37129b9",
    "photo-1465156799763-2c087c332922",
    "photo-1507525428034-b723cf961d3e",
    "photo-1465101046530-73398c7f28ca",
    "photo-1519125323398-675f0ddb6308",
    "photo-1508214751196-bcfd4ca60f91",
    "photo-1517841905240-472988babdf9",
    "photo-1464983953574-0892a716854b",
    "photo-1500534314209-a25ddb2bd429",
    "photo-1519125323398-675f0ddb6308",
    "photo-1465101178521-c1a9136a3b99",
    "photo-1506744038136-46273834b3fb",
    "photo-1469474968028-56623f02e42e",
    "photo-1502082553048-f009c37129b9",
    "photo-1465156799763-2c087c332922",
    "photo-1507525428034-b723cf961d3e",
    "photo-1465101046530-73398c7f28ca",
    "photo-1519125323398-675f0ddb6308",
    "photo-1519125323398-675f0ddb6308",
    "photo-1519125323398-675f0ddb6308",
    "photo-1519125323398-675f0ddb6308",
    "photo-1519125323398-675f0ddb6308",
    "photo-1519125323398-675f0ddb6308"
];

let fotos = [];

for (let albumId = startAlbum; albumId <= endAlbum; albumId++) {
    const photosPerAlbum = Math.floor(Math.random() * 5) + 2;
    for (let i = 0; i < photosPerAlbum; i++) {
        const urlId = urls[Math.floor(Math.random() * urls.length)];
        fotos.push({
            id: id++,
            albumId,
            url: `https://images.unsplash.com/${urlId}?q=75&fm=jpg&w=600&fit=max`,
            thumbnailUrl: `https://images.unsplash.com/${urlId}?q=75&fm=jpg&w=200&fit=max`
        });
    }
}

fs.writeFileSync('fotos.json', JSON.stringify(fotos, null, 2));
console.log('Blocos de fotos gerados em fotos.json');
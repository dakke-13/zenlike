// データをまとめる
const zenUniversityFeatures = [
    {
        title: "完全オンライン",
        description: "通学が不要なのでいつでもどこでも学べる！"
    },
    {
        title: "すきな授業が学べる",
        description: "文型理系気にせず好きな授業に挑戦できる！"
    },
    {
        title: "意外とサポートが充実",
        description: "いろいろなサポートの人がいて、授業内外で助けてくれる！"
    },
    
];

// 画面に表示する関数
function renderFeatures() {
    const container = document.getElementById('features-container');

    zenUniversityFeatures.forEach(feature => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2>${feature.title}</h2>
            <p>${feature.description}</p>
        `;
        container.appendChild(card);
    });
}

// 実行
renderFeatures();
function trainingView() {
    let treningsopplegg = {
        bein: [
            {
                knebøy: 'Knebøy 10 x 3',
                knebøyMVekt: 'Knebøy 10 x 3',
                knebøySumo: 'Knebøy med ben spredt 10 x 3',
            }
        ],
        Kjerne: [
            {
                benhev: 'Ligg på rygg og hev ben vertikalt og ned til horisontalt uten at fot tar i bakken, sakte tempo og reduser krumning i rygg så godt du klarer',
                kneTilAlbue: 'Ligg på rygg, hold hender bak hodet og løft ett kne samtidig som du møter det kneet med motsatt side albue' 
            }
        ]
    }
    document.getElementById('app').innerHTML = /*HTML*/`
<div>
    <h1>Trening</h1>
    <div>${treningsopplegg.bein[0].knebøy}</div>
    <div>${treningsopplegg.bein[0].knebøyMVekt}</div>
    <div><input type="checkbox"${treningsopplegg.bein[0].knebøySumo}/></div>
    <img src="images/martinBilde.jpg">
</div>
    `;
}
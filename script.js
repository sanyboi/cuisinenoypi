document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');

    if (query && query.length > 0) {
        const resultsDiv = document.querySelector('.results');

        const recipes = [
            { name: 'Adobong Baboy', img: 'adobo.JPG', page: 'adobo.html' },
            { name: 'Bulalo', img: 'bulalo.jpg', page: 'bulalo.html' },
            { name: 'Kare-Kare', img: 'Kare-KAre.jpg', page: 'karekare.html' },
            { name: 'Sinigang', img: 'siginang.jpg', page: 'sinigang.html' },
            { name: 'Sisig', img: 'picture/sizzling-sisig.jpeg', page: 'sisig.html' },
            { name: 'Mechado', img: 'mechado.jpg', page: 'mechado.html' },
            { name: 'Kilawin', img: 'Kilaw.jpg', page: 'kilawin.html' },
            { name: 'Tinola', img: 'Chicke Tinola.jpg', page: 'tinola.html' },
            { name: 'Afritada', img: 'afritada.jpg', page: 'afritada.html'},
            { name: 'Adobong Kangkong' , img: 'adobongkangkongwater.jpg', page: 'adobongkangkong.html'},
            { name: 'Adobong Sitaw' , img: 'adobongsitaw.jpg', page: 'adobongsitaw.html'},
            { name: 'Ampalaya Salad' , img: 'pictures/ampalayasalad.jpg', page: 'ampalayasalad.html'},
            { name: 'Arrozacaldo' , img: 'pictures/arrozcaldo.jpg', page: 'arrozcaldo.html'},
            { name: 'Balbacua' , img: 'pictures/balbacua.jpg', page: 'balbacua.html'},
            { name: 'Bangsilog' , img: 'pictures/bangsilog.jpg', page: 'bangsilog.html'},
            { name: 'Batangas Lomi' , img: 'pictures/batangaslomi.jpg', page: 'lomi.html'},
            { name: 'Batchoy' , img: 'pictures/batchoy.jpg', page: 'batchoy.html'},
            { name: 'Bicol Express' , img: 'pictures/bicolexpress.jpg', page: 'bicol-express.html' },
            { name: 'Biko' , img: 'pictures/biko.jpg', page: 'biko.html' },
            { name: 'Binagoongan' , img: 'pictures/binagoongan.jpg', page: 'binagoongan.html' },
            { name: 'Bistek Tagalog' , img: 'pictures/bistektagalog.jpg', page: 'bistektagalog.html' },
            { name: 'Bulalo' , img: 'pictures/bulalo.jpg', page: 'bulalo.html' },
            { name: 'Bulanglang' , img: 'pictures/bulanglang.jpg', page: 'bulanglang.html' },
            { name: 'Caldereta' , img: 'pictures/caldereta.jpg', page: 'caldereta.html' },
            { name: 'Cassava Cake' , img: 'pictures/cassavacake.jpg', page: 'cassavacake.html' },
            { name: 'Champorado' , img: 'pictures/champorado.jpg', page: 'champorado.html' },
            { name: 'Chicken BBQ' , img: 'pictures/chickenbbq.jpg', page: 'chickenbbq.html' },
            { name: 'Chicken Curry' , img: 'pictures/chickencurry.jpg', page: 'chickencurry.html' },
            { name: 'Chicken Inasal' , img: 'pictures/chickeninasal.jpg', page: 'chickeninasal.html' },
            { name: 'Chopseuy' , img: 'pictures/chopsuey.jpg', page: 'chopsuey.html' },
            { name: 'Crispy Pata' , img: 'pictures/crispypata.jpg', page: 'crispypata.html' },
            { name: 'Daing na Bangus' , img: 'pictures/daingnabangus.jpg', page: 'daingnabangus.html' },
            { name: 'Dinengdeng' , img: 'pictures/dinengdeng.jpg', page: 'dinengdeng.html' },
            { name: 'Dinuguan' , img: 'pictures/dinuguan.jpg', page: 'dinuguan.html' },
            { name: 'Embutido' , img: 'pictures/embutido.jpg', page: 'embutido.html' },
            { name: 'Ensaladang Lato' , img: 'pictures/ensaladanglato.jpg', page: 'ensaladanglato.html' },
            { name: 'Ensaladang Talong' , img: 'pictures/ensaladangtalong.jpg', page: 'ensaladangtalong.html' },
            { name: 'Espasol' , img: 'pictures/espasol.jpg', page: 'espasol.html' },
            { name: 'Estofado' , img: 'pictures/estofado.jpg', page: 'estofado.html' },
            { name: 'Fishcabeche' , img: 'pictures/fishescabeche.jpg', page: 'fishescabeche.html' },
            { name: 'Ginataang Alimango' , img: 'pictures/ginataangalimango.jpg', page: 'aligue.html' },
            { name: 'Ginataang Langka' , img: 'pictures/ginataanglangka.jpg', page: 'ginataanglangka.html' },
            { name: 'Ginataang Bilo-Bilo' , img: 'pictures/ginataangbilo-bilo.jpg', page: 'ginataangbilobilo.html' },
            { name: 'Ginataang Kalabasa' , img: 'pictures/ginataangkalabasa.jpg', page: 'ginataangkalabasa.html' },
            { name: 'Ginataang Mais' , img: 'pictures/ginataangmais.jpg', page: 'ginataangmais.html' },
            { name: 'Ginataang Manok' , img: 'pictures/ginataangmanok.jpg', page: 'ginataangmanok.html' },
            { name: 'Ginataang Sigarilyas' , img: 'pictures/ginataangsigarilyas.jpg', page: 'ginataangsigarilyas.html' },
            { name: 'Ginataang Tilapia' , img: 'pictures/ginataangtilapia.jpg', page: 'ginataangtilapia.html' },
            { name: 'Ginisang Munggo' , img: 'pictures/ginisamunggo.jpg', page: 'ginisangmunggo.html' },
            { name: 'Ginisang Alugbati' , img: 'pictures/ginisangalugbati.jpg', page: 'ginisangalugbati.html' },
            { name: 'Ginisang Sayote' , img: 'pictures/ginisangsayote.jpg', page: 'ginisangsayote.html' },
            { name: 'Ginisang Togue' , img: 'pictures/ginisangtogue.jpg', page: 'ginisangtogue.html' },
            { name: 'Gising-Gising' , img: 'pictures/gisinggising.jpg', page: 'gisinggising.html' },
            { name: 'Halaan' , img: 'pictures/halaan.jpg', page: 'halaan.html' },
            { name: 'Halo - Halo' , img: 'pictures/halo-halo.jpg', page: 'halohalo.html' },
            { name: 'Hamonado' , img: 'pictures/hamonado.jpg', page: 'hamonado.html' },
            { name: 'Higado' , img: 'pictures/higado.jpg', page: 'higado.html' },
            { name: 'Inihaw na Bangus' , img: 'pictures/inihawnabangus.jpg', page: 'inihawnabangus.html' },
            { name: 'Inihaw na Hito' , img: 'pictures/inihawnahito.jpg', page: 'inihawnahito.html' },
            { name: 'Inihaw na Liempo' , img: 'pictures/inihawnaliempo.jpg', page: 'inihawnaliempo.html' },
            { name: 'Inihaw na Pusit' , img: 'pictures/inihawnapusit.jpg', page: 'inihawnapusit.html' },
            { name: 'Inasarabsab' , img: 'pictures/insarabasab.jpg', page: 'insarabasab.html' },
            { name: 'Kalamay' , img: 'pictures/kalamay.jpg', page: 'kalamay.html' },
            { name: 'Kare-Kare' , img: 'Kare-KAre.jpg', page: 'karekare.html' },
            { name: 'Kinunot na Pagi' , img: 'pictures/kinunotnapagi.jpg', page: 'kinununotnapag.html' },
            { name: 'Kutsinta' , img: 'pictures/kutsinta.jpg', page: 'kutsinta.html' },
            { name: 'Laswa' , img: 'pictures/laswa.jpg', page: 'laswa.html' },
            { name: 'Leche Flan' , img: 'pictures/lecheflan.jpg', page: 'lecheflan.html' },
            { name: 'Lechon Kawali' , img: 'pictures/lechonkawali.jpg', page: 'lechonkawali.html' },
            { name: 'Lengua' , img: 'pictures/lengua.jpg', page: 'lengua.html' },
            { name: 'Longsilog' , img: 'pictures/longsilog.jpg', page: 'longsilog.html' },
            { name: 'Lumpiang Hubad' , img: 'pictures/lumpiahubad.jpg', page: 'lumpianghubad.html' },
            { name: 'Lumpiang Sariwa' , img: 'pictures/lumpiasariwa.jpg', page: 'lumpiangsariwa.html' },
            { name: 'Lumpiang Shangahai' , img: 'pictures/lumpiashanghai.jpg', page: 'lumpiangshanghai.html' },
            { name: 'Maja Blanca' , img: 'pictures/maja-blanca.jpg', page: 'majablanca.html' },
            { name: 'Mango-Float' , img: 'pictures/mangofloat.jpg', page: 'mangofloat.html' },
            { name: 'Nilagang Baboy' , img: 'pictures/nilagangbaboy.jpg', page: 'nilagangbaboy.html' },
            { name: 'Nilagang Gulay' , img: 'pictures/nilaganggulay.jpg', page: 'nilaganggulay.html' },
            { name: 'Nilasaing na Hipon' , img: 'pictures/nilasingnahipon.jpg', page: 'nilasingnahipon.html' },
            { name: 'Paella' , img: 'pictures/paella.jpg', page: 'paella.html' },
            { name: 'Pako Salad' , img: 'pictures/pakosalad.jpg', page: 'pakosalad.html' },
            { name: 'Paksiw na Bangus' , img: 'pictures/paksiwnabangus.jpg', page: 'paksiwnabangus.html' },
            { name: 'Paksiw na Gulay' , img: 'pictures/paksiwnagulay.jpg', page: 'paksiwnagulay.html' },
            { name: 'Paksiw na Lechon' , img: 'pictures/paksiwnalechon.jpg', page: 'paksiwnalechon.html' },
            { name: 'Palitaw' , img: 'pictures/palitaw.jpg', page: 'palitaw.html' },
            { name: 'Pancit Bihon' , img: 'pictures/pancitbihon.jpg', page: 'pancitbihon.html' },
            { name: 'Pancit Canton' , img: 'pictures/pancitcanton.jpg', page: 'pancitcanton.html' },
            { name: 'Pancit Habhab' , img: 'pictures/pancithabhab.jpg', page: 'pancithabhab.html' },
            { name: 'Pancit Luglug' , img: 'pictures/pancitluglug.jpg', page: 'pancitluglug.html' },
            { name: 'Pancit Malabon' , img: 'pictures/pancitmalabon.jpg', page: 'pancitmalabon.html' },
            { name: 'Palabok' , img: 'pictures/pancitpalabok.jpg', page: 'pancitpalabok.html' },
            { name: 'Pancit Sotanghon' , img: 'pictures/pancitsotanghon.jpg', page: 'pancitsotanghon.html' },
            { name: 'Pandesal' , img: 'pictures/pandesal.jpg', page: 'pandesal.html' },
            { name: 'Papaitan' , img: 'pictures/papaitan.jpg', page: 'papaitan.html' },
            { name: 'Pastillas De Leche' , img: 'pictures/pastillas-de-leche.jpg', page: 'pastillasdeleche.html' },
            { name: 'Pata Hamonado' , img: 'pictures/patahamonado.jpg', page: 'patahamonado.html' },
            { name: 'Patatim' , img: 'pictures/patatim.jpg', page: 'patatim.html' },
            { name: 'Pesang Isda' , img: 'pictures/pesangisda.jpg', page: 'pesangisda.html' },
            { name: 'Pichi-Pichi' , img: 'pictures/pichi-pichi.jpg', page: 'pichipichi.html' },
            { name: 'Pinais na Hipon' , img: 'pictures/pinaisnahipon.jpg', page: 'pinaisnahipon.html' },
            { name: 'Pininyahang Manok' , img: 'pictures/pininyahangmanok.jpg', page: 'pininyahangmanok.html' },
            { name: 'Pochero' , img: 'pictures/pochero.jpg', page: 'pochero.html' },
            { name: 'Pork BBQ' , img: 'pictures/porkbbq.jpg', page: 'porkbbq.html' },
            { name: 'Pritong Talong' , img: 'pictures/pritongtalong.jpg', page: 'pritongmalunggay.html' },
            { name: 'Puto' , img: 'pictures/puto.jpg', page: 'puto.html' },
            { name: 'Relyenong Bangus' , img: 'pictures/relyenongbangus.jpg', page: 'relyenongbangus.html' },
            { name: 'Sapin-Sapin' , img: 'pictures/sapin-sapin.jpg', page: 'sapinsapin.html' },
            { name: 'Sarsiadong Isda' , img: 'pictures/sarsiadongisda.jpg', page: 'sarsyadongisda.html' },
            { name: 'Sinampalukang Manok' , img: 'pictures/sinampalukangmanok.jpg', page: 'sinampalukangmanok.html' },
            { name: 'Sinangag' , img: 'pictures/sinangag.jpg', page: 'sinangag.html' },
            { name: 'Sorbetes' , img: 'pictures/sorbetes.jpg', page: 'sorbetes.html' },
            { name: 'Suman' , img: 'pictures/suman.jpg', page: 'suman.html' },
            { name: 'Sweet and Sour Fish' , img: 'pictures/sweetandsourfish.jpg', page: 'sweetsourfish.html' },
            { name: 'Tapsilog' , img: 'pictures/tapsilog.jpg', page: 'tapsilog.html' },
            { name: 'Tinolang Isda' , img: 'pictures/tinolangisda.jpg', page: 'tinolangisda.html' },
            { name: 'Tinumis' , img: 'pictures/tinumis.jpg', page: 'tinumis.html' },
            { name: 'Tinumok' , img: 'pictures/tinumok.jpg', page: 'tinumok.html' },
            { name: 'Tokwat Baboy' , img: 'pictures/tokwatbaboy.jpg', page: 'tokwatbaboy.html' },
            { name: 'Toratang Giniling' , img: 'pictures/tortangginiling.jpg', page: 'tortangginiling.html' },
            { name: 'Tortang Talong' , img: 'pictures/tortatalong.jpg', page: 'tortangtalong.html' },
            { name: 'Tocilog' , img: 'pictures/tosilog.jpg', page: 'tosilog.html' },
            { name: 'Turon' , img: 'pictures/turon.jpg', page: 'turon.html' },
            { name: 'Ube Halaya' , img: 'pictures/ubehalaya.jpg', page: 'ubehalaya.html' },
            { name: 'Utan Bisaya' , img: 'pictures/utanbisaya.jpg', page: 'utanbisaya.html' },
            { name: 'Yema' , img: 'pictures/yema.jpg', page: 'yema.html' },

            
             

        ];

        const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().startsWith(query.toLowerCase()));

        if (filteredRecipes.length > 0) {
            const recipeSection = document.createElement('div');
            recipeSection.className = 'recipe-section';
            resultsDiv.appendChild(recipeSection);

            filteredRecipes.forEach(recipe => {
                const recipeCard = document.createElement('div');
                recipeCard.className = 'recipe-card';
                recipeCard.innerHTML = `
                    <img src="${recipe.img}" alt="${recipe.name}">
                    <h2>${recipe.name}</h2>
                    <a href="${recipe.page}">View Recipe</a>
                `;
                recipeSection.appendChild(recipeCard);
            });
        } else {
            resultsDiv.innerHTML = '<p><center>No recipes found .</center></p>';
        }
    } else {
        const resultsDiv = document.querySelector('.results');
        resultsDiv.innerHTML = '<p>Please enter a Dish to search for recipes.</p>';
    }
});
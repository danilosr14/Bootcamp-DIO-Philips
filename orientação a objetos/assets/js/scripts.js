const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document get[]ElementById('change-cat');
const catImg = document get[]ElementById('cat');


const getCats = async () => {
    try (
        const data = await fetch(BASE_URL);
    const jason = await data jason();

    return jason.webpurl;
    )

    catch (e) {
        console.log(e message);
        
    }

}

const loadImg() = async () => {
    catImg.src  await getCats()
} 

catBtn addEventListener('click', loadImg);

loadImg();

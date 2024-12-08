
const cities = [
    { id: "a2", name: "أسيوط", info: "مدينة أسيوط: المساحة 25,926 كم²", map: "a2.PNG" },
    { id: "a3", name: "منفلوط", info: "مدينة منفلوط: المساحة 15,000 كم²", map: "a3.PNG" },
    { id: "a4", name: "ابنوب", info: "مدينة ابنوب: المساحة 12,000 كم²", map: "a4.PNG" },
    { id: "a5", name: "الفتح", info: "مدينة الفتح: المساحة 8,500 كم²", map: "a5.PNG" },
    { id: "a6", name: "ديروط", info: "مدينة ديروط: المساحة 20,000 كم²", map: "a6.PNG" },
    { id: "a7", name: "صدفا", info: "مدينة صدفا: المساحة 7,800 كم²", map: "a7.PNG" },
    { id: "a8", name: "أسيوط الجديدة", info: "مدينة أسيوط الجديدة: المساحة 10,000 كم²", map: "a8.PNG" },
    { id: "a9", name: "البداري", info: "مدينة البداري: المساحة 9,600 كم²", map: "a9.PNG" },
    { id: "a10", name: "ابوتيج", info: "مدينة ابوتيج: المساحة 14,000 كم²", map: "a10.PNG" },
    { id: "a11", name: "القوصية", info: "مدينة القوصية: المساحة 18,000 كم²", map: "a11.PNG" },
    { id: "a12", name: "ساحل سليم", info: "مدينة ساحل سليم: المساحة 6,000 كم²", map: "a12.PNG" },
    { id: "a13", name: "الغنايم", info: "مدينة الغنايم: المساحة 5,400 كم²", map: "a13.PNG" }
];


const cityButtons = document.querySelectorAll(".city-btn");
const mapElement = document.getElementById("map");
const cityDetails = document.getElementById("city-details");


cityButtons.forEach(button => {
    button.addEventListener("click", () => {
        const cityId = button.getAttribute("data-city");

     
        const cityData = cities.find(city => city.id === cityId);

        if (cityData) {
           
            mapElement.src = cityData.map;

          
            cityDetails.textContent = cityData.info;
        } else {
            cityDetails.textContent = "بيانات المدينة غير موجودة!";
        }
    });
});

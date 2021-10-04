const sim = {
    js: '<img class="portfolio__card-text-sim" src="./img/icons/JavaScript.svg" alt=":js:" title=":js:">',
    java: '<img class="portfolio__card-text-sim" src="./img/icons/Java.svg" alt=":java:" title=":java:">',
    nodejs: '<img class="portfolio__card-text-sim" src="./img/icons/node-js.svg" alt=":nodejs:" title=":nodejs:">',
    discord: '<img class="portfolio__card-text-sim" src="./img/icons/Discord.svg" alt=":discord:" title=":discord:">',
    youtube: '<img class="portfolio__card-text-sim" src="./img/icons/YouTube.svg" alt=":youtube:" title=":youtube:">',
    soundcloud: '<img class="portfolio__card-text-sim" src="./img/icons/SoundCloud.svg" alt=":soundcloud:" title=":soundcloud:">',
    owner: '<div class="tooltip"><img class="portfolio__card-text-sim" src="./img/icons/badges/owner.png" alt=":owner:" title=":owner:"><span class="tooltiptext">Владелец</span></div>',
    "bug-hunter": '<div class="tooltip"><img class="portfolio__card-text-sim" src="./img/icons/badges/bug-hunter.png" alt=":bug-hunter:" title=":bug-hunter:"><span class="tooltiptext">Искатель багов</span></div>',
    customer: '<div class="tooltip"><img class="portfolio__card-text-sim" src="./img/icons/badges/customer.png" alt=":customer:" title=":customer:"><span class="tooltiptext">Покупатель</span></div>',
    banana: '<div class="tooltip"><img class="portfolio__card-text-sim" src="./img/icons/badges/banana.png" alt=":customer:" title=":banana:"><span class="tooltiptext">Особенный</span></div>',
    "dungeon-master": '<div class="tooltip"><img class="portfolio__card-text-sim" src="./img/icons/badges/dungeon-master.png" alt=":dungeon-master:" title=":dungeon-master:"><span class="tooltiptext">Данжн мастер</span></div>',
},
    profile = {
        defColor: "#7f78bd",
        1: {
            new: !0,
            name: "Сайт портфолио 2",
            description: "Выполнен по задумке STIXIEC",
            icon: "https://cdn.discordapp.com/avatars/335863394739421185/f32b7632dbfcffa03f054b45558db6e1.png?size=128",
            buttonShare: {
                link: "https://st1xiec.github.io/stixiec.github.io/",
                title: "Перейди на страницу "
            },
            date: "Дата: 28/9/2021",
            bg: "url(./img/bgs/bg3.jpg)",
            color: "",
            button: {
                title: "Посетить",
                link: "https://st1xiec.github.io/stixiec.github.io/",
                color: ""
            }
        },
        2: {
            new: !0,
            name: "4CC Bot v1",
            description: `2021 | Многофункциональный бот на ${sim.nodejs}`,
            icon: "./img/avatars/geger.gif",
            buttonShare: {
                link: "https://st1xiec.github.io/items/4ccv1",
                title: "Купить скрипт бота"
            },
            date: "Услуга",
            bg: "url(./img/bgs/bg1.jpg)",
            color: "",
            button: {
                title: "700₽",
                link: "./items/4ccv1",
                color: "#3ba55c"
            }
        },
        3: {
            new: !0,
            name: "4CC Premium Music Bot",
            description: `2021 | Музыкальный-бот на ${sim.nodejs}`,
            icon: "./img/avatars/1.gif",
            buttonShare: {
                link: "https://st1xiec.github.io/items/bot-music",
                title: "Купить скрипт бота"
            },
            date: "Услуга",
            bg: "url(./img/bgs/bg1.jpg)",
            color: "",
            button: {
                title: "199₽",
                link: "./items/bot-music",
                color: "#3ba55c"
            }
        }
        
    };
const friends = {
    defColor: "#7f78bd",
    1: {
        name: `${sim.owner} STIXIEC `,
        description: ":c_emoji_4: Verified Developer <br>:c_dog1::c_dog2::c_dog2::c_dog2::c_dog2::c_dog2::c_dog3:",
        icon: "./img/avatars/stixiec.gif",
        bg: "url(./img/bgs/ZippWitch.jpg)",
        color: "#000000",
        link: "./portfolio"
    },
    2: {
        name: `${sim.customer}  ${sim.banana} 4CC Community`,
        description: "Сервер для приятного время провождения 4CC",
        icon: "https://cdn.discordapp.com/icons/890024462693580832/625b860a906a7cb19f4953ef60d33213.jpg",
        bg: "",
        color: "#36015e",
        link: "https://discord.gg/Zj2gxFWnba"
    },
    3: {
        
        name: `${sim.banana} ${sim.customer}  SPOOKY YONK MASHINE`,
        description: "Владелец Проекта RE:2D",
        icon: "./img/avatars/nikita.gif",
        bg: "",
        color: "#cbccc8",
        link: "https://vk.com/nishva"
    },
    4: {
        name: `${sim["dungeon-master"]} ${sim["bug-hunter"]} ${sim.customer} RE:2D 🏳️‍🌈`,
        description: "Discord сервер Проекта RE:2D <br>:c_dance:",
        icon: "./img/avatars/re2d.gif",
        bg: "",
        color: "#d15706",
        link: "https://discord.gg/FjwWFfP8U4"
    },
    5: {
        name: `${sim.banana} 4CC Premium Music Bot`,
        description: "Музыкальный бот с высоким качеством музыки | Help: >help",
        icon: "./img/avatars/bot.gif",
        bg: "url(./img/avatars/radeon.png)",
        color: "#dd3f55",
        link: "https://discord.com/oauth2/authorize?client_id=500417039316418560&permissions=37080128&scope=bot"
    }, 
    6: {
        name: `${sim.banana} 4CC Main Bot`,
        description: ":c_ringed_planet: Многофункциональный бот. | Help: 4cc.help",
        colot:"",
        icon: "./img/avatars/bot1.gif",
        buttonShare: {
            link: "https://discord.com/oauth2/authorize?client_id=621778695354580992&permissions=536870911991&scope=bot",
            title: "Скопировать ссылку на Discord сервер"
        },
        date: "Дружище",
        bg: "",
        color: "#3395db",
        link: "https://discord.com/oauth2/authorize?client_id=621778695354580992&permissions=536870911991&scope=bot"
    },
  
    7: { name: `${sim["dungeon-master"]} ${sim.banana} Анечка 🎀 `, description: ` 💕 Особенная девушка, которая поддержит меня в любой момент 💕 `, icon: './img/avatars/caxap.jpg', bg: 'https://pa1.narvii.com/6757/39a71dc75844ff997a6d3197989dfda1e8acc7e5_hq.gif', color: '#cc99cc', link: 'https://www.instagram.com/caxaap7/' },
    8: { name: `${sim.banana} Немец#9697 🐾 `, description: ` Весёлый дядька с немецкими корнями `, icon: 'https://i.gifer.com/QZfI.gif', bg: 'https://pa1.narvii.com/6757/39a71dc75844ff997a6d3197989dfda1e8acc7e5_hq.gif', color: '#a89714', link: 'https://vk.com/deutscheeeeee' },
}

// module.exports.execute = {
//     rivialCards: (profile) => {
//         let code = "";
//         for (let o = 1; o <= Object.keys(profile).length - 1; o++) code += `\n    <div class="col">\n                                    <div style="border-color: ${"" !== profile[o].color ? profile[o].color : profile.defColor}; box-shadow: inset 0px 0px 250px rgba(0,0,0,1); background: url(./img/bgs/bg1.jpg) no-repeat; background-size: cover;" class="portfolio__card new-portfolio__card card__portfolio">\n                                        <div class="portfolio__card-head">\n                                            <div class="portfolio__card-head-bg portfolio__card-head-bg-blur"\n                                                style="background-image: url(${profile[o].icon});">\n                                            </div>\n                                        </div>\n                                        <div style="background: ${"" !== profile[o].color ? profile[o].color : profile.defColor}" class="portfolio__card-num">${o}</div>\n\n                                        \n                                        <div class="portfolio__card-newBadgeDiv">\n                                            ${profile[o].new ? `<div style="background: ${"" !== profile[o].color ? profile[o].color : profile.defColor}" class="portfolio__card-newBadge">НОВОЕ</div>\n                                            <svg class="sparkleStarTopRight-1uWZTi sparkle-1qyWC9" aria-hidden="false" top="50px" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M9.30705 8.36284L13.5731 6.46363C13.5889 6.45487 13.6022 6.44203 13.6114 6.42644C13.6206 6.41086 13.6255 6.39309 13.6255 6.375C13.6255 6.35691 13.6206 6.33914 13.6114 6.32356C13.6022 6.30797 13.5889 6.29513 13.5731 6.28637L9.30705 4.38716C9.29358 4.38716 9.28066 4.38183 9.27114 4.37233C9.26162 4.36283 9.25627 4.34995 9.25627 4.33652L7.3518 0.0569762C7.30102 -0.0189921 7.19944 -0.0189921 7.17405 0.0569762L5.26958 4.33652C5.24419 4.36184 5.24419 4.38716 5.2188 4.38716L0.927401 6.28637C0.911525 6.29513 0.898291 6.30797 0.889077 6.32356C0.879862 6.33914 0.875 6.35691 0.875 6.375C0.875 6.39309 0.879862 6.41086 0.889077 6.42644C0.898291 6.44203 0.911525 6.45487 0.927401 6.46363L5.2188 8.36284C5.24419 8.36284 5.24419 8.38816 5.26958 8.41348L7.17405 12.693C7.19944 12.769 7.30102 12.769 7.3518 12.693L9.25627 8.41348C9.25627 8.40005 9.26162 8.38717 9.27114 8.37767C9.28066 8.36817 9.29358 8.36284 9.30705 8.36284Z" fill="currentColor"></path></svg>\n                                            <svg class="sparkleStarRight-3STViN sparkle-1qyWC9" aria-hidden="false" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M9.30705 8.36284L13.5731 6.46363C13.5889 6.45487 13.6022 6.44203 13.6114 6.42644C13.6206 6.41086 13.6255 6.39309 13.6255 6.375C13.6255 6.35691 13.6206 6.33914 13.6114 6.32356C13.6022 6.30797 13.5889 6.29513 13.5731 6.28637L9.30705 4.38716C9.29358 4.38716 9.28066 4.38183 9.27114 4.37233C9.26162 4.36283 9.25627 4.34995 9.25627 4.33652L7.3518 0.0569762C7.30102 -0.0189921 7.19944 -0.0189921 7.17405 0.0569762L5.26958 4.33652C5.24419 4.36184 5.24419 4.38716 5.2188 4.38716L0.927401 6.28637C0.911525 6.29513 0.898291 6.30797 0.889077 6.32356C0.879862 6.33914 0.875 6.35691 0.875 6.375C0.875 6.39309 0.879862 6.41086 0.889077 6.42644C0.898291 6.44203 0.911525 6.45487 0.927401 6.46363L5.2188 8.36284C5.24419 8.36284 5.24419 8.38816 5.26958 8.41348L7.17405 12.693C7.19944 12.769 7.30102 12.769 7.3518 12.693L9.25627 8.41348C9.25627 8.40005 9.26162 8.38717 9.27114 8.37767C9.28066 8.36817 9.29358 8.36284 9.30705 8.36284Z" fill="currentColor"></path></svg>\n                                            <svg class="sparkleStarBottomLeft-3dycVF sparkle-1qyWC9" aria-hidden="false" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M9.30705 8.36284L13.5731 6.46363C13.5889 6.45487 13.6022 6.44203 13.6114 6.42644C13.6206 6.41086 13.6255 6.39309 13.6255 6.375C13.6255 6.35691 13.6206 6.33914 13.6114 6.32356C13.6022 6.30797 13.5889 6.29513 13.5731 6.28637L9.30705 4.38716C9.29358 4.38716 9.28066 4.38183 9.27114 4.37233C9.26162 4.36283 9.25627 4.34995 9.25627 4.33652L7.3518 0.0569762C7.30102 -0.0189921 7.19944 -0.0189921 7.17405 0.0569762L5.26958 4.33652C5.24419 4.36184 5.24419 4.38716 5.2188 4.38716L0.927401 6.28637C0.911525 6.29513 0.898291 6.30797 0.889077 6.32356C0.879862 6.33914 0.875 6.35691 0.875 6.375C0.875 6.39309 0.879862 6.41086 0.889077 6.42644C0.898291 6.44203 0.911525 6.45487 0.927401 6.46363L5.2188 8.36284C5.24419 8.36284 5.24419 8.38816 5.26958 8.41348L7.17405 12.693C7.19944 12.769 7.30102 12.769 7.3518 12.693L9.25627 8.41348C9.25627 8.40005 9.26162 8.38717 9.27114 8.37767C9.28066 8.36817 9.29358 8.36284 9.30705 8.36284Z" fill="currentColor"></path></svg>\n\n                                            ` : ""}\n                                        </div>\n                                        <div class="padd" style="position: relative;">\n                                            <img class="itemImg" id="portfolio__card-icon" src="${profile[o].icon}" onerror="this.src='./img/avatars/avatar.gif'"\n                                                width="110" height="110"\n                                                style="\n                                                "\nw                                                alt="${profile[o].name}" loading="lazy"\n                                                onerror="this.src = '../img/avatars/avatar.gif';">\n                                            <div class="badge_icon"></div>\n                                            <h5 class="portfolio__card-title">\n                                                <a href="${profile[o].button.link}"\n                                                    id="portfolio__card-hide" class="partner-va">${profile[o].name}</a><br><span style="font-family: 'Montserrat Medium', sans-serif; margin-top: 10px;"\n                                                    id="portfolio__card-hide" class="status-badge badge badge-success">${profile[o].date}</span>\n                                            </h5>\n                                        </div>\n                                        <div class="portfolio__card-bd">\n                                            <p id="hidden" class="portfolio__card-text">${profile[o].description}</p>\n                                            <div class="btn-group-portfolio__card"\n                                                style="position: absolute; left: 50%; bottom: 15px; transform: translateX(-50%); margin-bottom: 1px;"\n                                                role="group" aria-label="Buttons">\n                                                <a onmouseover="this.style.transition='.3s'; this.style.backgroundColor='${profile[o].button.color ? profile[o].button.color : profile.defColor}';" onmouseout="this.style.backgroundColor='transparent';" style="\n                                                border-left: 3px solid ${"" !== profile[o].color ? profile[o].color : profile.defColor};\n                                                border-right: 0.5px solid ${"" !== profile[o].color ? profile[o].color : profile.defColor};\n                                                border-top: 3px solid ${"" !== profile[o].color ? profile[o].color : profile.defColor};\n                                                border-bottom: 3px solid ${"" !== profile[o].color ? profile[o].color : profile.defColor};\n                                                border-radius: 10px 0px 0px 10px;" href="${profile[o].button.link}" target="_blank"\n                                                    id="onhover-element" class="btn-l">${profile[o].button.title}</a>\n                                                   \n                                                <a onmouseover="this.style.transition='.3s'; this.style.backgroundColor='${"" !== profile[o].color ? profile[o].color : profile.defColor}';" onmouseout="this.style.backgroundColor='transparent';"\n                                                style="\n                                                border-left: 0.5px solid ${"" !== profile[o].color ? profile[o].color : profile.defColor};\n                                                border-right: 3px solid ${"" !== profile[o].color ? profile[o].color : profile.defColor};\n                                                border-top: 3px solid ${"" !== profile[o].color ? profile[o].color : profile.defColor};\n                                                border-bottom: 3px solid ${"" !== profile[o].color ? profile[o].color : profile.defColor};\n                                                border-radius: 0px 10px 10px 0px;" title="${profile[o].buttonShare.title}" onclick="copyLink(event, ${"" != profile[o].buttonShare.link})"\n                                                    class="btn-main" data-link="${profile[o].buttonShare.link}">Поделиться</a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n    \n    `;
//         document.write(code);
//     },
//     searchList: (profile) => {
//         let code = "";
//         for (let i = 0; i <= Object.keys(profile).length - 1; i++) {
//             code += `
//             <${i == 0 ? 'button' : 'a'} class="item" href="${profile[i + 1].button.link}">${profile[i + 1].name}</${i == 0 ? 'button' : 'a'}>
//             `
//         }
//     }
// }
function rivialCards(profile) {
    let code = "";
    for (let o = 1; o <= Object.keys(profile).length - 1; o++) code += `\n    <div class="${o >= 1 && o <= 4 ? 'portfolio-js' : ''} col">\n                                    <div style="border-color: ${"" !== profile[o].color ? profile[o].color : profile.defColor}; background: url(https://cdn.discordapp.com/attachments/878800042956292146/884049517345906768/20210905_151651.jpg) no-repeat; background-position: bottom; background-size: 100%;" class="portfolio__card new-portfolio__card card__portfolio">\n                                        <div class="portfolio__card-head">\n                                            <div class="portfolio__card-head-bg portfolio__card-head-bg-blur"\n                                                style="background-image: url(${profile[o].icon});">\n                                            </div>\n                                        </div>\n                                        <div style="background: ${"" !== profile[o].color ? profile[o].color : profile.defColor}" class="portfolio__card-num">${o}</div>\n\n                                        \n                                        <div class="portfolio__card-newBadgeDiv">\n                                            ${profile[o].new ? `<div style="background: ${"" !== profile[o].color ? profile[o].color : profile.defColor}" class="portfolio__card-newBadge">НОВОЕ</div>\n                                            <svg class="sparkleStarTopRight-1uWZTi sparkle-1qyWC9" aria-hidden="false" top="50px" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M9.30705 8.36284L13.5731 6.46363C13.5889 6.45487 13.6022 6.44203 13.6114 6.42644C13.6206 6.41086 13.6255 6.39309 13.6255 6.375C13.6255 6.35691 13.6206 6.33914 13.6114 6.32356C13.6022 6.30797 13.5889 6.29513 13.5731 6.28637L9.30705 4.38716C9.29358 4.38716 9.28066 4.38183 9.27114 4.37233C9.26162 4.36283 9.25627 4.34995 9.25627 4.33652L7.3518 0.0569762C7.30102 -0.0189921 7.19944 -0.0189921 7.17405 0.0569762L5.26958 4.33652C5.24419 4.36184 5.24419 4.38716 5.2188 4.38716L0.927401 6.28637C0.911525 6.29513 0.898291 6.30797 0.889077 6.32356C0.879862 6.33914 0.875 6.35691 0.875 6.375C0.875 6.39309 0.879862 6.41086 0.889077 6.42644C0.898291 6.44203 0.911525 6.45487 0.927401 6.46363L5.2188 8.36284C5.24419 8.36284 5.24419 8.38816 5.26958 8.41348L7.17405 12.693C7.19944 12.769 7.30102 12.769 7.3518 12.693L9.25627 8.41348C9.25627 8.40005 9.26162 8.38717 9.27114 8.37767C9.28066 8.36817 9.29358 8.36284 9.30705 8.36284Z" fill="currentColor"></path></svg>\n                                            <svg class="sparkleStarRight-3STViN sparkle-1qyWC9" aria-hidden="false" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M9.30705 8.36284L13.5731 6.46363C13.5889 6.45487 13.6022 6.44203 13.6114 6.42644C13.6206 6.41086 13.6255 6.39309 13.6255 6.375C13.6255 6.35691 13.6206 6.33914 13.6114 6.32356C13.6022 6.30797 13.5889 6.29513 13.5731 6.28637L9.30705 4.38716C9.29358 4.38716 9.28066 4.38183 9.27114 4.37233C9.26162 4.36283 9.25627 4.34995 9.25627 4.33652L7.3518 0.0569762C7.30102 -0.0189921 7.19944 -0.0189921 7.17405 0.0569762L5.26958 4.33652C5.24419 4.36184 5.24419 4.38716 5.2188 4.38716L0.927401 6.28637C0.911525 6.29513 0.898291 6.30797 0.889077 6.32356C0.879862 6.33914 0.875 6.35691 0.875 6.375C0.875 6.39309 0.879862 6.41086 0.889077 6.42644C0.898291 6.44203 0.911525 6.45487 0.927401 6.46363L5.2188 8.36284C5.24419 8.36284 5.24419 8.38816 5.26958 8.41348L7.17405 12.693C7.19944 12.769 7.30102 12.769 7.3518 12.693L9.25627 8.41348C9.25627 8.40005 9.26162 8.38717 9.27114 8.37767C9.28066 8.36817 9.29358 8.36284 9.30705 8.36284Z" fill="currentColor"></path></svg>\n                                            <svg class="sparkleStarBottomLeft-3dycVF sparkle-1qyWC9" aria-hidden="false" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M9.30705 8.36284L13.5731 6.46363C13.5889 6.45487 13.6022 6.44203 13.6114 6.42644C13.6206 6.41086 13.6255 6.39309 13.6255 6.375C13.6255 6.35691 13.6206 6.33914 13.6114 6.32356C13.6022 6.30797 13.5889 6.29513 13.5731 6.28637L9.30705 4.38716C9.29358 4.38716 9.28066 4.38183 9.27114 4.37233C9.26162 4.36283 9.25627 4.34995 9.25627 4.33652L7.3518 0.0569762C7.30102 -0.0189921 7.19944 -0.0189921 7.17405 0.0569762L5.26958 4.33652C5.24419 4.36184 5.24419 4.38716 5.2188 4.38716L0.927401 6.28637C0.911525 6.29513 0.898291 6.30797 0.889077 6.32356C0.879862 6.33914 0.875 6.35691 0.875 6.375C0.875 6.39309 0.879862 6.41086 0.889077 6.42644C0.898291 6.44203 0.911525 6.45487 0.927401 6.46363L5.2188 8.36284C5.24419 8.36284 5.24419 8.38816 5.26958 8.41348L7.17405 12.693C7.19944 12.769 7.30102 12.769 7.3518 12.693L9.25627 8.41348C9.25627 8.40005 9.26162 8.38717 9.27114 8.37767C9.28066 8.36817 9.29358 8.36284 9.30705 8.36284Z" fill="currentColor"></path></svg>\n\n                                            ` : ""}\n                                        </div>\n                                        <div class="padd" style="position: relative;">\n                                            <img class="itemImg" id="portfolio__card-icon" src="${profile[o].icon}" onerror="this.src='./img/avatars/avatar.gif'"\n                                                width="110" height="110"\n                                                style="\n                                                "\nw                                                alt="${profile[o].name}" loading="lazy"\n                                                onerror="this.src = '../img/avatars/avatar.gif';">\n                                            <div class="badge_icon"></div>\n                                            <h5 class="portfolio__card-title">\n                                                <a href="${profile[o].button.link}"\n                                                    id="portfolio__card-hide" class="partner-va">${profile[o].name}</a><br><span style="font-family: 'Montserrat Medium', sans-serif; margin-top: 10px;"\n                                                    id="portfolio__card-hide" class="status-badge badge badge-success">${profile[o].date}</span>\n                                            </h5>\n                                        </div>\n                                        <div class="portfolio__card-bd">\n                                            <p id="hidden" class="portfolio__card-text">${profile[o].description}</p>\n                                            <div class="btn-group-portfolio__card"\n                                                style="position: absolute; left: 50%; bottom: 15px; transform: translateX(-50%); margin-bottom: 1px;"\n                                                role="group" aria-label="Buttons">\n                                                <a onmouseover="this.style.transition='.3s'; this.style.backgroundColor='${profile[o].button.color ? profile[o].button.color : profile.defColor}';" onmouseout="this.style.backgroundColor='transparent';" style="\n                                                border-left: 3px solid ${"" !== profile[o].color ? profile[o].color : profile.defColor};\n                                                border-right: 0.5px solid ${"" !== profile[o].color ? profile[o].color : profile.defColor};\n                                                border-top: 3px solid ${"" !== profile[o].color ? profile[o].color : profile.defColor};\n                                                border-bottom: 3px solid ${"" !== profile[o].color ? profile[o].color : profile.defColor};\n                                                border-radius: 10px 0px 0px 10px;" href="${profile[o].button.link}" target="_blank"\n                                                    id="onhover-element" class="btn-l">${profile[o].button.title}</a>\n                                                   \n                                                <a onmouseover="this.style.transition='.3s'; this.style.backgroundColor='${"" !== profile[o].color ? profile[o].color : profile.defColor}';" onmouseout="this.style.backgroundColor='transparent';"\n                                                style="\n                                                border-left: 0.5px solid ${"" !== profile[o].color ? profile[o].color : profile.defColor};\n                                                border-right: 3px solid ${"" !== profile[o].color ? profile[o].color : profile.defColor};\n                                                border-top: 3px solid ${"" !== profile[o].color ? profile[o].color : profile.defColor};\n                                                border-bottom: 3px solid ${"" !== profile[o].color ? profile[o].color : profile.defColor};\n                                                border-radius: 0px 10px 10px 0px;" title="${profile[o].buttonShare.title}" onclick="copyLink(event, ${"" != profile[o].buttonShare.link})"\n                                                    class="btn-main" data-link="${profile[o].buttonShare.link}">Поделиться</a>\n                    </div>\n                                        </div>\n                                    </div>\n                                </div>\n    \n    `;
    document.write(code);
}
function searchList(profile) {
    for (let i = 1; i <= Object.keys(profile).length - 1; i++) {
        document.write(`<a class="item" ${profile[i] == profile[Object.keys(profile)[Object.keys(profile).length - 2]] ? 'style="border-radius: 0 0 8px 8px;"' : ''} href="${profile[i].button.link}">${profile[i].name}</a>`)
    }
}
function rivalCards1(friends) {
    let code = "";
    for (let o = 1; o <= Object.keys(friends).length - 1; o++) code += `\n    <div class="col">\n                                    <div style="border-color: ${"" !== friends[o].color ? friends[o].color : friends.defColor}; background: ${friends[o].bg || "#202230"} no-repeat; background-size: cover;" class="portfolio__card new-portfolio__card card__team">\n                                        <div class="portfolio__card-head">\n                                        </div>\n                                        <div class="padd" style="position: relative;">\n                                            <img src="${friends[o].icon}" onerror="this.src='./img/avatars/avatar.gif'"\n                                                width="110" height="110"\n                                                style="border-radius: 20%; border: 2px solid ${"" !== friends[o].color ? friends[o].color : friends.defColor}; margin-bottom: 15px; margin-top: 10px; background-color: rgb(33 37 41);"\n                                                loading="lazy">\n                                            <h5 class="portfolio__card-title">\n                                                <a href="${friends[o].link}" target="_blank" \n                                                    class="hoverable partner-va">${friends[o].name}</a><br><span style="margin-top: 10px;"\n                                            </h5>\n                                        </div>\n                                        <div class="portfolio__card-bd">\n                                            <p class="portfolio__card-text">${friends[o].description.replace(/:\w+:/g, o => `<i class="twa twa-${o.replaceAll(":", "").replaceAll("_", "-")}"></i>`)}</p>\n                                        </div>\n                                    </div>\n                                </div>\n    \n    `;
    document.write(code);
}
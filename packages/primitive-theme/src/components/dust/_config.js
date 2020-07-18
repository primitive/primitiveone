const themeconfig = {
        devMode: process.env.NODE_ENV === 'development' ? true : false,
        breakpoints: {
          sm: "",
          md: "",
          lg: "",
          xl: ""
        },
        rootEm: "62.5%",
        homepage: {
          showHero: true,
          showIntro: true,
          showGold: true,
          showSilver: true,
          showBronze: true,
          showPromo: false,
          heroConfig: {
            rocks: "scenes",
            scene: "pd-jungle",
            fluid: "true"
          },
          introConfig: {
            rocks: "typography"
          },
          goldConfig: {
            rocks: "tabs"
          },
          silverConfig: {
            rocks: "poststrip",
            posttype: "works",
            mode: "random",
            limit: 3,
            title: "Some Recent Projects",
            subtitle: "We Made This.",
            icon: ""
          },
          bronzeConfig: {
            rocks: "page-home-bronze",
            show: 2,
            title1: "We Make Websites",
            imageFrame1: "fancy-frame",
            imagesrc1: "https://primitive.press/wp-content/uploads/promo/wantawebsite_square.jpg",
            listFrame1: "frame",
            list1: ["Web Sites, CMS, CRM and Blogs.", "Fully Editable Content.", "Online shops and Progressive Web Apps.", "API's and application integration", "Mobile friendly and responsive", "Google Analytics", "High tech, low cost, no hassle", "Excellence as standard & satisfaction guaranteed"],
            link1: "/web-design/",
            icon1: "",
            title2: "We Love Startups",
            imageFrame2: "fancy-frame",
            imagesrc2: "https://primitive.press/wp-content/uploads/promo/selfiemonkey_square.jpg",
            listFrame2: "frame",
            list2: ["Get a custom built Website", "Professionally designed and branded", "Plus Logo design", "Plus business card design", "Easy, peasy chimpanzizi!"],
            link2: "/darwin-project/",
            icon2: ""
          }
        },
        page: {
          showBanner: true,
          showGold: true,
          showSilver: true,
          showBronze: true,
          template: false
        },
        global: {
          showPromo: false,
          showSocial: true,
          promo: {
            rocks: "global-promo",
            type: "text",
            pretext: "Big Business and Enterprise",
            text: "Primitive is not your bag, baby. For consultancy work you want a sknow.it all!",
            link: "https://sknow.it"
          },
          social: {
            background: "#fffff0",
            instagram: {
              type: "none", // "none" | "posts" | "feed"
              url: "https://www.instagram.com/primitivedigital/",
              postids: ["B9HhnSSj5NX", "B9JXQ7WDpll"],
              maxwidth: 320
            },
            facebook: {
              type: "like", // "none" | "page" | "like" | "feed"
              url: "https://www.facebook.com/primitivedigital",
              settings: {
                src: "https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fprimitivedigital&width=150&layout=button_count&action=like&size=large&share=true&height=46&appId=2317056035225898",
                width: "150",
                height: "46",
                style: "border:none;overflow:hidden;",
                scrolling: "no",
                frameborder: "0",
                allowTransparency: "true",
                allow: "encrypted-media"
              }
            }, 
            twitter: {
              type: "none",
              url: "https://twitter.com/primitivestuff"
            },
            pinterest: {
              type: "none"
            },
            profiles: {
              instagram: "https://www.instagram.com/primitivedigital/",
              facebook: "https://www.facebook.com/primitivedigital",
              twitter: "https://twitter.com/primitivestuff",
              github: "https://github.com/primitiveshaun",
              behance: "https://www.behance.net/primitiveshaun/"
            }

          },
          footer: {
            rocks: "",
            fontfamily: "subslab",
            text1: "- Top Banana -",
            text2: "Web Design",
            text3: "&",
            text4: "Development",
            contact: {
              info: "Phone 0113 314 8880",
              prompt: "to make beautiful digital stuff together"
            }
          }
        }
      }
export { themeconfig };
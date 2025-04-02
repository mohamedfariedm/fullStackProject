import { TFunction } from "i18next";

const Hero = ({ t }: { t: TFunction }) => {
  return (
    <div className="banner py-0">
      <p className="rs-p-wp-fix"></p>
      <rs-module-wrap
        id="rev_slider_13_1_wrapper"
        data-alias="home-5"
        data-source="gallery"
        style={{
          visibility: "hidden",
          background: "transparent",
          padding: "0",
          margin: "0px auto",
          marginTop: "0",
          marginBottom: "0",
        }}
      >
        <rs-module id="rev_slider_13_1" data-version="6.5.31">
          <rs-slides>
            <rs-slide
              style={{position: "absolute"}}
              data-key="rs-43"
              data-title="Slide"
              data-thumb="rev/assets/Banner-3-50x100.jpg"
              data-anim="adpr:false;ms:300;"
              data-in="o:0;"
              data-out="a:false;"
            >
              <img
                src="rev/assets/dummy.png"
                alt=""
                title="Banner-3"
                width="1920"
                height="1035"
                className="rev-slidebg tp-rs-img rs-lazyload"
                data-lazyload="rev/assets/Banner-3.jpg"
                data-parallax="off"
                data-no-retina
              />
              <rs-layer
                id="slider-13-slide-43-layer-0"
                data-type="shape"
                data-rsp_ch="on"
                data-xy="xo:30px,30px,22px,13px;y:m;yo:-156px,-115px,-106px,-75px;"
                data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                data-dim="w:30px,24px,18px,11px;h:1px;"
                data-frame_0="y:50,41,31,19;"
                data-frame_1="st:300;sp:1000;"
                data-frame_999="o:0;st:w;"
                style={{zIndex: "7", backgroundColor: "#e6af5d"}}
              ></rs-layer>
              <rs-layer
                id="slider-13-slide-43-layer-1"
                data-type="text"
                data-rsp_ch="on"
                data-xy="xo:75px,70px,52px,33px;y:m;yo:-156px,-115px,-106px,-75px;"
                data-text="w:normal;s:14,14,12,12;l:22,22,20,20;ls:6px,4px,3px,1px;fw:500;"
                data-frame_0="y:50,41,31,19;"
                data-frame_1="st:300;sp:1000;sR:300;"
                data-frame_999="o:0;st:w;sR:7700;"
                style={{
                  zIndex: "8",
                  fontFamily: 'Plus Jakarta Sans',
                  textTransform: "uppercase" ,
                }}
              >
                 {t("bannerSubtext1")}
                <br />{" "}
              </rs-layer>
              <rs-layer
                id="slider-13-slide-43-layer-2"
                data-type="shape"
                data-rsp_ch="on"
                data-xy="xo:873px,720px,547px,337px;yo:-24px,-19px,-14px,-8px;"
                data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                data-dim="w:1873px,1546px,1174px,724px;h:1200px,990px,750px,462px;"
                data-frame_0="x:50,41,31,19;"
                data-frame_1="e:none;"
                data-frame_999="o:0;st:w;sR:8700;"
                style={{zIndex: "6", backgroundColor: "#e6af5d"}}
              ></rs-layer>
              <rs-layer
                id="slider-13-slide-43-layer-3"
                data-type="text"
                data-rsp_ch="on"
                data-xy="xo:30px,30px,22px,13px;y:m;yo:-50px,-38px,-35px,-27px;"
                data-text="w:normal;s:72,52,40,28;l:80,60,48,36;fw:500;"
                data-dim="w:817px,588px,421px,259px;"
                data-frame_0="y:50,41,31,19;"
                data-frame_1="st:800;sp:1000;sR:800;"
                data-frame_999="o:0;st:w;sR:7200;"
                style={{
                  zIndex: "9",
                  fontFamily: 'Plus Jakarta Sans',
                  textTransform: "capitalize",
                }}
              >
                {t("bannerHeading1")}
              </rs-layer>
              <a
                id="slider-13-slide-43-layer-4"
                className="rs-layer pq-button pq-button-flat pq-btn-font rev-btn"
                href="contact-us.html"
                target="_self"
                data-type="button"
                data-rsp_ch="on"
                data-xy="xo:30px,30px,30px,15px;y:m;yo:128px,95px,81px,53px;"
                data-text="w:normal;s:14,14,14,12;l:28,22,22,20;ls:1.6px,0px,0px,0px;fw:600;"
                data-dim="minh:0px,none,none,none;"
                data-padding="t:18,14,14,10;r:30,25,22,20;b:18,14,14,10;l:30,25,22,20;"
                data-frame_0="y:50,41,31,19;"
                data-frame_1="st:1400;sp:1000;sR:1400;"
                data-frame_999="o:0;st:w;sR:6600;"
                data-frame_hover="bgc:#19130b;bor:0px,0px,0px,0px;sp:100;e:power1.inOut;bri:120%;"
                style={{
                  zIndex: "10",
                  backgroundColor: "#e6af5d",
                  fontFamily: 'Plus Jakarta Sans',
                  textTransform: "uppercase",
                }}
              >
                <div className="pq-button-block">
                  <span
                    className="pq-button-text"
                  >{t("bannerButton1")}</span>
                  <span className="pq-button-line-right"></span>
                  <i className="ion ion-ios-arrow-right"></i>
                </div>{" "}
              </a>
              <rs-layer
                id="slider-13-slide-43-layer-5"
                data-type="image"
                data-rsp_ch="on"
                data-xy="x:r;xo:-26px,26px,19px,11px;y:m;"
                data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                data-dim="w:507px,418px,317px,195px;h:625px,516px,392px,241px;"
                data-frame_0="sX:0.9;sY:0.9;"
                data-frame_1="e:power2.inOut;st:300;sp:1000;sR:300;"
                data-frame_999="o:0;st:w;sR:7700;"
                style={{zIndex: "11"}}
              >
                <img
                  src="rev/assets/dummy.png"
                  alt=""
                  className="tp-rs-img rs-lazyload"
                  width="466"
                  height="574"
                  data-lazyload="rev/assets/Banner-1-2.jpg"
                  data-no-retina
                />{" "}
              </rs-layer>
              <rs-layer
                id="slider-13-slide-43-layer-7"
                data-type="image"
                data-rsp_ch="on"
                data-xy="x:r;xo:-226px,-80px,-60px,-37px;y:m;"
                data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                data-dim="w:385px,317px,240px,148px;h:501px,413px,313px,193px;"
                data-vbility="t,f,f,f"
                data-frame_0="x:100%;"
                data-frame_0_mask="u:t;"
                data-frame_1="st:650;sp:1000;sR:650;"
                data-frame_1_mask="u:t;"
                data-frame_999="o:0;st:w;sR:7350;"
                style={{zIndex: "12"}}
              >
                <img
                  src="rev/assets/dummy.png"
                  alt=""
                  className="tp-rs-img rs-lazyload"
                  width="352"
                  height="458"
                  data-lazyload="rev/assets/Banner-1-11.jpg"
                  data-no-retina
                />{" "}
              </rs-layer>
            </rs-slide>
            <rs-slide
              style={{position: "absolute"}}
              data-key="rs-45"
              data-title="Slide"
              data-thumb="rev/assets/Banner-3-50x100.jpg"
              data-anim="adpr:false;ms:300;"
              data-in="o:0;"
              data-out="a:false;"
            >
              <img
                src="rev/assets/dummy.png"
                alt=""
                title="Banner-3"
                width="1920"
                height="1035"
                className="rev-slidebg tp-rs-img rs-lazyload"
                data-lazyload="rev/assets/Banner-3.jpg"
                data-parallax="off"
                data-no-retina
              />
              <rs-layer
                id="slider-13-slide-45-layer-0"
                data-type="shape"
                data-rsp_ch="on"
                data-xy="xo:30px,30px,22px,13px;y:m;yo:-156px,-115px,-106px,-75px;"
                data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                data-dim="w:30px,24px,18px,11px;h:1px;"
                data-frame_0="y:50,41,31,19;"
                data-frame_1="st:300;sp:1000;"
                data-frame_999="o:0;st:w;"
                style={{zIndex: "7", backgroundColor: "#e6af5d"}}
              ></rs-layer>
              <rs-layer
                id="slider-13-slide-45-layer-1"
                data-type="text"
                data-rsp_ch="on"
                data-xy="xo:75px,70px,52px,33px;y:m;yo:-156px,-115px,-106px,-75px;"
                data-text="w:normal;s:14,14,12,12;l:22,22,20,20;ls:6px,4px,3px,1px;fw:500;"
                data-frame_0="y:50,41,31,19;"
                data-frame_1="st:300;sp:1000;sR:300;"
                data-frame_999="o:0;st:w;sR:7700;"
                style={{
                  zIndex: "8",
                  fontFamily: 'Plus Jakarta Sans',
                  textTransform: "uppercase" ,
                }}
              >
                {t("bannerSubtext1")}
                <br />{" "}
              </rs-layer>
              <rs-layer
                id="slider-13-slide-45-layer-2"
                data-type="shape"
                data-rsp_ch="on"
                data-xy="xo:873px,720px,547px,337px;yo:-24px,-19px,-14px,-8px;"
                data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                data-dim="w:1873px,1546px,1174px,724px;h:1200px,990px,750px,462px;"
                data-frame_0="x:50,41,31,19;"
                data-frame_1="e:none;"
                data-frame_999="o:0;st:w;sR:8700;"
                style={{zIndex: "6", backgroundColor: "#e6af5d"}}
              ></rs-layer>
              <rs-layer
                id="slider-13-slide-45-layer-3"
                data-type="text"
                data-rsp_ch="on"
                data-xy="xo:30px,30px,22px,13px;y:m;yo:-50px,-38px,-35px,-27px;"
                data-text="w:normal;s:72,52,40,28;l:80,60,48,36;fw:500;"
                data-dim="w:798px,588px,481px,296px;"
                data-frame_0="y:50,41,31,19;"
                data-frame_1="st:800;sp:1000;sR:800;"
                data-frame_999="o:0;st:w;sR:7200;"
                style={{
                  zIndex: 9,
                  fontFamily: 'Plus Jakarta Sans',
                  textTransform: "capitalize",
                }}
              >
                {t("bannerHeading2")}
              </rs-layer>
              <a
                id="slider-13-slide-45-layer-4"
                className="rs-layer pq-button pq-button-flat pq-btn-font rev-btn"
                href="contact-us.html"
                target="_self"
                data-type="button"
                data-rsp_ch="on"
                data-xy="xo:30px,30px,30px,15px;y:m;yo:128px,95px,81px,53px;"
                data-text="w:normal;s:14,14,14,12;l:28,22,22,20;ls:1.6px,0px,0px,0px;fw:600;"
                data-dim="minh:0px,none,none,none;"
                data-padding="t:18,14,14,10;r:30,25,22,20;b:18,14,14,10;l:30,25,22,20;"
                data-frame_0="y:50,41,31,19;"
                data-frame_1="st:1400;sp:1000;sR:1400;"
                data-frame_999="o:0;st:w;sR:6600;"
                data-frame_hover="bgc:#19130b;bor:0px,0px,0px,0px;sp:100;e:power1.inOut;bri:120%;"
                style={{
                  zIndex: "10",
                  backgroundColor: "#e6af5d",
                  fontFamily: 'Plus Jakarta Sans',
                  textTransform: "uppercase",
                }}
              >
                <div className="pq-button-block">
                  <span
                    className="pq-button-text"
                  >
                    {t("bannerButton1")}
                  </span>
                  <span className="pq-button-line-right"></span>
                  <i className="ion ion-ios-arrow-right"></i>
                </div>{" "}
              </a>
              <rs-layer
                id="slider-13-slide-45-layer-5"
                data-type="image"
                data-rsp_ch="on"
                data-xy="x:r;xo:-26px,26px,19px,11px;y:m;"
                data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                data-dim="w:507px,418px,317px,195px;h:625px,516px,392px,241px;"
                data-frame_0="sX:0.9;sY:0.9;"
                data-frame_1="e:power2.inOut;st:300;sp:1000;sR:300;"
                data-frame_999="o:0;st:w;sR:7700;"
                style={{zIndex:"11"}}
              >
                <img
                  src="rev/assets/Banner-11.jpg"
                  alt=""
                  className="tp-rs-img rs-lazyload"
                  width="466"
                  height="574"
                  data-lazyload="rev/assets/Banner-11.jpg"
                  data-no-retina
                />{" "}
              </rs-layer>
              <rs-layer
                id="slider-13-slide-45-layer-7"
                data-type="image"
                data-rsp_ch="on"
                data-xy="x:r;xo:-226px,-80px,-60px,-37px;y:m;yo:-1px,0,0,0;"
                data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                data-dim="w:385px,317px,240px,148px;h:501px,413px,313px,193px;"
                data-vbility="t,f,f,f"
                data-frame_0="x:100%;"
                data-frame_0_mask="u:t;"
                data-frame_1="st:650;sp:1000;sR:650;"
                data-frame_1_mask="u:t;"
                data-frame_999="o:0;st:w;sR:7350;"
                style={{zIndex:"12"}}
              >
                <img
                  src="rev/assets/dummy.png"
                  alt=""
                  className="tp-rs-img rs-lazyload"
                  width="352"
                  height="458"
                  data-lazyload="rev/assets/Banner-21.jpg"
                  data-no-retina
                />{" "}
              </rs-layer>
            </rs-slide>
          </rs-slides>
        </rs-module>
      </rs-module-wrap>
    </div>
  );
};

export default Hero;

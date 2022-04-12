/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Logo from "../constants/logos/PatikaDev";
import style from "../styles/overlayleft.module.scss";
import TopVector from "../constants/vectors/TopVector";
import BottomVector from "../constants/vectors/BottomVector";

function OverlayLeft() {
  return (
    <div className={`${style.overlayLeft} ${style.dark}`}>
      <div className={style.logo}>
        <Logo width={341} height={144} textColor= "#444AFF" iconColor="#FFBF5E"/>
      </div>
      <div className={style.title}>YAZILIM PATİKALARI </div>
      <p>
        Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir eğitim modelidir. Ekibini büyütmek isteyen şirketler bir bootcamp'lere sponsor olurlar. Teknik beceriler kazanmaya başlamış ancak işe girmeye hazır olmayan kişiler bootcamp'lere başvururlar. Seçilen adaylar 4-8 haftalık ücretsiz ve yoğun eğitime kabul alırlar. Bootcamp'lerde başarılı olan öğrenciler sponsor şirkette ya da sektörde başka şirketlere işe yerleşirler.
      </p>
      <div className={style.vectorContainer}>
        <span>
          <TopVector color="blue"/>
        </span>
        <span>
          <BottomVector color="blue"/>
        </span>
      </div>
    </div>
  );
}

export default OverlayLeft;
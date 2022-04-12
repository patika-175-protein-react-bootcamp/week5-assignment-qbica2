/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Logo from "../constants/logos/PatikaDev";
import style from "../styles/overlayleft.module.scss";
import TopVector from "../constants/vectors/TopVector";
import BottomVector from "../constants/vectors/BottomVector";
import useWindowSize from "../hooks/useWindowSize";

function OverlayLeft() {
  const [,height ] = useWindowSize();
  const [logoSize,setLogoSize] = useState({
    width: 341,
    height: 144
  });
  const [topVectorSize,setTopVectorSize] = useState({
    width: 361,
    height: 136
  });
  const [bottomVectorSize,setBottomVectorSize] = useState({
    width: 521,
    height: 136
  });

  useEffect(() => {
    if (height < 1080) {
      console.log(height);
      setLogoSize({
        width: 250,
        height: 100
      });
      setTopVectorSize({
        width: 270,
        height: 110
      });
      setBottomVectorSize({
        width:450,
        height: 110
      });
    }else {
      console.log("height", height);

      setLogoSize({
        width: 341,
        height: 144
      });
      setTopVectorSize({
        width: 361,
        height: 136
      });
      setBottomVectorSize({
        width: 521,
        height: 136
      });
    }
  }, [height]);

  return (
    <div className={`${style.overlayLeft} ${style.dark}`}>
      <div className={style.logo}>
        <Logo width={logoSize.width} height={logoSize.height} textColor= "#444AFF" iconColor="#FFBF5E"/>
      </div>
      <div className={style.title}>YAZILIM PATİKALARI </div>
      <p>
        Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir eğitim modelidir. Ekibini büyütmek isteyen şirketler bir bootcamp'lere sponsor olurlar. Teknik beceriler kazanmaya başlamış ancak işe girmeye hazır olmayan kişiler bootcamp'lere başvururlar. Seçilen adaylar 4-8 haftalık ücretsiz ve yoğun eğitime kabul alırlar. Bootcamp'lerde başarılı olan öğrenciler sponsor şirkette ya da sektörde başka şirketlere işe yerleşirler.
      </p>
      <div className={style.vectorContainer}>
        <span>
          <TopVector width={topVectorSize.width} height={topVectorSize.height} color="blue"/>
        </span>
        <span>
          <BottomVector width={bottomVectorSize.width} height={bottomVectorSize.height} color="blue"/>
        </span>
      </div>
    </div>
  );
}

export default OverlayLeft;
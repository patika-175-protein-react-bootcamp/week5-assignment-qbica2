import React, { useContext } from "react";

import style from "../styles/overlayright.module.scss";
import TitleLine from "../constants/vectors/TitleLine";
import Moon from "../constants/icons/Moon";
import Sun from "../constants/icons/Sun";
import ThemeContext from "../contexts/ThemeContext";

function OverlayRight() {
  const { theme,vectorColor,handleSetTheme } = useContext(ThemeContext);

  return (
    <div className={`${style.overlayRight} ${theme === "light" && style.light} ${theme === "dark" && style.dark}`}>
      <div className={style.left}>
        <div className={style.main}>
          <div className={style.titleGroup}>
            <div className={style.title}>Kayıt </div>
            <TitleLine color={vectorColor}/>
          </div>
          <form>
            <div className={style.nameSurname}>
              <div className={style.name}>
                <label>İSİM</label>
                <input type="text" placeholder="İsmini gir"/>
              </div>
              <div className={style.surname}>
                <label>SOYİSİM</label>
                <input type="text" placeholder="Soyismini gir"/>
              </div>
            </div>
            <div className={style.formGroup}>
              <label className={style.required}>E-POSTA</label>
              <input type="text" placeholder="E-posta adresini gir"/>
              <span></span>
            </div>
            <div className={style.formGroup}>
              <label className={style.required}>KULLANICI ADI </label>
              <input type="text" placeholder="Kullanıcı adını gir"/>
              <span></span>
            </div>
            <div className={style.formGroup}>
              <label className={style.required}>ŞİFRE</label>
              <input type="password" placeholder="Şifreni gir"/>
              <span></span>
            </div>
            <div className={style.formGroup}>
              <label className={style.required}>ŞİFRENİ TEKRAR GİR</label>
              <input type="password" placeholder="Şifreni tekrar gir"/>
              <span></span>
            </div>
            <div className={style.checkGroup}>
              <input type="checkbox" />
              <span>Sözleşmeyi kabul ediyorum.</span>
            </div>
            <button>KAYIT OL</button>
          </form>
        </div>
      </div>
      <div className={style.right}>
        <button onClick={handleSetTheme}>
          {
            theme === "light" ? 
              <Moon width={42.9} height={48} color="#3C3C3C"/> 
              : 
              <Sun width={24} height={24} color="#FEFEFE"/>
          }
        </button>
      </div>
    </div>
  );
}

export default OverlayRight;
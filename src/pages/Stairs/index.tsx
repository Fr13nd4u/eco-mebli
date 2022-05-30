import React, { useState, useEffect } from "react";
import "./StairsCalc.scss";
import { useForm } from "react-hook-form";



import item from "../../assets/calc_img/stairs.jpg"

const StairsCalc = () => {
const {register, handleSubmit} = useForm({mode: 'onTouched', reValidateMode: 'onChange'})

const [active, setActive] = useState("")
const [price, setPrice] = useState(0)
const [length, setLength] = useState(0)
const [width, setWidth] = useState(0)
const [rise, setRise] = useState(0)
const [totalPrice, setTotalPrice] = useState(0)

useEffect(() => {
    setTotalPrice(price * length * width * rise)
  }, [price, length, width, rise])

const HandleChangeMaterial = (event) => {
  setActive(event.target.id)
  setPrice(event.target.value)
}

const HandleChangeLength = (event) => {
  setLength(event.target.value)
}
const HandleChangeWidth = (event) => {
  setWidth(event.target.value)
}
const HandleChangeRise = (event) => {
  setRise(event.target.value)
}

return (
  <section className="wrapper">
    <div className="header" />
    <div className="calc-header" />
    <div className="container">
      <div>
        <h2 className="calc-title">КАЛЬКУЛЯТОР СХОДІВ</h2>
        <p className="calc-text">РОЗРАХУЄМО ВАРТІСТЬ ЗАМОВЛЕННЯ</p>
      </div>
      <div className="calc calc-items">
        <form className="calc-calc_block"
          onSubmit={handleSubmit((data) => {
            console.log(data)
          })}
        >
          <p className="calc-calc_titles">СИРОВИНА</p>
          <div>
            <label className={active === "item_sosna" ? "material material_active" : "material "}>
              <input {...register('material')} type="radio" value="12000" className="material-radio" id="item_sosna"
                onChange={HandleChangeMaterial}
              />
              <span className="material-name">СОСНА</span>
              <span className="material-price">12000 ГРН/КВ.М</span>
            </label>
            <label className={active === "item_vilha" ? "material material_active" : "material "}>
              <input {...register('material')} type="radio" value="2000" className="material-radio" id="item_vilha"
                onChange={HandleChangeMaterial}
              />
              <span className="material-name">ВІЛЬХА</span>
              <span className="material-price">2000 ГРН/КВ.М</span>
            </label>
            <label className={active === "item_yasen" ? "material material_active" : "material "}>
              <input {...register('material')} type="radio" value="3000" className="material-radio" id="item_yasen"
                onChange={HandleChangeMaterial}
              />
              <span className="material-name">ЯСЕН</span>
              <span className="material-price">3000 ГРН/КВ.М</span>
            </label>
            <label className={active === "item_dyb" ? "material material_active" : "material "}>
              <input {...register('material')} type="radio" value="4000" className="material-radio" id="item_dyb"
                onChange={HandleChangeMaterial}
              />
              <span className="material-name">ДУБ</span>
              <span className="material-price">4000 ГРН/КВ.М</span>
            </label>
            <label className={active === "item_yasen_extra" ? "material material_active" : "material "}>
              <input {...register('material')} type="radio" value="5000" className="material-radio" id="item_yasen_extra"
                onChange={HandleChangeMaterial}
              />
              <span className="material-name">ЯСЕН (ЩІЛЬНА)</span>
              <span className="material-price">5000 ГРН/КВ.М</span>
            </label>
            <label className={active === "item_dyb_extra" ? "material material_active" : "material "}>
              <input {...register('material')} type="radio" value="6000" className="material-radio" id="item_dyb_extra"
                onChange={HandleChangeMaterial}
              />
              <span className="material-name">ДУБ (ЩІЛЬНА)</span>
              <span className="material-price">6000 ГРН/КВ.М</span>
            </label>
          </div>
          <p className="calc-calc_titles">КАЛЬКУЛЯТОР ВАРТОСТІ ТОВАРУ</p>
          <div className="area">
            <label className="area-title_block">
              <p className="area-title">ДОВЖИНА МАРШУ</p>
            </label>
            <input {...register('length')} type="text" className="area-input" placeholder="_ _ _ _ _" id="length"
              onChange={HandleChangeLength}
            />
            <label className="area-size_block">
              <p className="area-size">СМ.</p>
            </label>
          </div>
          <div className="area">
            <label className="area-title_block">
              <p className="area-title">ДОВЖИНА МАРШУ</p>
            </label>
            <input {...register('width')} type="text" className="area-input" placeholder="_ _ _ _ _" id="width"
              onChange={HandleChangeWidth}
            />
            <label className="area-size_block">
              <p className="area-size">СМ.</p>
            </label>
          </div>
          <div className="area">
            <label className="area-title_block">
              <p className="area-title">ПІДЙОМ</p>
            </label>
            <input {...register('rise')} type="text" className="area-input" placeholder="_ _ _ _ _" id="rise"
              onChange={HandleChangeRise}
            />
            <label className="area-size_block">
              <p className="area-size">М.</p>
            </label>
          </div>
          <label className="total-price">
            <span className="total-price-text">ЗАГ. ВАРТІСТЬ</span>
            <span className="total-price-result">{totalPrice}<p className="total-price-currency">ГРН</p></span>
          </label>
          <div className="contact-info">
            <div className="contact-info-block">
              <p className="contact-info-text">
                ВАШЕ ІМ'Я
              </p>
            </div>
            <div className="contact-info-block">
              <input type="text" className="contact-info-input" {...register('name')}/>
            </div>
            <div className="contact-info-block">
              <p className="contact-info-text">
                НОМЕР ТЕЛ.
              </p>
            </div>
            <div className="contact-info-block">
              <input type="text" className="contact-info-input" {...register('mobile')}/>
            </div>
          </div>
          <button className="submit-button">ЗАЛИШИТИ КОНТАКТИ</button>
        </form>
        <img src={item} alt="kitchen_img" className="calc-img" />
      </div>
    </div>
  </section>
);
};


export default StairsCalc;

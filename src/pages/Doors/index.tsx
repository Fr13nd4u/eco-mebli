import React, { useState, useEffect } from "react";
import "./DoorsCalc.scss";
import { useForm } from "react-hook-form";


import item from "../../assets/calc_img/door.jpg"

const DoorsCalc = () => {
const {register, handleSubmit} = useForm({mode: 'onTouched', reValidateMode: 'onChange'})

const [active, setActive] = useState("")
const [price, setPrice] = useState(0)
const [length, setLength] = useState(0)
const [width, setWidth] = useState(0)
const [area, setArea] = useState(0)
const [totalPrice, setTotalPrice] = useState(0)

useEffect(() => {
    setTotalPrice(price * length * width * area)
  }, [price, length, width, area])

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
const HandleChangeArea = (event) => {
  setArea(event.target.value)
}

return (
  <section className="wrapper">
    <div className="header" />
    <div className="calc-header" />
    <div className="container">
      <div>
        <h2 className="calc-title">КАЛЬКУЛЯТОР ДВЕРЕЙ</h2>
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
          <label className={active === "item_vilha" ? "material material_active" : "material "}>
              <input {...register('material')} type="radio" value="15000" className="material-radio" id="item_vilha"
                onChange={HandleChangeMaterial}
              />
              <span className="material-name">ВІЛЬХА</span>
              <span className="material-price">15000 ГРН/КВ.М</span>
            </label>
            <label className={active === "item_sosna" ? "material material_active" : "material "}>
              <input {...register('material')} type="radio" value="12000" className="material-radio" id="item_sosna"
                onChange={HandleChangeMaterial}
              />
              <span className="material-name">СОСНА</span>
              <span className="material-price">12000 ГРН/КВ.М</span>
            </label>
            <label className={active === "item_yasen" ? "material material_active" : "material "}>
              <input {...register('material')} type="radio" value="18000" className="material-radio" id="item_yasen"
                onChange={HandleChangeMaterial}
              />
              <span className="material-name">ЯСЕН</span>
              <span className="material-price">18000 ГРН/КВ.М</span>
            </label>
            <label className={active === "item_dyb" ? "material material_active" : "material "}>
              <input {...register('material')} type="radio" value="22000" className="material-radio" id="item_dyb"
                onChange={HandleChangeMaterial}
              />
              <span className="material-name">ДУБ</span>
              <span className="material-price">22000 ГРН/КВ.М</span>
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
              <p className="area-title">ПЛОЩА</p>
            </label>
            <input {...register('area')} type="text" className="area-input" placeholder="_ _ _ _ _" id="area"
              onChange={HandleChangeArea}
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


export default DoorsCalc;

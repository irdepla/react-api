# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Hook lar bu bizaga Reactda boshqa React funksiyalaridan oson foydalanishga va Reactda xotira bn ishlashda yordam beradi. Reactda xotira bn JS dagiga oxshab ozgartirilmidi buning uchun bizaga useState hooki yordamga keladi uni yaratish uchun biza ozgaruvchi va uni ozgartiradigan funksiya va boshlang'ich qiymat berib yaratimiza. JS dan kora ozgaruvchilani boshqarish, ozgartirish hooklar yordamida osonlashadi.Yana bir misol useRef yordamida biza DOM elementlariga oson murojaat qilishimiza mumkin. Va shunga oxshash hooklar bn kop ishlar qilish mumkin.

React’da asosiy Hooks:
### 1. useState:
Komponent ichida state yaratish uchun ishlatiladi.
Foydalanish:


import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // [state, state-ni o'zgartiruvchi funksiya]

  return (
    <div>
      <p>Sanoq: {count}</p>
      <button onClick={() => setCount(count + 1)}>Sanoqni oshirish</button>
    </div>
  );
}
Tushuncha:

useState(0) — bu yerda 0 boshlang‘ich qiymat.
count — hozirgi qiymat.
setCount — qiymatni o‘zgartirish uchun funksiya.
### 2. useEffect:
Yon effektlarni (side effects), masalan, API chaqiruvlari, DOM manipulyatsiyalari yoki taymerlarni ishlatish uchun qo‘llaniladi. U class komponentlardagi componentDidMount, componentDidUpdate va componentWillUnmount funksiyalarining o‘rnini bosadi.
Foydalanish:


import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval); // Tozalanish funksiyasi
  }, []); // Faqat bir marta ishlaydi

  return <p>Vaqt: {time} soniya</p>;
}
Tushuncha:

useEffect birinchi parametr sifatida funksiya oladi.
Agar [] bo‘lsa, efekt faqat bir marta (komponent yuklanganda) ishlaydi.
Agar dependency ([state]) qo‘shilsa, state o‘zgarganda qayta ishlaydi.
3. useContext:
Context API yordamida ma’lumotlarni komponentlar daraxti bo‘ylab o‘tkazish uchun ishlatiladi.
Foydalanish:


import React, { useContext, createContext } from "react";

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = useContext(ThemeContext); // Context-dan qiymat olish
  return <button style={{ background: theme === "dark" ? "black" : "white" }}>Button</button>;
}
### 4. useRef:
DOM elementlariga bevosita kirish yoki saqlangan qiymatlar (mutable values) uchun ishlatiladi. useRef qayta renderda qiymatni o‘zgartiradi, lekin komponentni qayta render qilmaydi.
Foydalanish:


import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // DOM elementiga kirish
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Inputga e'tibor berish</button>
    </div>
  );
}
### 5. useReducer:
State boshqarish uchun (murakkab logikalar uchun) ishlatiladi. Bu Redux'ga o‘xshash tarzda ishlaydi.
Foydalanish:

jsx
Copy code
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Sanoq: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
Hooklarni ishlatishda muhim qoida:
Hooks faqat funksiya komponentlarida ishlaydi — ular oddiy funksiyalar yoki class komponentlarda ishlatilmaydi.
Hooksni shartli holatlarda (if/else) chaqirmang — ular faqat komponentning yuqori qismida chaqirilishi kerak.
Hooksni faqat React funksiyalari ichida ishlating — ular oddiy JavaScript funksiyalarida ishlatilmaydi.
Xulosa:
React hooks funksional komponentlarni yanada kuchliroq qiladi. Ular yordamida:

State boshqaruvi (useState),
Yon effektlar (useEffect),
DOM bilan ishlash (useRef),
Murakkab logikalarni boshqarish (useReducer) kabi amallarni amalga oshirish mumkin.
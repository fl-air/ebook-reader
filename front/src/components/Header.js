import React from 'react';
import style from '../stylesheet/Header.module.css';
import {Link} from "react-router-dom";

function Header() {
    return (
        <section style={style} className={style.Header}>
            <div>
                <Link to="/">
                    <svg viewBox={'0 0 1000 1000'} role={'presentation'} aria-hidden={true} focusable={false}
                         className={style.logo}>
                        <path
                            d={"m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169
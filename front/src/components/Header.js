import React from 'react';
import style from '../stylesheet/Header.module.css';
import {Link} from "react-router-dom";

function Header() {
    return (
        <section style={style} className={style.Header}>
            <div>
                <Link to="/">
                    <svg viewBox={'0 0 1000 1000'} role={'presentation'} aria-hidden={true} focus
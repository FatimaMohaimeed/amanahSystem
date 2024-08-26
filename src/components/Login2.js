import React from 'react';
import '../style/Login.css'; // Ensure this points to your CSS file
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="login-container">
            <div className="left-side">
                <h1>الدخول الموحد</h1>
                <p>لمنصات الاتحاد السعودي للأمن السيبراني والبرمجة والدرونز</p>
                <div className="platforms">
                    <div className="platform">المبادرات</div>
                    <div className="platform">الاعتمادات التقنية</div>
                    <div className="platform">تسطر</div>
                    <div className="platform">CoderHub كودرهب</div>
                </div>
            </div>
            <div className="right-side">
                <div className="logo-wrapper">
                    <img src="/amanaLogo.png" alt="Logo" className="logo" />
                </div>
                <div className="login-card">
                    <h2>تسجيل الدخول</h2>
                    <div className="input-group">
                        <FaUser className="input-icon" />
                        <input type="text" placeholder="اسم المستخدم أو البريد الإلكتروني" />
                    </div>
                    <div className="input-group">
                        <FaLock className="input-icon" />
                        <input type="password" placeholder="كلمة المرور" />
                    </div>
                    <div className="options">
                        <label>
                            <input type="checkbox" /> تذكرني
                        </label>
                        <a href="#">نسيت كلمة المرور؟</a>
                    </div>
                    <button className="login-button">دخول</button>
                    <p className="register-link">
                        ليس لديك حساب؟ <a href="#">إنشاء حساب</a> أو <a href="#">إنشاء حساب كجهة</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

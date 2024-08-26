// // export default Login;
// import React from 'react';
// import '../style/Login.css';
// import { FaUser, FaLock } from 'react-icons/fa';
// import GenerateTriangles from './GenerateTriangles';

// const Login = () => {
//     return (
//         <div className="login-container">
//             <div className="left-side">
//                 <div className="svg-image">
//                     <GenerateTriangles />
//                 </div>
//                 <h1>الدخول الموحد</h1>
//                 <p>لمنصات الاتحاد السعودي للأمن السيبراني والبرمجة والدرونز</p>
//                 <div className="platforms">
//                     <div className="platform">المبادرات</div>
//                     <div className="platform">الاعتمادات التقنية</div>
//                     <div className="platform">تسطر</div>
//                     <div className="platform">CoderHub كودرهب</div>
//                 </div>
//             </div>
//             <div className="right-side">
//                 <div className="logo-wrapper">
//                     <img src="/amanaLogo.png" alt="Logo" className="logo" />
//                 </div>
//                 <div className="login-card">
//                     <h2>تسجيل الدخول</h2>
//                     <div className="input-group">
//                         <FaUser className="input-icon" />
//                         <input type="text" placeholder="اسم المستخدم أو البريد الإلكتروني" />
//                     </div>
//                     <div className="input-group">
//                         <FaLock className="input-icon" />
//                         <input type="password" placeholder="كلمة المرور" />
//                     </div>
//                     <div className="options">
//                         <label>
//                             <input type="checkbox" /> تذكرني
//                         </label>
//                         <a href="#">نسيت كلمة المرور؟</a>
//                     </div>
//                     <button className="login-button">دخول</button>
//                     <p className="register-link">
//                         ليس لديك حساب؟ <a href="#">إنشاء حساب</a> أو <a href="#">إنشاء حساب كجهة</a>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;




import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css'; 
import { FaUser, FaLock } from 'react-icons/fa';
import GenerateTriangles from './GenerateTriangles'; 

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {

        navigate('/home');
    };

    return (
        <div className="login-container">
            <div className="left-side">
                <div className="svg-image">
                    <GenerateTriangles />
                </div>
                <div className="content-wrapper">
                    <h1>الدخول الموحد</h1>
                    <p>لمنصات لانظمة امانة منطقة القصيم</p>
                    <div className="platforms">
                        <div className="platform">الاجازات</div>
                        <div className="platform">تعريف الراتب</div>
                        <div className="platform">ادارة مراقبة المخزون</div>
                        <div className="platform">اخلاء طرف</div>
                    </div>
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
                    <button className="login-button" onClick={handleLogin}>دخول</button>
                    <p className="register-link">
                        ليس لديك حساب؟ <a href="#">إنشاء حساب</a> أو <a href="#">إنشاء حساب </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;


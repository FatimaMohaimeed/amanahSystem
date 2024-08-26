
// import React from "react";
// import "../style/Home.css";

// const PlatformCard = ({ logo, title, description }) => {
//   return (
//     <div className="card">
//       <div className="icon">
//         <img src={logo} alt={title} />
//       </div>
//       <div className="content">
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <button>انتقل للمنصة</button>
//       </div>
//     </div>
//   );
// };

// const Home = () => {
//   return (
//     <div>
//         <nav className="navbar">
//             <div className="nav-links">
//                 <a href="#" className="nav-item">الملف الشخصي</a>
//                 <a href="#" className="nav-item">منصاتنا</a>
//                 <a href="#" className="nav-item">الاعدادات</a>
//                 <a href="/" className="nav-item">خروج</a>
//             </div>
//             <img src={`${process.env.PUBLIC_URL}/amanaLogo.png`} alt="Amana Logo" className="logo" />
//         </nav>
//         <div className="background-wrapper">
//           <div>
//               <h1>
//                   منصاتنا
//               </h1>
//           </div>
//           <div className="platforms-container">
//             <PlatformCard 
//               logo="/logo3.png" 
//               title="المخزون" 
//               description="حلقة وصل لتقديم أفضل تجربة إرشادية..." 
//             />
//             <PlatformCard 
//               logo="/logo2.png" 
//               title="تعريف الراتب" 
//               description="منصة للمبرمجين والمطورين..." 
//             />
//             <PlatformCard 
//               logo="/logo3.png" 
//               title="اجازت " 
//               description="منصة لتسهيل الكتابة والتدوين..." 
//             />
//         </div>
//         <div className="platforms-container">
//             <PlatformCard 
//               logo="/logo3.png" 
//               title="المخزون" 
//               description="حلقة وصل لتقديم أفضل تجربة إرشادية..." 
//             />
//             <PlatformCard 
//               logo="/logo2.png" 
//               title="تعريف الراتب" 
//               description="منصة للمبرمجين والمطورين..." 
//             />
//             <PlatformCard 
//               logo="/logo3.png" 
//               title="اجازت " 
//               description="منصة لتسهيل الكتابة والتدوين..." 
//             />
//         </div>
//       </div>

//     {/* <footer class="footer bg-footer flex h-52 w-full flex-col justify-end bg-cover bg-left-bottom bg-no-repeat sm:h-80 sm:bg-contain">
//     <div class="text-center text-sky-900 dark:text-white">
//         <div class="mb-4 flex flex-row flex-wrap justify-center gap-x-5">
//             <a class="footer-link" href="/privacy-policy">سياسة الخصوصية</a>
//             <a class="footer-link" href="/terms-and-condition">الأحكام والشروط</a>
//             <a class="footer-link" href="/faq">الأسئلة الشائعة</a>
//             <a class="footer-link" href="/contact-us">تواصل معنا</a>
//         </div>
//         <p class="mb-6">جميع الحقوق محفوظة للاتحاد السعودي للأمن السيبراني و البرمجة والدرونز 2024 ©</p>
//     </div>
// </footer> */}

//     </div>
//   );
// };

// export default Home;



// import React from "react";
// import "../style/Home.css";

// const PlatformCard = ({ logo, title, description }) => {
//   return (
//     <div className="card">
//       <div className="icon">
//         <img src={logo} alt={title} />
//       </div>
//       <div className="content">
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <button>انتقل للمنصة</button>
//       </div>
//     </div>
//   );
// };

// const Home = () => {
//   return (
//     <div>
//         <nav className="navbar">
//             <div className="nav-links">
//                 <a href="#" className="nav-item">الملف الشخصي</a>
//                 <a href="#" className="nav-item">منصاتنا</a>
//                 <a href="#" className="nav-item">الاعدادات</a>
//                 <a href="/" className="nav-item">خروج</a>
//             </div>
//             <img src={`${process.env.PUBLIC_URL}/amanaLogo.png`} alt="Amana Logo" className="logo" />
//         </nav>
//           <div>
//               <h1>منصاتنا</h1>
//           </div>
//           <div className="platforms-container">
//             <PlatformCard 
//               logo="/logo3.png" 
//               title="المخزون" 
//               description="حلقة وصل لتقديم أفضل تجربة إرشادية..." 
//             />
//             <PlatformCard 
//               logo="/logo2.png" 
//               title="تعريف الراتب" 
//               description="منصة للمبرمجين والمطورين..." 
//             />
//             <PlatformCard 
//               logo="/logo3.png" 
//               title="اجازت " 
//               description="منصة لتسهيل الكتابة والتدوين..." 
//             />
//             <PlatformCard 
//               logo="/logo3.png" 
//               title="المخزون" 
//               description="حلقة وصل لتقديم أفضل تجربة إرشادية..." 
//             />
//             <PlatformCard 
//               logo="/logo2.png" 
//               title="تعريف الراتب" 
//               description="منصة للمبرمجين والمطورين..." 
//             />
//             <PlatformCard 
//               logo="/logo3.png" 
//               title="اجازت " 
//               description="منصة لتسهيل الكتابة والتدوين..." 
//             />
//           </div>
//           <div className="background-wrapper">

//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import "../style/Home.css";

const PlatformCard = ({ logo, title, description }) => {
  return (
    <div className="card">
      <div className="icon">
        <img src={logo} alt={title} />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button>انتقل للمنصة</button>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
        <nav className="navbar">
            <div className="nav-links">
                <a href="#" className="nav-item">الملف الشخصي</a>
                <a href="#" className="nav-item">منصاتنا</a>
                <a href="#" className="nav-item">الاعدادات</a>
                <a href="/" className="nav-item">خروج</a>
            </div>
            <img src={`${process.env.PUBLIC_URL}/amanaLogo.png`} alt="Amana Logo" className="logo" />
        </nav>
          <div>
              <h1>منصاتنا</h1>
          </div>
          <div className="platforms-container">
            <PlatformCard 
              logo="/logo3.png" 
              title="المخزون" 
              description="حلقة وصل لتقديم أفضل تجربة إرشادية..." 
            />
            <PlatformCard 
              logo="/logo2.png" 
              title="تعريف الراتب" 
              description="منصة للمبرمجين والمطورين..." 
            />
            <PlatformCard 
              logo="/logo3.png" 
              title="اجازت " 
              description="منصة لتسهيل الكتابة والتدوين..." 
            />
            <PlatformCard 
              logo="/logo3.png" 
              title="المخزون" 
              description="حلقة وصل لتقديم أفضل تجربة إرشادية..." 
            />
            <PlatformCard 
              logo="/logo2.png" 
              title="تعريف الراتب" 
              description="منصة للمبرمجين والمطورين..." 
            />
            <PlatformCard 
              logo="/logo3.png" 
              title="اجازت " 
              description="منصة لتسهيل الكتابة والتدوين..." 
            />
          </div>
          <div className="background-wrapper">
            {/* Background image and any other content goes here */}
          </div>
    </div>
  );
};

export default Home;

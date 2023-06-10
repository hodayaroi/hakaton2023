import React from 'react';
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <div className="about-container">
        <h1 className="about-titlee">Why Us?</h1>
        <p className="about-title1">איסוף מקיף</p>
        <p className="about-text">האתר שלנו מאגד מספר אתרי יד שניה, חוסך זמן ומאמץ, מאפשר לחפש מוצרים מהמון פלטפורמות במקום אחד</p>
        <p className="about-title2">חווית חיפוש משתמש</p>
        <p className="about-text">ממשק המשתמש הנוח והפשוט שלנו מאפשר לך למצוא את מה שאתה מחפש בקלות, על ידי ניווט בקטגוריות מורחבות ושאר אפשרויות הסינון</p>
        <p className="about-title3">! הגיעו לכל מקום</p>
        <p className="about-text">על ידי איסוף מידע מאתרים שונים, אנו מאפשרים לך לגשת למגוון רחב יותר של מוכרים ומודעות, מה שמגביר את הסיכוי למצוא פריטים ייחודיים או נדירים שאולי לא יהיו זמינים בפלטפורמה אחת בודדת</p>
      </div>
    </div>
  );
};

export default About;

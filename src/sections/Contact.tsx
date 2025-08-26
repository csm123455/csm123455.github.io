import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        'service_y196tki', // Service ID
        'template_shst9oy', // Template ID
        form.current,
        'rizVJ9XgpAz-yIc-V' // Public Key
      )
      .then(
        () => {
          setMessage('메시지가 성공적으로 전송되었습니다!');
          form.current?.reset();
        },
        (error) => {
          setMessage(`전송에 실패했습니다: ${error.text}`);
        }
      );
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">연락처</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>연락 정보</h3>
            <div className="contact-item">
              <i>✉</i>
              <span>csm123455@gmail.com</span>
            </div>
            <div className="contact-item">
              <i>🔗</i>
              <a href="https://github.com/csm123455" target="_blank" rel="noopener noreferrer">
                github.com/csm123455
              </a>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="user_name">이름</label>
              <input type="text" id="user_name" name="user_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="user_email">이메일</label>
              <input type="email" id="user_email" name="user_email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">메시지</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit" className="submit-btn">보내기</button>
            {message && <p className="form-message">{message}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

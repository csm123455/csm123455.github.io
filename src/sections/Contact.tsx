import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">연락처</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>연락 정보</h3>
            <div className="contact-item">
              <i>✉</i>
              <span className="editable" data-field="email">
                email@example.com
                <button className="edit-btn">편집</button>
              </span>
            </div>
            <div className="contact-item">
              <i>🔗</i>
              <span className="editable" data-field="github">
                github.com/username
                <button className="edit-btn">편집</button>
              </span>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">이름</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">메시지</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit" className="submit-btn">보내기</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
